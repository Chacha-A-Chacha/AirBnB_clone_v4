let storing = {};
window.onload = (()=>{
    $('input[type=checkbox]').click(
        () => {
            if (this.checked) {
                storing[$(this).data('id')] = $(this).data('name');
                $('.amenities h4').text(Object.values(storing).join(', '));
            } else {
                delete storing[$(this).data('id')];
                if (Object.values(storing).length === 0) {
                    $('.amenities h4').html('&nbsp;');
                } else {
                    $('.amenities h4').text(Object.values(storing).join(', '));
                }
            }
        }
    );
})
