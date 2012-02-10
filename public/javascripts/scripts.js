$(document).ready(function(){

    $("#entry_form").validate();
    
    $('.alert-message.error, .alert-message.warning, .alert-message.success').delay(2000).slideUp('slow');

    // Add alt margins to popular widget
    $('.widget.popular ul li').filter(function(index){
    return (index%2 == 1);
    }).addClass('alt');

    // check for countdown plugin
    if($.fn.countdown) {
        // grab clock element and extract "expires at" timestamp
    	var $time = $("time#expires-at"),
          timestamp = Date.parse($time.attr('datetime')),
          expiresAt = new Date(timestamp);
          $time.countdown({
            until: expiresAt,
            format: 'dHMS'
          });
          
    // Show & hide new idea container
    $("#new-entry ").hide();
    $(".showbtn").show();
    
    $('.showbtn').click(function(){
    $("#new-entry ").slideToggle();
    });    
    }

    // AJAX like buttons
    // AJAXIFY LIKE BUTTONS
    $('.likebtn').click(function(){

    var button = this;

    $(this).addClass('disabled');

    $.post($(this).attr('the_link'), function(data) {
      if(data.valid){
        $(button).find(".likecount").html('('+data.likes_count+')');
        $(button).removeClass('disabled');
      }else{
        alert(data.message);
        $(button).removeClass('disabled');
        $(button).addClass('on');
      }
    }, 'json');
  });

});