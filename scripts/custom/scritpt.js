// JavaScript Document
var cliqueInicial=false;
/*var categorias=["inicio","parte1","parte2","parte3","parte4","parte5"];*/
var categorias=[];
var indexCategoria=0;
$(document).ready(function(e) {
    $('#frame1').css('height',$(window).height());
	calcIndexRoll();
	//alert($(window).height());
	
	//Ao rolar o mouse
	$('#inicio').on({
    'mousewheel': function(e) {
		//impedir o rolamento da página
		if(!cliqueInicial)
		{
			e.preventDefault();
    	    e.stopPropagation();
		}
    }
});

//recarregamento de página
$(window).bind('beforeunload',function(){
	cliqueInicial=false;
	$(document).scrollTop(0);
});

//rolamento de página
$(window).bind('mousewheel', function(e){
   //cima
  
    if(e.originalEvent.wheelDelta > 0)
    {
        indexCategoria -=(indexCategoria>0)?1:0;
    }
	//baixo
    else
    {
        indexCategoria+=(indexCategoria<categorias.length-1)?1:0;
		//scrollToElement(categorias[indexCategoria],10);
    }
	 //scrollToElement(categorias[indexCategoria],10);
	 scrollToPosition(categorias[indexCategoria]);
	
});

/*$(document).scroll(function(e) {
	$('#batata').html($(document).scrollTop());
	if($(document).scrollTop()>500)
	{
		cliqueInicial=true;
	}
});*/
	//ao clicar no botão achei permitir o rolamento da página
	$('#botao-achei').click(function(e){
		scrollToElement('parte1',1);
		$('body').css('overflow','visible');
		cliqueInicial=true;
		indexCategoria=0;
		$('#botao-achei').css('display','none');
	});
	
});
//Redimensionar a tela inicial
$(window).resize(function(e){
	calcIndexRoll();
		if(!cliqueInicial){
			$('#frame1').css('height',$(window).height());
		}
});


//PARTE1
//ITENS
$('#item1').hover(
	function()
	{
		$('#bag').removeClass('bag-normal');
		$('#bag').addClass('bag-item1');
	},
	function()
	{
		$('#bag').removeClass('bag-item1');
		$('#bag').addClass('bag-normal');
	}
);
$('#item2').hover(
	function()
	{
		$('#bag').removeClass('bag-normal');
		$('#bag').addClass('bag-item2');
	},
	function()
	{
		$('#bag').removeClass('bag-item2');
		$('#bag').addClass('bag-normal');
	}
);
$('#item3').hover(
	function()
	{
		$('#bag').removeClass('bag-normal');
		$('#bag').addClass('bag-item3');
	},
	function()
	{
		$('#bag').removeClass('bag-item3');
		$('#bag').addClass('bag-normal');
	}
);

function calcIndexRoll()
	{
		var divisao=Math.round($(document).height()/$(window).height());
		for(var i=0;i<divisao;i++)
		{
			categorias[i]= $(window).height()*i;
		}
	}

// /PARTE1
//Função para rolar a página até o elemento (Target)
function scrollToElement( target, offset ) {
    var topoffset = offset;
    var speed = 200;
    var destination = jQuery( document.getElementById(target) ).offset().top - topoffset;
    jQuery( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
        //window.location.hash = document.getElementById(target);
    });
    return false;
}

function scrollToPosition(target, offset ) {
    var topoffset = offset;
    var speed = 200;
    var destination = target;
    jQuery( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
        //window.location.hash = document.getElementById(target);
    });
    return false;
}