webpackJsonp([1],{"7KKC":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},o,!1,function(t){i("s347")},null,null).exports,r=i("/ocq"),a={created:function(){this.addShakeEvent()},data:function(){return{isSupportDeviceMotion:!1,isSupportVibrate:!1,boxColorIndex:0,speed:15,x:0,y:0,z:0,lastX:0,lastY:0,lastZ:0}},methods:{demoBoxBGJudge:function(){return"_"+this.boxColorIndex},isSupportDeviceMotionLabel:function(){return this.isSupportDeviceMotion?"支援":"不支援"},isSupportDeviceMotionCSS:function(){return this.isSupportDeviceMotion?{green:!0}:{red:!0}},isSupportVibrateCSS:function(){return this.isSupportVibrate?{green:!0}:{red:!0}},isSupportVibrateLabel:function(){return this.isSupportVibrate?"支援":"不支援"},addShakeEvent:function(){window.DeviceMotionEvent&&(this.isSupportDeviceMotion=!0,window.addEventListener("devicemotion",this.shakeEvent,!1))},shakeEvent:function(){var t=event.accelerationIncludingGravity;this.x=t.x,this.y=t.y,(Math.abs(this.x-this.lastX)>this.speed||Math.abs(this.y-this.lastY)>this.speed)&&(this.boxColorIndex++,6==this.boxColorIndex&&(this.boxColorIndex=1),"vibrate"in navigator&&(this.isSupportVibrate=!0,navigator.vibrate(700))),this.lastX=this.x,this.lastY=this.y}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v1",attrs:{id:"main"}},[i("div",{staticClass:"rowBlock1"},[i("span",[t._v("\n            支援陀螺儀：\n        ")]),t._v(" "),i("span",{class:t.isSupportDeviceMotionCSS()},[t._v("\n            "+t._s(t.isSupportDeviceMotionLabel())+"\n        ")])]),t._v(" "),i("div",{staticClass:"rowBlock2"},[i("span",[t._v("\n            支援震動：\n        ")]),t._v(" "),i("span",{class:t.isSupportVibrateCSS()},[t._v("\n            "+t._s(t.isSupportVibrateLabel())+"\n        ")])]),t._v(" "),i("div",{staticClass:"rowBlock3"},[i("div",[t._v("\n          demo\n        ")]),t._v(" "),i("div",{staticClass:"demoBox",style:t.demoBoxBGJudge()})])])},staticRenderFns:[]};var u=i("VU/8")(a,p,!1,function(t){i("7KKC")},"data-v-43a457da",null).exports;n.a.use(r.a);var c=new r.a({routes:[{path:"/",name:"HelloWorld",component:u}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:c,components:{App:s},template:"<App/>"})},s347:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.de8f329e79bb8eacea3e.js.map