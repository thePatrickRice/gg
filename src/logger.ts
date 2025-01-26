import pino from 'pino'

export const createLogger = () =>
  pino({
    name: 'Numalabs-agent',
    level: process.env.LOG_LEVEL || 'info'
  })

export const logger = createLogger()
