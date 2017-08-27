/*
X – стоимость автомобиля (переменная, диапазон 389 900 – 1 450 000)
Y – первоначальный взнос (переменная, диапазон 0 – 90 000)
A – срок кредита (постоянная, 36)
B – ставка (постоянная, 7,7%)
E – ежемесячный платеж
*/


$(document).ready(function() {
    var handle = $( "#custom-handle" );
    var price = $('.calc-price-input');
    var start = $('.calc-start');

    var replacer = function(number) {
      var text = number.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
      return text;
    }

    var replacer2 = function(number) {
      var text = number.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,');
      return text;
    }



    var calc = function(x, y) {
      var pay = (((0.9*x)-y)*(0.077/12))/(1-Math.pow((1+(0.077/12)),-36));
      return pay;
    }

    $( "#calc-price" ).slider({
      create: function() {
        var text = $( this ).slider( "value" );
        handle.text( replacer(text) );
        $('.calc-price-input').val($( this ).slider( "value" ));
      },
      range: "min",
      min: 389900,
      max: 1450000,
      slide: function( event, ui ) {
        var text = ui.value;
        handle.text( replacer(text) );
        $('.calc-discount span').text( (replacer2(parseInt(ui.value/10))));
        var x = ui.value;
        var y = $('.calc-start').val();
        $('.calc-pay span').text(replacer2(parseInt(calc(x,y))));
        
        console.log(parseInt(calc(x,y)));
      }
    });

    start.on('change', function() {
      var x = price.val();
      var y = $(this).val();
      console.log(x, y);
      $('.calc-pay span').text(replacer2(parseInt(calc(x,y))));
    });

    var mySwiper = new Swiper('.avto-slider', {
          slidesPerView: 3
    }); 

});