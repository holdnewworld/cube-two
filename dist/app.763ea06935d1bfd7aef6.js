webpackJsonp([1,0],[function(e,t,i){e.exports=i(6)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.log=console.log.bind(console),t.error=console.error.bind(console),t.debug=console.debug.bind(console)},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ROTATION_VIEW=t.EVENT_NAMES=t.KEY=t.LEFT=t.OPPOSITE=t.STATES_ARRAY=t.STATES=void 0;var s=i(3),n=a(s),r={X:20,Y:30};(0,n.default)(r);var u={uf:"uf",ur:"ur",ub:"ub",ul:"ul",fu:"fu",fl:"fl",fd:"fd",fr:"fr",ru:"ru",rf:"rf",rd:"rd",rb:"rb",df:"df",dl:"dl",db:"db",dr:"dr",bu:"bu",br:"br",bd:"bd",bl:"bl",lu:"lu",lb:"lb",ld:"ld",lf:"lf"};(0,n.default)(u);var o=[];Object.keys(u).forEach(function(e,t){return o.push(e)}),(0,n.default)(o);var c={LEFT:37,UP:38,RIGHT:39,DOWN:40,a:65,d:68,e:69,q:81,s:83,w:87,x:88,y:89,z:90};(0,n.default)(c);var l={init:"init",statechange:"statechange",beforerotate:"beforerotate",afterrotate:"afterrotate"};(0,n.default)(l);var d=[];d.u="d",d.d="u",d.r="l",d.l="r",d.f="b",d.b="f";var p=[];p.uf="l",p.ur="f",p.ub="r",p.ul="b",p.fu="r",p.fl="u",p.fd="l",p.fr="d",p.ru="b",p.rf="u",p.rd="f",p.rb="d",p.df="r",p.dl="f",p.db="l",p.dr="b",p.bu="l",p.br="u",p.bd="r",p.bl="d",p.lu="f",p.lb="u",p.ld="b",p.lf="d",t.STATES=u,t.STATES_ARRAY=o,t.OPPOSITE=d,t.LEFT=p,t.KEY=c,t.EVENT_NAMES=l,t.ROTATION_VIEW=r},function(e,t){e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(i){!t.hasOwnProperty(i)||null===t[i]||"object"!=typeof t[i]&&"function"!=typeof t[i]||Object.isFrozen(t[i])||e(t[i])}),t}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.qs=function(e,t){return(t||document).querySelector(e)},t.qsa=function(e,t){return[].slice.call((t||document).querySelectorAll(e),0)},t.byId=function(e){return document.getElementById(e)}},function(e,t){},function(e,t,i){"use strict";i(5);var a=i(1),s=i(4),n=i(2),r=i(12),u=((0,s.qs)(".body-wrapper"),(0,s.byId)("cubetwo-component-1")),o=(0,s.qs)(".cubetwo-rotation-view",u),c=new r.CubeTwo({cubeComponent:u,isTapEnabled:!0,isRotateAnimationEnabled:!0,transition:"transform cubic-bezier(0.4, 0.0, 0.2, 1) 200ms",isAnimationLockEnabled:!0,backgroundImages:{f:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/157670/fox.svg"},backgroundColors:{u:"rgba(255, 255, 255, .9)",f:"rgba(0, 158, 96, .9)",r:"rgba(196, 30, 58, .9)",l:"rgba(255, 88, 0, .9)",b:"rgba(0, 81, 186, .9)",d:"rgba(255, 213, 0, .9)",_:"transparent"}});c.addCallbackForEvent("init",function(e,t){}),c.init();var l=(0,s.qs)(".cubetwo-js.cubetwo-btn-menu",u),d=(0,s.qs)(".cubetwo-menu-component");l.addEventListener("click",function(e){d.classList.toggle("cubetwo-show-dialog"),e.currentTarget.classList.toggle("cubetwo-active")});var p=(0,s.qs)(".cubetwo-js.cubetwo-btn-help",u),f=(0,s.qs)(".cubetwo-help-component");p.addEventListener("click",function(e){f.classList.toggle("cubetwo-show-dialog"),e.currentTarget.classList.toggle("cubetwo-active")}),(0,s.qs)(".cubetwo-btn-top-left",u).addEventListener("click",function(e){return o.style.transform="rotateX("+n.ROTATION_VIEW.X+"deg) rotateY(-"+n.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,s.qs)(".cubetwo-btn-top-right",u).addEventListener("click",function(e){return o.style.transform="rotateX("+n.ROTATION_VIEW.X+"deg) rotateY("+n.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,s.qs)(".cubetwo-btn-bottom-left",u).addEventListener("click",function(e){return o.style.transform="rotateX(-"+n.ROTATION_VIEW.X+"deg) rotateY(-"+n.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,s.qs)(".cubetwo-btn-bottom-right",u).addEventListener("click",function(e){return o.style.transform="rotateX(-"+n.ROTATION_VIEW.X+"deg) rotateY("+n.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,s.qs)(".cubetwo-btn-top-center",u).addEventListener("click",function(e){return c.x()}),(0,s.qs)(".cubetwo-btn-bottom-center",u).addEventListener("click",function(e){return c.x_()}),(0,s.qs)(".cubetwo-js.cubetwo-btn-rotate-left",u).addEventListener("click",function(e){return c.y_()}),(0,s.qs)(".cubetwo-js.cubetwo-btn-rotate-left-2x",u).addEventListener("click",function(e){return c.y2_()}),(0,s.qs)(".cubetwo-js.cubetwo-btn-rotate-right",u).addEventListener("click",function(e){return c.y()}),(0,s.qs)(".cubetwo-js.cubetwo-btn-rotate-right-2x",u).addEventListener("click",function(e){return c.y2()}),window.addEventListener("keydown",c.handleGlobalKeyEvent,!1),window.cubetwo=c,(0,a.log)("cubetwo is available in console")},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CUBE_COUNT=8,t.CUBE_SIZE_2X="50vmin"},function(e,t,i){"use strict";function a(e){switch(e.stopPropagation(),e.keyCode){case p.KEY.LEFT:case p.KEY.a:this.U();break;case p.KEY.UP:e.preventDefault();case p.KEY.w:this.L_();break;case p.KEY.RIGHT:case p.KEY.d:this.U_();break;case p.KEY.DOWN:e.preventDefault();case p.KEY.s:this.L();break;case p.KEY.q:this.F_();break;case p.KEY.e:this.F();break;case p.KEY.x:this.x();break;case p.KEY.y:this.y();break;case p.KEY.z:this.z()}}function s(e){switch(e.stopPropagation(),e.keyCode){case p.KEY.LEFT:case p.KEY.a:this.U();break;case p.KEY.UP:e.preventDefault();case p.KEY.w:this.R();break;case p.KEY.RIGHT:case p.KEY.d:this.U_();break;case p.KEY.DOWN:e.preventDefault();case p.KEY.s:this.R_();break;case p.KEY.q:this.F_();break;case p.KEY.e:this.F();break;case p.KEY.x:this.x();break;case p.KEY.y:this.y();break;case p.KEY.z:this.z()}}function n(e){switch(e.stopPropagation(),e.keyCode){case p.KEY.LEFT:case p.KEY.a:this.D_();break;case p.KEY.UP:e.preventDefault();case p.KEY.w:this.L_();break;case p.KEY.RIGHT:case p.KEY.d:this.D();break;case p.KEY.DOWN:e.preventDefault();case p.KEY.s:this.L();break;case p.KEY.q:this.F_();break;case p.KEY.e:this.F();break;case p.KEY.x:this.x();break;case p.KEY.y:this.y();break;case p.KEY.z:this.z()}}function r(e){switch(e.stopPropagation(),e.keyCode){case p.KEY.LEFT:case p.KEY.a:this.D_();break;case p.KEY.UP:e.preventDefault();case p.KEY.w:this.R();break;case p.KEY.RIGHT:case p.KEY.d:this.D();break;case p.KEY.DOWN:e.preventDefault();case p.KEY.s:this.R_();break;case p.KEY.q:this.F_();break;case p.KEY.e:this.F();break;case p.KEY.x:this.x();break;case p.KEY.y:this.y();break;case p.KEY.z:this.z()}}function u(e){switch(e.stopPropagation(),e.keyCode){case p.KEY.LEFT:case p.KEY.a:this.U();break;case p.KEY.UP:e.preventDefault();case p.KEY.w:this.L_();break;case p.KEY.RIGHT:case p.KEY.d:this.U_();break;case p.KEY.DOWN:e.preventDefault();case p.KEY.s:this.L();break;case p.KEY.q:this.B();break;case p.KEY.e:this.B_();break;case p.KEY.x:this.x();break;case p.KEY.y:this.y();break;case p.KEY.z:this.z()}}function o(e){switch(e.stopPropagation(),e.keyCode){case p.KEY.LEFT:case p.KEY.a:this.U();break;case p.KEY.UP:e.preventDefault();case p.KEY.w:this.R();break;case p.KEY.RIGHT:case p.KEY.d:this.U_();break;case p.KEY.DOWN:e.preventDefault();case p.KEY.s:this.R_();break;case p.KEY.q:this.B();break;case p.KEY.e:this.B_();break;case p.KEY.x:this.x();break;case p.KEY.y:this.y();break;case p.KEY.z:this.z()}}function c(e){switch(e.stopPropagation(),e.keyCode){case p.KEY.LEFT:case p.KEY.a:this.D_();break;case p.KEY.UP:e.preventDefault();case p.KEY.w:this.L_();break;case p.KEY.RIGHT:case p.KEY.d:this.D();break;case p.KEY.DOWN:e.preventDefault();case p.KEY.s:this.L();break;case p.KEY.q:this.B();break;case p.KEY.e:this.B_();break;case p.KEY.x:this.x();break;case p.KEY.y:this.y();break;case p.KEY.z:this.z()}}function l(e){switch(e.stopPropagation(),e.keyCode){case p.KEY.LEFT:case p.KEY.a:this.D_();break;case p.KEY.UP:e.preventDefault();case p.KEY.w:this.R();break;case p.KEY.RIGHT:case p.KEY.d:this.D();break;case p.KEY.DOWN:e.preventDefault();case p.KEY.s:this.R_();break;case p.KEY.q:this.B();break;case p.KEY.e:this.B_();break;case p.KEY.x:this.x();break;case p.KEY.y:this.y();break;case p.KEY.z:this.z()}}function d(e){switch(e.keyCode){case p.KEY.LEFT:case p.KEY.a:this.y_();break;case p.KEY.UP:e.preventDefault();case p.KEY.w:case p.KEY.x:this.x();break;case p.KEY.RIGHT:case p.KEY.d:case p.KEY.y:this.y();break;case p.KEY.DOWN:e.preventDefault();case p.KEY.s:this.x_();break;case p.KEY.q:this.z_();break;case p.KEY.e:case p.KEY.z:this.z()}}Object.defineProperty(t,"__esModule",{value:!0}),t.handleKeyEventCube1=a,t.handleKeyEventCube2=s,t.handleKeyEventCube3=n,t.handleKeyEventCube4=r,t.handleKeyEventCube5=u,t.handleKeyEventCube6=o,t.handleKeyEventCube7=c,t.handleKeyEventCube8=l,t.handleGlobalKeyEvent=d;var p=i(2)},function(e,t,i){(function(e){"use strict";function a(t){var i=this,a=t&&t.isTapEnabled,s=this._touchElements[1],n=(0,d.qs)('[data-type="up"]',s),r=(0,d.qs)('[data-type="front"]',s),u=(0,d.qs)('[data-type="left"]',s),o=new e.Swipe;o.set({direction:e.DIRECTION_ALL});var c=new e.Manager(r,{});c.add(o),c.add(new e.Tap({event:"singletab"})),c.on("singletab swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletab":a&&i.L_();break;case"swipeup":i.L_();break;case"swiperight":i.U_();break;case"swipedown":i.L();break;case"swipeleft":i.U()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(n,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type,s=e.target;switch("cubetwo"!==s.dataset.type&&(s=s.parentElement,"cubetwo"!==s.dataset.type&&(s=s.parentElement)),t){case"singletap":a&&i.F_();break;case"swipeup":i.L_();break;case"swiperight":i.F();break;case"swipedown":i.L();break;case"swipeleft":i.F_()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(u,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type,s=e.target;switch("cubetwo"!==s.dataset.type&&(s=s.parentElement,"cubetwo"!==s.dataset.type&&(s=s.parentElement)),t){case"singletap":a&&i.U_();break;case"swipeup":i.F();break;case"swiperight":i.U_();break;case"swipedown":i.F_();break;case"swipeleft":i.U()}})}function s(t){var i=this,a=t&&t.isTapEnabled,s=this._touchElements[2],n=(0,d.qs)('[data-type="up"]',s),r=(0,d.qs)('[data-type="front"]',s),u=(0,d.qs)('[data-type="right"]',s),o=new e.Swipe;o.set({direction:e.DIRECTION_ALL});var c=new e.Manager(r,{});c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.R();break;case"swipeup":i.R();break;case"swiperight":i.U_();break;case"swipedown":i.R_();break;case"swipeleft":i.U()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(n,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type,s=e.target;switch("cubetwo"!==s.dataset.type&&(s=s.parentElement,"cubetwo"!==s.dataset.type&&(s=s.parentElement)),t){case"singletap":a&&i.F();break;case"swipeup":i.R();break;case"swiperight":i.F();break;case"swipedown":i.R_();break;case"swipeleft":i.F_()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(u,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type,s=e.target;switch("cubetwo"!==s.dataset.type&&(s=s.parentElement,"cubetwo"!==s.dataset.type&&(s=s.parentElement)),t){case"singletap":a&&i.U();break;case"swipeup":i.F_();break;case"swiperight":i.U_();break;case"swipedown":i.F();break;case"swipeleft":i.U()}})}function n(t){var i=this,a=t&&t.isTapEnabled,s=this._touchElements[3],n=(0,d.qs)('[data-type="down"]',s),r=(0,d.qs)('[data-type="front"]',s),u=(0,d.qs)('[data-type="left"]',s),o=new e.Swipe;o.set({direction:e.DIRECTION_ALL});var c=new e.Manager(r,{});c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.L();break;case"swipeup":i.L_();break;case"swiperight":i.D();break;case"swipedown":i.L();break;case"swipeleft":i.D_()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(n,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.F();break;case"swipeup":i.L_();break;case"swiperight":i.F_();break;case"swipedown":i.L();break;case"swipeleft":i.F()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(u,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.D();break;case"swipeup":i.F();break;case"swiperight":i.D();break;case"swipedown":i.F_();break;case"swipeleft":i.D_()}})}function r(t){var i=this,a=t&&t.isTapEnabled,s=this._touchElements[4],n=(0,d.qs)('[data-type="down"]',s),r=(0,d.qs)('[data-type="front"]',s),u=(0,d.qs)('[data-type="right"]',s),o=new e.Swipe;o.set({direction:e.DIRECTION_ALL});var c=new e.Manager(r,{});c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.R_();break;case"swipeup":i.R();break;case"swiperight":i.D();break;case"swipedown":i.R_();break;case"swipeleft":i.D_()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(n,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.F_();break;case"swipeup":i.R();break;case"swiperight":i.F_();break;case"swipedown":i.R_();break;case"swipeleft":i.F()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(u,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.D_();break;case"swipeup":i.F_();break;case"swiperight":i.D();break;case"swipedown":i.F();break;case"swipeleft":i.D_()}})}function u(t){var i=this,a=t&&t.isTapEnabled,s=this._touchElements[5],n=(0,d.qs)('[data-type="up"]',s),r=(0,d.qs)('[data-type="back"]',s),u=(0,d.qs)('[data-type="left"]',s),o=new e.Swipe;o.set({direction:e.DIRECTION_ALL});var c=new e.Manager(r,{});c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.L_();break;case"swipeup":i.L_();break;case"swiperight":i.U_();break;case"swipedown":i.L();break;case"swipeleft":i.U()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(n,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.B();break;case"swipeup":i.L_();break;case"swiperight":i.B_();break;case"swipedown":i.L();break;case"swipeleft":i.B()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(u,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.U();break;case"swipeup":i.B_();break;case"swiperight":i.U_();break;case"swipedown":i.B();break;case"swipeleft":i.U()}})}function o(t){var i=this,a=t&&t.isTapEnabled,s=this._touchElements[6],n=(0,d.qs)('[data-type="up"]',s),r=(0,d.qs)('[data-type="back"]',s),u=(0,d.qs)('[data-type="right"]',s),o=new e.Swipe;o.set({direction:e.DIRECTION_ALL});var c=new e.Manager(r,{});c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":break;case"swipeup":i.R();break;case"swiperight":i.U_();break;case"swipedown":i.R_();break;case"swipeleft":i.U()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(n,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.B_();break;case"swipeup":i.R();break;case"swiperight":i.B_();break;case"swipedown":i.R_();break;case"swipeleft":i.B()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(u,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.U_();break;case"swipeup":i.B();break;case"swiperight":i.U_();break;case"swipedown":i.B_();break;case"swipeleft":i.U()}})}function c(t){var i=this,a=(t&&t.isTapEnabled,this._touchElements[7]),s=(0,d.qs)('[data-type="down"]',a),n=(0,d.qs)('[data-type="back"]',a),r=(0,d.qs)('[data-type="left"]',a),u=new e.Swipe;u.set({direction:e.DIRECTION_ALL});var o=new e.Manager(n,{});o.add(u),o.add(new e.Tap({event:"singletap"})),o.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":break;case"swipeup":i.L_();break;case"swiperight":i.D();break;case"swipedown":i.L();break;case"swipeleft":i.D_()}}),u=new e.Swipe,u.set({direction:e.DIRECTION_ALL}),o=new e.Manager(s,{}),o.add(u),o.add(new e.Tap({event:"singletap"})),o.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":i.B_();break;case"swipeup":i.L_();break;case"swiperight":i.B();break;case"swipedown":i.L();break;case"swipeleft":i.B_()}}),u=new e.Swipe,u.set({direction:e.DIRECTION_ALL}),o=new e.Manager(r,{}),o.add(u),o.add(new e.Tap({event:"singletap"})),o.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":i.D_();break;case"swipeup":i.B_();break;case"swiperight":i.D();break;case"swipedown":i.B();break;case"swipeleft":i.D_()}})}function l(t){var i=this,a=t&&t.isTapEnabled,s=this._touchElements[8],n=(0,d.qs)('[data-type="down"]',s),r=(0,d.qs)('[data-type="back"]',s),u=(0,d.qs)('[data-type="right"]',s),o=new e.Swipe;o.set({direction:e.DIRECTION_ALL});var c=new e.Manager(r,{});c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.R_();break;case"swipeup":i.R();break;case"swiperight":i.D();break;case"swipedown":i.R_();break;case"swipeleft":i.D_()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(n,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.B();break;case"swipeup":i.R();break;case"swiperight":i.B();break;case"swipedown":i.R_();break;case"swipeleft":i.B_()}}),o=new e.Swipe,o.set({direction:e.DIRECTION_ALL}),c=new e.Manager(u,{}),c.add(o),c.add(new e.Tap({event:"singletap"})),c.on("singletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type;e.target;switch(t){case"singletap":a&&i.D();break;case"swipeup":i.B();break;case"swiperight":i.D();break;case"swipedown":i.B_();break;case"swipeleft":i.D_()}})}Object.defineProperty(t,"__esModule",{value:!0}),t.setupCube1=a,t.setupCube2=s,t.setupCube3=n,t.setupCube4=r,t.setupCube5=u,t.setupCube6=o,t.setupCube7=c,t.setupCube8=l;var d=i(4);i(1)}).call(t,i(15))},function(e,t,i){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CubeTwoUi=void 0;var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}();i(1),t.CubeTwoUi=function(){function e(t){a(this,e),this.displayElements=t}return s(e,[{key:"uiF_Helper",value:function(e){this.displayElements[1].style.transformOrigin="100% 100%",this.displayElements[2].style.transformOrigin="0% 100%",this.displayElements[3].style.transformOrigin="100% 0%",this.displayElements[4].style.transformOrigin="0% 0%",this.displayElements[1].style.transform="rotateZ("+e+"deg)",this.displayElements[2].style.transform="rotateZ("+e+"deg)",this.displayElements[3].style.transform="rotateZ("+e+"deg)",this.displayElements[4].style.transform="rotateZ("+e+"deg)"}},{key:"uiF",value:function(){this.uiF_Helper("90")}},{key:"uiF_",value:function(){this.uiF_Helper("-90")}},{key:"uiF2",value:function(){this.uiF_Helper("180")}},{key:"uiF2_",value:function(){this.uiF_Helper("-180")}},{key:"uiB_Helper",value:function(e){this.displayElements[5].style.transformOrigin="100% 100%",this.displayElements[6].style.transformOrigin="0% 100%",this.displayElements[7].style.transformOrigin="100% 0%",this.displayElements[8].style.transformOrigin="0% 0%",this.displayElements[5].style.transform="rotateZ("+e+"deg)",this.displayElements[6].style.transform="rotateZ("+e+"deg)",this.displayElements[7].style.transform="rotateZ("+e+"deg)",this.displayElements[8].style.transform="rotateZ("+e+"deg)"}},{key:"uiB",value:function(){this.uiB_Helper("-90")}},{key:"uiB_",value:function(){this.uiB_Helper("90")}},{key:"uiB2",value:function(){this.uiB_Helper("-180")}},{key:"uiB2_",value:function(){this.uiB_Helper("180")}},{key:"uiU_Helper",value:function(e){this.displayElements[1].style.transformOrigin="100% 0%",this.displayElements[2].style.transformOrigin="0% 0%",this.displayElements[5].style.transformOrigin="100% 0%",this.displayElements[6].style.transformOrigin="0% 0%",this.displayElements[1].style.transform="rotateY("+e+"deg)",this.displayElements[2].style.transform="rotateY("+e+"deg)",this.displayElements[5].style.transform="rotateY("+e+"deg)",this.displayElements[6].style.transform="rotateY("+e+"deg)"}},{key:"uiU",value:function(){this.uiU_Helper("-90")}},{key:"uiU_",value:function(){this.uiU_Helper("90")}},{key:"uiU2",value:function(){this.uiU_Helper("-180")}},{key:"uiU2_",value:function(){this.uiU_Helper("180")}},{key:"uiD_Helper",value:function(e){this.displayElements[3].style.transformOrigin="100% 0%",this.displayElements[4].style.transformOrigin="0% 0%",this.displayElements[7].style.transformOrigin="100% 0%",this.displayElements[8].style.transformOrigin="0% 0%",this.displayElements[3].style.transform="rotateY("+e+"deg)",this.displayElements[4].style.transform="rotateY("+e+"deg)",this.displayElements[7].style.transform="rotateY("+e+"deg)",this.displayElements[8].style.transform="rotateY("+e+"deg)"}},{key:"uiD",value:function(){this.uiD_Helper("90")}},{key:"uiD_",value:function(){this.uiD_Helper("-90")}},{key:"uiD2",value:function(){this.uiD_Helper("180")}},{key:"uiD2_",value:function(){this.uiD_Helper("-180")}},{key:"uiR_Helper",value:function(e){this.displayElements[2].style.transformOrigin="0% 100%",this.displayElements[6].style.transformOrigin="0% 100%",this.displayElements[8].style.transformOrigin="0% 0%",this.displayElements[4].style.transformOrigin="0% 0%",this.displayElements[2].style.transform="rotateX("+e+"deg)",this.displayElements[6].style.transform="rotateX("+e+"deg)",this.displayElements[8].style.transform="rotateX("+e+"deg)",this.displayElements[4].style.transform="rotateX("+e+"deg)"}},{key:"uiR",value:function(){this.uiR_Helper("90")}},{key:"uiR_",value:function(){this.uiR_Helper("-90")}},{key:"uiR2",value:function(){this.uiR_Helper("180")}},{key:"uiR2_",value:function(){this.uiR_Helper("-180")}},{key:"uiL_Helper",value:function(e){this.displayElements[1].style.transformOrigin="0% 100%",this.displayElements[5].style.transformOrigin="0% 100%",this.displayElements[7].style.transformOrigin="0% 0%",this.displayElements[3].style.transformOrigin="0% 0%",this.displayElements[1].style.transform="rotateX("+e+"deg)",this.displayElements[5].style.transform="rotateX("+e+"deg)",this.displayElements[7].style.transform="rotateX("+e+"deg)",this.displayElements[3].style.transform="rotateX("+e+"deg)"}},{key:"uiL",value:function(){this.uiL_Helper("-90")}},{key:"uiL_",value:function(){this.uiL_Helper("90")}},{key:"uiL2",value:function(){this.uiL_Helper("-180")}},{key:"uiL2_",value:function(){this.uiL_Helper("180")}},{key:"uix",value:function(){this.uiR(),this.uiL_()}},{key:"uix_",value:function(){this.uiR_(),this.uiL()}},{key:"uix2",value:function(){this.uiR2(),this.uiL2_()}},{key:"uix2_",value:function(){this.uiR2_(),this.uiL2()}},{key:"uiy",value:function(){this.uiU_(),this.uiD()}},{key:"uiy_",value:function(){this.uiU(),this.uiD_()}},{key:"uiy2",value:function(){this.uiU2_(),this.uiD2()}},{key:"uiy2_",value:function(){this.uiU2(),this.uiD2_()}},{key:"uiz",value:function(){this.uiF(),this.uiB_()}},{key:"uiz_",value:function(){this.uiF_(),this.uiB()}},{key:"uiz2",value:function(){this.uiF2(),this.uiB2_()}},{key:"uiz2_",value:function(){this.uiF2_(),this.uiB2()}}]),e}()},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CubeTwo=void 0;var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),r=i(1),u=i(4),o=i(3),c=a(o),l=i(13),d=i(9),p=i(7),f=i(10),b=i(14),h=a(b),w=i(2),_=i(8),g=function(){function e(t){return s(this,e),t?t.cubeComponent?(this._cubeComponentEl=t.cubeComponent,this._appState={},this._ui=null,this._config=(0,l.cloneObject)(t),this._parseConfig(this._config,this._cubeComponentEl),this._updateEventBindings(),this._initCallbacks(),void this._setState({code:{c1:"uf",c2:"uf",c3:"uf",c4:"uf",c5:"uf",c6:"uf",c7:"uf",c8:"uf"},isRotateEnabled:!0})):void(0,r.error)("CubeTwo element was not provided: "+t.cubeComponent):void(0,r.error)("config is invalid for CubeTwo")}return n(e,[{key:"_parseConfig",value:function(e,t){function i(e,t){e?r[t]={c:s[t],c1:s[t]+' url("'+n[t]+'") 0% 0% / '+p.CUBE_SIZE_2X+" "+p.CUBE_SIZE_2X+" no-repeat",c2:s[t]+' url("'+n[t]+'") 100% 0% / '+p.CUBE_SIZE_2X+" "+p.CUBE_SIZE_2X+" no-repeat",c3:s[t]+' url("'+n[t]+'") 0% 100% / '+p.CUBE_SIZE_2X+" "+p.CUBE_SIZE_2X+" no-repeat",c4:s[t]+' url("'+n[t]+'") 100% 100% / '+p.CUBE_SIZE_2X+" "+p.CUBE_SIZE_2X+" no-repeat"}:r[t]={c:s[t],c1:s[t],c2:s[t],c3:s[t],c4:s[t]}}e.isRotateAnimationEnabled!==!1&&(e.isRotateAnimationEnabled=!0),e.isTapEnabled!==!1&&(e.isTapEnabled=!0),e.isAnimationLockEnabled!==!1&&(e.isAnimationLockEnabled=!0),e.transition&&(0,u.qsa)('[data-type="cubetwo-display"]',t).forEach(function(t){t.style.transition=e.transition}),e.backgroundImages=e.backgroundImages||{},e.backgroundColors=e.backgroundColors||{};var a=e.backgroundColors,s={};s._=a._?a._:h.default._,s.f=a.f?a.f:h.default.f,s.b=a.b?a.b:h.default.b,s.u=a.u?a.u:h.default.u,s.d=a.d?a.d:h.default.d,s.r=a.r?a.r:h.default.r,s.l=a.l?a.l:h.default.l,e.backgroundColors=s;var n=e.backgroundImages,r={};r._=n._?s._+' url("'+n._+'")':""+s._,i(n.f,"f"),i(n.b,"b"),i(n.u,"u"),i(n.d,"d"),i(n.r,"r"),i(n.l,"l"),e.cubeSkins=r,(0,c.default)(e)}},{key:"_updateEventBindings",value:function(){this._transitionEnd=this._transitionEnd.bind(this),this.handleGlobalKeyEvent=_.handleGlobalKeyEvent.bind(this)}},{key:"_initCallbacks",value:function(){var e=this;this.callbacks={},Object.keys(w.EVENT_NAMES).forEach(function(t,i){return e.callbacks[t]=[]})}},{key:"addCallbackForEvent",value:function(e,t){var i=this.callbacks[e=e.toLowerCase()];i&&"function"==typeof t&&i.push(t)}},{key:"_triggerEvent",value:function(e,t){var i=this.callbacks[e]||[],a=void 0,s=void 0;for(a=0,s=i.length;a<s;a++)i[a].call(this,e,t)}},{key:"getState",value:function(){return(0,l.cloneObject)(this._appState)}},{key:"_setState",value:function(e){var t=(0,l.cloneObject)(e),i=this._appState.code,a=t.code;this._appState=t,i!==a&&this._triggerEvent("statechange",{cube:this.cubeComponentEl,previousStateCode:i,currentStateCode:a,state:t})}},{key:"F",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiF})}},{key:"F_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiF_})}},{key:"F2",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiF2})}},{key:"F2_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiF2_})}},{key:"B",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiB})}},{key:"B_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiB_})}},{key:"B2",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiB2})}},{key:"B2_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiB2_})}},{key:"U",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiU})}},{key:"U_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiU_})}},{key:"U2",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiU2})}},{key:"U2_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiU2_})}},{key:"D",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiD})}},{key:"D_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiD_})}},{key:"D2",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiD2})}},{key:"D2_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiD2_})}},{key:"R",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiR})}},{key:"R_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiR_})}},{key:"R2",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiR2})}},{key:"R2_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiR2_})}},{key:"L",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiL})}},{key:"L_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiL_})}},{key:"L2",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiL2})}},{key:"L2_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiL2_})}},{key:"x",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uix})}},{key:"x_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uix_})}},{key:"x2",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uix2})}},{key:"x2_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uix2_})}},{key:"y",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiy})}},{key:"y_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiy_})}},{key:"y2",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiy2})}},{key:"y2_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiy2_})}},{key:"z",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiz})}},{key:"z2",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiz2})}},{key:"z_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiz_})}},{key:"z2_",value:function(e){this._rotationInvoke({config:e,ui:this._ui.uiz2_})}},{key:"_rotationInvoke",value:function(e){var t=(e.config,e.ui),i=this._config;if(i.isRotateAnimationEnabled){var a=this.getState();if(i.isAnimationLockEnabled&&!a.isRotateEnabled)return void(0,r.debug)("rotate is locked "+new Date);i.isAnimationLockEnabled&&(a.isRotateEnabled=!1,this._setState(a)),t.bind(this._ui)()}else(0,r.debug)("isRotateAnimationEnabled is false"),this._updateUiFaces()}},{key:"destroy",value:function(){}},{key:"_updateUiFaces",value:function(){}},{key:"_transitionEnd",value:function(e){var t=this,i=e.currentTarget,a=this._config;i&&!function(){var e=i.style.transition;i.style.transition="0s",(0,l.nextFrame)(function(s){i.style.transformOrigin="",i.style.transform="",t._updateUiFaces(),(0,l.rAF)(function(s){if(i.style.transition=e,a.isAnimationLockEnabled){var n=t.getState();n.isRotateEnabled=!0,t._setState(n)}t._triggerEvent("afterrotate",{state:t.getState()})})})}()}},{key:"init",value:function(){this._cubeElements=[""],this._touchElements=[""],this._displayElements=[{}];for(var e=this._config,t=1;t<=p.CUBE_COUNT;t++){var i=(0,u.qs)(".cubetwo-cube-"+t,this._cubeComponentEl),a=(0,u.qs)('[data-type="cubetwo-touch"]',i),s=(0,u.qs)('[data-type="cubetwo-display"]',i);s||(0,r.error)("buuh");var n=(0,u.qs)('[data-type="front"] > div',s),o=(0,u.qs)('[data-type="back"] > div',s),l=(0,u.qs)('[data-type="up"] > div',s),b=(0,
u.qs)('[data-type="down"] > div',s),h=(0,u.qs)('[data-type="right"] > div',s),w=(0,u.qs)('[data-type="left"] > div',s);this._cubeElements.push(i),this._displayElements.push({root:s,f:n,b:o,u:l,d:b,r:h,l:w}),this._touchElements.push(a)}(0,c.default)(this._cubeElements),(0,c.default)(this._touchElements),this._ui=new f.CubeTwoUi(this._displayElements.map(function(e){return e.root}));for(var t=1;t<=p.CUBE_COUNT;t++){var g=this._displayElements[t].root;g&&g.addEventListener("transitionend",this._transitionEnd)}d.setupCube1.bind(this)(e),d.setupCube2.bind(this)(e),d.setupCube3.bind(this)(e),d.setupCube4.bind(this)(e),d.setupCube5.bind(this)(e),d.setupCube6.bind(this)(e),d.setupCube7.bind(this)(e),d.setupCube8.bind(this)(e),this._updateUiFaces(),this._cubeElements[1].addEventListener("keydown",_.handleKeyEventCube1.bind(this),!1),this._cubeElements[2].addEventListener("keydown",_.handleKeyEventCube2.bind(this),!1),this._cubeElements[3].addEventListener("keydown",_.handleKeyEventCube3.bind(this),!1),this._cubeElements[4].addEventListener("keydown",_.handleKeyEventCube4.bind(this),!1),this._cubeElements[5].addEventListener("keydown",_.handleKeyEventCube5.bind(this),!1),this._cubeElements[6].addEventListener("keydown",_.handleKeyEventCube6.bind(this),!1),this._cubeElements[7].addEventListener("keydown",_.handleKeyEventCube7.bind(this),!1),this._cubeElements[8].addEventListener("keydown",_.handleKeyEventCube8.bind(this),!1),this._triggerEvent("init",{state:this.getState()})}},{key:"_updateUiFaces",value:function(){var e=this._config,t=e.backgroundColors,i=e.cubeSkins,a=void 0;a=this._displayElements[1],a.f.style.background=i.f.c1,a.b.style.background=i._,a.u.style.background=i.u.c3,a.d.style.background=i._,a.r.style.background=i._,a.l.style.background=i.l.c2,a=this._displayElements[2],a.f.style.background=i.f.c2,a.b.style.background=i._,a.u.style.background=t.u,a.d.style.background=i._,a.r.style.background=t.r,a.l.style.background=i._,a=this._displayElements[3],a.f.style.background=i.f.c3,a.b.style.background=i._,a.u.style.background=i._,a.d.style.background=h.default.d,a.r.style.background=i._,a.l.style.background=h.default.l,a=this._displayElements[4],a.f.style.background=t.f,a.f.style.background=i.f.c4,a.b.style.background=i._,a.u.style.background=i._,a.d.style.background=h.default.d,a.r.style.background=h.default.r,a.l.style.background=h.default._,a=this._displayElements[5],a.f.style.background=h.default._,a.b.style.background=h.default.b,a.u.style.background=h.default.u,a.d.style.background=h.default._,a.r.style.background=h.default._,a.l.style.background=h.default.l,a=this._displayElements[6],a.f.style.background=h.default._,a.b.style.background=h.default.b,a.u.style.background=h.default.u,a.d.style.background=h.default._,a.r.style.background=h.default.r,a.l.style.background=h.default._,a=this._displayElements[7],a.f.style.background=h.default._,a.b.style.background=h.default.b,a.u.style.background=h.default._,a.d.style.background=h.default.d,a.r.style.background=h.default._,a.l.style.background=h.default.l,a=this._displayElements[8],a.f.style.background=h.default._,a.b.style.background=h.default.b,a.u.style.background=h.default._,a.d.style.background=h.default.d,a.r.style.background=h.default.r,a.l.style.background=h.default._}}]),e}();t.CubeTwo=g},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(11);Object.defineProperty(t,"CubeTwo",{enumerable:!0,get:function(){return a.CubeTwo}})},function(e,t,i){"use strict";function a(e){window.requestAnimationFrame(e)}function s(e){window.requestAnimationFrame(function(t){window.requestAnimationFrame(e)})}function n(e){return e[0]}function r(e){return e[1]}function u(e){return f.OPPOSITE[o(e)]}function o(e){return f.LEFT[e]}function c(e){return f.OPPOSITE[e[0]]}function l(e){return f.OPPOSITE[e[1]]}function d(e){return Object.assign({},e)}function p(){var e=f.STATES_ARRAY;this.first=f.STATES_ARRAY[0],this.last=f.STATES_ARRAY[f.STATES_ARRAY.length-1],this.stateCount=e.length,this.get=function(t){var i=e.indexOf(t);if(i>=0)return i===e.length-1?{state:e[0],index:0}:{state:e[i+1],index:i+1}}}Object.defineProperty(t,"__esModule",{value:!0}),t.nextState=void 0,t.rAF=a,t.nextFrame=s,t.getUp=n,t.getFront=r,t.getRight=u,t.getLeft=o,t.getDown=c,t.getBack=l,t.cloneObject=d;var f=i(2),b=(i(1),new p);t.nextState=b},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(3),n=a(s),r=[],u=.9;r.blank="rgba(0, 0, 0, "+u+")",r._="transparent",r.u="rgba(255, 255, 255, "+u+")",r.f="rgba(0, 158, 96, "+u+")",r.r="rgba(196, 30, 58, "+u+")",r.l="rgba(255, 88, 0, "+u+")",r.b="rgba(0, 81, 186, "+u+")",r.d="rgba(255, 213, 0, "+u+")",u=.3,r["blank-dark"]="rgba(0, 0, 0, "+u+")",r["u-dark"]="rgba(255, 255, 255, "+u+")",r["f-dark"]="rgba(0, 158, 96, "+u+")",r["r-dark"]="rgba(196, 30, 58, "+u+")",r["l-dark"]="rgba(255, 88, 0, "+u+")",r["b-dark"]="rgba(0, 81, 186, "+u+")",r["d-dark"]="rgba(255, 213, 0, "+u+")";(0,n.default)(r),t.default=r},function(e,t){e.exports=Hammer}]);