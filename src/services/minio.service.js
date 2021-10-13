var Minio = require("minio");
const config = require("jsconfig");

const logger = console;

class MinioService {
  static async init() {
    logger.debug("MinioService::init processing");

    try {
      const minioClient = new Minio.Client(config.minio.client);
      console.log("hello", await minioClient.listBuckets());

      logger.debug("MinioService::init has been processed with success status");
    } catch (e) {
      logger.debug("MinioService::init has been processed with fail status");
      logger.error("MinioService::init error message:", e.toString());
      throw e;
    }
  }

  static async upload(file) {
    const minioClient = new Minio.Client(config.minio.client);
    return minioClient.putObject("file", file.name, file.data);
  }
}

module.exports = MinioService;
