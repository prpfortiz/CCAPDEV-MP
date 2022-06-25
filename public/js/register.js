$(document).ready(function () {

    $('#fname').val('');
    $('#lname').val('');
    $('#bday').val('');
    $('#username').val('');
    $('#pw1').val('');
    $('#pw2').val('');

    $('#username').keyup(function () {
        var allowed = /^[A-Za-z0-9.-_]+$/;
        var username = $('#username').val();

        $('#username').css('background-color', 'white');
        $('#errorUsername').text('');
        $('#submit').prop('disabled', false);
        if (username.length >= 5 && username.length <= 15) {
            if (allowed.test(username)) {
                $.get('/getCheckUsername', { username: username }, function (result) {
                    if (result.username == username) {
                        $('#username').css('background-color', 'red');
                        $('#errorUsername').text('Username is already registered');
                        $('#submit').prop('disabled', true);
                    }
                })
            }
            else {
                $('#username').css('background-color', 'red');
                $('#errorUsername').text('Username must alphanumeric. Special characters allowed are .-_');
                $('#submit').prop('disabled', true);
            }
        }
        else {
            $('#username').css('background-color', 'red');
            $('#errorUsername').text('Username must be between 5 and 15 characters in length');
            $('#submit').prop('disabled', true);
        }
    })

    $('#fname').keyup(function () {
        var allowed = /^[A-Za-z ]+$/;
        var fname = $('#fname').val();
        if (allowed.test(fname)) {
            $('#fname').css('background-color', 'white');
            $('#errorFname').text('');
            $('#submit').prop('disabled', false);
        }
        else {
            $('#fname').css('background-color', 'red');
            $('#errorFname').text('Field contains illegal characters');
            $('#submit').prop('disabled', true);
        }
    })

    $('#lname').keyup(function () {
        var allowed = /^[A-Za-z ]+$/;
        var fname = $('#lname').val();
        if (allowed.test(fname)) {
            $('#lname').css('background-color', 'white');
            $('#errorLname').text('');
            $('#submit').prop('disabled', false);
        }
        else {
            $('#lname').css('background-color', 'red');
            $('#errorLname').text('Field contains illegal characters');
            $('#submit').prop('disabled', true);
        }
    })

    $('#pw1, #pw2').keyup(function () {
        var pw1 = $('#pw1').val();
        var pw2 = $('#pw2').val();

        if (pw1.length >= 5 && pw1.length <= 20) {
            $('#pw1').css('background-color', 'white');
            $('#errorPw1').text('');
            if (pw1 != pw2) {
                $('#pw2').css('background-color', 'red');
                $('#errorPw2').text('Passwords do not match');
                $('#submit').prop('disabled', true);
            }
            else {
                $('#pw2').css('background-color', 'white');
                $('#errorPw2').text('');
                $('#submit').prop('disabled', false);
            }
        }
        else {
            $('#pw1').css('background-color', 'red');
            $('#errorPw1').text('Password must be between 5 and 20 characters in length');
            $('#submit').prop('disabled', true);
        }
    })

    $('#submit').click(function () {
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var bday = $('#bday').val();
        var username = $('#username').val();
        var pw1 = $('#pw1').val();
        var pw2 = $('#pw2').val();
        var verify = true;

        if (fname.length == 0) {
            $('#fname').css('background-color', 'red');
            verify = false;
        }
        else {
            $('#fname').css('background-color', 'white');
        }

        if (lname.length == 0) {
            $('#lname').css('background-color', 'red');
            verify = false;
        }
        else {
            $('#lname').css('background-color', 'white');
        }

        if (bday.length == 0) {
            $('#bday').css('background-color', 'red');
            verify = false;
        }
        else {
            $('#bday').css('background-color', 'white');
        }

        if (username.length == 0) {
            $('#username').css('background-color', 'red');
            verify = false;
        }
        else {
            $('#username').css('background-color', 'white');
        }

        if (pw1.length == 0) {
            $('#pw1').css('background-color', 'red');
            verify = false;
        }
        else {
            $('#pw1').css('background-color', 'white');
        }

        if (pw2.length == 0) {
            $('#pw2').css('background-color', 'red');
            verify = false;
        }
        else {
            $('#pw2').css('background-color', 'white');
        }
        if (verify) {
            $('#errorPage').text('');
            var user = {
                fname: fname,
                lname: lname,
                bday: bday,
                username: username,
                pw: pw1
            }

            $.post('/register', user, function (success) {
                
            })
        }
        else {
            $('#errorPage').text('Please fill up all required fields');
        }

    })
});