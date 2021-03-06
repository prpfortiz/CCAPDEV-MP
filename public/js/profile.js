$(document).ready(function () {
    $("#editBtn").click(function (e) {
        e.preventDefault();

        console.log('Edit button clicked');

        var cancelBtn = $('<button class="btn btn-secondary profile-button" id="editBtn" type="button" onClick="window.location.reload();">Cancel</button>');
        var okBtn = $('<button type="submit" class="btn btn-primary profile-button" id="submit">Save</button>');
        $('#divButtons').append(okBtn);
        $('#editBtn').replaceWith(cancelBtn);

        $('#editFormFields').prop('disabled', false);
    });

    function checkFieldsAndUpdateButton() {
        if ($('#fname').hasClass('is-invalid') || $('#lname').hasClass('is-invalid') || $('#bday').hasClass('is-invalid')) {
            $('#submit').prop('disabled', true);
        }
        else {
            $('#submit').prop('disabled', false);
        }
    }

    $('#fname').keyup(function () {
        var allowed = /^[A-Za-z ]+$/;
        var fname = $('#fname').val();
        if (allowed.test(fname)) {
            // $('#fname').css('background-color', 'white');
            $(this).removeClass('is-invalid');
            $(this).parent().children('.invalid-feedback').html('Please provide a first name.');
            checkFieldsAndUpdateButton()
        }
        else {
            // $('#fname').css('background-color', '#b30000');
            $(this).addClass('is-invalid');
            $(this).parent().children('.invalid-feedback').html('Field contains illegal characters');
            checkFieldsAndUpdateButton()
        }
    });
    $('#lname').keyup(function () {
        var allowed = /^[A-Za-z ]+$/;
        var fname = $('#lname').val();
        if (allowed.test(fname)) {
            // $('#lname').css('background-color', 'white');
            $(this).removeClass('is-invalid');
            $(this).parent().children('.invalid-feedback').html('Please provide a first name.');
            checkFieldsAndUpdateButton()
        }
        else {
            // $('#lname').css('background-color', '#b30000');
            $(this).addClass('is-invalid');
            $(this).parent().children('.invalid-feedback').html('Field contains illegal characters');
            checkFieldsAndUpdateButton()
        }
    });
});