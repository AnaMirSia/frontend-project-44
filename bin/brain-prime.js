#!/usr/bin/env node

import { greeting } from '../src/index.js'
import { description, primeGame } from '../src/games/brain-prime.js'

greeting(description, primeGame)
