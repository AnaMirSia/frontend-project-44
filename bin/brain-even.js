#!/usr/bin/env node

import { greeting } from '../src/index.js'
import { description, evenGame } from '../src/games/brain-even.js'

greeting(description, evenGame)
