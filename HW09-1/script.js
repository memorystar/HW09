$().ready(function(){
  var tipColor=['red','yellow','orange','green'];
  
  function matchLevel(password){
    if(password.length===0){
        return -1;
    }
	else if(password.length>=1&&password.length<6){
		return 0;
	}
	else if(password.length>=6&&password.length<10){
		return 1;
	}
	else if(password.length>=10&&password.length<16){
		return 2;
	}
	else{
		return 3;
	}
  }

  $("#password>input").keyup(function(){
    var pass = $(this).val();
    var level = matchLevel(pass);
    
    for(var i = 0; i <= 3; i=i+1){
      if(i>level){
        $(".tips[level=\'"+i+"\']").css("background", "");
      }
      else{
        $(".tips[level=\'"+i+"\']").css("background", tipColor[i]);
      }
      
    }
      
  });


})



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
   
   
   /*$("td").click(function(){
     $(this).hide();
   })
   
   $("td[colspan=2]").click(function(){
     $("table *").show();
   })*/
   
   $("td[colspan=2]").click(function(){
     $("td").fadeToggle(1000);
     $(this).show();
   })
   
 })
