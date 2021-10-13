const graphql = require('graphql')
const MinioService = require('../../../services/minio.service')
const logger = console

const { GraphQLString, GraphQLNonNull, GraphQLObjectType } = graphql

const { GraphQLUpload } = require('graphql-upload')
const profileModel = require('../../../db/models/modifiers/profile.model')

module.exports = {
  type: GraphQLString,
  args: {
    file: {
      description: 'File to store.',
      type: GraphQLNonNull(GraphQLUpload),
    },
  },
  resolve: async (parent, { file }, context) => {
    try {
      logger.debug(context.user, 'Mutation::fetch jurisdiction')
      await MinioService.upload(context.user.entity_id, file)
      return "success"
    }
    catch (e) {
      logger.error(e.toString())
      return "failed"
    }
  },
}
