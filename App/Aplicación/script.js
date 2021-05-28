function IntroLevel() {
  window.location.href = "first.html"/**Si se da click en el botón juego, te traslada a esta pagina */
}
function Atras() {
  window.location.href = "intro.html"/**Si se da click en el botón juego, te traslada a esta pagina */
}
function FirstLevel() {
  window.location.href = "second.html"/**Si se da click en el botón juego, te traslada a esta pagina */
}
function SecondLevel() {
  window.location.href = "third.html"/**Si se da click en el botón juego, te traslada a esta pagina */
}
function ThirdLevel() {
  window.location.href = "fourth.html"/**Si se da click en el botón juego, te traslada a esta pagina */
}
function play() {
  window.location.href = "Juego/index.html"/**Si se da click en el botón juego, te traslada a esta pagina */
}
/*Comportamiento de los textos cuando el usuario ingrese o no algún email o contraseña*/
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});
/*Comportamiento del boton cuando el usuario haya completado o no las exigencias en los campos de texto*/

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

