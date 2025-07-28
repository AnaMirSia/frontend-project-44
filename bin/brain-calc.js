#!/usr/bin/env node

import { greeting } from '../src/index.js'
import { description, calcGame } from '../src/games/brain-calc.js'

greeting(description, calcGame)
