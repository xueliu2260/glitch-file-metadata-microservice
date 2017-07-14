// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
//   $.get('/fileupload', function(dreams) {
//     dreams.forEach(function(dream) {
//       $('<li></li>').text(dream).appendTo('ul#fileupload');
//     });
//   });

  $('form').submit(function(event) {
    event.preventDefault();
    
    var formData = new FormData();
    formData.append("file", $("#image-file")[0].files[0]);
    
    $.ajax({
        url: '/fileupload',
        data: formData,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function(data){
            $('<p></p>').text(data).appendTo('p#fileupload');;
            $('input').val('');
            $('input').focus();
        }
    });
    
});

});
