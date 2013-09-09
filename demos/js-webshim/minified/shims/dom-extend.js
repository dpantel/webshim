webshims.register("dom-extend",function(a,b,c,d,e){"use strict";var f=!("hrefNormalized"in a.support)||a.support.hrefNormalized,g=!("getSetAttribute"in a.support)||a.support.getSetAttribute;if(b.assumeARIA=g||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==a('<input type="email" />').attr("type")||""===a("<form />").attr("novalidate")||"required"in a("<input />")[0].attributes)&&b.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),a.parseHTML||b.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!b.cfg.no$Switch){var h=function(){if(!c.jQuery||c.$&&c.jQuery!=c.$||c.jQuery.webshims||(b.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),c.$&&(c.$=b.$),c.jQuery=b.$),b.M!=Modernizr){b.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var a in Modernizr)a in b.M||(b.M[a]=Modernizr[a]);Modernizr=b.M}};h(),setTimeout(h,90),b.ready("DOM",h),a(h),b.ready("WINDOWLOAD",h)}var i=b.modules,j=/\s*,\s*/,k={},l={},m={},n={},o={},p=a.fn.val,q=function(b,c,d,e,f){return f?p.call(a(b)):p.call(a(b),d)};a.widget||!function(){var b=a.cleanData;a.cleanData=function(c){if(!a.widget)for(var d,e=0;null!=(d=c[e]);e++)try{a(d).triggerHandler("remove")}catch(f){}b(c)}}(),a.fn.val=function(b){var c=this[0];if(arguments.length&&null==b&&(b=""),!arguments.length)return c&&1===c.nodeType?a.prop(c,"value",b,"val",!0):p.call(this);if(a.isArray(b))return p.apply(this,arguments);var d=a.isFunction(b);return this.each(function(f){if(c=this,1===c.nodeType)if(d){var g=b.call(c,f,a.prop(c,"value",e,"val",!0));null==g&&(g=""),a.prop(c,"value",g,"val")}else a.prop(c,"value",b,"val")})},a.fn.onTrigger=function(a,b){return this.on(a,b).each(b)},a.fn.onWSOff=function(b,c,e,f){return f||(f=d),a(f)[e?"onTrigger":"on"](b,c),this.on("remove",function(d){d.originalEvent||a(f).off(b,c)}),this};var r="_webshimsLib"+Math.round(1e3*Math.random()),s=function(b,c,d){if(b=b.jquery?b[0]:b,!b)return d||{};var f=a.data(b,r);return d!==e&&(f||(f=a.data(b,r,{})),c&&(f[c]=d)),c?f&&f[c]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){a.fn[b.name]=function(){var c=[];return this.each(function(){var d=s(this,"shadowData"),e=d&&d[b.prop]||this;-1==a.inArray(e,c)&&c.push(e)}),this.pushStack(c)}}),["removeAttr","prop","attr"].forEach(function(c){k[c]=a[c],a[c]=function(b,d,f,g,h){var i="val"==g,j=i?q:k[c];if(!b||!l[d]||1!==b.nodeType||!i&&g&&"attr"==c&&a.attrFn[d])return j(b,d,f,g,h);var n,p,r,s=(b.nodeName||"").toLowerCase(),t=m[s],u="attr"!=c||f!==!1&&null!==f?c:"removeAttr";if(t||(t=m["*"]),t&&(t=t[d]),t&&(n=t[u]),n){if("value"==d&&(p=n.isVal,n.isVal=i),"removeAttr"===u)return n.value.call(b);if(f===e)return n.get?n.get.call(b):n.value;n.set&&("attr"==c&&f===!0&&(f=d),r=n.set.call(b,f)),"value"==d&&(n.isVal=p)}else r=j(b,d,f,g,h);if((f!==e||"removeAttr"===u)&&o[s]&&o[s][d]){var v;v="removeAttr"==u?!1:"prop"==u?!!f:!0,o[s][d].forEach(function(a){(!a.only||(a.only="prop"&&"prop"==c)||"attr"==a.only&&"prop"!=c)&&a.call(b,f,v,i?"val":u,c)})}return r},n[c]=function(a,d,f){m[a]||(m[a]={}),m[a][d]||(m[a][d]={});var g=m[a][d][c],h=function(a,b,e){return b&&b[a]?b[a]:e&&e[a]?e[a]:"prop"==c&&"value"==d?function(a){var b=this;return f.isVal?q(b,d,a,!1,0===arguments.length):k[c](b,d,a)}:"prop"==c&&"value"==a&&f.value.apply?function(){var a=k[c](this,d);return a&&a.apply&&(a=a.apply(this,arguments)),a}:function(a){return k[c](this,d,a)}};m[a][d][c]=f,f.value===e&&(f.set||(f.set=f.writeable?h("set",f,g):b.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+a}:function(){b.info(d+" is readonly on "+a)}),f.get||(f.get=h("get",f,g))),["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=h(a,g))})}});var t=function(){var a=b.getPrototypeOf(d.createElement("foobar")),c=Object.prototype.hasOwnProperty,e=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(f,g,h){var i,j;if(!(e&&(i=d.createElement(f))&&(j=b.getPrototypeOf(i))&&a!==j)||i[g]&&c.call(i,g))h._supvalue=function(){var a=s(this,"propValue");return a&&a[g]&&a[g].apply?a[g].apply(this,arguments):a&&a[g]},u.extendValue(f,g,h.value);else{var k=i[g];h._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k},j[g]=h.value}h.value._supvalue=h._supvalue}}(),u=function(){var c={};b.addReady(function(d,e){var f={},g=function(b){f[b]||(f[b]=a(d.getElementsByTagName(b)),e[0]&&a.nodeName(e[0],b)&&(f[b]=f[b].add(e)))};a.each(c,function(a,c){return g(a),c&&c.forEach?(c.forEach(function(b){f[a].each(b)}),void 0):(b.warn("Error: with "+a+"-property. methods: "+c),void 0)}),f=null});var e,f=a([]),g=function(b,f){c[b]?c[b].push(f):c[b]=[f],a.isDOMReady&&(e||a(d.getElementsByTagName(b))).each(f)};return{createTmpCache:function(b){return a.isDOMReady&&(e=e||a(d.getElementsByTagName(b))),e||f},flushTmpCache:function(){e=null},content:function(b,c){g(b,function(){var b=a.attr(this,c);null!=b&&a.attr(this,c,b)})},createElement:function(a,b){g(a,b)},extendValue:function(b,c,d){g(b,function(){a(this).each(function(){var a=s(this,"propValue",{});a[c]=this[c],this[c]=d})})}}}(),v=function(a,b){a.defaultValue===e&&(a.defaultValue=""),a.removeAttr||(a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue),a.removeAttr._supvalue.call(this)}}),a.attr||(a.attr={})};a.extend(b,{getID:function(){var b=(new Date).getTime();return function(c){c=a(c);var d=c.prop("id");return d||(b++,d="ID-"+b,c.eq(0).prop("id",d)),d}}(),implement:function(a,c){var d=s(a,"implemented")||s(a,"implemented",{});return d[c]?(b.warn(c+" already implemented for element #"+a.id),!1):(d[c]=!0,!0)},extendUNDEFProp:function(b,c){a.each(c,function(a,c){a in b||(b[a]=c)})},createPropDefault:v,data:s,moveToFirstEvent:function(b,c,d){var e,f=(a._data(b,"events")||{})[c];f&&f.length>1&&(e=f.pop(),d||(d="bind"),"bind"==d&&f.delegateCount?f.splice(f.delegateCount,0,e):f.unshift(e)),b=null},addShadowDom:function(){var e,f,g,h={init:!1,runs:0,test:function(){var a=h.getHeight(),b=h.getWidth();a!=h.height||b!=h.width?(h.height=a,h.width=b,h.handler({type:"docresize"}),h.runs++,h.runs<9&&setTimeout(h.test,90)):h.runs=0},handler:function(b){clearTimeout(e),e=setTimeout(function(){if("resize"==b.type){var e=a(c).width(),i=a(c).width();if(i==f&&e==g)return;f=i,g=e,h.height=h.getHeight(),h.width=h.getWidth()}a(d).triggerHandler("updateshadowdom")},"resize"==b.type?50:9)},_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(a,b){var c=d.body,e=d.documentElement;h[b]=function(){return Math.max(c["scroll"+a],e["scroll"+a],c["offset"+a],e["offset"+a],e["client"+a])}})},start:function(){!this.init&&d.body&&(this.init=!0,this._create(),this.height=h.getHeight(),this.width=h.getWidth(),setInterval(this.test,600),a(this.test),b.ready("WINDOWLOAD",this.test),a(d).on("updatelayout",this.handler),a(c).bind("resize",this.handler),function(){var b,c=a.fn.animate;a.fn.animate=function(){return clearTimeout(b),b=setTimeout(function(){h.test()},99),c.apply(this,arguments)}}())}};return b.docObserve=function(){b.ready("DOM",function(){h.start()})},function(c,d,e){if(c&&d){e=e||{},c.jquery&&(c=c[0]),d.jquery&&(d=d[0]);var f=a.data(c,r)||a.data(c,r,{}),g=a.data(d,r)||a.data(d,r,{}),h={};e.shadowFocusElement?e.shadowFocusElement&&(e.shadowFocusElement.jquery&&(e.shadowFocusElement=e.shadowFocusElement[0]),h=a.data(e.shadowFocusElement,r)||a.data(e.shadowFocusElement,r,h)):e.shadowFocusElement=d,a(c).on("remove",function(b){b.originalEvent||setTimeout(function(){a(d).remove()},4)}),f.hasShadow=d,h.nativeElement=g.nativeElement=c,h.shadowData=g.shadowData=f.shadowData={nativeElement:c,shadowElement:d,shadowFocusElement:e.shadowFocusElement},e.shadowChilds&&e.shadowChilds.each(function(){s(this,"shadowData",g.shadowData)}),e.data&&(h.shadowData.data=g.shadowData.data=f.shadowData.data=e.data),e=null}b.docObserve()}}(),propTypes:{standard:function(a){v(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}})},"boolean":function(a){v(a),a.prop||(a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}})},src:function(){var b=d.createElement("a");return b.style.display="none",function(c,d){v(c),c.prop||(c.prop={set:function(a){c.attr.set.call(this,a)},get:function(){var c,e=this.getAttribute(d);if(null==e)return"";if(b.setAttribute("href",e+""),!f){try{a(b).insertAfter(this),c=b.getAttribute("href",4)}catch(g){c=b.getAttribute("href",4)}a(b).detach()}return c||b.href}})}}(),enumarated:function(a){v(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=(a.attr.get.call(this)||"").toLowerCase();return b&&-1!=a.limitedTo.indexOf(b)||(b=a.defaultValue),b}})}},reflectProperties:function(c,d){"string"==typeof d&&(d=d.split(j)),d.forEach(function(d){b.defineNodeNamesProperty(c,d,{prop:{set:function(b){a.attr(this,d,b)},get:function(){return a.attr(this,d)||""}}})})},defineNodeNameProperty:function(c,d,e){return l[d]=!0,e.reflect&&b.propTypes[e.propType||"standard"](e,d),["prop","attr","removeAttr"].forEach(function(f){var g=e[f];g&&(g="prop"===f?a.extend({writeable:!0},g):a.extend({},g,{writeable:!0}),n[f](c,d,g),"*"!=c&&b.cfg.extendNative&&"prop"==f&&g.value&&a.isFunction(g.value)&&t(c,d,g),e[f]=g)}),e.initAttr&&u.content(c,d),e},defineNodeNameProperties:function(a,c,d,e){for(var f in c)!e&&c[f].initAttr&&u.createTmpCache(a),d&&(c[f][d]||(c[f][d]={},["value","set","get"].forEach(function(a){a in c[f]&&(c[f][d][a]=c[f][a],delete c[f][a])}))),c[f]=b.defineNodeNameProperty(a,f,c[f]);return e||u.flushTmpCache(),c},createElement:function(c,d,e){var f;return a.isFunction(d)&&(d={after:d}),u.createTmpCache(c),d.before&&u.createElement(c,d.before),e&&(f=b.defineNodeNameProperties(c,e,!1,!0)),d.after&&u.createElement(c,d.after),u.flushTmpCache(),f},onNodeNamesPropertyModify:function(b,c,d,e){"string"==typeof b&&(b=b.split(j)),a.isFunction(d)&&(d={set:d}),b.forEach(function(a){o[a]||(o[a]={}),"string"==typeof c&&(c=c.split(j)),d.initAttr&&u.createTmpCache(a),c.forEach(function(b){o[a][b]||(o[a][b]=[],l[b]=!0),d.set&&(e&&(d.set.only=e),o[a][b].push(d.set)),d.initAttr&&u.content(a,b)}),u.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,d,f){f||(f={}),a.isFunction(f)&&(f.set=f),b.defineNodeNamesProperty(c,d,{attr:{set:function(a){this.setAttribute(d,a),f.set&&f.set.call(this,!0)},get:function(){var a=this.getAttribute(d);return null==a?e:d}},removeAttr:{value:function(){this.removeAttribute(d),f.set&&f.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:f.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){var d;return c===e?(d=a.attributes[b]||{},c=d.specified?d.value:null,null==c?e:c):("boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c),void 0)}},activeLang:function(){var c,d,e=[],f={},g=/:\/\/|^\.*\//,h=function(c,d,e){var f;return d&&e&&-1!==a.inArray(d,e.availabeLangs||[])?(c.loading=!0,f=e.langSrc,g.test(f)||(f=b.cfg.basePath+f),b.loader.loadScript(f+d+".js",function(){c.langObj[d]?(c.loading=!1,k(c,!0)):a(function(){c.langObj[d]&&k(c,!0),c.loading=!1})}),!0):!1},j=function(a){f[a]&&f[a].forEach(function(a){a.callback(c,d,"")})},k=function(a,b){if(a.activeLang!=c&&a.activeLang!==d){var e=i[a.module].options;a.langObj[c]||d&&a.langObj[d]?(a.activeLang=c,a.callback(a.langObj[c]||a.langObj[d],c),j(a.module)):b||h(a,c,e)||h(a,d,e)||!a.langObj[""]||""===a.activeLang||(a.activeLang="",a.callback(a.langObj[""],c),j(a.module))}},l=function(b){return"string"==typeof b&&b!==c?(c=b,d=c.split("-")[0],c==d&&(d=!1),a.each(e,function(a,b){k(b)})):"object"==typeof b&&(b.register?(f[b.register]||(f[b.register]=[]),f[b.register].push(b),b.callback(c,d,"")):(b.activeLang||(b.activeLang=""),e.push(b),k(b))),c};return l}()}),a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){b[a]=function(a,d,e,f){"string"==typeof a&&(a=a.split(j));var g={};return a.forEach(function(a){g[a]=b[c](a,d,e,f)}),g}}),b.isReady("webshimLocalization",!0)}),function(a,b){if(!(!a.webshims.assumeARIA||"content"in b.createElement("template")||(a(function(){var b=a("main").attr({role:"main"});b.length>1?webshims.error("only one main element allowed in document"):b.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in b.createElement("a")))){var c={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},d=function(a,b){var c=a.getAttribute("role");c||a.setAttribute("role",b)};a.webshims.addReady(function(e,f){if(a.each(c,function(b,c){for(var g=a(b,e).add(f.filter(b)),h=0,i=g.length;i>h;h++)d(g[h],c)}),e===b){var g=b.getElementsByTagName("header")[0],h=b.getElementsByTagName("footer"),i=h.length;if(g&&!a(g).closest("section, article")[0]&&d(g,"banner"),!i)return;var j=h[i-1];a(j).closest("section, article")[0]||d(j,"contentinfo")}})}}(webshims.$,document);