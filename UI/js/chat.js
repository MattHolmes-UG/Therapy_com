let socket = io();
let messages = document.getElementById('messages');
let li = document.createElement('li');
let p = document.createElement('p');

$(function () {
    var socket = io();
    $('form').submit(function (e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('received', function (data) {
        $('#messages').append($('<li>').text(data.message));
    });
});