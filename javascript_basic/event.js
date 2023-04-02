$(function() {
  $('button').on({
    'click': () => {
      // 背景を赤 
      $('button').css('background-color', 'red');
      // テキストを「click」 
      $('button').text('ポルカおるよ！！');
    },
    'dblclick': () => { 
      // 背景を緑 
      $('button').css('background-color', 'green'); 
      // テキストを「dblclick」 
      $('button').text('いるってば！');
    },
  });
});

$(function() {
  $("#button2").on('click', function() {
    $("#aaa").addClass("suprise-img");
  });
});


function audio() {
  document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('btn_audio').play(); //クリックしたら音を再生
}