import bcrypt from "bcrypt";
import User from '../models/user.model';

/**
 * Load user and append to req.
 */

const saltRounds = 10;

export const getUsers = async (req, res) => {
    const users = await User.getUsers();
    res.send(users);
};

export const getDoctors = async (req, res) => {
    User.find({role: 0}, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const addUser = async (req, res) => {
    const data = req.body;
    bcrypt.hash(data.password, saltRounds, function(err, hash) {
        const user = new User({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: hash,
            role: data.role
        });

        user.save()
            .then(savedUser => res.json(savedUser))
            .catch(e=> console.log(e));
    });
};

export const editUser = async (req, res) => {
    const data = req.body;
    console.log(data)
    bcrypt.hash(data.password, saltRounds, function (err, hash) {
        data.password = hash;
        User.updateOne({_id: data.id}, data, function (err, result) {
            if (err) res.status(500).json(err)
            else res.status(200).json(result)
        })
    })
};

