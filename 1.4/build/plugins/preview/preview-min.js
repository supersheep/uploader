KISSY.add("gallery/uploader/1.4/plugins/preview/preview",function(e,m,j,q,n){function k(a,b){if(!a)return!1;"filter"!=h?a.src=b||o:b&&(b=b.replace(/[)'"%]/g,function(a){return escape(escape(a))}),a.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src=b);return!0}function i(a){this.config=e.mix({maxWidth:40,maxHeight:40},a);i.superclass.constructor.call(this,a)}var p=m.all,l=document,h=function(){var a="";if("undefined"===typeof window.FileReader)switch(e.UA.shell){case "firefox":a="domfile";
break;case "ie":switch(e.UA.ie){case 6:a="simple";break;default:a="filter"}}else a="html5";return a}(),o=8>e.UA.ie?"http://a.tbcdn.cn/p/fp/2011a/assets/space.gif":"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";e.extend(i,n,{pluginInitializer:function(a){if(!a)return!1;this.set("uploader",a);a.on("add",this._uploaderAddHandler,this)},_uploaderAddHandler:function(a){var b=this.get("uploader"),c=b.get("fileInput"),d=a.file,a=d.data,d=d.id,g=this.get("preHook"),f=
p(g+d);if(!f.length)return e.log("\u94a9\u5b50\u4e3a\uff1a"+g+d+"\uff0c\u627e\u4e0d\u5230\u56fe\u7247\u5143\u7d20\uff0c\u65e0\u6cd5\u9884\u89c8\u56fe\u7247"),!1;b.get("multiple")&&"ajax"==b.get("type")?this.show(a,f,function(){f.show()}):(this.preview(c,f),f.show())},show:function(a,b,c){if(!b||!b.length)return!1;var d=this,g=new FileReader;g.onload=function(a){a=d.data=a.target.result;d.fire(void 0,{data:a,mode:h});b.attr("src",a);c&&c.call(d,a);d.fire("showed",{img:a})};g.onerror=function(){e.log("[Plugin: Preview] File Reader Error. Your browser may not fully support html5 file api","warning");
d.fire("error")};g.readAsDataURL(a)},preview:function(a,b){var a=j.get(a),b=j.get(b),c=this,d=function(){c.fire(void 0,{data:c.data,mode:h});b&&(k(b,c.data),c.fire("showed",{img:b}))};c.data=void 0;if(a){e.log("[Plugin: Preview] One file selected. Getting data...");switch(h){case "domfile":c.data=a.files[0].getAsDataURL();break;case "filter":a.select();try{c.data=l.selection.createRange().text}catch(g){e.log("[Plugin: Preview] Get image data error, the error is: "),e.log(g,"dir")}finally{l.selection.empty()}c.data||
(c.data=a.value);break;case "html5":var f=new FileReader;f.onload=function(a){c.data=a.target.result;d()};f.onerror=function(){e.log("[Plugin: Preview] File Reader Error. Your browser may not fully support html5 file api","warning");c.fire("error")};a.files&&f.readAsDataURL(a.files[0]);break;default:c.data=a.value}c.data?d():"html5"!=h&&(e.log("[Plugin: Preview] Retrive Data error."),k(b),c.fire("error"))}else e.log("[Plugin: Preview] File Input Element does not exists.");return c.data}},{ATTRS:{pluginId:{value:"preview"},
uploader:{value:""},preHook:{value:".J_Pic_"}}});return i},{requires:["node","dom","event","base"]});
