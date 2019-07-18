const bcrypt = require('bcrypt')
const User = require('../database/models/User')

module.exports = (req, res) => {
    const { username, password } = req.body
    //check if user exists in database
    User.findOne({ username }, (error, user) => {
        if (user){
            bcrypt.compare(password, user.password, (error, same) => {
                if(same){
                    //store user session
                    req.session.userId = user._id
                    req.session.username = user.username
                    console.log(username)
                    console.log(user._id)
                    req.flash('user', user)
                    return res.redirect('/')
                }else{
                    return res.redirect('/user/login')
                }
            })
        }else{
            return res.redirect('/user/login')
        }
    })
}