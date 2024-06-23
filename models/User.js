const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({

    userName: {
        type: String,
        required: true,
        minlength: [2, "First Name must be at least 2 characters in length."],
        maxlength: [100, "First Name exceeds character limit (Max. 100)"]
    },

    password: {
        type: String,
        required: true,
        minlength: [6, "Your password must be at least 6 characters in length."]
    },

    userType: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Number,
    }
},{
    timestamps: true
});

userSchema.methods.verifyPassword = function(password){
    // console.log(`PW (plain text): ${password}`);
    // console.log(`PW (encrypted): ${this.password}`);
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;