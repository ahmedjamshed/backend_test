const graphql = require('graphql')
const MinioService = require('../../../services/minio.service')
const logger = console

const { GraphQLString, GraphQLNonNull, GraphQLObjectType } = graphql

const { GraphQLUpload } = require('graphql-upload')

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
      logger.debug(context.id, 'Mutation::fetch jurisdiction')
      await MinioService.upload(file)
      return "success"
    }
    catch (e) {
      return "failed"
    }
  },
}
