// ##                        ~~  COMBINER  ~~                         ##

// Write a module that returns a readable/writable stream using the

var combine = require('stream-combiner')
var split = require('split')
var zlib = require('zlib')
var through = require('through')

module.exports = function () {
  var titles_by_genre = {}
  var grouper = {
    genres: {},
    current_genre: undefined,
    on_row: function (row) {
      if (row.type == 'genre') {
        old_genre = this.current_genre
        this.current_genre = row.name
        if (this.current_genre) {
          this.genres[this.current_genre] = {
            name: this.current_genre,
            books: []
          }
        }
        return this.genres[old_genre]
      }

      if (row.type === 'book') {
        this.genres[this.current_genre].books.push(row.name)
        return null
      }
    }
  }
  return combine(
    // read newline-separated json,
    // group books into genres,
    // then gzip the output
    split(),
    through(function (text) {
      if (text.length > 0) this.queue(JSON.parse(text))
    }),
    through(function on_write (row) {
      record = grouper.on_row(row)
      if (record) {
        json = JSON.stringify(record)
        this.queue(json)
        this.queue('\n')
      }
    }, function on_end () {
      record = grouper.on_row({type: 'genre', name: undefined})
      json = JSON.stringify(record)
      this.queue(json)
      this.queue('\n')
      this.queue(null)
    }),
    zlib.createGzip()
  )
}


// The `stream-combiner` module creates a pipeline from a list of streams,
// returning a single stream that exposes the first stream as the writable side and
// the last stream as the readable side like the `duplexer` module, but with an
// arbitrary number of streams in between. Unlike the `duplexer` module, each
// stream is piped to the next. For example:
//
// var stream = combine(a, b, c, d);
//
// will internally do `a.pipe(b).pipe(c).pipe(d)` but the `stream` returned by
// `combine()` has its writable side hooked into `a` and its readable side hooked
// into `d`.

// Your stream will be written a newline-separated JSON list of science fiction
// genres and books. All the books after a `"type":"genre"` row belong in that
// genre until the next `"type":"genre"` comes along in the output.
// 
// {"type":"genre","name":"cyberpunk"}
// {"type":"book","name":"Neuromancer"}
// {"type":"book","name":"Snow Crash"}
// {"type":"genre","name":"space opera"}
// {"type":"book","name":"A Deepness in the Sky"}
// {"type":"book","name":"Void"}
// 
// Your program should generate a newline-separated list of JSON lines of genres,
// each with a `"books"` array containing all the books in that genre. The input
// above would yield the output:
// 
// {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
// {"name":"space opera","books":["A Deepness in the SKy","Void"]}
// 
// Your stream will be written a newline-separated JSON list of science fiction
// genres and books. All the books after a `"type":"genre"` row belong in that
// genre until the next `"type":"genre"` comes along in the output.
// 
// {"type":"genre","name":"cyberpunk"}
// {"type":"book","name":"Neuromancer"}
// {"type":"book","name":"Snow Crash"}
// {"type":"genre","name":"space opera"}
// {"type":"book","name":"A Deepness in the Sky"}
// {"type":"book","name":"Void"}
// 
// Your program should generate a newline-separated list of JSON lines of genres,
// each with a `"books"` array containing all the books in that genre. The input
// above would yield the output:
// 
// {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
// {"name":"space opera","books":["A Deepness in the SKy","Void"]}
// 
// Your stream should take this list of JSON lines and gzip it with
// `zlib.createGzip()`.
// 
// * HINTS *
// 
// The `stream-combiner` module creates a pipeline from a list of streams,
// returning a single stream that exposes the first stream as the writable side and
// the last stream as the readable side like the `duplexer` module, but with an
// arbitrary number of streams in between. Unlike the `duplexer` module, each
// stream is piped to the next. For example:
// 
// var combine = require('stream-combiner');
// var stream = combine(a, b, c, d);
// 
// will internally do `a.pipe(b).pipe(c).pipe(d)` but the `stream` returned by
// `combine()` has its writable side hooked into `a` and its readable side hooked
// into `d`.
// 
// As in the previous LINES adventure, the `split` module is very handy here. You
// can put a split stream directly into the stream-combiner pipeline.

