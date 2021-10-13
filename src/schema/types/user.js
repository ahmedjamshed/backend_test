const graphql = require('graphql')

const logger = console

const { GraphQLString, GraphQLObjectType } = graphql

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
  },
})
