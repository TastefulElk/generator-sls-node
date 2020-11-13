const Generator = require('yeoman-generator');
const dependencies = require('./dependencies');

class SlsNodeGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    this.fs.extendJSON(this.destinationPath('package.json'), dependencies);
  }

  install() {
    this.yarnInstall();
  }
};

module.exports = SlsNodeGenerator;
