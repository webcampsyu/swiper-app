//アラートメッセージの出力
let title = "javascritpが使えました。"; //letでの変数宣言
alert(title); //アラートメッセージにtitle(変数)を出力

$(document).ready(function () { //jQueryを読み込ませる(HTMLの読み込みが終了後、jQueryが実行される)
  //jQueryのプログラム内容
  $('.jquery').on('click', function(){
    $(this).css('color','red'); //cssメソッド
  });
});

// Swiperオプションの定数化
const opt = {
  loop: true,
  pagination: {
    el: '.swiper-pagination', //アプリケーションを紐づける要素のセレクタ
  },
  navigation: {
    netsEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

// Swiperを実行(初期化)
$(document).on('turbolinks:load', function() {
  let swiper = new Swiper('.swiper',opt);
});