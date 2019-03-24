$('#file-input').focus(function() {
   $('label').addClass('focus');
})
.focusout(function() {
    $('label').removeClass('focus');
});

var dropZone = $('#upload-container');

dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
    // В jQuery вызов оператора return false эквивалентен вызову сразу двух функций: e.preventDefault() и e.stopPropagation().
    return false;
});

dropZone.on('dragover dragenter', function() {
     dropZone.addClass('dragover');
});

dropZone.on('dragleave', function(e) {
     let dx = e.pageX - dropZone.offset().left;
     let dy = e.pageY - dropZone.offset().top;
     if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
          dropZone.removeClass('dragover');
     };
});

dropZone.on('drop', function(e) {
     dropZone.removeClass('dragover');
     // на чистом js путь будет выглядеть так - e.dataTransfer.files
     let files = e.originalEvent.dataTransfer.files;
     sendFiles(files);
});

$('#file-input').change(function() {
    let files = this.files;
    sendFiles(files);
});

function sendFiles(files) {
    // размер - не больше 5 Мб
    let maxFileSize = 5242880;
    // объект класса FormData позволяет формировать наборы пар ключ-значение
    let Data = new FormData();
    $(files).each(function(index, file) {
        if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
              Data.append('images[]', file);
          }
     });

     $.ajax({
       url: dropZone.attr('action'),
       type: dropZone.attr('method'),
       data: Data,
       contentType: false,
       processData: false,
       success: function(data) {
            alert('Файлы были успешно загружены');
       }
     });
};
