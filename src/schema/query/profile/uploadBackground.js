const graphql = require('graphql');

const logger = console;

const { GraphQLString } = graphql;

module.exports = {
	type: GraphQLString,
	resolve: async (parent, args, context) => {
		logger.debug(context.id, 'Query::fetch jurisdiction');

		return 'uploadBackground';
	},
};
