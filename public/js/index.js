$(document).ready(function () {
    $('#submit').click(function () {
        var username = $('#username').val();
        var pw = $('#pw').val();

        if (username.length == 0 || pw.length == 0) {
            $('#errorLogin').text('Username and Password are required');
        }
        else {
            var staysigned = false;
            if ($('#staysigned').is(':checked')) {
                staysigned = true;
            }
            $('#errorLogin').text('');
            $.post('/', { username: username, pw: pw, staysigned: staysigned }, function (result) {
            })
        }
    })
});