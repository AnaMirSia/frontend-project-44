#!/usr/bin/env node

import { greeting } from '../src/index.js'
import { description, gcdGame } from '../src/games/brain-gcd.js'

greeting(description, gcdGame)
