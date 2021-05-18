import mongoose from 'mongoose';

const weightSchema = mongoose.Schema(
	{
		weight: {
			type: Number,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Weight = mongoose.model('Weight', weightSchema);
export default Weight;
