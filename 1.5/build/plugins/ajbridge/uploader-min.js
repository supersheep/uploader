/*! uploader - v1.5 - 2013-06-27 11:49:18 AM
* Copyright (c) 2013 明河; Licensed  */
KISSY.add("gallery/uploader/1.5/plugins/ajbridge/ajbridge",function(a,b){function c(e,i,j){e=e.replace(d,""),i=b._normalize(i||{});var k=this,l=d+e,m=function(b){return b.status<1?(k.fire("failed",{data:b}),void 0):(a.mix(k,b),b.dynamic&&i.src||k.activate(),void 0)};i.id=i.id||a.guid(f),c.instances[i.id]=k,i.src&&(i.params.allowscriptaccess="always",i.params.flashvars=a.merge(i.params.flashvars,{jsEntry:h,swfID:i.id})),j?k.__args=[l,i,m]:a.later(b.add,g,!1,b,[l,i,m])}var d="#",e="1.0.15",f="ks-ajb-",g=100,h="KISSY.AJBridge.eventHandler";return a.mix(c,{version:e,instances:{},eventHandler:function(a,b){var d=c.instances[a];d&&d.__eventHandler(a,b)},augment:function(b,c){a.isString(c)&&(c=[c]),a.isArray(c)&&a.each(c,function(c){b.prototype[c]=function(){try{return this.callSWF(c,a.makeArray(arguments))}catch(b){this.fire("error",{message:b})}}})}}),a.augment(c,a.EventTarget,{init:function(){this.__args&&(b.add.apply(b,this.__args),this.__args=null,delete this.__args)},__eventHandler:function(b,c){var d=this,e=c.type;switch(c.id=b,e){case"log":a.log(c.message);break;default:d.fire(e,c)}},callSWF:function(a,b){var c=this;b=b||[];try{if(c.swf[a])return c.swf[a].apply(c.swf,b)}catch(d){var e="";return 0!==b.length&&(e="'"+b.join("','")+"'"),new Function("self","return self.swf."+a+"("+e+");")(c)}}}),c.augment(c,["activate","getReady","getCoreVersion"]),window.AJBridge=a.AJBridge=c,c},{requires:["flash"]}),KISSY.add("gallery/uploader/1.5/plugins/ajbridge/uploader",function(a,b,c){function d(b,c){c=c||{};var e={};a.each(["ds","dsp","btn","hand"],function(a){a in c&&(e[a]=c[a])}),c.params=c.params||{},c.params.flashvars=a.merge(c.params.flashvars,e),d.superclass.constructor.call(this,b,c)}return a.extend(d,c),c.augment(d,["setFileFilters","filter","setAllowMultipleFiles","multifile","browse","upload","uploadAll","cancel","getFile","removeFile","lock","unlock","setBtnMode","useHand","clear"]),d.version="1.0.1",c.Uploader=d,c.Uploader},{requires:["gallery/flash/1.0/index","./ajbridge"]});