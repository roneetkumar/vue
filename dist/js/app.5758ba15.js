(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],m=0,d=[];m<i.length;m++)o=i[m],s[o]&&d.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"011a":function(e,t,n){},"01ba":function(e,t,n){},"034f":function(e,t,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"08b1":function(e,t,n){},"0a03":function(e,t,n){"use strict";var a=n("b448"),s=n.n(a);s.a},1765:function(e,t,n){"use strict";var a=n("c7bf"),s=n.n(a);s.a},"18ab":function(e,t,n){},"1a52":function(e,t,n){},"22fb":function(e,t,n){"use strict";var a=n("1a52"),s=n.n(a);s.a},"3e04":function(e,t,n){},"4be6":function(e,t,n){"use strict";var a=n("6279"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=n("59ca"),r=n.n(s),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},i=[],c={name:"app",components:{},data:function(){return{}},methods:{}},u=c,l=(n("034f"),n("2877")),m=Object(l["a"])(u,o,i,!1,null,null,null),d=m.exports,f=n("8c4f"),p=(n("ea7b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loginWrapper"},[n("form",[n("Logo"),n("div",{staticClass:"inputBox"},[n("UserIcon"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.student.id,expression:"student.id"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.student.id},on:{input:function(t){t.target.composing||e.$set(e.student,"id",t.target.value)}}})],1),n("div",{staticClass:"inputBox"},[n("KeyIcon"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.student.pass,expression:"student.pass"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.student.pass},on:{input:function(t){t.target.composing||e.$set(e.student,"pass",t.target.value)}}})],1),n("button",{staticClass:"login",on:{click:function(t){return t.preventDefault(),e.logIn(t)}}},[e._v("Submit")]),n("h2",[e._v("Forget Password ?")]),n("button",{on:{click:function(t){return t.preventDefault(),e.createAccount(t)}}},[e._v("Create Account")]),n("h2",[e._v("Fraincais")])],1)])}),h=[],v=(n("a481"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/favicon.ico",alt:""}}),n("br"),n("h4",[e._v("For Students")])])}],_={},g=_,j=(n("60b6"),Object(l["a"])(g,v,b,!1,null,"2cffe1ba",null)),w=j.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}})])},y=[],M={},O=M,C=Object(l["a"])(O,x,y,!1,null,null,null),$=C.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M12.65 10C11.7 7.31 8.9 5.5 5.77 6.12c-2.29.46-4.15 2.29-4.63 4.58C.32 14.57 3.26 18 7 18c2.61 0 4.83-1.67 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}})])},I=[],E={},q=E,z=Object(l["a"])(q,S,I,!1,null,null,null),A=z.exports,L={props:{fill:String},components:{Logo:w,KeyIcon:A,UserIcon:$},data:function(){return{student:{id:"",pass:""}}},methods:{logIn:function(){var e=this;r.a.auth().signInWithEmailAndPassword(this.student.id,this.student.pass).then(function(){e.$router.replace("home"),e.student.id="",e.student.pass=""},function(e){return alert(e.message)})},createAccount:function(){var e=this;r.a.auth().createUserWithEmailAndPassword(this.student.id,this.student.pass).then(function(){e.$router.replace("home"),e.student.id="",e.student.pass=""},function(e){return alert(e.message)})}}},H=L,N=(n("4be6"),Object(l["a"])(H,p,h,!1,null,"4f043f99",null)),k=N.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"homePageWrapper"},[n("transition",{attrs:{name:"fade"}},[e.$store.state.navOpened?n("div",{staticClass:"overlay",on:{click:function(t){e.$store.state.navOpened=!e.$store.state.navOpened}}}):e._e()]),n("SideNav"),n("Header"),n("SearchBar"),n("router-view"),n("NavBar")],1)},B=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("Logo")],1)},V=[],P={components:{Logo:w},methods:{}},W=P,F=(n("71c7"),Object(l["a"])(W,U,V,!1,null,"5c4415b8",null)),T=F.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("NavMenu")],1)},K=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-menu"},e._l(e.menu,function(e){return n("router-link",{key:e,attrs:{"active-class":"menu-active",to:{name:e}}},[n("MenuItem",{attrs:{itemName:e}})],1)}),1)},R=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},["Mio"===e.itemName?n("MioIcon"):"News"===e.itemName?n("NewsIcon"):"Lea"===e.itemName?n("LeaIcon"):n("ServiceIcon"),n("span",[e._v(e._s(e.itemName))])],1)},X=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"}})])])},Y=[],ee={},te=ee,ne=Object(l["a"])(te,Z,Y,!1,null,null,null),ae=ne.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M4 16h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zm6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zM4 20c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM4 12h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm10 0h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zM3 5v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1z"}})])])},re=[],oe={},ie=oe,ce=Object(l["a"])(ie,se,re,!1,null,null,null),ue=ce.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"}})])])},me=[],de={},fe=de,pe=Object(l["a"])(fe,le,me,!1,null,null,null),he=pe.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"}})])])},be=[],_e={},ge=_e,je=Object(l["a"])(ge,ve,be,!1,null,null,null),we=je.exports,xe={props:{itemName:String},components:{MioIcon:ae,NewsIcon:ue,LeaIcon:he,ServiceIcon:we},methods:{}},ye=xe,Me=(n("907e"),Object(l["a"])(ye,Q,X,!1,null,"0b3ddf5c",null)),Oe=Me.exports,Ce={components:{MenuItem:Oe},data:function(){return{menu:["News","Mio","Lea","Services"]}},methods:{}},$e=Ce,Se=(n("58fc"),Object(l["a"])($e,J,R,!1,null,"316aae46",null)),Ie=Se.exports,Ee={components:{NavMenu:Ie},methods:{}},qe=Ee,ze=(n("7544"),Object(l["a"])(qe,G,K,!1,null,"f3c1b0d8",null)),Ae=ze.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide"}},[e.$store.state.navOpened?n("div",{staticClass:"side-bar-wrapper"},[n("div",{staticClass:"header"},[n("div",{staticClass:"nav-pic"},[n("img",{staticClass:"product-logo",attrs:{src:"assets/head_paper.png",alt:""}})]),n("div",{staticClass:"nav-heading"},[n("h1",{staticClass:"title"}),n("a",{attrs:{href:""}},[n("h1",{staticClass:"email"})])])]),n("ul",{staticClass:"nav-menu"},[n("li",{staticClass:"menu-item"}),n("li",{staticClass:"menu-item"}),n("li",{staticClass:"menu-item"}),n("li",{staticClass:"menu-item"}),n("li",{staticClass:"menu-item",on:{click:e.logOut}},[n("LogoutIcon"),n("h1",[e._v("Logout")])],1)])]):e._e()])},He=[],Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}})])},ke=[],De={},Be=De,Ue=Object(l["a"])(Be,Ne,ke,!1,null,null,null),Ve=Ue.exports,Pe={components:{LogoutIcon:Ve},data:function(){return{}},methods:{logOut:function(){var e=this;r.a.auth().signOut().then(function(){e.$store.state.navOpened=!e.$store.state.navOpened,e.$router.replace("login")})}}},We=Pe,Fe=(n("1765"),Object(l["a"])(We,Le,He,!1,null,"ecdb0d88",null)),Te=Fe.exports,Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"searchWrapper"},[n("div",{staticClass:"searchBar"},[n("MenuIcon",{nativeOn:{click:function(t){e.$store.state.navOpened=!e.$store.state.navOpened}}}),n("input",{attrs:{type:"text",placeholder:"Search"}}),n("SearchIcon")],1)])},Ke=[],Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}})])},Re=[],Qe={},Xe=Qe,Ze=(n("6361"),Object(l["a"])(Xe,Je,Re,!1,null,"d2613868",null)),Ye=Ze.exports,et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"}})])},tt=[],nt={},at=nt,st=(n("22fb"),Object(l["a"])(at,et,tt,!1,null,"60d90fb5",null)),rt=st.exports,ot={components:{SearchIcon:Ye,MenuIcon:rt}},it=ot,ct=(n("b911"),Object(l["a"])(it,Ge,Ke,!1,null,"43cd7f3a",null)),ut=ct.exports,lt={components:{Header:T,NavBar:Ae,SearchBar:ut,SideNav:Te}},mt=lt,dt=(n("d20b"),Object(l["a"])(mt,D,B,!1,null,"52bea6c9",null)),ft=dt.exports,pt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("LeaMenu",{attrs:{menuItems:e.menuItems}}),n("router-view")],1)},ht=[],vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[n("ul",{staticClass:"menu-list"},e._l(e.menuItems,function(e){return n("router-link",{key:e,attrs:{to:{name:e}}},[n("LeaMenuItem",{attrs:{itemName:e}})],1)}),1)])},bt=[],_t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v(e._s(e.itemName))])},gt=[],jt={props:{itemName:String}},wt=jt,xt=(n("f49a"),Object(l["a"])(wt,_t,gt,!1,null,"596f6f44",null)),yt=xt.exports,Mt={components:{LeaMenuItem:yt},props:{menuItems:Array},data:function(){return{}}},Ot=Mt,Ct=(n("b915"),Object(l["a"])(Ot,vt,bt,!1,null,"2df02e73",null)),$t=Ct.exports,St={components:{LeaMenu:$t},data:function(){return{menuItems:["Announcements","Documents","Assignments","Grades","Events","Teachers","Websites","Absences","Forum"]}},methods:{}},It=St,Et=(n("7ffa"),Object(l["a"])(It,pt,ht,!1,null,"618d4526",null)),qt=Et.exports,zt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("MioMenu",{attrs:{menuItems:e.menuItems}}),n("router-view")],1)},At=[],Lt={components:{MioMenu:$t},data:function(){return{menuItems:["Inbox","Outbox","Sent","Saved","Draft","Trash"]}}},Ht=Lt,Nt=(n("eee1"),Object(l["a"])(Ht,zt,At,!1,null,null,null)),kt=Nt.exports,Dt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Bt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h1",{staticClass:"heading"},[e._v("news")])])}],Ut={components:{}},Vt=Ut,Pt=Object(l["a"])(Vt,Dt,Bt,!1,null,null,null),Wt=Pt.exports,Ft=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Tt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h1",{staticClass:"heading"},[e._v("service")])])}],Gt={components:{}},Kt=Gt,Jt=Object(l["a"])(Kt,Ft,Tt,!1,null,null,null),Rt=Jt.exports,Qt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Xt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("announcements")]),n("p",[e._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore similique consectetur cum recusandae! Similique corrupti assumenda culpa, aspernatur facere nemo beatae veniam natus quo dolor necessitatibus vero commodi fugiat asperiores temporibus aliquid delectus eveniet sint. Dolores explicabo recusandae, deleniti, perferendis hic vitae obcaecati accusamus, vel quia deserunt quae. Ad quisquam voluptatem, quod delectus itaque consectetur pariatur, nulla praesentium temporibus facere assumenda eius enim quia quas sunt. Pariatur velit ullam voluptas, iure atque facilis officiis eos a? Culpa nesciunt explicabo nobis nemo, veritatis, maxime architecto odit, amet eaque nam dolore illo est! Voluptates totam iste vitae consequatur deserunt tempora odio unde culpa. Illum deserunt unde impedit commodi, eaque, labore natus, animi adipisci eos officiis saepe. Vel placeat repellendus iusto doloribus tenetur eos reiciendis perferendis quibusdam ullam ab repellat consectetur, nihil impedit possimus sequi praesentium sed rem dicta modi quaerat dolores! Deserunt, praesentium quasi illo expedita veniam eius consectetur numquam tenetur assumenda doloremque magni eos nulla mollitia possimus, itaque nostrum ipsa hic error nesciunt tempora? Obcaecati reprehenderit voluptatem accusamus quam id sunt quos omnis earum, repellat laboriosam perspiciatis nemo officiis nulla voluptatibus eius ab officia. Optio, eveniet amet magni, rem voluptatibus, doloremque ullam repellat ipsam incidunt odio vitae explicabo consequuntur nesciunt nisi?")])])}],Zt={},Yt=Zt,en=(n("0a03"),Object(l["a"])(Yt,Qt,Xt,!1,null,"11fcf84c",null)),tn=en.exports,nn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Documents")]),n("div",{staticClass:"course-grid"},e._l(e.course,function(e){return n("Course",{key:e,attrs:{courseName:e}})}),1)])},an=[],sn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"courseWrapper"},[n("div",{staticClass:"content"},[n("h1",[e._v(e._s(e.courseName))])]),n("button",[e._v("Send")])])},rn=[],on={props:{courseName:String}},cn=on,un=(n("e6d0"),Object(l["a"])(cn,sn,rn,!1,null,"6d4dd188",null)),ln=un.exports,mn={components:{Course:ln},data:function(){return{course:["multi-tier application development","iOS mobile application development","web server application development","scripting language","advanced object oriented programming"]}}},dn=mn,fn=(n("f9f2"),Object(l["a"])(dn,nn,an,!1,null,null,null)),pn=fn.exports,hn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("assignments")])},vn=[],bn={},_n=bn,gn=Object(l["a"])(_n,hn,vn,!1,null,null,null),jn=gn.exports,wn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("grades")])},xn=[],yn={},Mn=yn,On=Object(l["a"])(Mn,wn,xn,!1,null,null,null),Cn=On.exports,$n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Events")])},Sn=[],In={},En=In,qn=Object(l["a"])(En,$n,Sn,!1,null,null,null),zn=qn.exports,An=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Teachers")])},Ln=[],Hn={},Nn=Hn,kn=Object(l["a"])(Nn,An,Ln,!1,null,null,null),Dn=kn.exports,Bn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("websites")])},Un=[],Vn={},Pn=Vn,Wn=Object(l["a"])(Pn,Bn,Un,!1,null,null,null),Fn=Wn.exports,Tn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("absences")])},Gn=[],Kn={},Jn=Kn,Rn=Object(l["a"])(Jn,Tn,Gn,!1,null,null,null),Qn=Rn.exports,Xn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("forum")])},Zn=[],Yn={name:"Forum"},ea=Yn,ta=Object(l["a"])(ea,Xn,Zn,!1,null,null,null),na=ta.exports,aa=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",{staticClass:"heading"},[e._v("Inbox")]),n("ul",e._l(e.MioData.inbox,function(t){return n("li",{key:t.id},[n("div",{staticClass:"mail"},[n("h4",[e._v("From : "+e._s(t.from))]),n("h5",[e._v(e._s(t.subject))])]),n("UserIcon")],1)}),0)])},sa=[],ra=n("b054"),oa={components:{UserIcon:$},data:function(){return{MioData:ra}},methods:{}},ia=oa,ca=Object(l["a"])(ia,aa,sa,!1,null,"853427d2",null),ua=ca.exports,la=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",[e._v("outbox")]),n("ul",e._l(e.MioData.outbox,function(t){return n("li",{key:t.id},[n("div",{staticClass:"mail"},[n("h4",[e._v("To : "+e._s(t.to))]),n("h5",[e._v(e._s(t.subject))])]),n("UserIcon")],1)}),0)])},ma=[],da={components:{UserIcon:$},data:function(){return{MioData:ra}}},fa=da,pa=Object(l["a"])(fa,la,ma,!1,null,null,null),ha=pa.exports,va=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",[e._v("sent")]),n("ul",e._l(e.MioData.sent,function(t){return n("li",{key:t.id},[n("div",{staticClass:"mail"},[n("h4",[e._v("To : "+e._s(t.from))]),n("h5",[e._v(e._s(t.subject))])]),n("UserIcon")],1)}),0)])},ba=[],_a={components:{UserIcon:$},data:function(){return{MioData:ra}}},ga=_a,ja=Object(l["a"])(ga,va,ba,!1,null,null,null),wa=ja.exports,xa=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",[e._v("saved")]),n("ul",e._l(e.MioData.saved,function(t){return n("li",{key:t.id},[n("div",{staticClass:"mail"},[n("h4",[e._v("From : "+e._s(t.from))]),n("h5",[e._v(e._s(t.subject))])]),n("UserIcon")],1)}),0)])},ya=[],Ma={components:{UserIcon:$},data:function(){return{MioData:ra}}},Oa=Ma,Ca=Object(l["a"])(Oa,xa,ya,!1,null,null,null),$a=Ca.exports,Sa=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",[e._v("draft")]),n("ul",e._l(e.MioData.draft,function(t){return n("li",{key:t.id},[n("div",{staticClass:"mail"},[n("h4",[e._v("From : "+e._s(t.from))]),n("h5",[e._v(e._s(t.subject))])]),n("UserIcon")],1)}),0)])},Ia=[],Ea={components:{UserIcon:$},data:function(){return{MioData:ra}}},qa=Ea,za=Object(l["a"])(qa,Sa,Ia,!1,null,null,null),Aa=za.exports,La=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mioWrapper"},[n("h1",[e._v("trash")]),n("ul",e._l(e.MioData.trash,function(t){return n("li",{key:t.id},[n("div",{staticClass:"mail"},[n("h4",[e._v("From : "+e._s(t.from))]),n("h5",[e._v(e._s(t.subject))])]),n("UserIcon")],1)}),0)])},Ha=[],Na={components:{UserIcon:$},data:function(){return{MioData:ra}}},ka=Na,Da=Object(l["a"])(ka,La,Ha,!1,null,null,null),Ba=Da.exports;a["a"].use(f["a"]);var Ua=new f["a"]({mode:"history",routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:k},{path:"/home",name:"Home",redirect:"/home/lea",component:ft,meta:{requiresAuth:!0},children:[{path:"lea",name:"Lea",component:qt,redirect:"/home/lea/announcements",meta:{requiresAuth:!0},children:[{path:"announcements",name:"Announcements",component:tn,meta:{requiresAuth:!0}},{path:"documents",name:"Documents",component:pn,meta:{requiresAuth:!0}},{path:"assignments",name:"Assignments",component:jn,meta:{requiresAuth:!0}},{path:"grades",name:"Grades",component:Cn,meta:{requiresAuth:!0}},{path:"events",name:"Events",component:zn,meta:{requiresAuth:!0}},{path:"teachers",name:"Teachers",component:Dn,meta:{requiresAuth:!0}},{path:"websites",name:"Websites",component:Fn,meta:{requiresAuth:!0}},{path:"absences",name:"Absences",component:Qn,meta:{requiresAuth:!0}},{path:"forum",name:"Forum",component:na,meta:{requiresAuth:!0}}]},{path:"mio",name:"Mio",component:kt,meta:{requiresAuth:!0},redirect:"/home/mio/inbox",children:[{path:"inbox",name:"Inbox",component:ua,meta:{requiresAuth:!0}},{path:"outbox",name:"Outbox",component:ha,meta:{requiresAuth:!0}},{path:"sent",name:"Sent",component:wa,meta:{requiresAuth:!0}},{path:"saved",name:"Saved",component:$a,meta:{requiresAuth:!0}},{path:"draft",name:"Draft",component:Aa,meta:{requiresAuth:!0}},{path:"trash",name:"Trash",component:Ba,meta:{requiresAuth:!0}}]},{path:"news",name:"News",component:Wt,meta:{requiresAuth:!0}},{path:"service",name:"Services",component:Rt,meta:{requiresAuth:!0}}]}]});Ua.beforeEach(function(e,t,n){var a=r.a.auth().currentUser,s=e.matched.some(function(e){return e.meta.requiresAuth});s&&!a?n("login"):!s&&a?n("home"):n()});var Va=Ua,Pa=n("2f62");a["a"].use(Pa["a"]);var Wa=new Pa["a"].Store({state:{navOpened:!1}});a["a"].config.productionTip=!1;var Fa="",Ta={apiKey:"AIzaSyCaz2oF2wLxARhmBsw9XQh1OGZT3sUwVLI",authDomain:"myomnivox.firebaseapp.com",databaseURL:"https://myomnivox.firebaseio.com",projectId:"myomnivox",storageBucket:"",messagingSenderId:"535661388551",appId:"1:535661388551:web:b8416dead5e5b9ea"};r.a.initializeApp(Ta),r.a.auth().onAuthStateChanged(function(){Fa||(Fa=new a["a"]({render:function(e){return e(d)},router:Va,store:Wa}).$mount("#app"))})},"58fc":function(e,t,n){"use strict";var a=n("968b"),s=n.n(a);s.a},"60b6":function(e,t,n){"use strict";var a=n("01ba"),s=n.n(a);s.a},6279:function(e,t,n){},6361:function(e,t,n){"use strict";var a=n("08b1"),s=n.n(a);s.a},"64a9":function(e,t,n){},"66b9":function(e,t,n){},"71c7":function(e,t,n){"use strict";var a=n("eb52"),s=n.n(a);s.a},7544:function(e,t,n){"use strict";var a=n("011a"),s=n.n(a);s.a},"75eb":function(e,t,n){},"7ffa":function(e,t,n){"use strict";var a=n("3e04"),s=n.n(a);s.a},"854b":function(e,t,n){},"8f6d":function(e,t,n){},"907e":function(e,t,n){"use strict";var a=n("854b"),s=n.n(a);s.a},"968b":function(e,t,n){},af9c:function(e,t,n){},b054:function(e){e.exports={inbox:[{id:1,from:"roneet@gmail.com",subject:"Subject of Mail",body:""},{id:2,from:"vinay@gmail.com",subject:"Subject of Mail",body:""},{id:3,from:"ankit@gmail.com",subject:"Subject of Mail",body:""},{id:4,from:"roop@gmail.com",subject:"Subject of Mail",body:""},{id:5,from:"davinder@gmail.com",subject:"Subject of Mail",body:""},{id:6,from:"sunil@gmail.com",subject:"Subject of Mail",body:""},{id:7,from:"roneet@gmail.com",subject:"Subject of Mail",body:""},{id:8,from:"vinay@gmail.com",subject:"Subject of Mail",body:""},{id:9,from:"ankit@gmail.com",subject:"Subject of Mail",body:""},{id:10,from:"roop@gmail.com",subject:"Subject of Mail",body:""},{id:11,from:"davinder@gmail.com",subject:"Subject of Mail",body:""},{id:12,from:"sunil@gmail.com",subject:"Subject of Mail",body:""},{id:13,from:"roop@gmail.com",subject:"Subject of Mail",body:""},{id:14,from:"davinder@gmail.com",subject:"Subject of Mail",body:""},{id:15,from:"sunil@gmail.com",subject:"Subject of Mail",body:""}],outbox:[{id:1,to:"sunil@gmail.com",subject:"Subject of Mail",body:""},{id:2,to:"davinder@gmail.com",subject:"Subject of Mail",body:""},{id:3,to:"ankit@gmail.com",subject:"Subject of Mail",body:""},{id:4,to:"vinay@gmail.com",subject:"Subject of Mail",body:""},{id:5,to:"sunil@gmail.com",subject:"Subject of Mail",body:""},{id:6,to:"shivam@gmail.com",subject:"Subject of Mail",body:""}],sent:[{id:1,to:"",subject:"",body:"sa"},{id:2,to:"",subject:"",body:""},{id:3,to:"",subject:"",body:""},{id:4,to:"",subject:"",body:""},{id:5,to:"",subject:"",body:""},{id:6,to:"",subject:"",body:""}],saved:[{id:1,from:"",subject:"",body:""},{id:2,from:"",subject:"",body:""},{id:3,from:"",subject:"",body:""},{id:4,from:"",subject:"",body:""},{id:5,from:"",subject:"",body:""},{id:6,from:"",subject:"",body:""}],draft:[{id:1,from:"",subject:"",body:""},{id:2,from:"",subject:"",body:""},{id:3,from:"",subject:"",body:""},{id:4,from:"",subject:"",body:""},{id:5,from:"",subject:"",body:""},{id:6,from:"",subject:"",body:""}],trash:[{id:1,from:"",subject:"",body:""},{id:2,from:"",subject:"",body:""},{id:3,from:"",subject:"",body:""},{id:4,from:"",subject:"",body:""},{id:5,from:"",subject:"",body:""},{id:6,from:"",subject:"",body:""}]}},b448:function(e,t,n){},b911:function(e,t,n){"use strict";var a=n("ba91"),s=n.n(a);s.a},b915:function(e,t,n){"use strict";var a=n("75eb"),s=n.n(a);s.a},ba91:function(e,t,n){},c7bf:function(e,t,n){},d20b:function(e,t,n){"use strict";var a=n("66b9"),s=n.n(a);s.a},e6d0:function(e,t,n){"use strict";var a=n("af9c"),s=n.n(a);s.a},eb52:function(e,t,n){},eee1:function(e,t,n){"use strict";var a=n("8f6d"),s=n.n(a);s.a},f004:function(e,t,n){},f49a:function(e,t,n){"use strict";var a=n("f004"),s=n.n(a);s.a},f9f2:function(e,t,n){"use strict";var a=n("18ab"),s=n.n(a);s.a}});
//# sourceMappingURL=app.5758ba15.js.map