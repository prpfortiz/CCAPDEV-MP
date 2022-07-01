$(document).ready(function () {
    // Set default date value for the form
    var today = new Date();
    $('#date').val(new Date().getFullYear().toString() + '-' + (today.getMonth() + 1).toString().padStart(2, 0) + '-' + today.getDate().toString().padStart(2, 0));
})