$(function() {
  $('.button1').on({
    'click': () => {
      // 背景を赤 
      $('.button1').css('background-color', 'red');
      // テキストを「click」 
      $('.button1').text('ポルカおるよ！！');
    },
    'dblclick': () => { 
      // 背景を緑 
      $('.button1').css('background-color', 'green'); 
      // テキストを「dblclick」 
      $('.button1').text('いるってば！');
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

// イメージの定義
var img1 = $('<img>').attr({
  id: 'oruyo',
  src: 'img/oruyo.PNG'
});

var img2 = $('<img>').attr({
  id: 'oruteba',
  src: 'img/oruteba.PNG'
});

// カウンターの初期化
var count = 0;

$(function() {
  // クリック
  $('#oruka').on('click', () => {

    if (count === 0) {
      $('#box').append(img1);
      count++;
    }else if(count === 1){
      $('#box').append(img2);
      count++;
    }else{ 
      $('#box').fadeOut(500);
      count = 0;
      location.reload();
    }
  });
});
