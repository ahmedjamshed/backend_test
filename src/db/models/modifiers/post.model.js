const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
	entity_id: { type: Schema.Types.ObjectId, ref: 'Entity', required: true },
	type: { type: Schema.Types.String, required: true },
	status: { type: Schema.Types.String, required: true },
	values: [
		[
			{
				key: { type: Schema.Types.String, required: true },
				value: { type: Schema.Types.String, required: true },
			},
		],
	],
	post_create_date: { type: Schema.Types.Date, default: Date.now, required: true },
});

// index
postSchema.index({ entity_id: 1, type: 1 }, { unique: true });

module.exports = mongoose.model('Post', postSchema);
