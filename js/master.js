 $check = 1;
 $menuChecker = 0;


  if ($check == 1) {
    $check = 2;
    setTimeout(
      function(){
        $(".slider").hide();
        $("#slide-3").show();
      }, 1000
    );
  }
  if ($check == 2) {
    $check = 3;
    setTimeout(
      function(){
        $(".slider").hide();
        $("#slide-2").show();
      }, 8000
    );
  }
  if ($check == 3) {
    $check = 1;
    setTimeout(
      function(){
        $(".slider").hide();
        $("#slide-1").show();
      }, 15000
    );
  }

$("#call-menu").click(
  function(){
    $("#menu-section").addClass("call-menu-section");
     $menuChecker = 1;
  }
);
$("#menu-close-btn").click(
  function(){
    $("#menu-section").removeClass("call-menu-section");
  }
);

$("#menus li").click(
  function(){
    if ( $menuChecker == 1) {
      $("#menu-section").removeClass("call-menu-section");
    } else {

    }
  }
);
