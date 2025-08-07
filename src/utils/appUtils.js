import $ from 'jquery';

// 滾動動畫處理
export function handleScroll() {
    $('.fade-in').each(function() {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        
        if (elementBottom > viewportTop && elementTop < (viewportBottom - 100)) {
            $(this).addClass('visible');
        }
    });
}

// 頭部滾動效果
export function handleHeader() {
    if ($(window).scrollTop() > 20) {
        $('.header').css('background', 'rgba(255, 255, 255, 0.95)');
    } else {
        $('.header').css('background', 'rgba(255, 255, 255, 0.9)');
    }
}

// 平滑滾動功能
export function initSmoothScroll() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 60
            }, 500);
        }
    });
}

// 初始化所有功能
export function initializeApp() {
    // 初始化滾動功能
    initSmoothScroll();
    
    // 滾動事件監聽
    $(window).on('scroll', function() {
        handleScroll();
        handleHeader();
    });
    
    // 初始化動畫
    handleScroll();
}
