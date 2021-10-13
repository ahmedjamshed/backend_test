const UserType = require('../../types/user')

const logger = console

module.exports = {
  type: UserType,
  resolve: async (parent, args, context) => {
    logger.debug(context.id, 'Query::fetch jurisdiction')

    const user = context.user

    return {
      id: user.id,
      email: user.email,
      username: user.username,
    }
  },
}
