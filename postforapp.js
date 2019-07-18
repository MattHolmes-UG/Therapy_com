const mongoose = require('mongoose');
const Post = require('./database/models/Post');

mongoose.connect('mongodb://localhost/project-t');

/*Post.create({
    title: 'Blog postMessage',
    description: 'testing mongodb',
    content: 'This is the first string in the content section'
}, (error, post) => {
    console.log(error, post)
}); */

Post.find({}, (error, posts) => {
    console.log(error, posts);
});

/*Post.findByIdAndDelete('5c6aa5717ced901744256b78', (error, posts) => {
    console.log(error, posts)
})*/

//Post.findByIdAndUpdate('5c66a92c852d190a2cecbcf7', {
//    title: 'First Blog postMessage'
//}, (error, post) => {
//    console.log(error, post);
//});