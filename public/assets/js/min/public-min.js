function spuCreateCookie(t,i,e){if(e){var n=new Date;n.setTime(n.getTime()+24*e*60*60*1e3);var o="; expires="+n.toGMTString()}else var o="";document.cookie=t+"="+i+o+"; path=/"}function spuReadCookie(t){for(var i=t+"=",e=document.cookie.split(";"),n=0;n<e.length;n++){for(var o=e[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(i))return o.substring(i.length,o.length)}return null}function googleCB(t){if("on"==t.state){var i=jQuery(".spu-gogl").data("box-id");i&&SPU.hide(i)}}function closeGoogle(t){if("confirm"==t.type){var i=jQuery(".spu-gogl").data("box-id");i&&SPU.hide(i)}}jQuery(window).load(function(){window.SPU=function($){function t(t){var i=r[t],e=$(window).width(),n=$(window).height(),o=i.height(),a=i.width();i.css({position:"fixed",top:n/2-o/2,left:e/2-a/2})}function i(t){var i=$(t).find(".spu-facebook");if(i.length){var e=i.find(".fb-like > span").width();if(0==e){var n=i.find(".fb-like").data("layout");i.append("box_count"==n?'<style type="text/css"> #'+$(t).attr("id")+" .fb-like iframe, #"+$(t).attr("id")+" .fb_iframe_widget span, #"+$(t).attr("id")+" .fb_iframe_widget{ height: 63px !important;width: 80px !important;}</style>":'<style type="text/css"> #'+$(t).attr("id")+" .fb-like iframe, #"+$(t).attr("id")+" .fb_iframe_widget span, #"+$(t).attr("id")+" .fb_iframe_widget{ height: 20px !important;width: 80px !important;}</style>")}}}function e(i,e){var n=r[i],o=$("#spu-bg-"+i),a=n.data("bgopa");if(n.is(":animated"))return!1;if(e===!0&&n.is(":visible")||e===!1&&n.is(":hidden"))return!1;if(e===!1){var s=parseInt(n.data("cookie"));s>0&&spuCreateCookie("spu_box_"+i,!0,s)}else n.hasClass("spu-centered")&&t(i);var d=n.data("spuanimation");return"fade"===d?n.fadeToggle("slow"):n.slideToggle("slow"),e===!0&&a>0?o.fadeIn():o.fadeOut(),e}function n(t,i,e,n){var o={url:spuvar.ajax_url,data:t,cache:!1,type:"POST",dataType:"json",timeout:3e4},e=e||!1,n=n||!1;i&&(o.url=i),e&&(o.success=e),n&&(o.error=n),$.ajax(o)}var o=$(window).height(),a=spuvar.is_admin,r=[];return $(".spu-content").children().first().css({"margin-top":0,"padding-top":0}).end().last().css({"margin-bottom":0,"padding-bottom":0}),$(".spu-box").each(function(){spuvar.safe_mode&&$(this).prependTo("body");var t=$(this),s=t.data("trigger"),d=0,u=1===parseInt(t.data("test-mode")),c=t.data("box-id"),f=1===parseInt(t.data("auto-hide")),p=parseInt(t.data("seconds-close")),l=parseInt(t.data("trigger-number"),10),h="percentage"==s?parseInt(t.data("trigger-number"),10)/100:.8,w=h*$(document).height();i(t),$(".spu-google").width($(".spu-google").width()-20),$(".spu-twitter").width($(".spu-twitter").width()-12);var g=0,m=0,b=t.width(),v=t.find(".spu-content").width(),y=t.data("total");y&&!spuvar.disable_style&&($(this).find(".spu-shortcode").each(function(){g+=$(this).width()}),m=v-g),m>0&&($(this).find(".spu-shortcode").each(function(){3==y?$(this).css("margin-left",m/(y-1)):$(this).css("margin-left",m/2)}),2==y?$(this).find(".spu-shortcode").last().css("margin-left",0):3==y&&$(this).find(".spu-shortcode").first().css("margin-left",0)),b>$(window).width()&&t.css("cssText","max-width:"+t.css("width")+";width:auto !important;"),$(document).keyup(function(t){27==t.keyCode&&e(c,!1)});var x=navigator.userAgent,_=x.match(/iPad/i)||x.match(/iPhone/i)?"touchstart":"click";$("body").on(_,function(t){t.which&&e(c,!1)}),$("body").on(_,".spu-box",function(t){t.stopPropagation()}),t.hide().css("left",""),r[c]=t;var k=function(){d&&clearTimeout(d),d=window.setTimeout(function(){var t=$(window).scrollTop(),i=t+o>=w;i?(f||$(window).unbind("scroll",k),e(c,!0)):e(c,!1)},100)},T=function(){d&&clearTimeout(d),d=window.setTimeout(function(){e(c,!0)},1e3*l)},C=spuReadCookie("spu_box_"+c);if((void 0==C||a&&u)&&("seconds"==s?T():($(window).bind("scroll",k),k()),window.location.hash&&window.location.hash.length>0)){var P=window.location.hash,I;P.substring(1)===t.attr("id")&&setTimeout(function(){e(c,!0)},100)}t.find(".spu-close").click(function(){e(c,!1),"percentage"==s&&$(window).unbind("scroll",k)}),$('a[href="#'+t.attr("id")+'"]').click(function(){return e(c,!0),!1}),t.find(".gform_wrapper form").addClass("gravity-form"),t.find('form:not(".wpcf7-form, .gravity-form")').submit(function(t){t.preventDefault();var i=!0,o=$(this),a=o.serialize(),r=o.attr("action"),s=function(t){var i=$(t).filter("#spu-"+c).html();$("#spu-"+c).html(i),setTimeout(function(){e(c,!1)},spuvar.seconds_confirmation_close)};return n(a,r,s,"","html"),i}),$("body").on("mailsent.wpcf7",function(){e(c,!1)}),$(document).on("gform_confirmation_loaded",function(){e(c,!1)})}),{show:function(t){return e(t,!0)},hide:function(t){return e(t,!1)},request:function(t,i,e,o){return n(t,i,e,o)}}}(window.jQuery)}),jQuery(function($){function t(){FB.Event.subscribe("edge.create",function(t,i){var e=$(i).parents(".spu-box").data("box-id");e&&(SPU.hide(e),SPU.track(e,!0))}),e=!0,clearInterval(n)}function i(t){var i=$(t.target).parents(".spu-box").data("box-id");i&&SPU.hide(i)}var e=!1,n=setInterval(function(){"undefined"==typeof FB||e||t()},1e3);"undefined"!=typeof twttr&&twttr.ready(function(t){t.events.bind("tweet",i),t.events.bind("follow",i)})});