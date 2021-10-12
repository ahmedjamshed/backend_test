/**
 * Models
 */
const PostModel = require('../db/models/modifiers/post.model')

const logger = console

class PostService {
  static async create(data) {
    logger.debug('PostService::create processing')

    try {
      const post = await PostModel.create({
        entity_id: data.entity_id,
        type: 'human',
        status: 'live',
        values: data.vars,
      })
      logger.info('PostService::create post model:', post)

      logger.debug('PostService::create has been processed with success status')
      return post
    } catch (e) {
      logger.debug('PostService::create has been processed with fail status')
      logger.error('PostService::create error message:', e.toString())
      throw e
    }
  }
}

module.exports = PostService
