(function(e){function t(t){for(var r,o,c=t[0],a=t[1],l=t[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==i[a]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p=" /";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"0362":function(e,t,n){},"2d05":function(e,t,n){"use strict";var r=n("9866"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"titleText"}},[e._v(" Get Your Cryptic Writing Prompts Here ")]),n("div",{attrs:{id:"container2"}},[n("Sentence",{on:{"update-sentence":e.refreshSent}}),n("br"),n("AllSentences",{attrs:{list:e.sentenceList}})],1)])])},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"hello"}},[e._m(0),n("div",{attrs:{id:"generated"}},[e.waiting?n("span",[e._v(" "+e._s(e.sentence)+" ")]):n("span",[e._v(" "+e._s(e.sentence.start+" "+e.sentence.subject+" "+e.sentence.verb+" "+e.sentence.adverb+" "+e.sentence.prep)+" ")])]),n("button",{attrs:{id:"genButton"},on:{click:e.post}},[e._v(" CLICK HERE TO GENERATE ")])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"titleAll"}},[n("h1",[e._v("Start With This:")])])}],a=n("bc3a"),l=n.n(a),u={name:"Sentence",data:function(){return{sentence:"Your first prompt awaits... 🖋",waiting:!0}},methods:{post:function(){var e=this;l.a.post("/api/newSentence").then((function(t){e.sentence=t.data,e.$emit("update-sentence",e.sentence),console.log(e.waiting),e.waiting=!1,console.log(e.waiting)})).catch(console.error)}}},d=u,p=(n("2d05"),n("2877")),f=Object(p["a"])(d,o,c,!1,null,null,null),v=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"allOfThem"}},[e._m(0),n("div",{attrs:{id:"inside"}},[n("ul",{attrs:{id:"sentList"}},e._l(e.list.slice().reverse(),(function(t){return n("li",{key:t.id,attrs:{id:"sent"}},[e._v(" "+e._s(t.start+" "+t.subject+" "+t.verb+" "+t.adverb+" "+t.prep)+" ")])})),0)])])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"titleAll"}},[n("h1",[e._v("Previously Generated:")])])}],b={name:"AllSentences",props:{list:Array},methods:{addSentence:function(){this.list.push(newsent),console.log(newsent),clicked=!1}}},_=b,m=(n("73ae"),Object(p["a"])(_,h,g,!1,null,null,null)),y=m.exports,w={name:"App",components:{Sentence:v,AllSentences:y},data:function(){return{generated:String,generateClicked:Boolean,sentenceList:[]}},mounted:function(){var e=this;l.a.get("/api/allSentences").then((function(t){e.sentenceList=t.data,console.log(e.sentenceList)})).catch(console.error)},methods:{refreshSent:function(e){this.generated=e,this.sentenceList.push(this.generated),console.log(this.generated)}}},S=w,O=(n("034f"),Object(p["a"])(S,i,s,!1,null,null,null)),j=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"73ae":function(e,t,n){"use strict";var r=n("0362"),i=n.n(r);i.a},"85ec":function(e,t,n){},9866:function(e,t,n){}});
//# sourceMappingURL=app.348ce1f5.js.map