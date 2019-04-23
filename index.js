function addItem(){
  $("form button").on( 'click' , function(event) {
      event.preventDefault();
      const entry = $('#shopping-list-entry').val();
    $(".shopping-list").append('<li>\
      <span class="shopping-item">' + entry + '</span>\
      <div class="shopping-item-controls">\
        <button class="shopping-item-toggle">\
          <span class="button-label">check</span>\
        </button>\
        <button class="shopping-item-delete">\
          <span class="button-label">delete</span>\
        </button>\
      </div>\
    </li>');
    $('#shopping-list-entry').val('');
  });
};
addItem();
  
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
  event.preventDefault();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  event.preventDefault();
});