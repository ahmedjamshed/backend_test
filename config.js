module.exports = {
	version: 2,
	env: {
		appKey: 'YjVkMmRkNmJlYTMwMDNlMDRkMGY1YTdkZDBlNDk5OTdiMmFjMDBiYjgzZmVlMjBkMDViZGM5YjM1Yjc4M2I5OA==',
		jwtAlgorithm: 'HS256',
		cryptoAlgorithm: 'aes-256-cbc',
		passwordSaltRounds: 10,
		lifetimeResetToken: 1000 * 60 * 60, // 1 hour
	},
	http: {
		host: '::',
		port: 8001,
	},
	amqp: 'amqp://rabbitmq',
	databases: {
		main: 'mongodb://mongodb:27017/yj',
		test: 'mongodb://mongodb:27017/test',
	},
	graph: {
		graphiql: true,
	},
	minio: {
		client: {
			endPoint: '',
			port: 9000,
			useSSL: true,
			accessKey: '',
			secretKey: '',
		},
		bucketName: '',
		destBucketName: '',
		bucketRegion: '',
	},
};
