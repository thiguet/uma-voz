(function(t){function e(e){for(var n,s,i=e[0],u=e[1],l=e[2],p=0,f=[];p<i.length;p++)s=i[p],r[s]&&f.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"05e5":function(t,e,a){"use strict";var n=a("ae63"),r=a.n(n);r.a},1400:function(t,e,a){"use strict";var n=a("c43d"),r=a.n(n);r.a},"2f7b":function(t,e,a){"use strict";var n=a("ab0f"),r=a.n(n);r.a},"4b39":function(t,e,a){"use strict";var n=a("b2c1"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("my-header",{attrs:{routes:t.visibleRoutes}}),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"my-header"},[a("my-navbar",{attrs:{routes:t.routes}})],1)},i=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"my-nav"},[a("ul",t._l(t.routes,function(e){return a("li",{key:e.path},[a("router-link",{staticClass:"nav-items",attrs:{to:e.path}},[t._v("\n                "+t._s(e.label)+"\n            ")])],1)}),0)])},l=[],c={name:"MyNavbar",props:{routes:{type:Array,required:!0}}},p=c,f=(a("6124"),a("2877")),m=Object(f["a"])(p,u,l,!1,null,null,null),d=m.exports,v={name:"my-header",components:{MyNavbar:d},props:{routes:{type:Array,required:!0}}},h=v,b=(a("4b39"),Object(f["a"])(h,s,i,!1,null,"2c84c332",null)),y=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-container"},[a("my-span",{attrs:{label:t.label}})],1)},_=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("div",{staticClass:"span-container"},t._l(t.label,function(e,n){return a("span",{key:n},[t._v("\n          "+t._s(e)+"\n      ")])}),0)])},x=[],k={name:"my-span",props:{label:{type:String,required:!0},fontSize:{type:String}}},w=k,P=(a("1400"),Object(f["a"])(w,C,x,!1,null,null,null)),j=P.exports,O="Uma Voz",$={name:"Home",components:{MySpan:j},data:function(){return{label:O}}},S=$,E=(a("05e5"),Object(f["a"])(S,g,_,!1,null,null,null)),A=E.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("div",{staticClass:"about-container"},t._l(t.paragraphs,function(e,n){return a("p",{key:n},[t._v("\n            "+t._s(e)+"\n        ")])}),0)])},V=[],z={title:"Uma Voz",paragraphs:['"A poesia, não','está morta!"',"- ela disse.","Mas ela está.","Então eu peguei","as coisas dela","e coloquei aqui.","É um jeito para não esquecer."]},q={name:"about",data:function(){return{title:z.title,info:z.info,paragraphs:z.paragraphs}}},R=q,N=(a("faf9"),Object(f["a"])(R,M,V,!1,null,null,null)),I=N.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("div",{staticClass:"poems-container"},[a("table",{key:t.itemsPerRow,staticClass:"poems-table"},[a("thead"),a("tbody",t._l(this.$store.getters.poems,function(e){return a("tr",{key:e.id},[a("td",[a("router-link",{staticClass:"poem-link",attrs:{to:"/poem/"+e.id}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])],1)])}),0)])])])},T=[],U=a("5176"),B=a.n(U),J=a("a4bb"),D=a.n(J),K=(a("c5f6"),"/poems/"),W=function(t){var e=a("8aa5"),n=e.database().ref(K);return n.on("value",function(e){t(e)})},F=function(){var t=a("59ca"),e={apiKey:"AIzaSyBmHlryED_VAvvqoQAWoG8AMzuahvJRa-A",authDomain:"uma-voz.firebaseapp.com",databaseURL:"https://uma-voz.firebaseio.com",projectId:"uma-voz",storageBucket:"uma-voz.appspot.com",messagingSenderId:"105166756409",appId:"1:105166756409:web:2edfe4d6a5ccc033"};t.initializeApp(e)};F();var G={name:"poems",props:{itemsPerRow:{type:Number}},data:function(){return{poems:[]}},created:function(){var t=this;W(function(e){var a=D()(e.val()).map(function(t){return B()({id:t},e.val()[t])});t.$store.commit("setPoems",a)})}},L=G,Q=(a("b77f"),Object(f["a"])(L,H,T,!1,null,null,null)),X=Q.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("div",{staticClass:"pd-container"},[a("h1",{staticClass:"pd-title"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"pd-paragraphs-container"},t._l(t.paragraphs,function(e,n){return a("pre",{key:n},[t._v(t._s(e))])}),0)])])},Z=[],tt={name:"poem-display",data:function(){return{title:"",paragraphs:[]}},created:function(){var t=this,e=this.$store.getters.poems.filter(function(e){return e.id===t.$route.params.id})[0];this.title=e.title,this.paragraphs=e.paragraphs}},et=tt,at=(a("2f7b"),Object(f["a"])(et,Y,Z,!1,null,null,null)),nt=at.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("div",{staticClass:"ap-container"},[a("div",{staticClass:"ap-title"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"ap-text",attrs:{type:"text",placeholder:"Título"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"ap-paragraphs-container"},t._l(t.paragraphs,function(e,n){return a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.paragraphs[n],expression:"paragraphs[i]"}],key:n,staticClass:"ap-textarea",attrs:{oninput:'this.style.height = "";this.style.height = this.scrollHeight + "px"'},domProps:{value:t.paragraphs[n]},on:{keyup:t.addVerse,input:function(e){e.target.composing||t.$set(t.paragraphs,n,e.target.value)}}})}),0),a("div",{staticClass:"ap-footer"},[a("my-button",{attrs:{label:"Add Parágrafo",onClick:t.addParagraph}})],1),a("div",{staticClass:"ap-footer"},[a("my-button",{attrs:{label:"Save",onClick:t.savePoem}})],1)])])},ot=[],st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"mb-input",on:{click:t.onClick}},[t._v("\n    "+t._s(t.label)+"\n")])},it=[],ut={name:"my-button",props:{label:String,onClick:{type:Function,required:!0}}},lt=ut,ct=(a("d8ee"),Object(f["a"])(lt,st,it,!1,null,null,null)),pt=ct.exports,ft=function(t){var e=a("8aa5"),n="/poems/",r=e.database().ref().child("poems").push().key,o={};return o[n+r]=t,e.database().ref().update(o)},mt={name:"add-poem",data:function(){return{paragraphs:[""],title:""}},components:{MyButton:pt},methods:{addParagraph:function(){var t=this.paragraphs;t.push(""),this.paragraphs=t},addVerse:function(t){t.ctrlKey&&"Enter"==t.key&&this.addParagraph()},savePoem:function(){var t={title:this.title,paragraphs:this.paragraphs};ft(t).then(function(){return alert("O registro foi salvo com sucesso !")}).catch(function(){return alert("Um erro ocorreu !")})}}},dt=mt,vt=(a("85c6"),Object(f["a"])(dt,rt,ot,!1,null,null,null)),ht=vt.exports,bt=[{path:"/",component:A,name:"home",label:"Início",isVisible:!0},{path:"/about",component:I,name:"about",label:"Sobre",isVisible:!0},{path:"/poems",component:X,name:"poems",label:"Poemas",props:{default:!0,itemsPerRow:window.document.body.offsetWidth>600?3:1},isVisible:!0},{path:"/poem/:id",component:nt,name:"poem",isVisible:!1},{path:"/add-poem",component:ht,name:"add-poem",label:"New Poem",isVisible:!1}],yt=bt,gt=a("2f62");n["a"].use(gt["a"]);var _t=new gt["a"].Store({state:{poems:[]},mutations:{setPoems:function(t,e){t.poems=e}},getters:{poems:function(t){return t.poems}}}),Ct=yt.filter(function(t){return t.isVisible}),xt={name:"App",store:_t,components:{MyHeader:y},data:function(){return{visibleRoutes:Ct}}},kt=xt,wt=(a("034f"),Object(f["a"])(kt,r,o,!1,null,null,null)),Pt=wt.exports,jt=a("8c4f");n["a"].use(jt["a"]);var Ot=new jt["a"]({mode:"history",routes:yt});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Pt)},router:Ot}).$mount("#app")},6124:function(t,e,a){"use strict";var n=a("6d16"),r=a.n(n);r.a},"64a9":function(t,e,a){},"6d16":function(t,e,a){},"6e32":function(t,e,a){},"85c6":function(t,e,a){"use strict";var n=a("eccc"),r=a.n(n);r.a},9362:function(t,e,a){},ab0f:function(t,e,a){},ae63:function(t,e,a){},b2c1:function(t,e,a){},b77f:function(t,e,a){"use strict";var n=a("bc84"),r=a.n(n);r.a},bc84:function(t,e,a){},c43d:function(t,e,a){},d8ee:function(t,e,a){"use strict";var n=a("6e32"),r=a.n(n);r.a},eccc:function(t,e,a){},faf9:function(t,e,a){"use strict";var n=a("9362"),r=a.n(n);r.a}});
//# sourceMappingURL=app.a37cedef.js.map