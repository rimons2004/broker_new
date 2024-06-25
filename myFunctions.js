$(document).ready(function() {
    $('.details-btn').on('click', function() {
        $(this).closest('tr').next('.details-row').toggle();
    });
});
