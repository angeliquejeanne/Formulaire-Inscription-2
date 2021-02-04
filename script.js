$(document).ready(function(){ $('#pass1').focus(afficheMessage);
    $('#pass1').blur(supprMessage);
    function afficheMessage(){
      var help = $(this).data("help");
      $('.message').html(help);   
    }
    
    function supprMessage(){
      $('.message').empty();
    }
  });