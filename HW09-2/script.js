/*                ↓ var msg = "Hello"  */
/*function showMsg(msg1,msg2){
    alert(msg1+msg2);
}
*/

function showMsg(msg1,msg2){
    var allMsg = 
    msg1+msg2;
    return allMsg;
}

function random(M){
    console.log(M);
    return Math.floor(Math.random()*M+1);
}

myShose = {
    brand:"sk",
    size:7,
    forFemale:true
}


$(document).ready(function(){
  $("input").mouseover(function(){
   $(".hint").css("display","block");
  })
  
  $("input").mouseout(function(){
   $(".hint").css("display","none");
  })
  
})


 $(document).ready(function(){
   
   $("td").mouseover(function(){
     $(this).css("background","lightblue");
   })
   
   $("[rowspan=2]").mouseover(function(){
     $(this).css("background","lightgreen");
   })
   
   $("td").mouseout(function(){
     $(this).css("background","white");
   })
   
   
   $("td").click(function(){
     $(this).hide();
   })
   
   $("td[colspan=2]").click(function(){
    $("td").fadeToggle(1000);
     $("table *").show();
       
   })
   
   /*$("td[colspan=2]").click(function(){
     $("td").fadeToggle(1000);
     $(this).show();
   })*/
   
 })