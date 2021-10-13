const { GraphQLInputObjectType, GraphQLInt, GraphQLString } = require('graphql')

const fieldType = new GraphQLInputObjectType({
  name: 'fieldType',
  fields: {
    key: { type: GraphQLInt },
    value: { type: GraphQLString },
  },
})

module.exports = fieldType
