

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

 //dinamica do menu

 const btnMenu = document.querySelector("#icon-menu");
 const menu = document.querySelector(".nav-menu");

 btnMenu.addEventListener("click", function(){
     menu.classList.toggle("hide");
     btnMenu.classList.toggle("hide-icon");
 })

//dinamica do drowp don
const drowp = document.querySelector(".container-language");
const select = document.querySelector("#select");
const itens = document.querySelector(".itens");


drowp.addEventListener("click", function(){
     itens.classList.toggle("hide-drowp");
})

const item = document.querySelectorAll(".option");

for(var i = 0; i < item.length; i++)
  item[i].addEventListener('click', function(e) {    
    select.innerHTML = this.textContent;
    e.stopPropagation();
    itens.classList.toggle("hide-drowp");
  });


 //dinamica do ver mais
const more = document.querySelector(".more");
const text = document.querySelector("#text");
const bnt = document.querySelector(".abstract-text");

bnt.addEventListener("click",function(){
     text.classList.toggle("hide-abstract");
     if(text.className =="hide-abstract"){
          more.innerHTML = " ";
     }else{
          more.innerHTML = "ver mais";
     }
})
