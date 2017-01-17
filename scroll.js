$(function() {
    $('button#upper').click(function () {
        console.log("--- upper btn! ---")
        verticalScroll(0);
    });
    $('button#lower').click(function () {
        console.log("--- lower btn! ---")
        verticalScroll($(document).height() - $(window).height());
    });
    function verticalScroll(scrollTopDst){
        console.log("document.height: "+ $(document).height());
        console.log("window.height: "+ $(window).height());
        console.log("scrollTopBefore: "+ $(document).scrollTop());
        console.log("scrollTopDst: "+ scrollTopDst);
        $('body').animate(
            {
                scrollTop: scrollTopDst
            },
            {
                complete: function() {
                    console.log("scrollTopAftetr: "+ $(document).scrollTop());
                }
            }
        );
    }
});
