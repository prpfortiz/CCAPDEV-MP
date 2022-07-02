$(document).ready(function () {
    // Set default date value for the form
    var today = new Date();
    $('#date').val(new Date().getFullYear().toString() + '-' + (today.getMonth() + 1).toString().padStart(2, 0) + '-' + today.getDate().toString().padStart(2, 0));

    // Get the contents of the form and send it to the server
    // $('#addexpense').submit(function (event) {
    //     event.prevendDefault();
    //     console.log('clicked');

    //     var expense = {
    //         date: $('#date').val(),
    //         category: $('#category').val(),
    //         amount: $('#amount').val(),
    //         description: $('#notes').val()
    //     };

    //     console.log(expense);

    //     $.ajax({
    //         type: 'POST',
    //         url: '/addexpense',
    //         data: expense,
    //         success: function (data) {
    //             console.log(data);
    //             $('#date').val('');
    //             $('#category').val('');
    //             $('#amount').val('');
    //             $('#notes').val('');
    //         }
    //     });
    // });
});