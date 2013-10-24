

/**
 * SPACE JS 
 * by Toan Nguyen
 */


(function($) {
    $.space = function() {
    var $space = $("#space"),
        $spaceContent = $(".space-content"),
        sp = {

            width: $(window).width(),
            height: $(window).height(),

            init: function(contentW, contentH) {
            	var html = "<div class='space-wrapper'>"+
								"<div class='space space__left'></div>"+
								"<div class='space space__right'></div>"+
								"<div class='space space__top'></div>"+
								"<div class='space space__bottom'></div>"+
								"<div class='space space__back'></div>"+
							"</div>"
				$space.append(html);

				contentW = typeof contentW !== 'undefined' ? contentW : 500;
   				contentH = typeof contentH !== 'undefined' ? contentH : 500;
				$spaceContent.css({
					"width":contentW,
					"height":contentH,
					"margin-top":-contentH/2,
					"margin-left":-contentW/2
				});

				var edge = sp.width > sp.height ? sp.height : sp.width;
				$space.find(".space__left,.space__right").css({
					"width":edge,
					"height":sp.height
				});
				$space.find(".space__top,.space__bottom").css({
					"width":sp.width,
					"height":edge
				});
            },

            jump: function() {
				['left','right','top','bottom'].forEach(function(elem){
					$space.find(".space__"+elem).addClass("jump-"+elem);
				});
               	$space.css("-webkit-perspective","3");
				$spaceContent.css("-webkit-transform","translateZ(90px)").delay(1000).queue(function(n){
					$(this).css({
						"-webkit-transform":"translateZ(-90px)",
						"display":"none"
					});
					n();
				});
            },

            stop: function() {
            	['left','right','top','bottom'].forEach(function(elem){
					$space.find(".space__"+elem).removeClass("jump-"+elem);
				});
				$spaceContent.fadeIn(200);
            	$space.css("-webkit-perspective","10000").delay(1000).queue(function(n){
            		$spaceContent.css("-webkit-transform","translateZ(0px)");
            		n();
            	});
            }

        };

        return {
            init: sp.init,
            jump: sp.jump,
            stop: sp.stop
        };
    };
})(jQuery);

