$(function(){
    //////////////////////////////////
    
    
    function topBannerHandler() {
        // $('.topBanner').hide(); //display:none;
        $('.topBanner').slideUp();
    }
    $('.topBanner .container i').on('click', topBannerHandler);
    
    
    $('.visualSlide').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: '    <div class="msLeft"></div>      ',
        nextArrow: '    <div class="msRight"></div>      '
    });
    
    
    // 슬라이드 애니메이션
    $('.visualSlide figure').eq(1).addClass('oo');
    $('.visualSlide').on('afterChange', function (e,s,c){
        $('.visualSlide figure').eq(c+1).addClass('oo').siblings().removeClass('oo');
        if (c===1) {
            $('.msLeft').addClass('oo')
        } else {
            $('.msLeft').removeClass('oo')
        }
    });
    
    //
    
    $('.eProductSlide').slick({
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 1000,
    });
    
    
    $('.evenetProduct i:nth-of-type(1)').on('click', function(){
        $('.eProductSlide').slick('slickPause')
    });
    
    $('.evenetProduct i:nth-of-type(2)').on('click', function(){
        $('.eProductSlide').slick('slickPlay')
    });
    
    
    //
    
    $('.aproductSlide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });
    
    $('.allProduct i:first-child').on('click', function(){
        $('.aproductSlide').slick('slickPrev')
    });
    
    $('.allProduct i:last-child').on('click', function(){
        $('.aproductSlide').slick('slickNext')
    });
    
    
    
    
    //////////////////////////////////
    })

// 유튜브 플레이어를 써보자!


    $("#bgndVideo").YTPlayer({
        videoURL:'BsekcY04xvQ',
        containment:'.movieBg',
        autoPlay:true, 
        mute:true, 
        startAt:0,
        opacity:1,
        // // showControls : false,
        // playOnlyIfVisible : true
        });

    $('.movieBg i:first-child').on('click',function(){
       $("#bgndVideo").YTPPause();
    });
    
    $('.movieBg i:last-child').on('click',function(){
        $("#bgndVideo").YTPPlay();
     });



     $('.tabMenu li').on('click',function(){
        var idx = $(this).index();
        $(this).addClass('oo').siblings().removeClass('oo');
        $('.tabContent>div').eq(idx).addClass('oo').siblings().removeClass('oo');
     });
