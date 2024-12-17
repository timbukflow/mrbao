$(document).ready(function() {
    // Popup 
    function showPopup() {
        $('#overlay').show();
        $('#popup').show();
    }
    function closePopup() {
        $('#overlay').hide();
        $('#popup').hide();
    }

    $('#close-popup').click(closePopup);
    $('#overlay').click(closePopup);
    $('.pop-opentime').click(closePopup);

    showPopup();
});
