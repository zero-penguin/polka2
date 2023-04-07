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
    // ころ圧画像の追加
    $("#main-message").addClass("suprise-img");
    // ころ圧画像の解除
    
    $('#main-message').append('<button>もう押しちゃだめだでな</button>');
    $('#main-message').on('click', function() {
      location.reload();

    })


    $("#main-message").css({
      "width":"100vw",
      "max-width":"100vw", // max-widthがつけられているので、上書きする。
      "height":"100vh",
      "position":"fixed",
      "top":"0",
      "left":"0",

    });
  }); 
});


function audio() {
  document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('btn_audio').play(); //クリックしたら音を再生
}