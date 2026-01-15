/**
 * Material-scrollTop
 *
 * Author: Bartholomej
 * Website: https://github.com/bartholomej/material-scrollTop
 * Docs: https://github.com/bartholomej/material-scrollTop
 * Repo: https://github.com/bartholomej/material-scrollTop
 * Issues: https://github.com/bartholomej/material-scrollTop/issues
 */
 !function(e){function t(t,n){var a,i=this,s=0;i.btnClass=".material-scrolltop",i.revealClass="reveal",i.btnElement=e(i.btnClass),i.initial={revealElement:"body",revealPosition:"top",padding:0,duration:600,easing:"swing",onScrollEnd:null},i.options=e.extend({},i.initial,n),i.revealElement=e(i.options.revealElement),a="bottom"!==i.options.revealPosition?i.revealElement.offset().top:i.revealElement.offset().top+i.revealElement.height(),s=t.offsetTop+i.options.padding,e(document).scroll(function(){a<e(document).scrollTop()?i.btnElement.addClass(i.revealClass):i.btnElement.removeClass(i.revealClass)}),i.btnElement.click(function(){var t=!0;return e("html, body").animate({scrollTop:s},i.options.duration,i.options.easing,function(){if(t){t=!1;var e=i.options.onScrollEnd;"function"==typeof e&&e()}}),!1})}e.fn.materialScrollTop=function(){var e=this,n=arguments[0],a=(e.length,0);return("object"==typeof n||"undefined"==typeof n)&&(e[a].materialScrollTop=new t(e[a],n)),e}}(jQuery);