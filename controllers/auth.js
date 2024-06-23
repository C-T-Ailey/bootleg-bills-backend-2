const jwt = require("jsonwebtoken");

const User = require("../models/User");

const bcrypt = require("bcrypt");
const moment = require("moment");
const salt = 10;


// POST New User on Signup

exports.auth_signup_post = (req, res) => {

    console.log(req.body.data)

    let user = new User(req.body.data);
    
    let hashedPass = bcrypt.hashSync(req.body.data.password, salt);

    user.password = hashedPass;

    user.save()
    .then(() => {
        res.json({"message": "User created successfully!"})
    })
    .catch((err) => {
        console.log(err);
        res.json({"message": "Failed to register user; try again later."})
    })
}

// POST Existing user login

exports.auth_login_post = async (req, res) => {

    console.log(req.body)

    let {userName, password} = req.body.data;
    
    try {
        let user = await User.findOne({userName})
        
        const isMatch = bcrypt.compareSync(password, user.password)
        
        if (!user) {
            return res.status(400).send({"message": "User not found."});
        }
        
        
        if (!isMatch) {
            return res.status(400).send({"message": "Password does not match."});
        }

        let loginDate = Math.floor(moment.now() / 1000)

        // console.log(loginDate, user.lastLogin, user.lastLogin - loginDate < 3600)

        user.lastLogin = loginDate

        console.log(user)

        user.save()
        .then(()=>{
            console.log("user updated")
        })
        .catch((err) => {
            console.log(err);
            res.json({"message":"failed to update login"})
        })
        
        
        const payload = {
            user: {
                id: user._id,
                role: bcrypt.hashSync(user.userType,salt),
                timestamp: user.lastLogin
            }
        }
        
        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: "1h"},
            (err, token) => {
                if (err) throw err;
                return res.json({token}).status(200)
            }
        )
    }
    catch(error) {
        console.log(error);
        res.json({"message": "Login failed because ????."}).status(400);
    }
}

    // POST token refresh

exports.auth_session_refresh_post = async (req, res) => {
    // let userCreds = req.user;

    let oldToken = req.body.data

    let decodedToken = jwt.decode(oldToken)

    // console.log(oldToken, decodedToken)
    
    try {
        const payload = {
            user: {
                id: decodedToken.user.id,
                role: decodedToken.user.role,
                timestamp: Math.floor(new Date().valueOf() / 1000)
            }
        }
        
        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: "1h"},
            (err, token) => {
                if (err) throw err;
                // console.log(token);
                return res.json({token}).status(200)
            }
            )
    }
    catch (err) {
        console.log(err)
        res.json({"message": "couldn't refresh"})
    }
}

// User GET - get all registered users
exports.users_get_all = (req, res) => {
    console.log(req.body)
    
    User.find()
    .then(users => {
        return res.json({users})
    })
    .catch((err) => {
        console.log(err);
        res.send("???")
    })
}
        
// User GET - get one user by ID

exports.users_get_one = (req, res) => {
    // console.log("id:", req.query)
    User.findById(req.query.id)
    .then(user => {
        return res.json({user})
    })
    .catch((err) => {
        console.log(err)
    })
}

// Password change POST

exports.auth_password_change = async (req, res) => {

}