//ページ内で表示させるスライドショー
let index=0
const ticker = () =>{
  const images = document.querySelectorAll('.slideshow-container img')
  for(image of images){
    image.style.display ='none'
  }
  images[index].style.display ='block'

  index++
  if(index>=images.length){
    index=0
  }
  setTimeout(ticker,5000) //待機時間を設定
}
document.addEventListener('DOMContentLoaded',()=>{
  ticker()
})


//ページ内リンクのスクロール

$('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top;	
	$('body,html').animate({scrollTop: pos}, 500); //スクロール速度の変更
	return false;
});



//読み込み時のlogoの表示
$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//1500msでフェード
    $("#splash_logo").delay(1200).fadeOut('slow');//1200msでフェードアウト
  });
document.getElementById("navbtn").onclick = function(){
document.querySelector('html').classList.toggle('open');
  }


  


//テキストアニメーション(左から右に)
  function slideAnime() {
    
    $('.leftAnime').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
     
      if (scroll >= elemPos - windowHeight) {
       
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft"); 
      } else {
      
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
      }
    });
  }
   
  $(window).scroll(function () {//スクロールした場合
    slideAnime();
  });

  $(window).on('load', function () {  // ページが読み込まれた場合
    slideAnime();
  });

  if (scroll >= elemPos - windowHeight) {
  
    window.setTimeout(slideAnimetop, 5000);
    function slideAnimetop(){
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft"); 
}
    $(this).addClass("slideAnimeLeftRight");
    $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft"); 
  } else {
  
    $(this).removeClass("slideAnimeLeftRight");
    $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
  }











