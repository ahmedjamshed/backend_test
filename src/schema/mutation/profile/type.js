/**
 * Module dependencies
 */
 const { GraphQLObjectType, GraphQLBoolean } = require('graphql');

 module.exports = new GraphQLObjectType({
     name: 'ProfileStatus',
     fields: {
         status: {
             type: GraphQLBoolean,
         },
     },
 });
 