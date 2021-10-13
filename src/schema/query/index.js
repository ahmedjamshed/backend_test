const graphql = require('graphql');

const { GraphQLObjectType } = graphql;

module.exports = new GraphQLObjectType({
	name: 'Query',
	fields: {
		hello: require('./hello'),
		me: require('./profile/me'),
		profiles: require('./profiles'),
	},
});
