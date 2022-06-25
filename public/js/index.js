$(document).ready(function () {
    $('#submit').click(function () {
        var username = $('#username').val();
        var pw = $('#pw').val();

        if (username.length == 0 || pw.length == 0) {
            $('#errorLogin').text('Username and Password are required');
        }
        else {
            $('#errorLogin').text('');
            $.post('/', { username: username, pw: pw }, function (result) {
            })
        }
    })
});