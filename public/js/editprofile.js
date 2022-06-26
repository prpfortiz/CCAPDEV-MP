$(document).ready(function () {
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
    $('#submit').click(function () {
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var bday = $('#bday').val();
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

        if (verify) {
            $('#errorPage').text('');
            var user = {
                fname: fname,
                lname: lname,
                bday: bday,
                username: '',
                pw: ''
            }

            $.post('/editprofile', user, function (success) {

            })
        }
        else {
            $('#errorPage').text('Please fill up all required fields');
        }

    })
})