$('document').ready(function(){
	$('#pizza').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/pizza.html',function(data){
            $('#contenu').html(data);
        },'html');
        disable();
        $(this).addClass("active");
     });
	$('#panini').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/panini.html',function(data){
            $('#contenu').html(data);
        },'html');
        disable();
        $(this).addClass("active");
     });
	$('#tartine').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/tartine.html',function(data){
            $('#contenu').html(data);
        },'html');
        disable();
        $(this).addClass("active");
     });
	$('#salade').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/salade.html',function(data){
            $('#contenu').html(data);
        },'html');
        disable();
        $(this).addClass("active");
     });
	$('#dessert').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/dessert.html',function(data){
            $('#contenu').html(data);
        },'html');
        disable();
        $(this).addClass("active");
     });
	$('#boisson').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/boisson.html',function(data){
            $('#contenu').html(data);
        },'html');
        disable();
        $(this).addClass("active");
     });
    $('#accueil').click(function(){
        $('html,body').animate({scrollTop: -50});
        $.get('pages/accueil.html',function(data){
            $('#contenu').html(data);
        },'html');
        disable();
        $(this).addClass("active");
     });
	$.get('pages/accueil.html',function(data){
            $('#contenu').html(data);
    },'html');
    $("#email-form").hide();
    $("#overlay").hide();
    $( "#feedback" ).click(function( ) {
        $("#email-form").toggle();
        $("#overlay").toggle();

    });
    $(".close-button").click(function(){
        $("#email-form").toggle();
        $("#overlay").toggle();        
    });
    //        $('body').on({
    //     'mousewheel': function(e) {
    // if (e.target.id == 'feedback') return;
    // e.preventDefault();
    // e.stopPropagation();
    // }

// })
    $("#submit").click(function(){
        $("#email-form").toggle();
        $("#overlay").toggle();  
        $(".input").val("");
    });
});
  function disable(){
        $("li").removeClass();
    }


    