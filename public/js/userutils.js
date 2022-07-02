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
});