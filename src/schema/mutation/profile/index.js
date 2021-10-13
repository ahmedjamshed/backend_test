/**
 * Module dependencies
 */
 const { GraphQLString, GraphQLList } = require('graphql')
 /**
  * Services
  */
 const ProfileService = require('../../../services/profile.service')
 const RoleService = require('../../../services/role.service')
 /**
  * Models
  */
 
 const InputType = require('../field.input.type')
 
 const logger = console
 
 module.exports = {
   type: require('./type'),
   args: {
     vars: { type: new GraphQLList(InputType) },
   },
   resolve: async (parent, args, context) => {
     logger.debug(context.id, 'Mutation::register processing')
 
     // Check Permission
     // noinspection ES6RedundantAwait
     await RoleService.checkPermission('canMakeProfile', args, context)
 
     try {
       const { vars } = args
       logger.info(context.id, 'Mutation::updateProfile:', vars)
 
       const profile = await ProfileService.update({
        entity_id: context.user.entity_id,
        vars,
       })

       console.log(profile.values)
 
       logger.debug(
         context.id,
         'Mutation::updateProfile has been processed with success status'
       )
       return {
         status: true,
       }
     } catch (e) {
       logger.debug(
         context.id,
         'Mutation::updateProfile has been processed with fail status'
       )
       logger.error(
         context.id,
         'Mutation::updateProfile error message:',
         e.toString()
       )
       throw e
     }
   },
 }