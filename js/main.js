$( document ).ready(function() {

     window.location.assign("#nav1");
     var url = "#nav1";

     $('.menu-itens li a').each(function(){
          var href = $(this).attr('href');
               
          if (url === href){
               $(this).addClass("active"); 
          }
        });

     //destaque no menu
     $(function() {                       
          $(".menu-itens li a").click(function() {  
               $(".menu-itens li a").removeClass("active");
               $(this).addClass("active");
               var href = $(this).attr('href');
          });
          
        });
 });

 