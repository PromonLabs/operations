(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/fai":function(e,a){e.exports="/demo/vuexy-vuejs-laravel-admin-template/demo-5/images/graphic-2.png?560d813bbfa933a94178e2cc12a486c6"},"/pAy":function(e,a){e.exports="/demo/vuexy-vuejs-laravel-admin-template/demo-5/images/knowledge-base-cover.jpg?76a102a11e355a3e98ac0f72276eb90a"},"/r9i":function(e,a){e.exports="/demo/vuexy-vuejs-laravel-admin-template/demo-5/images/graphic-1.png?22b046f6fc2c8b16f16334eabab57831"},OE4y:function(e,a){e.exports="/demo/vuexy-vuejs-laravel-admin-template/demo-5/images/graphic-5.png?6e224f81e5f06c29aae270aae3b9ed83"},VcYm:function(e,a,t){var o=t("iQ19");"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(o,r);o.locals&&(e.exports=o.locals)},Xkls:function(e,a){e.exports="/demo/vuexy-vuejs-laravel-admin-template/demo-5/images/graphic-3.png?e88b80c08f4ace84500143771fb60340"},eDsW:function(e,a){e.exports="/demo/vuexy-vuejs-laravel-admin-template/demo-5/images/graphic-6.png?3ab06089c65139da847f10c7d64dc335"},iQ19:function(e,a,t){var o=t("sEG9");(e.exports=t("I1BE")(!1)).push([e.i,".knowledge-base-jumbotron-content {\n  background-image: url("+o(t("/pAy"))+");\n  background-size: cover;\n}",""])},l4RM:function(e,a){e.exports="/demo/vuexy-vuejs-laravel-admin-template/demo-5/images/graphic-4.png?6ab88846ad3498bdc9b1f00cc2243315"},qTru:function(e,a,t){"use strict";t.r(a);var o={data:function(){return{knowledgeBaseSearchQuery:"",kb:[{id:1,title:"Sales Automation",description:"Muffin lemon drops chocolate carrot cake chocolate bar sweet roll.",graphic:t("/r9i"),url:"/pages/knowledge-base/category"},{id:2,title:"Marketing Automation",description:"Gingerbread sesame snaps wafer soufflé. Macaroon brownie ice cream",graphic:t("/fai"),url:"/pages/knowledge-base/category"},{id:3,title:"Marketing BI",description:"cotton candy caramels danish chocolate cake pie candy. Lemon drops tart.",graphic:t("Xkls"),url:"/pages/knowledge-base/category"},{id:4,title:"Personalization",description:"Pudding oat cake carrot cake lemon drops gummies marshmallow.",graphic:t("l4RM"),url:"/pages/knowledge-base/category"},{id:5,title:"Email Marketing",description:"Gummi bears pudding icing sweet caramels chocolate",graphic:t("OE4y"),url:"/pages/knowledge-base/category"},{id:6,title:"Demand Generation",description:"Dragée jelly beans candy canes pudding cake wafer. Muffin croissant.",graphic:t("eDsW"),url:"/pages/knowledge-base/category"}]}},computed:{filteredKB:function(){var e=this;return this.kb.filter((function(a){return a.title.toLowerCase().includes(e.knowledgeBaseSearchQuery.toLowerCase())||a.description.toLowerCase().includes(e.knowledgeBaseSearchQuery.toLowerCase())}))}},methods:{},components:{}},r=(t("r3au"),t("KHd+")),s=Object(r.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"knowledge-base-page"}},[t("div",{staticClass:"knowledge-base-jumbotron"},[t("div",{staticClass:"knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base"},[t("h1",{staticClass:"mb-1 text-white"},[e._v("Dedicated Source Used on Website")]),e._v(" "),t("p",{staticClass:"text-white"},[e._v("Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer.")]),e._v(" "),t("vs-input",{staticClass:"w-full mt-6",attrs:{"icon-no-border":"",placeholder:"Search Topic or Keyword","icon-pack":"feather",icon:"icon-search",size:"large"},model:{value:e.knowledgeBaseSearchQuery,callback:function(a){e.knowledgeBaseSearchQuery=a},expression:"knowledgeBaseSearchQuery"}})],1)]),e._v(" "),t("div",{staticClass:"vx-row"},e._l(e.filteredKB,(function(a){return t("div",{key:a.id,staticClass:"vx-col w-full md:w-1/3 sm:w-1/2 mb-base",on:{click:function(t){e.$router.push(a.url).catch((function(){}))}}},[t("vx-card",{staticClass:"text-center cursor-pointer"},[t("img",{staticClass:"mx-auto mb-4",attrs:{src:a.graphic,alt:"graphic",width:"180"}}),e._v(" "),t("h4",{staticClass:"mb-2"},[e._v(e._s(a.title.toUpperCase()))]),e._v(" "),t("small",[e._v(e._s(a.description))])])],1)})),0)])}),[],!1,null,null,null);a.default=s.exports},r3au:function(e,a,t){"use strict";var o=t("VcYm");t.n(o).a}}]);