jQuery.webshims.ready("es5",function(i,j,v,r,o){var t=j.modules,p=i.attr,n={},l={};i.attr=function(b,c,a,e,f){var g=(b.nodeName||"").toLowerCase();if(!g||b.nodeType!==1)return p(b,c,a,e,f);var d=n[g],h;if(d)d=d[c];if(!d)if(d=n["*"])d=d[c];if(d)if(a===o)return d.get?d.get.call(b):d.value;else{if(d.set)h=d.set.call(b,a)}else h=p(b,c,a,e,f);a!==o&&l[g]&&l[g][c]&&i.each(l[g][c],function(k,m){m.call(b,a)});return h};var u=function(b,c,a){n[b]||(n[b]={});var e=n[b][c],f=function(g,d,h){if(d&&d[g])return d[g];
if(h&&h[g])return h[g];return function(k){return p(this,c,k)}};n[b][c]=a;if(a.value===o){if(!a.set)a.set=a.writeable?f("set",a,e):function(){throw c+"is readonly on "+b;};if(!a.get)a.get=f("get",a,e)}i.each(["value","get","set"],function(g,d){if(a[d])a["_sup"+d]=f(d,e)})},s=function(){var b={},c;j.addReady(function(e,f){var g={},d=function(h){if(!g[h]){g[h]=i(e.getElementsByTagName(h));if(f[0]&&i.nodeName(f[0],h))g[h]=g[h].add(f)}};i.each(b,function(h,k){d(h);k.forEach(function(m){g[h].each(m)})});
g=null;c=true});var a=function(e,f){if(b[e])b[e].push(f);else b[e]=[f];c&&i(r.getElementsByTagName(e)).each(f)};return{init:function(e,f,g){a(e,function(){var d=i(this);if(g!=="all")d=d.filter("["+f+"]");d.attr(f,function(h,k){return k})})}}}();i.extend(j,{getID:function(){var b=(new Date).getTime();return function(c){c=i(c);var a=c.attr("id");if(!a){b++;a="elem-id-"+b;c.attr("id",a)}return a}}(),defineNodeNameProperty:function(b,c,a,e){a=i.extend({writeable:true,idl:true},a);e&&j.cfg.extendNative&&
j.log("could not extend "+b+"["+c+"] fallback to jQuery extend");u(b,c,a);a.init&&j.warn("Error: "+b+"["+c+"] uses desc.init");if(a.content&&1||a.init)s.init(b,c);return a},defineNodeNamesProperty:function(b,c,a,e,f,g){if(typeof b=="string")b=b.split(/\s*,\s*/);b.forEach(function(d){j.defineNodeNameProperty(d,c,a,e,f,g)})},onNodeNamesPropertyModify:function(b,c,a){if(typeof b=="string")b=b.split(/\s*,\s*/);if(i.isFunction(a))a={set:a};b.forEach(function(e){l[e]||(l[e]={});l[e][c]||(l[e][c]=[]);a.set&&
l[e][c].push(a.set);a.init&&j.warn("Error: "+nodeName+"["+c+"] uses desc.init");if(a.content||a.init)s.init(e,c)})},defineNodeNamesBooleanProperty:function(b,c,a,e,f,g){j.defineNodeNamesProperty(b,c,{set:function(d){d=this.readyState==="loading"&&typeof d=="string"&&d===j.contentAttr(this,c)?true:!!d;j.contentAttr(this,c,d);a&&a.set.call(this,d);return d},get:function(){return j.contentAttr(this,c)!=null}},e,f,g)},contentAttr:function(b,c,a){if(b.nodeName){if(a===o){a=(b.attributes[c]||{}).value;
return a==null?o:a}if(typeof a=="boolean")a?b.setAttribute(c,c):b.removeAttribute(c);else b.setAttribute(c,a)}},activeLang:function(){var b=[navigator.browserLanguage||navigator.language||""],c=i("html").attr("lang"),a;c&&b.push(c);return function(e,f,g){if(e)if(!f||!g){if(e!==b[0]){b[0]=e;clearTimeout(a);a=setTimeout(function(){i(r).triggerHandler("webshimLocalizationReady",b)},0)}}else{var d=(f=t[f].options)&&f.availabeLangs,h=function(k){if(i.inArray(k,d)!==-1){j.loader.loadScript(f.langSrc+k+
".js",function(){e[k]&&g(e[k])});return true}return false};i.each(b,function(k,m){var q=m.split("-")[0];if(e[m]||e[q]){g(e[m]||e[q]);return false}if(d&&f.langSrc&&(h(m)||h(q)))return false})}return b}}()});j.isReady("webshimLocalization",true);j.isReady("dom-extend",true)});
