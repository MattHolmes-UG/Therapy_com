const User = require('../database/models/User');

module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if (!user || error){
            return res.redirect('/user/login');
        };

        next();
    });

};