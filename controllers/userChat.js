const message = require('../database/models/message');

module.exports = (req, res) => {
    message.create(req.body);
    res.redirect('/auth/profile');
};