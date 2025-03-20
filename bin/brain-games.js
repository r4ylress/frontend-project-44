#!/usr/bin/env node
import { greeting, askuserName } from '../src/cli.js';

const userName = askuserName();
console.log(greeting(userName));
