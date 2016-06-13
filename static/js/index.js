$(document).ready(function() {
  var Week, getLocaltime, subSomething;
  $("#J_spinner").show();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      return $(".go-top").css({
        bottom: "110px"
      });
    } else {
      return $(".go-top").css({
        bottom: "-110px"
      });
    }
  });
  $(".go-top").click(function() {
    return $("body,html").animate({
      scrollTop: 0
    }, 400);
  });
  $("#J_page").click(function() {
    var page, str;
    $(this).text("正在努力加载");
    str = "";
    page = $(this).attr('data');
    return $.getJSON("http://www.leborn.me/blog/home/page/" + page, function(data) {
      var i, _i, _len;
      console.log(data);
      if (data.length === 0) {
        alert("亲,最后一页了");
        return;
      }
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        i = data[_i];
        str += "<li class='clearfix'><article>";
        str += "<a href='/blog/home/detail/" + i.articleId + "' class='title'>" + i.title + "</a>";
        str += '<div class="content">' + i.summary + '</div>';
        str += '<div class="article-info"><span><i class="icon-calendar"></i>' + getLocaltime(i.pubtime) + '</span><span><i class="icon-book"></i>' + i.keyword + '</span><span><i class="icon-comments-alt"></i>' + i.reads + '</span><span><i class="icon-heart-empty"></i>' + i.ispost + '</span></div>';
        str += "</article></li>";
      }
      $('.x-list').append(str);
      page++;
      $("#J_page").text("点击加载更多");
      return $("#J_page").attr({
        data: '' + page + ''
      });
    });
  });
  getLocaltime = function(time) {
    var date, date1;
    date = new Date(parseInt(time) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
    return date1 = date.substring(0, date.length - 7);
  };
  subSomething = function() {
    if (document.readyState === "loading") {
      return $("#J_spinner").show();
    } else if (document.readyState === "loaded") {
      return $("#J_spinner").show();
    } else if (document.readyState === "complete") {
      return $("#J_spinner").hide();
    }
  };
  Week = function() {
    var week;
    week = new Date().getDay();
    return $(".cover-img").css("background-image", "url(http://xinblog.oss-cn-qingdao.aliyuncs.com/" + week + ".jpg)");
  };
  Week();
  return document.onreadystatechange = subSomething;
});
