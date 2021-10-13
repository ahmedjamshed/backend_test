var Minio = require("minio");
const config = require("jsconfig");

const logger = console;

class MinioService {
  static async init() {
    logger.debug("MinioService::init processing");

    try {
      const self = MinioService
      self.minioClient = new Minio.Client(config.minio.client);
      const isBucketThere = await self.minioClient.bucketExists('avatars')
      if(!isBucketThere) {
        await self.minioClient.makeBucket('avatars', 'us-east-1')
      }
      logger.debug("MinioService::init has been processed with success status");
    } catch (e) {
      logger.debug("MinioService::init has been processed with fail status");
      logger.error("MinioService::init error message:", e.toString());
      throw e;
    }
  }

  static async upload(file) {
    try {
      const self = MinioService
      const { createReadStream, filename } = await file;
      const stream = createReadStream();
      await self.minioClient.putObject('avatars', filename, stream);
      logger.debug("MinioService::upload has been processed with success status");
      return 
    } catch (e) {
      logger.debug("MinioService::upload has been processed with fail status");
      logger.error("MinioService::upload error message:", e.toString());
      throw e;
    }

  }
}

module.exports = MinioService;
