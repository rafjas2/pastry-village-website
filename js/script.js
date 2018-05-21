$(function() {

  $(".icon-nav").on("click", function() {
    $(this).toggleClass("change");
    $(".main-nav ul").slideToggle(500);
  });

/*================Modal for Products page=============*/
    var photo = $(".photo"),
        model = $(".modal"),
        close = $(".close"),
        img = $(".modal-image");

    photo.on("click", function() {
        $(this).siblings().show("slow");
        img.attr("src", $(this).attr("src"));
  });

  close.on("click", function() {
    model.hide(500);

  });
  
/*=================Form==============*/
  $('#submit').click(function() {

    var fName = $("#fname").val();
    var lName = $("#lname").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $("#back").append(fName);
    
    var fName = $("#fname").val("");
    var lName = $("#lname").val("");
    var email = $("#email").val("");
    var message = $("#message").val("");

    
    $('#flipper').css({'transform': 'rotateY(180deg)'});

    $('#flipper').delay(4000).queue(function() {  

      $(this).css({'transform': 'rotateY(0deg)'}).dequeue();
      
    });
  });

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

 /*===================Scroll-Up botton it fadeIn after scroll down 400px=========================*/

   $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });

/*====================Scroll-up botton on click scroll to the top in 3s========================*/

  $(".scroll-up").on("click", function() {
      $("html").animate({scrollTop:0}, 3000);
  });

 /*==============Shoping-bag getting position fixed after scroll down 50px======================*/

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 40) {
      $("li.shoping-bag").addClass("bag-fixed").fadeIn("slow");
    } else {
      $("li.shoping-bag").removeClass("bag-fixed");
    }
  });

  
  var itemCount = 0;
  var priceTotal = 0;

$('.add-to-cart').click(function (){
  itemCount ++;
  $('#itemCount').html(itemCount).css('display', 'block');
  $(this).parents('.shop').clone().appendTo( "#cartItems").append('<span class="removeItem"><i class="fas fa-trash-alt fa-xs"></i></span>');

  var price = parseInt($(this).siblings().find('.priceCount').text()); 
  priceTotal += price;
  $('#cartTotal').text("Total: €" + priceTotal);
}); 



// Hide and Show Cart Items
$('.shoping-bag, #cartItems span').click(function(){
  $('#shoppingCart').slideToggle(500);
});


$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();  
  itemCount --;
  $('#itemCount').html(itemCount);

  var price = parseInt($(this).siblings().find('.priceCount').text());
  priceTotal -= price;
  $('#cartTotal').text("Total: €" + priceTotal);

  if (itemCount == 0) {
    $('#itemCount').html('').css('display', 'none');
    $('#shoppingCart').css('display', 'none');
  }

});

  
});
      
