import pino from 'pino'
import fs from 'fs';

const logFile = fs.createWriteStream('log.log', { flags: 'a' });
const logger = pino({ 
  timestamp: pino.stdTimeFunctions.isoTime, 
  prettifier: require('pino-pretty')
}, logFile);

export default logger;