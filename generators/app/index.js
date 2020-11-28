const Generator = require('yeoman-generator');
const { kebabCase } = require('./utility');
const { regions } = require('./regions');

class SlsNodeGenerator extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your service name',
        default: this.appname,
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
      },
      {
        type: 'list',
        name: 'region',
        message: 'AWS Region',
        choices: regions,
        default: 'eu-north-1',
        store: true, // user most likely want the same region next time
      },
    ]);
  }

  writing() {
    this.fs.copyTpl(this.templatePath(), this.destinationPath(), {
      ...this.answers,
      kebabCasedName: kebabCase(this.answers.name),
    });
  }

  install() {
    this.yarnInstall();
  }
}

module.exports = SlsNodeGenerator;
