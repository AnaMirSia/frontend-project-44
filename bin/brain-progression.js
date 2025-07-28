#!/usr/bin/env node

import { greeting } from '../src/index.js'
import { description, progressionGame } from '../src/games/brain-progression.js'

greeting(description, progressionGame)
