const Promise = require('bluebird');
import uniqueValidator from 'mongoose-unique-validator';
import mongoose from 'mongoose';
import httpStatus from 'http-status';

import ApiError from '../helpers/apierror';

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(uniqueValidator);
/**
 * Methods
 */
UserSchema.method({
});

/**
 * Statics
 */
UserSchema.statics = {

    getUserById(id) {
        return this.findById(id)
            .exec()
            .then((user) => {
                if (user) {
                    return user;
                }
                const err = new ApiError('No such user exists!', httpStatus.NOT_FOUND);
                return Promise.reject(err);
            });
    },

    getUserByEmail(email) {

        return this.findOne({ email: email})
            .exec()
            .then((user) => {
                if(user) {
                    return user;
                }
                return false;
            })
    },

    getUsers() {
        return this.find()
    }
};

/**
 * @typedef User
 */

export default mongoose.model('User', UserSchema);
