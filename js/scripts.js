//Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1689571441255193";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, "script", "facebook-jssdk"));

//Google Maps API
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.29, lng: -81.48},
    zoom: 14
  });
  var marker = new google.maps.Marker({
    position: {lat: 30.29, lng: -81.48},
    map: map,
    animation: google.maps.Animation.DROP,
    title: "Hello World!"
  })
}

$(document).ready(function() {  
  //Smooth Scrolling	
  var $root = $("html, body");
  $(".navbar-nav a").click(function() {
    var href = $.attr(this, "href");
    $root.animate({
      scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
        });
    return false;
  });
 
 //Stellar
  $.stellar();

 //Tooltips
  $(function () {
    $("#item1").tooltip();
  });

  $(function() {
    $("[data-toggle='tooltip']").tooltip();
  });

  //textarea background text color
  $("#message").css("background-color", "pink");  

  //works section small images
  for(var i=0; i < works.length; i++) {
    $("#other").append("<div class='col-sm-6 col-md-3'>\
      <a href='" + works[i].url + "' class='work-img' target='_blank'>\
      <img src='" + works[i].pic + "' class='img-responsive'>\
      <span class='info'><p class='proj-title'>Title:</p> " + works[i].title +" </span>\
      </a>\
      </div>\
    ")
    var images = $('#other img');
    if(i % 2 === 0) {
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon"); 
    }
  }
  
  //Button Listener - conditional on text
  $("#button").on("click", function() {
    if($(".message-box").val() === "") {
      $(".message-box").css("border", "2px solid red");
    } else {
    	var name = $("#name").val();
    	var phoneNumber = $("#phone").val();
      var comment = $(".message-box").val();
      var email = $("#email").val();
      comment=comment.toUpperCase();
      $("#visible-comment").html(comment);
      $(".message-box").hide();
      $("#theName").html(name.fontcolor("green"));
      $("#name").hide();
      $("#thePhone").html(phoneNumber);
      $("#phone").hide();
      $("#theEmail").html(email);
      $("#email").hide();
      $("#char-count").hide();
      return false;
    };
  });

  //MouseEnter Listener
  $(".work-img").mouseenter( function() {
    $(".info", this).show();
    $("img", this).css("opacity", .45);
  }).mouseleave(function() {
    $(".info", this).hide();
    $("img", this).css("opacity", 1);
  });

   //MouseEnter Listener
  $(".big-img").mouseenter( function() {
    $(".big-info", this).show();
    $("img", this).css("opacity", .45);
  }).mouseleave(function() {
    $(".big-info", this).hide();
    $("img", this).css("opacity", 1);
  });

  //Open Modal on Click
  $("#pr").on("click", function() {
    $("#prmodal").modal();
    return false;
  })

  $("#finance").on("click", function() {
    $("#finmodal").modal();
    return false;
  })

  //Character counter, red when > 50
  $(".message-box").on("keyup", function() {
    console.log("Keyup Happened");
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#char-count").html(charCount); 
    if(charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "white");
    };
  });
  
    //Hide nav on item select
  $('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
  });

});