(function() {
  $(function() {
    // 导航
    $(".nav-btn").on("click", function() {
      var $this = $(this);
      var $nav = $(".nav");
      var $mask = $(".mask");
      if ($this.hasClass("show")) {
        $this.removeClass("show");
        $nav.removeClass("show");
        $mask.hide();
      } else {
        $this.addClass("show");
        $nav.addClass("show");
        $mask.show();
      }
    });

    //关注我们
    $("#focusUs").on("click", function() {
      $(this).fadeOut();
    });
    $("#focus").on("click", function() {
      $("#focusUs").fadeIn();
    });
  });
})();

function setHeight() {
  var main_height = $(".main").outerHeight();
  var win_height = $(window).height();
  if (main_height < win_height) {
    $(".main").height(win_height - 100);
  }
}

function pull(id, html) {
  var $container = $(id);
  var loadingStr =
    "<div style='padding: 5px 0 15px;text-align: center;font-size:14px;color:#999;'>加载中...</div>";
  var win_height = $(window).height();
  var doc_height = $(document).height();
  var isLoad = true;
  $(window).scroll(function() {
    if (!isLoad) return;
    var scrollTop = $(window).scrollTop();
    if (doc_height <= win_height + scrollTop) {
      isLoad = false;
      $container.append(loadingStr);
    }
  });
}
