(function(e){function t(t){for(var s,a,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(s=!1)}s&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},r={app:0},o=[];function a(e){return c.p+"js/"+({login:"login",settings:"settings"}[e]||e)+"."+{login:"7bc91b84",settings:"979213e6"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,s){n=r[e]=[t,s]}));t.push(n[2]=s);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",u.name="ChunkLoadError",u.type=s,u.request=o,n[1](u)}r[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.showNav?n("SiteNav"):e._e(),n("router-view")],1)},o=[],a=n("5530"),c=(n("b64b"),n("2f62")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("section",[n("div",{staticClass:"col1"},[n("router-link",{attrs:{to:"/"}},[n("h3",[e._v("E2C")])]),n("ul",{staticClass:"inline"},[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")])],1),n("li",[n("router-link",{attrs:{to:"/settings"}},[e._v("Configurações")])],1),n("li",[n("a",{on:{click:function(t){return e.logout()}}},[e._v("Sair")])])])],1)])])},u=[],d={methods:{logout:function(){this.$store.dispatch("logout")}}},l=d,f=n("2877"),m=Object(f["a"])(l,i,u,!1,null,null,null),p=m.exports,b={components:{SiteNav:p},computed:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["userProfile"])),{},{showNav:function(){return Object.keys(this.userProfile).length>1}})},j=b,h=Object(f["a"])(j,r,o,!1,null,null,null),v=h.exports,g=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dashboard"}},[n("transition",{attrs:{name:"fade"}},[e.showCommentModal?n("CommentModal",{attrs:{post:e.selectedPost},on:{close:function(t){return e.toggleCommentModal()}}}):e._e()],1),n("section",[n("div",{staticClass:"col1"},[n("div",{staticClass:"profile"},[n("h5",[e._v(e._s(e.userProfile.name))]),n("p",[e._v(e._s(e.userProfile.title))]),n("div",{staticClass:"create-post"},[n("p",[e._v("Nova postagem")]),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.post.content,expression:"post.content",modifiers:{trim:!0}}],domProps:{value:e.post.content},on:{input:function(t){t.target.composing||e.$set(e.post,"content",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("button",{staticClass:"button",attrs:{disabled:""===e.post.content},on:{click:function(t){return e.createPost()}}},[e._v("Manda!")])])])])]),n("div",{staticClass:"col2"},[e.posts.length?n("div",e._l(e.posts,(function(t){return n("div",{key:t.id,staticClass:"post"},[n("h5",[e._v(e._s(t.userName))]),n("span",[e._v(e._s(e._f("formatDate")(t.createdOn)))]),n("p",[e._v(e._s(e._f("trimLength")(t.content)))]),n("ul",[n("li",[n("a",{on:{click:function(n){return e.toggleCommentModal(t)}}},[e._v("comentários "+e._s(t.comments))])]),n("li",[n("a",{on:{click:function(n){return e.likePost(t.id,t.likes)}}},[e._v("curtidas "+e._s(t.likes))])]),n("li",[n("a",{on:{click:function(n){return e.viewPost(t)}}},[e._v("ver detalhes")])])])])})),0):n("div",[n("p",{staticClass:"no-results"},[e._v("Nenhuma postagem encontrada...")])])])]),n("transition",{attrs:{name:"fade"}},[e.showPostModal?n("div",{staticClass:"p-modal"},[n("div",{staticClass:"p-container"},[n("a",{staticClass:"close",on:{click:function(t){return e.closePostModal()}}},[e._v("Fechar")]),n("div",{staticClass:"post"},[n("h5",[e._v(e._s(e.fullPost.userName))]),n("span",[e._v(e._s(e._f("formatDate")(e.fullPost.createdOn)))]),n("p",[e._v(e._s(e.fullPost.content))]),n("ul",[n("li",[n("a",[e._v("comments "+e._s(e.fullPost.comments))])]),n("li",[n("a",[e._v("likes "+e._s(e.fullPost.likes))])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.postComments.length,expression:"postComments.length"}],staticClass:"comments"},e._l(e.postComments,(function(t){return n("div",{key:t.id,staticClass:"comment"},[n("p",[e._v(e._s(t.userName))]),n("span",[e._v(e._s(e._f("formatDate")(t.createdOn)))]),n("p",[e._v(e._s(t.content))])])})),0)])]):e._e()])],1)},k=[],_=n("1da1"),P=(n("96cf"),n("159b"),n("dc59")),y=n("c1df"),x=n.n(y),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-modal"},[n("div",{staticClass:"c-container"},[n("a",{on:{click:function(t){return e.$emit("close")}}},[e._v("close")]),n("p",[e._v("add a comment")]),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.comment,expression:"comment",modifiers:{trim:!0}}],domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("button",{staticClass:"button",attrs:{disabled:""==e.comment},on:{click:function(t){return e.addComment()}}},[e._v("add comment")])])])])},O=[],z=(n("b0c0"),{props:["post"],data:function(){return{comment:""}},methods:{addComment:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P["b"].add({createdOn:new Date,content:e.comment,postId:e.post.id,userId:P["a"].currentUser.uid,userName:e.$store.state.userProfile.name});case 2:return t.next=4,P["d"].doc(e.post.id).update({comments:parseInt(e.post.comments)+1});case 4:e.$emit("close");case 5:case"end":return t.stop()}}),t)})))()}}}),M=z,R=Object(f["a"])(M,C,O,!1,null,null,null),N=R.exports,U={components:{CommentModal:N},data:function(){return{post:{content:""},showCommentModal:!1,selectedPost:{},showPostModal:!1,fullPost:{},postComments:[]}},computed:Object(a["a"])({},Object(c["b"])(["userProfile","posts"])),methods:{createPost:function(){this.$store.dispatch("createPost",{content:this.post.content}),this.post.content=""},toggleCommentModal:function(e){this.showCommentModal=!this.showCommentModal,this.showCommentModal?this.selectedPost=e:this.selectedPost={}},likePost:function(e,t){this.$store.dispatch("likePost",{id:e,likesCount:t})},viewPost:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,P["b"].where("postId","==",e.id).get();case 2:s=n.sent,s.forEach((function(e){var n=e.data();n.id=e.id,t.postComments.push(n)})),t.fullPost=e,t.showPostModal=!0;case 6:case"end":return n.stop()}}),n)})))()},closePostModal:function(){this.postComments=[],this.showPostModal=!1}},filters:{formatDate:function(e){if(!e)return"-";var t=e.toDate();return x()(t).fromNow()},trimLength:function(e){return e.length<200?e:"".concat(e.substring(0,200),"...")}}},E=U,I=Object(f["a"])(E,w,k,!1,null,"4fa4e736",null),D=I.exports;s["a"].use(g["a"]);var $=[{path:"/",name:"Dashboard",component:D,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/settings",name:"settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{requiresAuth:!0}}],S=new g["a"]({mode:"history",base:"/",routes:$});S.beforeEach((function(e,t,n){var s=e.matched.some((function(e){return e.meta.requiresAuth}));s&&!P["a"].currentUser?n("/login"):n()}));var q=S;n("99af");s["a"].use(c["a"]),P["d"].orderBy("createdOn","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){var n=e.data();n.id=e.id,t.push(n)})),T.commit("setPosts",t)}));var A,T=new c["a"].Store({state:{userProfile:{},posts:[]},mutations:{setUserProfile:function(e,t){e.userProfile=t},setPerformingRequest:function(e,t){e.performingRequest=t},setPosts:function(e,t){e.posts=t}},actions:{login:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var s,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.dispatch,n.next=3,P["a"].signInWithEmailAndPassword(t.email,t.password);case 3:r=n.sent,o=r.user,s("fetchUserProfile",o);case 6:case"end":return n.stop()}}),n)})))()},signup:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var s,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.dispatch,n.next=3,P["a"].createUserWithEmailAndPassword(t.email,t.password);case 3:return r=n.sent,o=r.user,n.next=7,P["e"].doc(o.uid).set({name:t.name,title:t.title});case 7:s("fetchUserProfile",o);case 8:case"end":return n.stop()}}),n)})))()},fetchUserProfile:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.commit,n.next=3,P["e"].doc(t.uid).get();case 3:r=n.sent,s("setUserProfile",r.data()),"/login"===q.currentRoute.path&&q.push("/");case 6:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,P["a"].signOut();case 3:n("setUserProfile",{}),q.push("/login");case 5:case"end":return t.stop()}}),t)})))()},createPost:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.state,e.commit,n.next=3,P["d"].add({createdOn:new Date,content:t.content,userId:P["a"].currentUser.uid,userName:s.userProfile.name,comments:0,likes:0});case 3:case"end":return n.stop()}}),n)})))()},likePost:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var s,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,s=P["a"].currentUser.uid,r="".concat(s,"_").concat(t.id),n.next=5,P["c"].doc(r).get();case 5:if(o=n.sent,!o.exists){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,P["c"].doc(r).set({postId:t.id,userId:s});case 10:P["d"].doc(t.id).update({likes:t.likesCount+1});case 11:case"end":return n.stop()}}),n)})))()},updateProfile:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var s,r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.dispatch,r=P["a"].currentUser.uid,n.next=4,P["e"].doc(r).update({name:t.name,title:t.title});case 4:return n.sent,s("fetchUserProfile",{uid:r}),n.next=8,P["d"].where("userId","==",r).get();case 8:return o=n.sent,o.forEach((function(e){P["d"].doc(e.id).update({userName:t.name})})),n.next=12,P["b"].where("userId","==",r).get();case 12:a=n.sent,a.forEach((function(e){P["b"].doc(e.id).update({userName:t.name})}));case 14:case"end":return n.stop()}}),n)})))()}}}),L=T;n("7e7d");s["a"].config.productionTip=!1,P["a"].onAuthStateChanged((function(e){A||(A=new s["a"]({router:q,store:L,render:function(e){return e(v)}}).$mount("#app")),e&&L.dispatch("fetchUserProfile",e)}))},"7e7d":function(e,t,n){},dc59:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));var s=n("59ca"),r=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyDIvmjxNOhq-jX5JCEbGKdVOg_OTiH4-pU",authDomain:"tokene2c-2e1b5.firebaseapp.com",projectId:"tokene2c-2e1b5",storageBucket:"tokene2c-2e1b5.appspot.com",messagingSenderId:"369714670327",appId:"1:369714670327:web:b5bec48f8f40f0912501f2",measurementId:"G-3F8QX6V30T"});s["initializeApp"](r);var o=s["firestore"](),a=s["auth"](),c=o.collection("users"),i=o.collection("posts"),u=o.collection("comments"),d=o.collection("likes")}});
//# sourceMappingURL=app.e20753cf.js.map