const message = require('../database/models/message')

module.exports = async (req, res) => {
    const messages = await message.find({})
    res.render('userSession', {
        messages,
        username: req.session.username,
        userId: req.session.userId
    })
}