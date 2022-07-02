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

    function updateTable() {
        $.get('/getexpenses', function (result) {
            console.log(result);

            var table = $('#expensetable');
            table.empty();
            for (var i = 0; i < result.length; i++) {
                var btnEdit = $('<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">').append($('<i class="fas fa-edit">'));
                var btnDelete = $('<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">').append($('<i class="fas fa-trash-alt">'));
                var btnGroup = $('<td>').append(btnEdit);
                btnGroup.append(btnDelete);

                // console.log(result[i]._id);
                var row = $('<tr>').attr('id', result[i]._id);
                row.append($('<td>').text(result[i].category));
                row.append($('<td>').text(result[i].date));
                row.append($('<td>').text(result[i].amount));
                row.append($('<td>').text(result[i].notes));
                row.append(btnGroup);
                table.append(row);
            }
        });

    }

    resetForm();
    updateTable();

    // $.get('/getexpenses', function (data) {
    //     console.log(data);
    //     updateTable(data);
    // });

    // Get the contents of the form and send it to the server
    // $('#addexpense').submit(function (event) {
    //     event.prevendDefault();
    //     console.log('clicked');

    //     var expense = {
    //         date: $('#date').val(),
    //         category: $('#category').val(),
    //         amount: $('#amount').val(),
    //         notes: $('#notes').val()
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

    $('#deleteModal').on('show.bs.modal', function (e) {
        // This function is called when the modal is shown

        var triggeredDelBtn = $(e.relatedTarget); // Button that triggered the modal

        // This is kinda dumb
        // var btnDate = triggeredDelBtn.closest('tr').find('td:eq(1)').text(); // Find 2nd td (date) in the closest tr from the button
        // var btnNote = triggeredDelBtn.closest('tr').find('td:eq(3)').text(); // Find 4nd td (note) in the closest tr from the button
        // console.log(btnDate, btnNote);

        // This is better
        var trId = triggeredDelBtn.closest('tr').attr('id'); // Find the id of the closest tr from the button
        console.log(trId);

        $(this).find('.btn-danger').attr('data-id', trId); // Set the href of the delete button to the id of the expense

        $(this).find('.modal-body').html('ObjectId: <strong>' + trId + '</strong>'); // Set the title of the modal
    });

    $('#deleteModal').on('click', '.btn-danger', function (e) {
        // This function is called when the delete button is clicked
        e.preventDefault();
        console.log('clicked');
        var id = $(this).attr('data-id');
        console.log(id);
        $.ajax({
            type: 'DELETE',
            url: '/deleteexpense/' + id,
            success: function (data) {
                console.log(data);
                $('#deleteModal').modal('hide');
                updateTable();
            }
        });
    });
});