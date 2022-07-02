$(document).ready(function () {

    function resetForm() {
        // Reset the form
        $('#category').val('');
        $('#amount').val('');
        $('#notes').val('');

        // Reset the datepicker to the current date
        var today = new Date();
        $('#date').val(new Date().getFullYear().toString() + '-' + (today.getMonth() + 1).toString().padStart(2, 0) + '-' + today.getDate().toString().padStart(2, 0));
    }

    function updateTable(result) {
        var table = $('#expensetable');
        table.empty();
        for (var i = 0; i < result.length; i++) {
            var btnEdit = $('<button type="button" class="btn btn-primary">').append($('<i class="fas fa-edit">'));
            var btnDelete = $('<button type="button" class="btn btn-danger">').append($('<i class="fas fa-trash-alt">'));
            var btnGroup = $('<td>').append(btnEdit);
            btnGroup.append(btnDelete);

            var row = $('<tr>');
            row.append($('<td>').text(result[i].category));
            row.append($('<td>').text(result[i].date));
            row.append($('<td>').text(result[i].amount));
            row.append($('<td>').text(result[i].notes));
            row.append(btnGroup);
            table.append(row);
        }
    }

    resetForm();
    // updateTable();

    $.get('/getexpenses', function (data) {
        console.log(data);
        updateTable(data);
    });

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