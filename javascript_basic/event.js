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
    $("#main-message").addClass("suprise-img");

    $("#main-message").css({
      "width":"100vw",
      "max-width":"100vw", // max-widthがつけられているので、上書きする。
      "height":"100vh",
      "position":"fixed",
      "top":"0",
      "left":"0"
    // //明日はここから
    // $('#main-message:h1').remove();

    // $('ul').append('<li>appendで追加' + num + '</li>');
    
    });
  }); 
});


function audio() {
  document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('btn_audio').play(); //クリックしたら音を再生
}