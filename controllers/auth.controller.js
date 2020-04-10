import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.model';
import config from "../config/config";

const saltRounds = 10;

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.getUserByEmail(email);
    if(user) {
        bcrypt.compare(password, user.password, function(err, result) {
            if(result) {
                // Passwords match
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    role: user.role
                }, config.jwtSecret);
                res.json({ token, user });
            } else {
                // Passwords don't match
                res.status(400).send({
                    message: 'Incorrect Email or Password!'
                });
            }
        });
    } else {
        res.status(400).send({
            message: 'Incorrect Email or Password'
        });
    }
};

export const signup = (req, res, next) => {
    const { firstName, lastName, email, password, role } = req.body;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash,
            role: role
        });

        user.save()
            .then(savedUser => res.json(savedUser))
            .catch(e => next(e));
    });
};
