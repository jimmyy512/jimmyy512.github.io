webpackJsonp([1],{DkFO:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},o,!1,function(t){i("s347")},null,null).exports,r=i("/ocq"),a={created:function(){this.addShakeEvent(),"vibrate"in navigator&&(this.isSupportVibrate=!0)},data:function(){return{isSupportDeviceMotion:!1,isSupportVibrate:!1,boxColorIndex:0,speed:15,x:0,y:0,z:0,lastX:0,lastY:0,lastZ:0}},methods:{demoBoxBGJudge:function(){return 1==this.boxColorIndex?{_1:!0}:2==this.boxColorIndex?{_2:!0}:3==this.boxColorIndex?{_3:!0}:4==this.boxColorIndex?{_4:!0}:5==this.boxColorIndex?{_5:!0}:void 0},isSupportDeviceMotionLabel:function(){return this.isSupportDeviceMotion?"支援":"不支援"},isSupportDeviceMotionCSS:function(){return this.isSupportDeviceMotion?{green:!0}:{red:!0}},isSupportVibrateCSS:function(){return this.isSupportVibrate?{green:!0}:{red:!0}},isSupportVibrateLabel:function(){return this.isSupportVibrate?"支援":"不支援"},addShakeEvent:function(){window.DeviceMotionEvent&&window.addEventListener("devicemotion",this.shakeEvent,!1)},shakeEvent:function(){this.isSupportDeviceMotion=!0;var t=event.accelerationIncludingGravity;this.x=t.x,this.y=t.y,(Math.abs(this.x-this.lastX)>this.speed||Math.abs(this.y-this.lastY)>this.speed)&&(this.boxColorIndex++,6==this.boxColorIndex&&(this.boxColorIndex=1),"vibrate"in navigator&&navigator.vibrate(700)),this.lastX=this.x,this.lastY=this.y}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v2",attrs:{id:"main"}},[i("div",{staticClass:"rowBlock1"},[i("span",[t._v("\n            支援陀螺儀：\n        ")]),t._v(" "),i("span",{class:t.isSupportDeviceMotionCSS()},[t._v("\n            "+t._s(t.isSupportDeviceMotionLabel())+"\n        ")])]),t._v(" "),i("div",{staticClass:"rowBlock2"},[i("span",[t._v("\n            支援震動：\n        ")]),t._v(" "),i("span",{class:t.isSupportVibrateCSS()},[t._v("\n            "+t._s(t.isSupportVibrateLabel())+"\n        ")])]),t._v(" "),i("div",{staticClass:"rowBlock3"},[i("div",{staticClass:"demoBox",class:t.demoBoxBGJudge()}),t._v(" "),i("span",[t._v("請先點擊屏幕一下")])])])},staticRenderFns:[]};var c=i("VU/8")(a,p,!1,function(t){i("DkFO")},"data-v-8dc2d774",null).exports;n.a.use(r.a);var u=new r.a({routes:[{path:"/",name:"HelloWorld",component:c}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:u,components:{App:s},template:"<App/>"})},s347:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.238ff4c91d2955e5201c.js.map