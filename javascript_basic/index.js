// 属性フィルタによる抽出
$(function () {
  const text = $('[class*="head"]').text();
  console.log(text);
});

// head-titleのみを抽出
$(function() {
  const headTitle = $(".head-title").text; 
  console.log("title");
});
