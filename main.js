const height = $("#about").height();

function scrollAbout(){
  $("html, body").animate({ scrollTop: 0 }, 1000);
}

function scrollSkills(){
  $("html, body").animate({ scrollTop: height }, 1000);
}

function scrollWorks(){
  $("html, body").animate({ scrollTop: height*2 }, 1000);
}

function scrollContact(){
  $("html, body").animate({ scrollTop: height*3 }, 1000);
}

$("#btn-about").click(scrollSkills);
$("#btn-skills").click(scrollWorks);
$("#btn-works").click(scrollContact);

$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  if(scroll<height){
    $("#nav-about").addClass("gray");
    $("#a-about").addClass("gray");
    $("#nav-skills").removeClass("gray");
    $("#a-skills").removeClass("gray");
    $("#nav-works").removeClass("gray");
    $("#a-works").removeClass("gray");
    $("#nav-contact").removeClass("gray");
    $("#a-contact").removeClass("gray");
  }
  else if(scroll>=height&&scroll<height*2){
    $("#nav-about").removeClass("gray");
    $("#a-about").removeClass("gray");
    $("#nav-skills").addClass("gray");
    $("#a-skills").addClass("gray");
    $("#nav-works").removeClass("gray");
    $("#a-works").removeClass("gray");
    $("#nav-contact").removeClass("gray");
    $("#a-contact").removeClass("gray");
  }
  else if(scroll>=height*2&&scroll<height*3){
    console.log(2)
    $("#nav-about").removeClass("gray");
    $("#a-about").removeClass("gray");
    $("#nav-skills").removeClass("gray");
    $("#a-skills").removeClass("gray");
    $("#nav-works").addClass("gray");
    $("#a-works").addClass("gray");
    $("#nav-contact").removeClass("gray");
    $("#a-contact").removeClass("gray");
  }
  else if(scroll>=height*3){
    $("#nav-about").removeClass("gray");
    $("#a-about").removeClass("gray");
    $("#nav-skills").removeClass("gray");
    $("#a-skills").removeClass("gray");
    $("#nav-works").removeClass("gray");
    $("#a-works").removeClass("gray");
    $("#nav-contact").addClass("gray");
    $("#a-contact").addClass("gray");
  }
})

$("#nav-about").click(scrollAbout);
$("#nav-skills").click(scrollSkills);
$("#nav-works").click(scrollWorks);
$("#nav-contact").click(scrollContact);