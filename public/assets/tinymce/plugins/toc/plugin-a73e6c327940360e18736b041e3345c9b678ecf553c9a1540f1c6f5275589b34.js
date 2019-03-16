!function(){"use strict";var e,n,t=tinymce.util.Tools.resolve("tinymce.PluginManager"),s=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),f=tinymce.util.Tools.resolve("tinymce.util.I18n"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=function(t){return t.getParam("toc_class","mce-toc")},m=function(t){var e=t.getParam("toc_header","h2");return/^h[1-6]$/.test(e)?e:"h2"},c=function(t){var e=parseInt(t.getParam("toc_depth","3"),10);return 1<=e&&e<=9?e:3},a=(e="mcetoc_",n=0,function(){var t=(new Date).getTime().toString(32);return e+t+(n++).toString(32)}),v=function(n){var o=l(n),t=m(n),e=function(t){var e,n=[];for(e=1;e<=t;e++)n.push("h"+e);return n.join(",")}(c(n)),r=n.$(e);return r.length&&/^h[1-9]$/i.test(t)&&(r=r.filter(function(t,e){return!n.dom.hasClass(e.parentNode,o)})),i.map(r,function(t){return{id:t.id?t.id:a(),level:parseInt(t.nodeName.replace(/^H/i,""),10),title:n.$.text(t),element:t}})},d=function(t){var e,n,o,r,i,c,l,a="",d=v(t),u=function(t){var e,n=9;for(e=0;e<t.length;e++)if(t[e].level<n&&(n=t[e].level),1===n)return n;return n}(d)-1;if(!d.length)return"";for(a+=(i=m(t),c=f.translate("Table of Contents"),l="</"+i+">","<"+i+' contenteditable="true">'+s.DOM.encode(c)+l),e=0;e<d.length;e++){if((o=d[e]).element.id=o.id,r=d[e+1]&&d[e+1].level,u===o.level)a+="<li>";else for(n=u;n<o.level;n++)a+="<ul><li>";if(a+='<a href="#'+o.id+'">'+o.title+"</a>",r!==o.level&&r)for(n=o.level;r<n;n--)a+="</li></ul><li>";else a+="</li>",r||(a+="</ul>");u=o.level}return a},u=function(t){var e=l(t),n=t.$("."+e);n.length&&t.undoManager.transact(function(){n.html(d(t))})},o={hasHeaders:function(t){return 0<v(t).length},insertToc:function(t){var e,n,o,r,i=l(t),c=t.$("."+i);o=t,!(r=c).length||0<o.dom.getParents(r[0],".mce-offscreen-selection").length?t.insertContent((n=d(e=t),'<div class="'+e.dom.encode(l(e))+'" contenteditable="false">'+n+"</div>")):u(t)},updateToc:u},r=function(t){t.addCommand("mceInsertToc",function(){o.insertToc(t)}),t.addCommand("mceUpdateToc",function(){o.updateToc(t)})},h=function(t){var n=t.$,o=l(t);t.on("PreProcess",function(t){var e=n("."+o,t.node);e.length&&(e.removeAttr("contentEditable"),e.find("[contenteditable]").removeAttr("contentEditable"))}),t.on("SetContent",function(){var t=n("."+o);t.length&&(t.attr("contentEditable",!1),t.children(":first-child").attr("contentEditable",!0))})},g=function(n){return function(t){var e=t.control;n.on("LoadContent SetContent change",function(){e.disabled(n.readonly||!o.hasHeaders(n))})}},T=function(t){var e;t.addButton("toc",{tooltip:"Table of Contents",cmd:"mceInsertToc",icon:"toc",onPostRender:g(t)}),t.addButton("tocupdate",{tooltip:"Update",cmd:"mceUpdateToc",icon:"reload"}),t.addMenuItem("toc",{text:"Table of Contents",context:"insert",cmd:"mceInsertToc",onPostRender:g(t)}),t.addContextToolbar((e=t,function(t){return t&&e.dom.is(t,"."+l(e))&&e.getBody().contains(t)}),"tocupdate")};t.add("toc",function(t){r(t),T(t),h(t)})}();