(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-519b01b5"],{"24ad":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-page"},[a("div",{staticClass:"main-header-box"},[a("div",{staticClass:"header-wrapper"},[a("div",{staticClass:"header-name-text"},[t._v(t._s(t.dataInfo.vaccineName))]),a("div",{staticClass:"label-item"},[t._v(t._s(t.dataInfo.label))])]),a("div",{staticClass:"header-desc-text"},[t._v(t._s(t.dataInfo.vaccinateTimeName))])]),a("div",t._l(t.dataInfo.contentList,(function(e,n){return a("div",{key:n,staticClass:"main-content-box"},[a("div",{staticClass:"content-header"},[t._v(t._s(e.title))]),a("div",{staticClass:"content-text"},[t._v(t._s(e.content))])])})),0)])},s=[],c=(a("63ff"),a("ad3e")),i={name:"",data:function(){return{dataInfo:{vaccinateId:"123456789",vaccineName:"卡戒苗",vaccinateTimeName:"出生",label:"自费",contentList:[{title:"疫苗简介",content:"HHJHJJJjskjsksksk"},{title:"疫苗简介",content:"HHJHJJJjskjsksksk"}]}}},props:[],watch:{},components:{},computed:{},created:function(){this.fetchData()},methods:{fetchData:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.query.articleId?this.$route.query.articleId:this.$route.query.hospitalArticleId,a=this.$route.query.articleId?knowledgeGraphs+"/"+e:pregnantNotice+"/"+e,t.next=4,this.$request(a,{},"GET");case 4:n=t.sent,n&&(this.articleInfo=n.data);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},r=i,o=(a("84cc"),a("6691")),u=Object(o["a"])(r,n,s,!1,null,null,null);e["default"]=u.exports},"84cc":function(t,e,a){"use strict";var n=a("92c7"),s=a.n(n);s.a},"92c7":function(t,e,a){}}]);
//# sourceMappingURL=chunk-519b01b5.e2b1d867.js.map