const
  colors = require('colors/safe');

colors.setTheme({
  silly: "rainbow",
  verbose: "white",
  info: "cyan",
  debug: "green",
  warn: "yellow",
  error: "red",
});

class Log {
  static v(message) {
    console.log(colors.verbose(`      ${message}`));
  }

  static i(message) {
    console.log(colors.info(`  i   ${message}`));
  }

  static d(message) {
    console.log(colors.debug(`  d   ${message}`));
  }

  static w(message) {
    console.log(colors.warn(`  w   ${message}`));
  }

  static e(message) {
    console.log(colors.error(`  e   ${message}`));
  }

  static vTag(tag, message) {
    console.log(colors.verbose(`      [${tag}]: ${message}`));
  }

  static iTag(tag, message) {
    console.log(colors.info(`  i   [${tag}]: ${message}`));
  }

  static dTag(tag, message) {
    console.log(colors.debug(`  d   [${tag}]: ${message}`));
  }

  static wTag(tag, message) {
    console.log(colors.warn(`  w   [${tag}]: ${message}`));
  }

  static eTag(tag, message) {
    console.log(colors.error(`  e   [${tag}]: ${message}`));
  }

  static help() {
    console.log(colors.silly('Using colored log tool'));
    this.v('This is verbose message.');
    this.i('This is info message.');
    this.d('This is debug message.');
    this.w('This is warn message.');
    this.e('This is error message.');
    this.vTag('TAG', 'This is verbose message.');
    this.iTag('TAG', 'This is info message.');
    this.dTag('TAG', 'This is debug message.');
    this.wTag('TAG', 'This is warn message.');
    this.eTag('TAG', 'This is error message.');
  }
}

module.exports = Log;