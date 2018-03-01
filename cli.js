#!/usr/bin/env node
const open = require('open');
const shell = require('shelljs');
const argv = require('yargs');

argv
  .version()
  .command(['docs'], 'For more info, go to https://www.npmjs.com/package/install-eslint', {}, () => open('https://www.npmjs.com/package/install-eslint'))
  .help('h')
  .alias('h', 'help');

if (!shell.which('yarn')) {
  shell.echo('Yarn is not installed! Do you want to install it globally?');
}

const argsPresent = (Object.keys(argv.parse()).length > 5);

if (argsPresent && typeof argv.argv === 'object') {
  shell.echo('Invalid options');
} else if (argsPresent) {
  shell.echo(argv.argv);
} else {
  shell.exec('yarn add -D babel-eslint eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react');
  shell.exec(`cat << EOT > .eslintrc
  {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": 0,
      "import/prefer-default-export": 0,
      "arrow-body-style": 0
    },
    "env": {
      "browser": true
    }
  }`);
}
