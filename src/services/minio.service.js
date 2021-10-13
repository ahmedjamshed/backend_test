var Minio = require("minio");

const logger = console;

class MinioService {
  static async init() {
    logger.debug("MinioService::init processing");

    try {
      const minioClient = new Minio.Client({
        endPoint: "http://127.0.0.1/",
        port: 9000,
        useSSL: true,
        accessKey: "Q3AM3UQ867SPQQA43P2F",
        secretKey: "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",
      });
      console.log("hello", await minioClient.listBuckets());

      logger.debug("MinioService::init has been processed with success status");
    } catch (e) {
      logger.debug("MinioService::init has been processed with fail status");
      logger.error("MinioService::init error message:", e.toString());
      throw e;
    }
  }
}

module.exports = MinioService;
