
$(document).ready(function(){
            // var heroVideo =  $('#hero-video'); 
            // heroVideo.mute();
            var imageBackgrounds = 'circlePhoto-kikunaga circlePhoto-zau circlePhoto-schultzel circlePhoto-vahl circlePhoto-cho circlePhoto-yoon';
            $('.circlePhoto').click(function(){
                $(this).addClass('circlePhoto-selected').parent().siblings().children().removeClass('circlePhoto-selected');
            });
            if ($(".menu-icon").css("display") == "inline-block" ){
                $("#player").remove();
            }
            $('.circlePhoto.circlePhoto-kikunaga').click(function() {
                $('.circlePhoto-showcase').removeClass(imageBackgrounds).addClass('circlePhoto-kikunaga');
                $('.senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#senseisMobile .senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#kikunaga-description').addClass('senseiDescription-selected');
                $('#kikunaga-description-mobile').addClass('senseiDescription-selected');
            });
            $('.circlePhoto.circlePhoto-zau').click(function() {
                $('.circlePhoto-showcase').removeClass(imageBackgrounds).addClass('circlePhoto-zau');
                $('.senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#senseisMobile .senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#zau-description').addClass('senseiDescription-selected');
                $('#zau-description-mobile').addClass('senseiDescription-selected');
            });
            $('.circlePhoto.circlePhoto-vahl').click(function() {
                $('.circlePhoto-showcase').removeClass(imageBackgrounds).addClass('circlePhoto-vahl');
                $('.senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#senseisMobile .senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#vahl-description').addClass('senseiDescription-selected');
                $('#vahl-description-mobile').addClass('senseiDescription-selected');
            });
            $('.circlePhoto.circlePhoto-schultzel').click(function() {
                $('.circlePhoto-showcase').removeClass(imageBackgrounds).addClass('circlePhoto-schultzel');
                $('.senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#senseisMobile .senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#schultzel-description').addClass('senseiDescription-selected');
                $('#schultzel-description-mobile').addClass('senseiDescription-selected');
            });
            $('.circlePhoto.circlePhoto-cho').click(function() {
                $('.circlePhoto-showcase').removeClass(imageBackgrounds).addClass('circlePhoto-cho');
                $('.senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#senseisMobile .senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#cho-description').addClass('senseiDescription-selected');
                $('#cho-description-mobile').addClass('senseiDescription-selected');
            });
            $('.circlePhoto.circlePhoto-yoon').click(function() {
                $('.circlePhoto-showcase').removeClass(imageBackgrounds).addClass('circlePhoto-yoon');
                $('.senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#senseisMobile .senseiDescription').siblings().removeClass('senseiDescription-selected');
                $('#yoon-description').addClass('senseiDescription-selected');
                $('#yoon-description-mobile').addClass('senseiDescription-selected');

            });

            $('.readMore').click(function () {
                $('.readMoreSection').addClass('readMoreSectionExpanded');
            });
            $('.readLess').click(function(){
                $('.readMoreSection').removeClass('readMoreSectionExpanded');
            });

            $(window).scroll(function() {
                $(document).scrollTop() < .01 * $(document).height() && $(".site-header").removeClass("nav-scrolled"),
                $(document).scrollTop() > .01 * $(document).height() && $(".site-header").addClass("nav-scrolled"),
                $(document).scrollTop() > .05 * $(document).height() && ($(".site-header").addClass("nav-scrolled")) 
            });

            $('.menu-icon').click(function(){
                $('.mobileMenu').addClass('mobileMenu-show');
                $('body').addClass('menu-open');
            });

            $('.mobileMenuClose').click(function(){
                $('.mobileMenu').removeClass('mobileMenu-show');
                $('body').removeClass('menu-open');
            });

            $('.mobileNav a').click(function(){
                $('.mobileMenu').removeClass('mobileMenu-show');
                $('body').removeClass('menu-open');
            });


            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('#homeVideo').remove;
            }


        });
