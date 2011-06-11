{spawn, exec} = require 'child_process'

runCommand = (name, args...) ->
  proc = spawn name, args
  proc.stderr.on 'data', (buffer) -> console.log buffer.toString()
  proc.stdout.on 'data', (buffer) -> console.log buffer.toString()
  proc.on 'exit', (status) -> process.exit(1) if status isnt 0

task 'watch-sass', "Watch source files and build CSS", (options) ->
  runCommand 'sass',   ['--watch', 'public/css/sass:public/css']

task 'watch-coffee', "Watch source files and build JS", (options) ->
  runCommand 'coffee', '-wc', 'src', 'test'

task 'compile-coffee', "Compile the coffee script files to JS", (options) ->
  runCommand 'coffee', '-c', 'src', 'test'
