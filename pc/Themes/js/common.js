(function() {
  $(function() {
    // 导航
    $(".top-dropdown").on("click", function() {
      var $this = $(this);
      var $nav = $(".nav", $this);
      var $btn = $(".nav-btn", $this);
      if ($btn.hasClass("show")) {
        $btn.removeClass("show");
        $nav.removeClass("show");
      } else {
        $btn.addClass("show");
        $nav.addClass("show");
      }
    });

    //返回顶部
    $("#toTop").on("click", function() {
      $("html,body").animate({ scrollTop: 0 }, 500);
    });
  });
})();

function setHeight() {
  var main_height = $(".main").outerHeight();
  var win_height = $(window).height();
  if (main_height < win_height) {
    // $(".main").height(win_height - 100);
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
