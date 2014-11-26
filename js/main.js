$('document').ready(function(){
	$('#pizza').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/pizza.html',function(data){
            $('#contenu').html(data);
        },'html');
     });
	$('#panini').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/panini.html',function(data){
            $('#contenu').html(data);
        },'html');
     });
	$('#tartine').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/tartine.html',function(data){
            $('#contenu').html(data);
        },'html');
     });
	$('#salade').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/salade.html',function(data){
            $('#contenu').html(data);
        },'html');
     });
	$('#dessert').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/dessert.html',function(data){
            $('#contenu').html(data);
        },'html');
     });
	$('#boisson').click(function(){
		$('html,body').animate({scrollTop: -50});
        $.get('pages/boisson.html',function(data){
            $('#contenu').html(data);
        },'html');
     });
    $('#accueil').click(function(){
        $('html,body').animate({scrollTop: -50});
        $.get('pages/accueil.html',function(data){
            $('#contenu').html(data);
        },'html');
     });
	$.get('/pages/accueil.html',function(data){
            $('#contenu').html(data);
    },'html');
});
