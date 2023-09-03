#!/usr/bin/env node

import { Command } from 'commander';

import { run } from './run';

const program = new Command('colibri');

program
  .command('dev')
  .description('Build and watching for changes')
  .action(() => run('development'));

program
  .command('build')
  .description('Build for production')
  .action(() => run('build'));

program.parse(process.argv);
