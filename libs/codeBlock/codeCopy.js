// build time:Sat May 09 2020 17:00:47 GMT+0800 (GMT+08:00)
$(function(){var e=$('<i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i>');var o=$('<div class="codecopy_notice"></div>');$(".code-area").prepend(e);$(".code-area").prepend(o);function t(e,o){if(document.queryCommandSupported&&document.queryCommandSupported("copy")){try{document.execCommand("copy");$(o).prev(".codecopy_notice").text("复制成功").animate({opacity:1,top:30},450,function(){setTimeout(function(){$(o).prev(".codecopy_notice").animate({opacity:0,top:0},650)},400)})}catch(t){$(o).prev(".codecopy_notice").text("复制失败").animate({opacity:1,top:30},650,function(){setTimeout(function(){$(o).prev(".codecopy_notice").animate({opacity:0,top:0},650)},400)});return false}}else{$(o).prev(".codecopy_notice").text("浏览器不支持复制")}}$(".code-area .fa-copy").on("click",function(){var e=window.getSelection();var o=document.createRange();o.selectNodeContents($(this).siblings("pre").find("code")[0]);e.removeAllRanges();e.addRange(o);var c=e.toString();t(c,this);e.removeAllRanges()})});
//rebuild by neat 