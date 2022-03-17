$(function(){
    /////////////////////////////////////////
    // $('선택').on('이벤트', 할 일)
    // 일=> cunction 일() {}

    //$(this) 나
    //$(this).index() 번호

    $('popUp button').on('click',팝업창끄기);

   function 팝업창끄기() {
       $(this).parent().hide();
   }

   $('.popUp button').on('click',팝업창끄기)
    
    /////////////////////////////////////////
    
    
    
    })