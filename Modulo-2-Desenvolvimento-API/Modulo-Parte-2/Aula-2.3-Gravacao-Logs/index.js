import express from 'express';
import winston from 'winston';

const app = express();

app.use(express.json());

const {printf, combine, label, timestamp} = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) =>{
    return `${timestamp} [${label}] ${level}: ${message}` 
});

//utilizando WINSTON paa logs
const logger = winston.createLogger({ 

    level : "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: "my-log.log"})
    ],
     format: combine(
        label({ label : "my-app"}),
        timestamp(),
        myFormat
     )
});

logger.error("Error log");
logger.warn("Warn log");
logger.info("Info log");
logger.verbose("Verbose log");
logger.debug("Debug log");
logger.silly("Silly llog");

logger.log("Info", "Hello with parameters");

app.listen(3030, () => {
    console.log('Server run');
});