import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	googleId: {
		type: String,
		required: true,
	},
	displayName: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},

	weightInfo: {
		weight: {
			type: [Number],
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
	},
});

const User = mongoose.model('User', UserSchema);
export default User;
