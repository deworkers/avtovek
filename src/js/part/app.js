$(document).ready(function() {
    var handle = $( "#custom-handle" );
    $( "#calc-price" ).slider({
      create: function() {
        var text = $( this ).slider( "value" );
        console.log(text);
        //handle.text( text.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') );
      },
      range: "min",
      min: 389900,
      max: 1450000,
      slide: function( event, ui ) {

        handle.text( ui.value );
      }
    });
});