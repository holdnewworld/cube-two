!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(4)},,,,function(t,e,n){var i;!function(r,s,o,a){"use strict";function u(t,e,n){return setTimeout(f(t,n),e)}function h(t,e,n){return!!Array.isArray(t)&&(c(t,n[e],n),!0)}function c(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function l(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=r.console&&(r.console.warn||r.console.log);return s&&s.call(r.console,i,n),t.apply(this,arguments)}}function p(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&mt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function v(t,e){return typeof t==yt?t.apply(e?e[0]||a:a,e):t}function d(t,e){return t===a?e:t}function m(t,e,n){c(E(e),function(e){t.addEventListener(e,n,!1)})}function g(t,e,n){c(E(e),function(e){t.removeEventListener(e,n,!1)})}function T(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function y(t,e){return t.indexOf(e)>-1}function E(t){return t.trim().split(/\s+/g)}function I(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function A(t){return Array.prototype.slice.call(t,0)}function _(t,e,n){for(var i=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];I(r,o)<0&&i.push(t[s]),r[s]=o,s++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function x(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),s=0;s<gt.length;){if(n=gt[s],i=n?n+r:e,i in t)return i;s++}return a}function C(){return Ct++}function S(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}function b(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){v(t.options.enable,[t])&&n.handler(e)},this.init()}function P(t){var e,n=t.options.inputClass;return new(e=n?n:Pt?H:Dt?V:bt?G:k)(t,D)}function D(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,s=e&Nt&&i-r===0,o=e&(Yt|Ft)&&i-r===0;n.isFirst=!!s,n.isFinal=!!o,s&&(t.session={}),n.eventType=e,w(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function w(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=M(e)),r>1&&!n.firstMultiple?n.firstMultiple=M(e):1===r&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,a=o?o.center:s.center,u=e.center=z(i);e.timeStamp=At(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=F(a,u),e.distance=Y(a,u),O(n,e),e.offsetDirection=X(e.deltaX,e.deltaY);var h=N(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=It(h.x)>It(h.y)?h.x:h.y,e.scale=o?q(o.pointers,i):1,e.rotation=o?W(o.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,R(n,e);var c=t.element;T(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function O(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==Nt&&s.eventType!==Yt||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function R(t,e){var n,i,r,s,o=t.lastInterval||e,u=e.timeStamp-o.timeStamp;if(e.eventType!=Ft&&(u>zt||o.velocity===a)){var h=e.deltaX-o.deltaX,c=e.deltaY-o.deltaY,l=N(u,h,c);i=l.x,r=l.y,n=It(l.x)>It(l.y)?l.x:l.y,s=X(h,c),t.lastInterval=e}else n=o.velocity,i=o.velocityX,r=o.velocityY,s=o.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=s}function M(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:Et(t.pointers[n].clientX),clientY:Et(t.pointers[n].clientY)},n++;return{timeStamp:At(),pointers:e,center:z(e),deltaX:t.deltaX,deltaY:t.deltaY}}function z(t){var e=t.length;if(1===e)return{x:Et(t[0].clientX),y:Et(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:Et(n/e),y:Et(i/e)}}function N(t,e,n){return{x:e/t||0,y:n/t||0}}function X(t,e){return t===e?Wt:It(t)>=It(e)?t<0?qt:kt:e<0?Ht:Lt}function Y(t,e,n){n||(n=Gt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function F(t,e,n){n||(n=Gt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function W(t,e){return F(e[1],e[0],Zt)+F(t[1],t[0],Zt)}function q(t,e){return Y(e[0],e[1],Zt)/Y(t[0],t[1],Zt)}function k(){this.evEl=$t,this.evWin=Jt,this.pressed=!1,b.apply(this,arguments)}function H(){this.evEl=te,this.evWin=ee,b.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function L(){this.evTarget=ie,this.evWin=re,this.started=!1,b.apply(this,arguments)}function U(t,e){var n=A(t.touches),i=A(t.changedTouches);return e&(Yt|Ft)&&(n=_(n.concat(i),"identifier",!0)),[n,i]}function V(){this.evTarget=oe,this.targetIds={},b.apply(this,arguments)}function j(t,e){var n=A(t.touches),i=this.targetIds;if(e&(Nt|Xt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,s,o=A(t.changedTouches),a=[],u=this.target;if(s=n.filter(function(t){return T(t.target,u)}),e===Nt)for(r=0;r<s.length;)i[s[r].identifier]=!0,r++;for(r=0;r<o.length;)i[o[r].identifier]&&a.push(o[r]),e&(Yt|Ft)&&delete i[o[r].identifier],r++;return a.length?[_(s.concat(a),"identifier",!0),a]:void 0}function G(){b.apply(this,arguments);var t=f(this.handler,this);this.touch=new V(this.manager,t),this.mouse=new k(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Z(t,e){t&Nt?(this.primaryTouch=e.changedPointers[0].identifier,B.call(this,e)):t&(Yt|Ft)&&B.call(this,e)}function B(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,ae)}}function J(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],s=Math.abs(e-r.x),o=Math.abs(n-r.y);if(s<=ue&&o<=ue)return!0}return!1}function K(t,e){this.manager=t,this.set(e)}function Q(t){if(y(t,ve))return ve;var e=y(t,de),n=y(t,me);return e&&n?ve:e||n?e?de:me:y(t,fe)?fe:pe}function tt(){if(!ce)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||r.CSS.supports("touch-action",n)}),t}function et(t){this.options=mt({},this.defaults,t||{}),this.id=C(),this.manager=null,this.options.enable=d(this.options.enable,!0),this.state=Te,this.simultaneous={},this.requireFail=[]}function nt(t){return t&_e?"cancel":t&Ie?"end":t&Ee?"move":t&ye?"start":""}function it(t){return t==Lt?"down":t==Ht?"up":t==qt?"left":t==kt?"right":""}function rt(t,e){var n=e.manager;return n?n.get(t):t}function st(){et.apply(this,arguments)}function ot(){st.apply(this,arguments),this.pX=null,this.pY=null}function at(){st.apply(this,arguments)}function ut(){et.apply(this,arguments),this._timer=null,this._input=null}function ht(){st.apply(this,arguments)}function ct(){st.apply(this,arguments)}function lt(){et.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function pt(t,e){return e=e||{},e.recognizers=d(e.recognizers,pt.defaults.preset),new ft(t,e)}function ft(t,e){this.options=mt({},pt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=P(this),this.touchAction=new K(this,this.options.touchAction),vt(this,!0),c(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function vt(t,e){var n=t.element;if(n.style){var i;c(t.options.cssProps,function(r,s){i=x(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function dt(t,e){var n=s.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var mt,gt=["","webkit","Moz","MS","ms","o"],Tt=s.createElement("div"),yt="function",Et=Math.round,It=Math.abs,At=Date.now;mt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var _t=l(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),xt=l(function(t,e){return _t(t,e,!0)},"merge","Use `assign`."),Ct=1,St=/mobile|tablet|ip(ad|hone|od)|android/i,bt="ontouchstart"in r,Pt=x(r,"PointerEvent")!==a,Dt=bt&&St.test(navigator.userAgent),wt="touch",Ot="pen",Rt="mouse",Mt="kinect",zt=25,Nt=1,Xt=2,Yt=4,Ft=8,Wt=1,qt=2,kt=4,Ht=8,Lt=16,Ut=qt|kt,Vt=Ht|Lt,jt=Ut|Vt,Gt=["x","y"],Zt=["clientX","clientY"];b.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(S(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(S(this.element),this.evWin,this.domHandler)}};var Bt={mousedown:Nt,mousemove:Xt,mouseup:Yt},$t="mousedown",Jt="mousemove mouseup";p(k,b,{handler:function(t){var e=Bt[t.type];e&Nt&&0===t.button&&(this.pressed=!0),e&Xt&&1!==t.which&&(e=Yt),this.pressed&&(e&Yt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Rt,srcEvent:t}))}});var Kt={pointerdown:Nt,pointermove:Xt,pointerup:Yt,pointercancel:Ft,pointerout:Ft},Qt={2:wt,3:Ot,4:Rt,5:Mt},te="pointerdown",ee="pointermove pointerup pointercancel";r.MSPointerEvent&&!r.PointerEvent&&(te="MSPointerDown",ee="MSPointerMove MSPointerUp MSPointerCancel"),p(H,b,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Kt[i],s=Qt[t.pointerType]||t.pointerType,o=s==wt,a=I(e,t.pointerId,"pointerId");r&Nt&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):r&(Yt|Ft)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),n&&e.splice(a,1))}});var ne={touchstart:Nt,touchmove:Xt,touchend:Yt,touchcancel:Ft},ie="touchstart",re="touchstart touchmove touchend touchcancel";p(L,b,{handler:function(t){var e=ne[t.type];if(e===Nt&&(this.started=!0),this.started){var n=U.call(this,t,e);e&(Yt|Ft)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:wt,srcEvent:t})}}});var se={touchstart:Nt,touchmove:Xt,touchend:Yt,touchcancel:Ft},oe="touchstart touchmove touchend touchcancel";p(V,b,{handler:function(t){var e=se[t.type],n=j.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:wt,srcEvent:t})}});var ae=2500,ue=25;p(G,b,{handler:function(t,e,n){var i=n.pointerType==wt,r=n.pointerType==Rt;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)Z.call(this,e,n);else if(r&&J.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var he=x(Tt.style,"touchAction"),ce=he!==a,le="compute",pe="auto",fe="manipulation",ve="none",de="pan-x",me="pan-y",ge=tt();K.prototype={set:function(t){t==le&&(t=this.compute()),ce&&this.manager.element.style&&ge[t]&&(this.manager.element.style[he]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return c(this.manager.recognizers,function(e){v(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Q(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=y(i,ve)&&!ge[ve],s=y(i,me)&&!ge[me],o=y(i,de)&&!ge[de];if(r){var a=1===t.pointers.length,u=t.distance<2,h=t.deltaTime<250;if(a&&u&&h)return}return o&&s?void 0:r||s&&n&Ut||o&&n&Vt?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Te=1,ye=2,Ee=4,Ie=8,Ae=Ie,_e=16,xe=32;et.prototype={defaults:{},set:function(t){return mt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(h(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=rt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return h(t,"dropRecognizeWith",this)?this:(t=rt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(h(t,"requireFailure",this))return this;var e=this.requireFail;return t=rt(t,this),I(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(h(t,"dropRequireFailure",this))return this;t=rt(t,this);var e=I(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<Ie&&e(n.options.event+nt(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=Ie&&e(n.options.event+nt(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=xe)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(xe|Te)))return!1;t++}return!0},recognize:function(t){var e=mt({},t);return v(this.options.enable,[this,e])?(this.state&(Ae|_e|xe)&&(this.state=Te),this.state=this.process(e),void(this.state&(ye|Ee|Ie|_e)&&this.tryEmit(e))):(this.reset(),void(this.state=xe))},process:function(t){},getTouchAction:function(){},reset:function(){}},p(st,et,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(ye|Ee),r=this.attrTest(t);return i&&(n&Ft||!r)?e|_e:i||r?n&Yt?e|Ie:e&ye?e|Ee:ye:xe}}),p(ot,st,{defaults:{event:"pan",threshold:10,pointers:1,direction:jt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Ut&&e.push(me),t&Vt&&e.push(de),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&Ut?(r=0===s?Wt:s<0?qt:kt,n=s!=this.pX,i=Math.abs(t.deltaX)):(r=0===o?Wt:o<0?Ht:Lt,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return st.prototype.attrTest.call(this,t)&&(this.state&ye||!(this.state&ye)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=it(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),p(at,st,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ve]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ye)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),p(ut,et,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[pe]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(Yt|Ft)&&!r)this.reset();else if(t.eventType&Nt)this.reset(),this._timer=u(function(){this.state=Ae,this.tryEmit()},e.time,this);else if(t.eventType&Yt)return Ae;return xe},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Ae&&(t&&t.eventType&Yt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=At(),this.manager.emit(this.options.event,this._input)))}}),p(ht,st,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ve]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ye)}}),p(ct,st,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ut|Vt,pointers:1},getTouchAction:function(){return ot.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Ut|Vt)?e=t.overallVelocity:n&Ut?e=t.overallVelocityX:n&Vt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&It(e)>this.options.velocity&&t.eventType&Yt},emit:function(t){var e=it(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),p(lt,et,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[fe]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Nt&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=Yt)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||Y(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t;var a=this.count%e.taps;if(0===a)return this.hasRequireFailures()?(this._timer=u(function(){this.state=Ae,this.tryEmit()},e.interval,this),ye):Ae}return xe},failTimeout:function(){return this._timer=u(function(){this.state=xe},this.options.interval,this),xe},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Ae&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),pt.VERSION="2.0.7",pt.defaults={domEvents:!1,touchAction:le,enable:!0,inputTarget:null,inputClass:null,preset:[[ht,{enable:!1}],[at,{enable:!1},["rotate"]],[ct,{direction:Ut}],[ot,{direction:Ut},["swipe"]],[lt],[lt,{event:"doubletap",taps:2},["tap"]],[ut]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Ce=1,Se=2;ft.prototype={set:function(t){return mt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?Se:Ce},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Ae)&&(r=e.curRecognizer=null);for(var s=0;s<i.length;)n=i[s],e.stopped===Se||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(ye|Ee|Ie)&&(r=e.curRecognizer=n),s++}},get:function(t){if(t instanceof et)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(h(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(h(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=I(e,t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return c(E(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return c(E(t),function(t){e?n[t]&&n[t].splice(I(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&dt(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&vt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},mt(pt,{INPUT_START:Nt,INPUT_MOVE:Xt,INPUT_END:Yt,INPUT_CANCEL:Ft,STATE_POSSIBLE:Te,STATE_BEGAN:ye,STATE_CHANGED:Ee,STATE_ENDED:Ie,STATE_RECOGNIZED:Ae,STATE_CANCELLED:_e,STATE_FAILED:xe,DIRECTION_NONE:Wt,DIRECTION_LEFT:qt,DIRECTION_RIGHT:kt,DIRECTION_UP:Ht,DIRECTION_DOWN:Lt,DIRECTION_HORIZONTAL:Ut,DIRECTION_VERTICAL:Vt,DIRECTION_ALL:jt,Manager:ft,Input:b,TouchAction:K,TouchInput:V,MouseInput:k,PointerEventInput:H,TouchMouseInput:G,SingleTouchInput:L,Recognizer:et,AttrRecognizer:st,Tap:lt,Pan:ot,Swipe:ct,Pinch:at,Rotate:ht,Press:ut,on:m,off:g,each:c,merge:xt,extend:_t,assign:mt,inherit:p,bindFn:f,prefixed:x});var be="undefined"!=typeof r?r:"undefined"!=typeof self?self:{};be.Hammer=pt,i=function(){return pt}.call(e,n,e,t),!(i!==a&&(t.exports=i))}(window,document,"Hammer")}]);