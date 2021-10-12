const logger = console

class MinioService {
  static async init() {
    logger.debug('MinioService::init processing')

    try {
      logger.debug('MinioService::init has been processed with success status')
    } catch (e) {
      logger.debug('MinioService::init has been processed with fail status')
      logger.error('MinioService::init error message:', e.toString())
      throw e
    }
  }
}

module.exports = MinioService
