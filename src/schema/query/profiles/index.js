const graphql = require('graphql')

const UserType = require('../../types/user')
const IdentificationService = require('../../../services/identification.service')

const logger = console

const { GraphQLList } = graphql

module.exports = {
  type: new GraphQLList(UserType),
  resolve: async (parent, args, context) => {
    logger.debug(context.id, 'Query::fetch jurisdiction')

    const users = await IdentificationService.getAll()
    console.log(users)

    return users
  },
}
