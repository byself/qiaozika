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
        $("html,body").css({
          height: "auto",
          overflow: "initial"
        });
      } else {
        $this.addClass("show");
        $nav.addClass("show");
        $mask.show();
        $("html,body").css({
          height: "100%",
          overflow: "hidden"
        });
      }
    });

    //关注我们
    $("#focusUs").on("click", function() {
      $(this).fadeOut();
    });
    $(".focusBtn").on("click", function() {
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

// 隐藏头部底部
(function() {
  scrollEvent();
  //监听页面滚动事件
  function scrollEvent() {
    var $head = $(".header");
    var $main = $(".main");
    var $foot = $(".footer");

    var win_height = $(window).height();
    var doc_height = $(document).height();

    $(window).scroll(function(e) {
      // console.log("main:", scrollDirection);
      var scrollTop = $(window).scrollTop();

      if (win_height + scrollTop + 100 >= doc_height) {
        $head.removeClass("hide");
        $main.removeClass("hide");
        $foot.removeClass("hide");
        return;
      }

      scrollFunc();
      if (scrollDirection == "down") {
        $head.addClass("hide");
        $main.addClass("hide");
        $foot.addClass("hide");
      } else if (scrollDirection == "up") {
        $head.removeClass("hide");
        $main.removeClass("hide");
        $foot.removeClass("hide");
      }
    });
  }

  var distance = 0;
  var scrollAction = { x: 0, y: 0 },
    scrollDirection;

  var winHeight = $(window).height();
  function scrollFunc() {
    var pageYOffset = window.scrollY;
    var docHeight = $(document).height();

    // console.log("pageYOffset:",window.scrollY);
    // console.log("docHeight:",docHeight);
    // console.log("winHeight:",winHeight);
    // console.log("winHeight2:",winHeight + pageYOffset < docHeight);

    if (pageYOffset >= 0 && winHeight + pageYOffset < docHeight) {
      var diffY = scrollAction.y - pageYOffset;

      if (diffY < distance) {
        // Scroll down
        scrollDirection = "down";
      } else if (diffY > distance) {
        // Scroll up
        scrollDirection = "up";
      }

      scrollAction.y = pageYOffset;
    }
  }
})();
