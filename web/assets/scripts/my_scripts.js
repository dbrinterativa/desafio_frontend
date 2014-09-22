// JavaScript Document
function checkmobile(){ return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera); }
function EnviaEmail(){
	console.log('ajax de envio aqui');
}
$(document).ready( function(){
	
	//Loader
	$('body').queryLoader2({
		backgroundColor:'#262626',
		barColor:'#C7D63F',
		barHeight:'5',
		minimumTime:'500',
		onLoadComplete: function(){
			$('#abertura > div').fadeTo(200,1);
		}
	});
	
	//Viewpor chekers (Animate.css)
	$('#conhecimento').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 50
    });
	$('#aprendizado').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 75
    });
	$('#desafios').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 50
    });
	$('#humor').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 50
    });
	$('#musica').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 75
    });
	$('#compartilhar').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 50
    });
	
	//Máscaras de Campos
	$('#telefone').mask("(99) 9999-9999?9");
	$('#idade').mask("9?9");
	$('#pretensao').maskMoney({decimal:",", thousands:"."});
		
	//Valida Formulario Contato
	$("#form-contato").validate({
		rules: {
			nome: "required",
			idade: "required",
			email: {
				required: true,
				email: true
			},
			pretensao: "required",
			telefone: "required"
		},
		messages: {
			nome: {
				required: "digite seu nome"
			},
			email: {
				required: "digite seu E-mail",
				email:"digite um email válido"
			},
			idade: "digite sua idade",
			pretensao: {
				required: "qual sua pretensão salarial?"
			},
			telefone: {
				required: "digite seu telefone"
			}
		},
		errorElement: "span",
		onfocusout: false,
	   	onkeyup: false,
	   	onclick: false,
		submitHandler: function() {
		EnviaEmail();
		}
	});

	$(".seletor-bg").click( function(){
		$(this).toggleClass("feminino");
		$(".opcao-esquerda , .opcao-direita").toggleClass("disabled");	
		if($(this).hasClass("feminino")){
			$("#sexo").val("1");	
		}else{
			$("#sexo").val("0");	
		}
	});
	
	if(!checkmobile()){
		scroller = skrollr.init({
			forceHeight: false
		});
	}
	

});


