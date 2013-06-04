// JavaScript Document
$(document).ready(function()
  {
    
	 $("#whatisclean").delay(1000).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
	 $("#spring13").delay(2500).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
	 $("#fall13").fadeOut(0).delay(4000).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300);
	 $("#stores").delay(5100).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
	 $("#eshop").delay(6600).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
	$("#fall13ia").hover(
      function () {
        $("#fall13").show();
      },
      function () {
        $("#fall13").hide();
      }
      );
	  
	  
  });
  
 $(document).ready(
function(){
   // Change the image of hoverable images
   $(".imgHoverable").hover( function() {
       var hoverImg = HoverImgOf($(this).attr("src"));
       $(this).attr("src", hoverImg);
     }, function() {
       var normalImg = NormalImgOf($(this).attr("src"));
       $(this).attr("src", normalImg);
     }
   );
});

function HoverImgOf(filename)
{
   var re = new RegExp("(.+)\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1_hover.$2");
}
function NormalImgOf(filename)
{
   var re = new RegExp("(.+)_hover\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1.$2");
}

$(function(){
    
    $('#container').masonry({
      itemSelector: '.box',
	  isAnimated: !Modernizr.csstransitions,
      isFitWidth: true,
      // set columnWidth a fraction of the container width
      columnWidth: function( containerWidth ) {
        return containerWidth / 5;
      }
    });
    
  }); 