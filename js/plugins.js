HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},Fluid.plugins={typing:function(e){if("Typed"in window){var a=new window.Typed("#subtitle",{strings:["  ",e],cursorChar:CONFIG.typing.cursorChar,typeSpeed:CONFIG.typing.typeSpeed,loop:CONFIG.typing.loop});a.stop();var t=document.getElementById("subtitle");t&&(t.innerText=""),jQuery(document).ready((function(){a.start()}))}},fancyBox:function(e){CONFIG.image_zoom.enable&&"fancybox"in jQuery&&(jQuery(e||".markdown-body :not(a) > img, .markdown-body > img").each((function(){var e=jQuery(this),a=e.attr("data-src")||e.attr("src")||"";if(CONFIG.image_zoom.img_url_replace){var t=CONFIG.image_zoom.img_url_replace,i=t[0]||"",n=t[1]||"";if(i)if(/^re:/.test(i)){i=i.replace(/^re:/,"");var r=new RegExp(i,"gi");a=a.replace(r,n)}else a=a.replace(i,n)}var o=e.wrap(`\n        <a class="fancybox fancybox.image" href="${a}"\n          itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`).parent("a");if(0!==o.length){e.is(".group-image-container img")?o.attr("data-fancybox","group").attr("rel","group"):o.attr("data-fancybox","default").attr("rel","default");var c=e.attr("title")||e.attr("alt");c&&o.attr("title",c).attr("data-caption",c)}})),jQuery.fancybox.defaults.hash=!1,jQuery(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}}))},imageCaption:function(e){CONFIG.image_caption.enable&&jQuery(e||".markdown-body > p > img, .markdown-body > figure > img,\n      .markdown-body > p > a.fancybox, .markdown-body > figure > a.fancybox").each((function(){var e=jQuery(this),a=e.next("figcaption");if(0!==a.length)a.addClass("image-caption");else{var t=e.attr("title")||e.attr("alt");t&&e.after(`<figcaption aria-hidden="true" class="image-caption">${t}</figcaption>`)}}))},codeWidget(){var e=CONFIG.code_language.enable&&CONFIG.code_language.default,a=CONFIG.copy_btn&&"ClipboardJS"in window;if(e||a){var t="";t+='<div class="code-widget">',t+="LANG",t+="</div>",jQuery(".markdown-body pre").each((function(){var i=jQuery(this);if(!(i.find("code.mermaid").length>0||i.find("span.line").length>0)){var n,r="";if(e&&(r=CONFIG.code_language.default,i[0].children.length>0&&i[0].children[0].classList.length>=2&&i.children().hasClass("hljs")?r=i[0].children[0].classList[1]:i[0].getAttribute("data-language")?r=i[0].getAttribute("data-language"):i.parent().hasClass("sourceCode")&&i[0].children.length>0&&i[0].children[0].classList.length>=2?(r=i[0].children[0].classList[1],i.parent().addClass("code-wrapper")):i.parent().hasClass("markdown-body")&&0===i[0].classList.length&&i.wrap('<div class="code-wrapper"></div>'),r=r.toUpperCase().replace("NONE",CONFIG.code_language.default)),i.append(t.replace("LANG",r).replace('code-widget">',(n=i[0],(Fluid.utils.getBackgroundLightness(n)>=0?"code-widget-light":"code-widget-dark")+(a?' code-widget copy-btn" data-clipboard-snippet><i class="iconfont icon-copy"></i>':' code-widget">')))),a)new ClipboardJS(".copy-btn",{target:function(e){for(var a=e.parentNode.childNodes,t=0;t<a.length;t++)if("CODE"===a[t].tagName)return a[t]}}).on("success",(function(e){e.clearSelection(),e.trigger.innerHTML=e.trigger.innerHTML.replace("icon-copy","icon-success"),setTimeout((function(){e.trigger.innerHTML=e.trigger.innerHTML.replace("icon-success","icon-copy")}),2e3)}))}}))}}};