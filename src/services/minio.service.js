var Minio = require("minio");
const config = require("jsconfig");
const ProfileService = require('./profile.service');

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

  static async presignedPostPolicy(key) {
    const self = MinioService
    const policy = self.minioClient.newPostPolicy()
    policy.setBucket('avatars')
    policy.setContentType('text/plain')
    policy.setKey(key)
    
  }
  static async upload(entity_id, file) {
    try {
      const self = MinioService
      const { createReadStream, filename } = await file;
      const { key } = await ProfileService.getUploadAvatarInfo(entity_id, filename);
      const stream = createReadStream();
      const info = await self.minioClient.putObject('avatars', key, stream);
      logger.debug("MinioService::upload has been processed with success status", info);
      return 
    } catch (e) {
      logger.debug("MinioService::upload has been processed with fail status");
      logger.error("MinioService::upload error message:", e.toString());
      throw e;
    }

  }
}

module.exports = MinioService;
