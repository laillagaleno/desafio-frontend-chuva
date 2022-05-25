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


//dinamica dos comentarios
const bntComment = document.querySelectorAll(".talk-button");
const bntEdit = document.querySelector("#button-edit");

const talkEdit = document.querySelector(".talk-edit");
const talkHome = document.querySelector(".talk-home");
const talkConfirm = document.querySelector(".talk-confirm");

const commentNew= document.querySelector(".comment-new");

for(var i = 0; i < bntComment.length; i++){
     bntComment[i].addEventListener("click", function(){
          edit();
          if(talkHome.className.endsWith("hide-talk-ocult")){
               confirm();
          }else{
               home();
          }
     })
}
bntEdit.addEventListener("click", function(){
     edit();
     confirm();
     commentNew.classList.toggle("hide-new");

})
function home(){
     talkHome.classList.toggle("hide-talk-ocult");
}
function confirm(){
     talkConfirm.classList.toggle("hide-talk-view");
}
function edit(){
     talkEdit.classList.toggle("hide-talk-view");
}

//dinamica dos comentarios

const talkCard = document.querySelector("#comments");

const commentsNum = document.querySelector(".comments-num");
     talkCard.addEventListener("click", function(){
         commentsNum.classList.toggle("hide-comments-num")
     })


