(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{PCE5:function(t,s){t.exports="/demo/vuexy-vuejs-laravel-admin-template/demo-6/images/rocket.png?b4878de0b1717b9296ce3f44b929b6c3"},QH3m:function(t,s,i){t.exports=function(){"use strict";return{name:"countdown",data:function(){return{counting:!1,endTime:0,totalMilliseconds:0}},props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:function(t){return t>=0}},now:{type:Function,default:function(){return Date.now()}},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:function(t){return t>=0}},transform:{type:Function,default:function(t){return t}}},computed:{days:function(){return Math.floor(this.totalMilliseconds/864e5)},hours:function(){return Math.floor(this.totalMilliseconds%864e5/36e5)},minutes:function(){return Math.floor(this.totalMilliseconds%36e5/6e4)},seconds:function(){return Math.floor(this.totalMilliseconds%6e4/1e3)},milliseconds:function(){return Math.floor(this.totalMilliseconds%1e3)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.totalMilliseconds/36e5)},totalMinutes:function(){return Math.floor(this.totalMilliseconds/6e4)},totalSeconds:function(){return Math.floor(this.totalMilliseconds/1e3)}},render:function(t){return t(this.tag,this.$scopedSlots.default?[this.$scopedSlots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:this.$slots.default)},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},methods:{start:function(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit("start"),"visible"===document.visibilityState&&this.continue())},continue:function(){var t=this;if(this.counting){var s=Math.min(this.totalMilliseconds,this.interval);if(s>0)if(window.requestAnimationFrame){var i;this.requestId=requestAnimationFrame((function e(n){i||(i=n),n-i<s?t.requestId=requestAnimationFrame(e):t.progress()}))}else this.timeoutId=setTimeout((function(){t.progress()}),s);else this.end()}},pause:function(){window.requestAnimationFrame?cancelAnimationFrame(this.requestId):clearTimeout(this.timeoutId)},progress:function(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit("progress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort:function(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit("abort"))},end:function(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit("end"))},update:function(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange:function(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause()}}},mounted:function(){document.addEventListener("visibilitychange",this.handleVisibilityChange)},beforeDestroy:function(){document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.pause()}}}()},olP5:function(t,s,i){"use strict";i.r(s);var e=i("QH3m"),n={data:function(){return{value1:""}},components:{countdown:i.n(e).a}},o=i("KHd+"),a=Object(o.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter justify-center items-center"},[e("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-2/5 m-4"},[e("vx-card",[e("div",{staticClass:"vx-card__title mb-6"},[e("h2",{staticClass:"text-center"},[t._v("We are launching soon")])]),t._v(" "),e("img",{staticClass:"mx-auto mb-2",attrs:{src:i("PCE5"),alt:"coming-soon",width:"150"}}),t._v(" "),e("div",{staticClass:"count-down text-center"},[e("countdown",{attrs:{time:new Date("03/09/2021 00:00:00").getTime()-(new Date).getTime()},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"single-counter"},[e("span",{staticClass:"timer"},[t._v(t._s(s.days))]),t._v(" "),e("span",[t._v("Days")])]),t._v(" "),e("div",{staticClass:"single-counter"},[e("span",{staticClass:"timer"},[t._v(t._s(s.hours))]),t._v(" "),e("span",[t._v("Hours")])]),t._v(" "),e("div",{staticClass:"single-counter"},[e("span",{staticClass:"timer"},[t._v(t._s(s.minutes))]),t._v(" "),e("span",[t._v("Minutes")])]),t._v(" "),e("div",{staticClass:"single-counter"},[e("span",{staticClass:"timer"},[t._v(t._s(s.seconds))]),t._v(" "),e("span",[t._v("Seconds")])])]}}])})],1),t._v(" "),e("vs-divider",{attrs:{position:"center"}},[t._v("Subscribe")]),t._v(" "),e("div",{staticClass:"subscription"},[e("span",[t._v("If you would like to be notified when our app is live, Please subscribe to our mailing list.")]),t._v(" "),e("vs-input",{staticClass:"w-full mb-4",attrs:{type:"email","label-placeholder":"Email"},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}}),t._v(" "),e("vs-button",{staticClass:"w-full"},[t._v("Subscribe")])],1)],1)],1)])}),[],!1,null,null,null);s.default=a.exports}}]);