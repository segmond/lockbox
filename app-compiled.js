function k(a){throw a;}var l=void 0,m=!0,n=null,p=!1,q,r=this;function aa(a){for(var a=a.split("."),b=r,c;c=a.shift();)if(b[c]!=n)b=b[c];else return n;return b}
function t(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function v(a){var b=t(a);return"array"==b||"object"==b&&"number"==typeof a.length}function w(a){return"string"==typeof a}function ba(a){return"function"==t(a)}function ca(a){var b=typeof a;return"object"==b&&a!=n||"function"==b}function da(a){return a[ea]||(a[ea]=++fa)}var ea="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),fa=0,x=Date.now||function(){return+new Date};
function y(a,b){var c=a.split("."),d=r;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==l?d[e]=b:d=d[e]?d[e]:d[e]={}}function z(a,b){function c(){}c.prototype=b.prototype;a.R=b.prototype;a.prototype=new c};function ga(a,b){for(var c=1;c<arguments.length;c++)var d=(""+arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a}function B(a){if(!ha.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ia,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ja,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ka,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(la,"&quot;"));return a}var ia=/&/g,ja=/</g,ka=/>/g,la=/\"/g,ha=/[&<>\"]/;var C,ma,na,oa;function pa(){return r.navigator?r.navigator.userAgent:n}oa=na=ma=C=p;var qa;if(qa=pa()){var ra=r.navigator;C=0==qa.indexOf("Opera");ma=!C&&-1!=qa.indexOf("MSIE");na=!C&&-1!=qa.indexOf("WebKit");oa=!C&&!na&&"Gecko"==ra.product}var sa=C,D=ma,E=oa,F=na,ta=r.navigator,ua=-1!=(ta&&ta.platform||"").indexOf("Mac"),va;
a:{var wa="",G;if(sa&&r.opera)var xa=r.opera.version,wa="function"==typeof xa?xa():xa;else if(E?G=/rv\:([^\);]+)(\)|;)/:D?G=/MSIE\s+([^\);]+)(\)|;)/:F&&(G=/WebKit\/(\S+)/),G)var ya=G.exec(pa()),wa=ya?ya[1]:"";if(D){var za,Aa=r.document;za=Aa?Aa.documentMode:l;if(za>parseFloat(wa)){va=""+za;break a}}va=wa}var Ba={};
function H(a){var b;if(!(b=Ba[a])){b=0;for(var c=(""+va).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",i=RegExp("(\\d*)(\\D*)","g"),j=RegExp("(\\d*)(\\D*)","g");do{var o=i.exec(g)||["","",""],s=j.exec(h)||["","",""];if(0==o[0].length&&0==s[0].length)break;b=((0==o[1].length?0:parseInt(o[1],10))<(0==s[1].length?0:parseInt(s[1],10))?-1:(0==o[1].length?0:parseInt(o[1],
10))>(0==s[1].length?0:parseInt(s[1],10))?1:0)||((0==o[2].length)<(0==s[2].length)?-1:(0==o[2].length)>(0==s[2].length)?1:0)||(o[2]<s[2]?-1:o[2]>s[2]?1:0)}while(0==b)}b=Ba[a]=0<=b}return b}var Ca={};function Da(){return Ca[9]||(Ca[9]=D&&document.documentMode&&9<=document.documentMode)};function Ea(a,b){for(var c in a)b.call(l,a[c],c,a)}var Fa="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function Ga(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Fa.length;f++)c=Fa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function I(a){this.stack=Error().stack||"";if(a)this.message=""+a}z(I,Error);I.prototype.name="CustomError";function Ha(a,b){b.unshift(a);I.call(this,ga.apply(n,b));b.shift();this.Da=a}z(Ha,I);Ha.prototype.name="AssertionError";function Ia(a,b){k(new Ha("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1)))};var J=Array.prototype,Ja=J.indexOf?function(a,b,c){return J.indexOf.call(a,b,c)}:function(a,b,c){c=c==n?0:0>c?Math.max(0,a.length+c):c;if(w(a))return!w(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ka=J.forEach?function(a,b,c){J.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},La=J.filter?function(a,b,c){return J.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=w(a)?
a.split(""):a,h=0;h<d;h++)if(h in g){var i=g[h];b.call(c,i,h,a)&&(e[f++]=i)}return e},Ma=J.map?function(a,b,c){return J.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=w(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Na=J.every?function(a,b,c){return J.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return p;return m};function Oa(a){return J.concat.apply(J,arguments)}
function Pa(a){if("array"==t(a))return Oa(a);for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}function Qa(a,b,c){return 2>=arguments.length?J.slice.call(a,b):J.slice.call(a,b,c)};var K="StopIteration"in r?r.StopIteration:Error("StopIteration");function L(){}L.prototype.next=function(){k(K)};L.prototype.K=function(){return this};function Ra(a){if(a instanceof L)return a;if("function"==typeof a.K)return a.K(p);if(v(a)){var b=0,c=new L;c.next=function(){for(;;){b>=a.length&&k(K);if(b in a)return a[b++];b++}};return c}k(Error("Not implemented"))}function Sa(a,b){if(v(a))try{Ka(a,b,l)}catch(c){c!==K&&k(c)}else{a=Ra(a);try{for(;;)b.call(l,a.next(),l,a)}catch(d){d!==K&&k(d)}}};function Ta(a,b){this.e={};this.c=[];var c=arguments.length;if(1<c){c%2&&k(Error("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof Ta){d=Ua(a);Va(a);e=[];for(c=0;c<a.c.length;c++)e.push(a.e[a.c[c]])}else{var c=[],f=0;for(d in a)c[f++]=d;d=c;c=[];f=0;for(e in a)c[f++]=a[e];e=c}for(c=0;c<d.length;c++)this.set(d[c],e[c])}}q=Ta.prototype;q.b=0;q.v=0;function Ua(a){Va(a);return a.c.concat()}
q.clear=function(){this.e={};this.v=this.b=this.c.length=0};q.remove=function(a){return Object.prototype.hasOwnProperty.call(this.e,a)?(delete this.e[a],this.b--,this.v++,this.c.length>2*this.b&&Va(this),m):p};
function Va(a){if(a.b!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];Object.prototype.hasOwnProperty.call(a.e,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.b!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],Object.prototype.hasOwnProperty.call(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}}q.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.e,a)?this.e[a]:b};q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.e,a)||(this.b++,this.c.push(a),this.v++);this.e[a]=b};
q.K=function(a){Va(this);var b=0,c=this.c,d=this.e,e=this.v,f=this,g=new L;g.next=function(){for(;;){e!=f.v&&k(Error("The map has changed since the iterator was created"));b>=c.length&&k(K);var g=c[b++];return a?g:d[g]}};return g};function Wa(a){for(var b=[],c=arguments.callee.caller,d=0;c&&(!a||d<a);){b.push(Xa(c));b.push("()\n");try{c=c.caller}catch(e){b.push("[exception trying to get caller]\n");break}d++;if(d>=Ya){b.push("[...long stack...]");break}}a&&d>=a?b.push("[...reached max depth limit...]"):b.push("[end]");return b.join("")}var Ya=50;function Za(a){return $a(a||arguments.callee.caller,[])}
function $a(a,b){var c=[];if(0<=Ja(b,a))c.push("[...circular reference...]");else if(a&&b.length<Ya){c.push(Xa(a)+"(");for(var d=a.arguments,e=0;e<d.length;e++){0<e&&c.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=""+f;break;case "boolean":f=f?"true":"false";break;case "function":f=(f=Xa(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push($a(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?
c.push("[...long stack...]"):c.push("[end]");return c.join("")}function Xa(a){if(ab[a])return ab[a];a=""+a;if(!ab[a]){var b=/function ([^\(]+)/.exec(a);ab[a]=b?b[1]:"[Anonymous]"}return ab[a]}var ab={};function M(){}M.prototype.O=p;M.prototype.l=function(){if(!this.O)this.O=m,this.f()};M.prototype.f=function(){this.na&&bb.apply(n,this.na)};function bb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];v(d)?bb.apply(n,d):d&&"function"==typeof d.l&&d.l()}};function N(a,b){this.ea=b;this.i=[];a>this.ea&&k(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));for(var c=0;c<a;c++)this.i.push(this.p())}z(N,M);q=N.prototype;q.W=n;q.Y=n;function cb(a){return a.i.length?a.i.pop():a.p()}function O(a,b){a.i.length<a.ea?a.i.push(b):a.N(b)}q.p=function(){return this.W?this.W():{}};q.N=function(a){if(this.Y)this.Y(a);else if(ca(a))if(ba(a.l))a.l();else for(var b in a)delete a[b]};
q.f=function(){N.R.f.call(this);for(var a=this.i;a.length;)this.N(a.pop());delete this.i};function P(a,b,c,d,e){this.reset(a,b,c,d,e)}P.prototype.xa=0;P.prototype.aa=n;P.prototype.$=n;var db=0;P.prototype.reset=function(a,b,c,d,e){this.xa="number"==typeof e?e:db++;this.Ea=d||x();this.s=a;this.sa=b;this.Ca=c;delete this.aa;delete this.$};P.prototype.ha=function(a){this.s=a};function Q(a){this.ta=a}Q.prototype.F=n;Q.prototype.s=n;Q.prototype.M=n;Q.prototype.ca=n;function eb(a,b){this.name=a;this.value=b}eb.prototype.toString=function(){return this.name};var fb=new eb("WARNING",900),gb=new eb("CONFIG",700);function hb(a){r.console&&(r.console.timeStamp?r.console.timeStamp(a):r.console.markTimeline&&r.console.markTimeline(a));r.msWriteProfilerMark&&r.msWriteProfilerMark(a)}Q.prototype.getParent=function(){return this.F};Q.prototype.ha=function(a){this.s=a};
function ib(a){if(a.s)return a.s;if(a.F)return ib(a.F);Ia("Root logger has no level set.");return n}Q.prototype.log=function(a,b,c){if(a.value>=ib(this).value){a=this.pa(a,b,c);hb("log:"+a.sa);for(b=this;b;){var c=b,d=a;if(c.ca)for(var e=0,f=l;f=c.ca[e];e++)f(d);b=b.getParent()}}};
Q.prototype.pa=function(a,b,c){var d=new P(a,""+b,this.ta);if(c){d.aa=c;var e;var f=arguments.callee.caller;try{var g;var h=aa("window.location.href");if(w(c))g={message:c,name:"Unknown error",lineNumber:"Not available",fileName:h,stack:"Not available"};else{var i,j,o=p;try{i=c.lineNumber||c.Ba||"Not available"}catch(s){i="Not available",o=m}try{j=c.fileName||c.filename||c.sourceURL||h}catch(u){j="Not available",o=m}g=o||!c.lineNumber||!c.fileName||!c.stack?{message:c.message,name:c.name,lineNumber:i,
fileName:j,stack:c.stack||"Not available"}:c}e="Message: "+B(g.message)+'\nUrl: <a href="view-source:'+g.fileName+'" target="_new">'+g.fileName+"</a>\nLine: "+g.lineNumber+"\n\nBrowser stack:\n"+B(g.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+B(Za(f)+"-> ")}catch(A){e="Exception trying to expose exception! You win, we lose. "+A}d.$=e}return d};var jb={},kb=n;
function lb(a){kb||(kb=new Q(""),jb[""]=kb,kb.ha(gb));var b;if(!(b=jb[a])){b=new Q(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=lb(a.substr(0,c));if(!c.M)c.M={};c.M[d]=b;b.F=c;jb[a]=b}return b};function mb(){this.d=[];this.g=new Ta;this.ja=this.H=this.I=this.ia=0;this.k=new Ta;this.V=this.T=0;this.ua=1;this.h=new N(0,4E3);this.h.p=function(){return new nb};this.Q=new N(0,50);this.Q.p=function(){return new ob};var a=this;this.m=new N(0,2E3);this.m.p=function(){return""+a.ua++};this.m.N=function(){};this.X=3}mb.prototype.ra=lb("goog.debug.Trace");mb.prototype.J=1E3;function ob(){this.u=this.G=this.w=0}
ob.prototype.toString=function(){var a=[];a.push(this.type," ",this.w," (",Math.round(10*this.G)/10," ms)");this.u&&a.push(" [VarAlloc = ",this.u,"]");return a.join("")};function nb(){}function pb(a,b,c,d){var e=[];-1==c?e.push("    "):e.push(qb(a.z-c));e.push(" ",rb(a.z-b));0==a.q?e.push(" Start        "):1==a.q?(e.push(" Done "),e.push(qb(a.ya-a.startTime)," ms ")):e.push(" Comment      ");e.push(d,a);0<a.t&&e.push("[VarAlloc ",a.t,"] ");return e.join("")}
nb.prototype.toString=function(){return this.type==n?this.o:"["+this.type+"] "+this.o};mb.prototype.reset=function(a){this.X=a;for(a=0;a<this.d.length;a++){var b=this.h.id;b&&O(this.m,b);O(this.h,this.d[a])}this.d.length=0;this.g.clear();this.ia=x();this.V=this.T=this.ja=this.H=this.I=0;b=Ua(this.k);for(a=0;a<b.length;a++){var c=this.k.get(b[a]);c.w=0;c.G=0;c.u=0;O(this.Q,c)}this.k.clear()};function sb(){var a=R.Aa;return a&&a.isTracing()?a.totalVarAlloc:-1}
mb.prototype.toString=function(){for(var a=[],b=-1,c=[],d=0;d<this.d.length;d++){var e=this.d[d];1==e.q&&c.pop();a.push(" ",pb(e,this.ia,b,c.join("")));b=e.z;a.push("\n");0==e.q&&c.push("|  ")}if(0!=this.g.b){var f=x();a.push(" Unstopped timers:\n");Sa(this.g,function(b){a.push("  ",b," (",f-b.startTime," ms, started at ",rb(b.startTime),")\n")})}b=Ua(this.k);for(d=0;d<b.length;d++)c=this.k.get(b[d]),1<c.w&&a.push(" TOTAL ",c,"\n");a.push("Total tracers created ",this.T,"\n","Total comments created ",
this.V,"\n","Overhead start: ",this.I," ms\n","Overhead end: ",this.H," ms\n","Overhead comment: ",this.ja," ms\n");return a.join("")};function qb(a){var a=Math.round(a),b="";1E3>a&&(b=" ");100>a&&(b="  ");10>a&&(b="   ");return b+a}function rb(a){a=Math.round(a);return(""+(100+a/1E3%60)).substring(1,3)+"."+(""+(1E3+a%1E3)).substring(1,4)}var R=new mb;function tb(a){this.oa=a}z(tb,M);tb.prototype.la=p;function ub(a,b){return(b?"__wrapper_":"__protected_")+da(a)+"__"}function vb(a){var b=wb,c=ub(b,m);a[c]||((a[c]=xb(b,a))[ub(b,p)]=a);return a[c]}
function xb(a,b){function c(){if(a.O)return b.apply(this,arguments);if(d){var c=e,g=[];g.push("##PE_STACK_START##");g.push(c.replace(/(\r\n|\r|\n)/g,"##STACK_BR##"));g.push("##PE_STACK_END##");var h="protectedEntryPoint: "+g.join(""),c=x(),i=sb(),j=R.g.b;if(R.d.length+j>R.J){R.ra.log(fb,"Giant thread trace. Clearing to avoid memory leak.",l);if(R.d.length>R.J/2){for(var o=0;o<R.d.length;o++)g=R.d[o],g.id&&O(R.m,g.id),O(R.h,g);R.d.length=0}j>R.J/2&&R.g.clear()}hb("Start : "+h);g=cb(R.h);g.t=i;g.q=
0;g.id=Number(cb(R.m));g.o=h;g.type=l;R.d.push(g);R.g.set(""+g.id,g);R.T++;h=x();g.startTime=g.z=h;R.I+=h-c;c=g.id}try{return b.apply(this,arguments)}catch(s){a.oa(s),k(new yb(s))}finally{if(d&&(h=c,c=x(),i=R.X,g=R.g.get(""+h),g!=n)){R.g.remove(""+h);var u,h=c-g.startTime;if(h<i)for(i=R.d.length-1;0<=i;i--){if(R.d[i]==g){R.d.splice(i,1);O(R.m,g.id);O(R.h,g);break}}else u=cb(R.h),u.q=1,u.startTime=g.startTime,u.o=g.o,u.type=g.type,u.ya=u.z=c,R.d.push(u);i=g.type;j=n;if(i){j=R.k.get(i);if(!j)j=cb(R.Q),
j.type=i,R.k.set(i,j);j.w++;j.G+=h}if(u)hb("Stop : "+u.o),u.t=sb(),j&&(j.u+=u.t-g.t);R.H+=x()-c}}}var d=a.la;if(d)var e=Wa(15);c[ub(a,p)]=b;return c}tb.prototype.f=function(){var a=aa("window");a.setTimeout=a.setTimeout[ub(this,p)]||a.setTimeout;a.setInterval=a.setInterval[ub(this,p)]||a.setInterval;tb.R.f.call(this)};function yb(a){I.call(this,zb+(a&&a.message?""+a.message:""+a));this.za=a}z(yb,I);var zb="Error in protected function: ";function Ab(){}var Bb=0;q=Ab.prototype;q.key=0;q.n=p;q.U=p;q.A=function(a,b,c,d,e,f){ba(a)?this.da=m:a&&a.handleEvent&&ba(a.handleEvent)?this.da=p:k(Error("Invalid listener argument"));this.B=a;this.ga=b;this.src=c;this.type=d;this.capture=!!e;this.ba=f;this.U=p;this.key=++Bb;this.n=p};q.handleEvent=function(a){return this.da?this.B.call(this.ba||this.src,a):this.B.handleEvent.call(this.B,a)};!D||Da();var Cb=!D||Da();D&&H("8");!F||H("528");E&&H("1.9b")||D&&H("8")||sa&&H("9.5")||F&&H("528");!E||H("8");function S(a,b){this.type=a;this.currentTarget=this.target=b}z(S,M);S.prototype.f=function(){delete this.type;delete this.target;delete this.currentTarget};S.prototype.P=p;S.prototype.wa=m;function Db(a){Db[" "](a);return a}Db[" "]=function(){};function Eb(a,b){a&&this.A(a,b)}z(Eb,S);q=Eb.prototype;q.target=n;q.relatedTarget=n;q.offsetX=0;q.offsetY=0;q.clientX=0;q.clientY=0;q.screenX=0;q.screenY=0;q.button=0;q.keyCode=0;q.charCode=0;q.ctrlKey=p;q.altKey=p;q.shiftKey=p;q.metaKey=p;q.va=p;q.Z=n;
q.A=function(a,b){var c=this.type=a.type;S.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(E){var e;a:{try{Db(d.nodeName);e=m;break a}catch(f){}e=p}e||(d=n)}}else if("mouseover"==c)d=a.fromElement;else if("mouseout"==c)d=a.toElement;this.relatedTarget=d;this.offsetX=F||a.offsetX!==l?a.offsetX:a.layerX;this.offsetY=F||a.offsetY!==l?a.offsetY:a.layerY;this.clientX=a.clientX!==l?a.clientX:a.pageX;this.clientY=a.clientY!==l?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.va=ua?a.metaKey:a.ctrlKey;this.state=a.state;this.Z=a;delete this.wa;delete this.P};q.f=function(){Eb.R.f.call(this);this.relatedTarget=this.currentTarget=this.target=this.Z=n};var T={},U={},V={},W={};
function Fb(a,b,c,d,e){if(b)if("array"==t(b))for(var f=0;f<b.length;f++)Fb(a,b[f],c,d,e);else{var d=!!d,g=U;b in g||(g[b]={b:0,j:0});g=g[b];d in g||(g[d]={b:0,j:0},g.b++);var g=g[d],h=da(a),i;g.j++;if(g[h]){i=g[h];for(f=0;f<i.length;f++)if(g=i[f],g.B==c&&g.ba==e){if(g.n)break;return}}else i=g[h]=[],g.b++;f=Gb();f.src=a;g=new Ab;g.A(c,f,a,b,d,e);c=g.key;f.key=c;i.push(g);T[c]=g;V[h]||(V[h]=[]);V[h].push(g);a.addEventListener?(a==r||!a.ma)&&a.addEventListener(b,f,d):a.attachEvent(b in W?W[b]:W[b]="on"+
b,f)}else k(Error("Invalid event type"))}function Gb(){var a=Hb,b=Cb?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}function Ib(a,b,c,d){if(!d.C&&d.fa){for(var e=0,f=0;e<d.length;e++)d[e].n?d[e].ga.src=n:(e!=f&&(d[f]=d[e]),f++);d.length=f;d.fa=p;0==f&&(delete U[a][b][c],U[a][b].b--,0==U[a][b].b&&(delete U[a][b],U[a].b--),0==U[a].b&&delete U[a])}}
function Jb(a,b,c,d,e){var f=1,b=da(b);if(a[b]){a.j--;a=a[b];a.C?a.C++:a.C=1;try{for(var g=a.length,h=0;h<g;h++){var i=a[h];i&&!i.n&&(f&=Kb(i,e)!==p)}}finally{a.C--,Ib(c,d,b,a)}}return Boolean(f)}
function Kb(a,b){var c=a.handleEvent(b);if(a.U){var d=a.key;if(T[d]){var e=T[d];if(!e.n){var f=e.src,g=e.type,h=e.ga,i=e.capture;f.removeEventListener?(f==r||!f.ma)&&f.removeEventListener(g,h,i):f.detachEvent&&f.detachEvent(g in W?W[g]:W[g]="on"+g,h);f=da(f);h=U[g][i][f];if(V[f]){var j=V[f],o=Ja(j,e);0<=o&&J.splice.call(j,o,1);0==j.length&&delete V[f]}e.n=m;h.fa=m;Ib(g,i,f,h);delete T[d]}}}return c}
function Hb(a,b){if(!T[a])return m;var c=T[a],d=c.type,e=U;if(!(d in e))return m;var e=e[d],f,g;if(!Cb){f=b||aa("window.event");var h=m in e,i=p in e;if(h){if(0>f.keyCode||f.returnValue!=l)return m;a:{var j=p;if(0==f.keyCode)try{f.keyCode=-1;break a}catch(o){j=m}if(j||f.returnValue==l)f.returnValue=m}}j=new Eb;j.A(f,this);f=m;try{if(h){for(var s=[],u=j.currentTarget;u;u=u.parentNode)s.push(u);g=e[m];g.j=g.b;for(var A=s.length-1;!j.P&&0<=A&&g.j;A--)j.currentTarget=s[A],f&=Jb(g,s[A],d,m,j);if(i){g=
e[p];g.j=g.b;for(A=0;!j.P&&A<s.length&&g.j;A++)j.currentTarget=s[A],f&=Jb(g,s[A],d,p,j)}}else f=Kb(c,j)}finally{if(s)s.length=0;j.l()}return f}d=new Eb(b,this);try{f=Kb(c,d)}finally{d.l()}return f};function Lb(){return m}function Mb(a){var b=arguments,c=b.length;return function(){var a;c&&(a=b[c-1].apply(this,arguments));for(var e=c-2;0<=e;e--)a=b[e].call(this,a);return a}};function Nb(a,b){if(0==b)return[[]];if(0==a.length)return[];for(var c=a[0],d=Qa(a,1),e=Nb(d,b),d=Nb(d,b-1),f=0;f<d.length;++f)d[f].push(c);return Oa(e,d)}function Ob(a,b,c,d){d="undefined"==typeof d?[]:d;if(0==c)return a(d)?d:n;if(0==b.length)return n;var e=b[0],b=Qa(b,1),f=Ob(a,b,c,d);return f!=n?f:Ob(a,b,c-1,Oa(d,[e]))}y("comb.combinations",Nb);y("comb.combinationSuchThat",Ob);function Pb(){return"undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues?crypto:new Qb}function Qb(){}Qb.prototype.qa=function(a){for(var a=new Uint8Array(a.buffer),b=a.length,c=0;c<b;++c)a[c]=Math.floor(256*Math.random())};y("rng.getRng",Pb);y("rng.MathRng",Qb);Qb.prototype.getRandomValues=Qb.prototype.qa;function Rb(a){return(a&255)==a&&"number"==typeof a}function Sb(a,b){return a^b}function X(a,b){Tb();return 0==a||0==b?0:Y[Z[a]+Z[b]]}function Ub(a,b){0==b&&k(Error("Divide by zero"));Tb();return 0==a?0:Y[Z[a]-Z[b]+255]}function Vb(a){0==a&&k(Error("Attempted to invert zero"));Tb();return Y[255-Z[a]]}function Wb(a,b){if(0==b)return 1;if(0>b)return Wb(Vb(a),-b);var c=Wb(a,b>>1);return 1==c?a:b&1?X(a,X(c,c)):X(c,c)}var Z=n,Y=n;
function Tb(){if(!Y){Z=Array(256);Y=Array(510);for(var a=0;256>a;++a)Z[a]=255,Y[a]=0;for(var b=1,a=0;255>a;++a)Z[b]=a,Y[a]=b,b<<=1,b&256&&(b=(b^285)&255);for(a=0;255>a;++a)Y[a+255]=Y[a]}}y("gf28.add",Sb);y("gf28.sub",Sb);y("gf28.mul",X);y("gf28.div",Ub);y("gf28.inv",Vb);y("gf28.pow",Wb);y("gf28.isElem",Rb);y("gf28.ZERO",0);y("gf28.ONE",1);y("gf28.SIZE",256);y("gf28.MASK",255);y("gf28.GEN",2);y("gf28.PRIM_POLY",285);function Xb(a,b,c,d){function e(a){for(var b=0,c=0;c<o.length;++c)var d=X(o[c],Wb(a,c)),b=b^d;return b}c="undefined"==typeof c?b:c;d="undefined"==typeof d?Pb():d;2>b&&k(Error("Threshold must be at least 2."));c<b&&k(Error("Must have at least threshold total keys."));255<c&&k(Error("Can't make more than 255 distinct keys."));var f,g;if(a instanceof ArrayBuffer)g=new Uint8Array(a),f=g.length;else{f=a.length;g=new Uint8Array(f);for(var h="string"==typeof a?function(b){return a.charCodeAt(b)}:function(b){return a[b]},
i=0;i<f;++i){var j=h(i);Rb(j)||k(Error(j+" at msg["+i+"] is out of range."));g[i]=j}}for(var o=new Uint8Array(b),b=Array(c),i=0;i<c;++i)b[i]=new Uint8Array(1+f),b[i][0]=i+1;for(i=0;i<f;++i){d.getRandomValues(o.subarray(1));o[0]=g[i];for(h=0;h<c;++h)b[h][1+i]=e(h+1)}return b}
function Yb(a,b,c){b="undefined"==typeof b?a.length:b;c="undefined"==typeof c?Lb:c;if(b>a.length)b=a.length;if(b!=a.length)return b=Ob(Mb(c,Yb),a,b),b==n?n:Yb(b);0==a.length&&k(Error("Can't combine nothing."));Na(a,function(b){return b.length==a[0].length})||k(Error("Unequal key lengths."));for(var c=a[0].length-1,d=new Uint8Array(c),e=Array(b),f=0;f<c;++f){for(var g=0;g<b;++g)e[g]={x:a[g][0],y:a[g][f+1]};d[f]=Zb(e)}return d}
function Zb(a){for(var b=0,c=0;c<a.length;++c){for(var d=a[c].x,e=1,f=0;f<a.length;++f)if(c!=f){var g=a[f].x;d==g&&k(Error("Keys at "+c+" and "+f+" have the same x-coordinates."));e=X(e,Ub(0^g,d^g))}d=X(a[c].y,e);b^=d}return b}y("ssss.combine",Yb);y("ssss.split",Xb);y("ssss.Key.getX",function(a){return(new Uint8Array(a))[0]});y("ssss.Key.getY",function(a,b){return(new Uint8Array(a))[b+1]});"undefined"==typeof _gaq&&(_gaq=[]);_gaq.push(["_setAccount","UA-28049294-1"]);_gaq.push(["_setDomainName","github.com"]);_gaq.push(["_setAllowLinker",m]);_gaq.push(["_trackPageview"]);var $b=document.createElement("script");$b.type="text/javascript";$b.async=m;$b.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var ac=document.getElementsByTagName("script")[0];ac.parentNode.insertBefore($b,ac);function bc(){};function cc(){this.a=[];this.L=[];this.ka=[];this.D=[];this.D[0]=128;for(var a=1;64>a;++a)this.D[a]=0;this.reset()}z(cc,bc);cc.prototype.reset=function(){this.a[0]=1732584193;this.a[1]=4023233417;this.a[2]=2562383102;this.a[3]=271733878;this.a[4]=3285377520;this.S=this.r=0};
function dc(a,b){var c;c||(c=0);for(var d=a.ka,e=c;e<c+64;e+=4)d[e/4]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3];for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}c=a.a[0];for(var g=a.a[1],h=a.a[2],i=a.a[3],j=a.a[4],o,e=0;80>e;e++)40>e?20>e?(f=i^g&(h^i),o=1518500249):(f=g^h^i,o=1859775393):60>e?(f=g&h|i&(g|h),o=2400959708):(f=g^h^i,o=3395469782),f=(c<<5|c>>>27)+f+j+o+d[e]&4294967295,j=i,i=h,h=(g<<30|g>>>2)&4294967295,g=c,c=f;a.a[0]=a.a[0]+c&4294967295;a.a[1]=a.a[1]+g&
4294967295;a.a[2]=a.a[2]+h&4294967295;a.a[3]=a.a[3]+i&4294967295;a.a[4]=a.a[4]+j&4294967295}cc.prototype.update=function(a,b){if(b===l)b=a.length;var c=this.L,d=this.r,e=0;if(w(a))for(;e<b;)c[d++]=a.charCodeAt(e++),64==d&&(dc(this,c),d=0);else for(;e<b;)c[d++]=a[e++],64==d&&(dc(this,c),d=0);this.r=d;this.S+=b};function ec(){for(var a=unescape(encodeURIComponent($("split-input").value)),b=a.length,c=new Uint8Array(b),d=0;d<b;++d)c[d]=a.charCodeAt(d);a=fc(c);b=new Uint8Array(1+c.length+a.length);b[0]=1;b.set(a,1);b.set(c,1+a.length);return b.buffer}function gc(a){hc(a)||k(Error("Invalid message"));for(var a=new Uint8Array(a,21),b=[],c=a.length,d=0;d<c;++d)b.push(String.fromCharCode(a[d]));return decodeURIComponent(escape(b.join("")))}
function hc(a){if(1!=(new Uint8Array(a,0,1))[0])return p;var b=new Uint8Array(a,1,20),a=fc(new Uint8Array(a,21));a:if(b.length!=a.length)b=p;else{for(var c=b.length,d=0;d<c;++d)if(b[d]!=a[d]){b=p;break a}b=m}return b}function fc(a){var b=new cc;b.update(a);var a=[],c=8*b.S;56>b.r?b.update(b.D,56-b.r):b.update(b.D,64-(b.r-56));for(var d=63;56<=d;d--)b.L[d]=c&255,c/=256;dc(b,b.L);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return new Uint8Array(a)};var ic=n,jc=n;function kc(){if(!ic){ic={};jc={};for(var a=0;65>a;a++)ic[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),jc[ic[a]]=a}};function lc(a,b){var c;c=(c=a.className)&&"function"==typeof c.split?c.split(/\s+/):[];var d=Qa(arguments,1),e;e=c;for(var f=0,g=0;g<d.length;g++)0<=Ja(e,d[g])||(e.push(d[g]),f++);e=f==d.length;a.className=c.join(" ");return e};var mc=!D||Da();!E&&!D||D&&Da()||E&&H("1.9.1");D&&H("9");function $(a){return w(a)?document.getElementById(a):a}function nc(a,b){Ea(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in oc?a.setAttribute(oc[d],b):0==d.lastIndexOf("aria-",0)?a.setAttribute(d,b):a[d]=b})}var oc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"};
function pc(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!mc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',B(g.name),'"');if(g.type){f.push(' type="',B(g.type),'"');var h={};Ga(h,g);g=h;delete g.type}f.push(">");f=f.join("")}f=e.createElement(f);if(g)w(g)?f.className=g:"array"==t(g)?lc.apply(n,[f].concat(g)):nc(f,g);2<d.length&&qc(e,f,d);return f}
function qc(a,b,c){function d(c){c&&b.appendChild(w(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];v(f)&&!(ca(f)&&0<f.nodeType)?Ka(rc(f)?Pa(f):f,d):d(f)}}function sc(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function tc(a,b){if("textContent"in a)a.textContent=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else sc(a),a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(b))}function rc(a){if(a&&"number"==typeof a.length){if(ca(a))return"function"==typeof a.item||"string"==typeof a.item;if(ba(a))return"function"==typeof a.item}return p};Uint8Array.prototype.toString=function(){v(this)||k(Error("encodeByteArray takes an array as a parameter"));kc();for(var a=ic,b=[],c=0;c<this.length;c+=3){var d=this[c],e=c+1<this.length,f=e?this[c+1]:0,g=c+2<this.length,h=g?this[c+2]:0,i=d>>2,d=(d&3)<<4|f>>4,f=(f&15)<<2|h>>6,h=h&63;g||(h=64,e||(f=64));b.push(a[i],a[d],a[f],a[h])}return b.join("")};
function uc(a){var b=Uint8Array;kc();for(var c=jc,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var h=e<a.length?c[a.charAt(e)]:0;++e;var i=e<a.length?c[a.charAt(e)]:0;++e;(f==n||g==n||h==n||i==n)&&k(Error());d.push(f<<2|g>>4);64!=h&&(d.push(g<<4&240|h>>2),64!=i&&d.push(h<<6&192|i))}return new b(d)}function vc(a){"undefined"!=typeof _gaq&&_gaq.push(["_trackEvent","error",a.message]);var b=$("err-div");tc(b,a.message);b.style.display="block"}
function wc(){$("err-div").style.display="none"}var wb=new tb(vc);y("app.errFunc",vc);
y("app.run",function(){wc();var a=vb(Xb),b=vb(Yb);Fb($("split"),"click",function(){"undefined"!=typeof _gaq&&_gaq.push(["_trackEvent","ssss","split"]);wc();var b=parseInt($("split-k").value,10),d=parseInt($("split-n").value,10),b=a(ec(),b,d);sc($("split-output"));Ka(b,function(a){var b=pc("pre");tc(b,a);$("split-output").appendChild(b)})});Fb($("combine"),"click",function(){"undefined"!=typeof _gaq&&_gaq.push(["_trackEvent","ssss","combine"]);wc();var a=parseInt($("combine-k").value,10),d=La(Ma($("combine-keys").value.split("\n"),
uc),function(a){return a.length});if(!(0<a))a=d.length;var e="";try{e=gc(b(d,a,function(a){return hc(a.buffer)}).buffer)}catch(f){vc({message:"Couldn't find a valid message; either you don't have enough keys or k is set too low."})}a=pc("pre");tc(a,e);sc($("combine-output"));$("combine-output").appendChild(a)})});
