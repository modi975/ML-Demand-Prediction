(function(t){function n(n){for(var o,r,s=n[0],c=n[1],l=n[2],p=0,d=[];p<s.length;p++)r=s[p],i[r]&&d.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,s=1;s<e.length;s++){var c=e[s];0!==i[c]&&(o=!1)}o&&(a.splice(n--,1),t=r(r.s=e[0]))}return t}var o={},i={1:0},a=[];function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;a.push([0,0]),e()})({0:function(t,n,e){t.exports=e("Vtdi")},"02c9":function(t,n,e){n=t.exports=e("I1BE")(!1),n.push([t.i,"\n.list[data-v-19558582] {\n  font-size: 1em;\n  padding: 12px;\n  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: white;\n  position: absolute;\n  top: 3em;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  right: 0;\n  max-height: 300px;\n  overflow-y: scroll;\n}\n.list li[data-v-19558582] {\n    padding: 12px;\n    cursor: pointer;\n}\n.list li[data-v-19558582]:hover {\n      background: #f9f9f9;\n}\n",""])},"8byi":function(t,n,e){n=t.exports=e("I1BE")(!1),n.push([t.i,"\nbody {\n  margin: 0;\n}\n.control {\n  position: fixed;\n  z-index: 401;\n  top: 1em;\n  left: 1em;\n  right: 1em;\n}\n.current-location {\n  position: fixed;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 2em;\n  height: 2em;\n  z-index: 401;\n  bottom: 1em;\n  right: 1em;\n  font-size: 1em;\n  padding: 12px;\n  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: white;\n  padding: 0;\n}\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #2c3e50;\n  height: 100vh;\n}\n",""])},C0ky:function(t,n,e){"use strict";var o=e("ZZeK"),i=e.n(o);i.a},D0Mk:function(t,n,e){"use strict";var o=e("FQDb"),i=e.n(o);i.a},FQDb:function(t,n,e){var o=e("JMLG");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("SZ7m").default;i("2904c20d",o,!0,{sourceMap:!1,shadowMode:!1})},Gn2e:function(t,n,e){t.exports=e.p+"img/clear.7772d1cf.svg"},JMLG:function(t,n,e){n=t.exports=e("I1BE")(!1),n.push([t.i,"\n.select[data-v-5a8444bb] {\n  font-size: 1em;\n  padding: 12px;\n  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: white;\n  cursor: pointer;\n  padding-right: 2em;\n  position: relative;\n  display: inline-block;\n}\n.select .selected[data-v-5a8444bb] {\n    line-height: 18px;\n}\n.select.open .caret[data-v-5a8444bb] {\n    -webkit-transform: translateY(-50%) rotateX(180deg);\n            transform: translateY(-50%) rotateX(180deg);\n}\n.select .caret[data-v-5a8444bb] {\n    position: absolute;\n    right: 1em;\n    -webkit-transition: 0.2s ease-in-out transform;\n    transition: 0.2s ease-in-out transform;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n",""])},KoWi:function(t,n,e){var o=e("i1fK");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("SZ7m").default;i("0579e5f5",o,!0,{sourceMap:!1,shadowMode:!1})},UfJV:function(t,n,e){t.exports=e.p+"img/search.24ce06cb.svg"},Vtdi:function(t,n,e){"use strict";e.r(n);e("yt8O"),e("VRzm");var o=e("Kw5r"),i=e("vDqi"),a=e.n(i),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t.bannerMsg.length?e("FlockBanner",[t._v("\n    "+t._s(t.bannerMsg)+"\n  ")]):t._e(),e("div",{staticClass:"control"},[e("Input",{staticStyle:{width:"60%"},attrs:{icon:t.Search,suggestions:t.suggestions,placeholder:"Search"},on:{input:t.getSuggestions,selected:t.chooseSuggestion},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}}),e("Select",{staticStyle:{width:"36%","margin-left":"4%"},attrs:{options:t.timeSlots},on:{selected:t.populateHeatMap},model:{value:t.chosenTime,callback:function(n){t.chosenTime=n},expression:"chosenTime"}})],1),e("l-map",{ref:"map",attrs:{zoom:t.zoom,center:t.center,options:t.options}},[e("l-tile-layer",{attrs:{url:t.url}}),e("l-marker",{attrs:{"lat-lng":t.location}}),t._l(t.rectangles,function(t,n){return e("l-rectangle",{key:n,attrs:{bounds:t.bounds,color:t.color,fillColor:t.color,fillOpacity:.3,weight:1}})})],2),e("div",{staticClass:"current-location",on:{click:t.bringToCenter}},[e("img",{attrs:{src:t.Locate,alt:""}})])],1)},s=[],c=(e("INYr"),e("pIFo"),e("k5N+")),l=e("yT7P"),u=(e("xfY5"),e("RY4O")),p=e("vwn+"),d=e.n(p),g=e("6tPg"),f=e.n(g),b=e("uGKn"),h=e.n(b),m=e("UfJV"),x=e.n(m),v=e("vWb5"),w=e.n(v),y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"input-container",class:{"has-icon":t.icon}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.proxy,expression:"proxy"}],attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.proxy},on:{input:[function(n){n.target.composing||(t.proxy=n.target.value)},t.update]}}),t.icon?e("div",{staticClass:"icon"},[e("img",{attrs:{src:t.icon}})]):t._e(),e("SuggestionList",{attrs:{suggestions:t.suggestions},on:{selected:t.onSelect}}),t.proxy.length?e("img",{staticClass:"clear",attrs:{src:t.Clear},on:{click:t.clearContent}}):t._e()],1)},k=[],M=e("Gn2e"),S=e.n(M),L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.suggestions.length?e("ul",{staticClass:"list"},t._l(t.suggestions,function(n,o){return e("li",{key:o,on:{click:function(e){t.select(n)}}},[t._v("\n    "+t._s(n.text)+"\n  ")])})):t._e()},C=[],_={props:{suggestions:{type:Array,default:function(){return[]}}},methods:{select:function(t){this.$emit("selected",t)}}},z=_,j=(e("C0ky"),e("KHd+")),N=Object(j["a"])(z,L,C,!1,null,"19558582",null),O=N.exports,E={model:{prop:"value",event:"input"},components:{SuggestionList:O},props:{value:String,icon:String,placeholder:String,suggestions:{type:Array,default:function(){return[]}}},data:function(){return{Clear:S.a,proxy:this.value}},methods:{update:function(t){this.$emit("input",t.target.value)},onSelect:function(t){this.proxy=t.text,this.$emit("selected",t)},clearContent:function(){this.proxy="",this.$emit("input",this.proxy)}}},I=E,A=(e("mvAX"),Object(j["a"])(I,y,k,!1,null,"7cceecbf",null)),F=A.exports,T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"select",class:{open:t.open},on:{click:function(n){t.open=!t.open}}},[e("div",{staticClass:"selected"},[t._v(t._s(t.selected.text))]),e("img",{staticClass:"caret",attrs:{src:t.Caret}}),t.open?e("SuggestionList",{attrs:{suggestions:t.options},on:{selected:t.onSelect}}):t._e()],1)},Y=[],D=e("bXNV"),Z=e.n(D),$={components:{SuggestionList:O},data:function(){return{Caret:Z.a,selected:this.value,open:!1}},model:{prop:"value",event:"change"},props:{value:Object,options:{type:Array,default:function(){return[]}}},methods:{onSelect:function(t){this.open=!this.open,this.selected=t,this.$emit("selected",t)}}},B=$,P=(e("D0Mk"),Object(j["a"])(B,T,Y,!1,null,"5a8444bb",null)),G=P.exports,J=window,W=J.L,X=function(t){var n=t%12;return 0===n?"AM":t<12?"AM":"PM"},K=function(t){return t<=12?0===t?12:t:t%12||12},V=new h.a("pk.eyJ1IjoiZGl2eWFtc3VwZXJiIiwiYSI6ImNpeXY1MGdtNDAwMHYzMnFoeG9sbW5vN2gifQ.NjxieTUN_mNsyRv7NjUWCw"),H=["#D0021B","#D02C02","#D05D02","#E49D14","#E6BB01","#EFE401","#B3E202","#69E202","#00ECA4","#02CEE2"].reverse(),R=Array.apply(null,{length:24}).map(Number.call,Number).map(function(t){return{text:"".concat(K(t)," ").concat(X(t)," - ").concat(K(t+1)," ").concat(X(t+1))}}),U=new Date,Q={name:"app",components:Object(l["a"])({LMap:u["LMap"],LMarker:u["LMarker"],LRectangle:u["LRectangle"],LTileLayer:u["LTileLayer"]},d.a,{Input:F,Select:G}),data:function(){return{Search:x.a,Locate:w.a,bannerMsg:"",chosenTime:R[(U.getHours()+1)%24],map:null,search:"",data:null,timeSlots:R,suggestions:[],options:{zoomControl:!1,attributionControl:!1},rectangles:[],zoom:13,url:"https://api.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=".concat("pk.eyJ1IjoiZGl2eWFtc3VwZXJiIiwiYSI6ImNpeXY1MGdtNDAwMHYzMnFoeG9sbW5vN2gifQ.NjxieTUN_mNsyRv7NjUWCw"),center:W.latLng(0,0),location:W.latLng(0,0)}},mounted:function(){var t=this,n={timeout:1e5};navigator.geolocation.getCurrentPosition(this.createMap,this.createMapFailed,n),navigator.geolocation.watchPosition(this.updateLocation,this.updateLocationFailed,n),this.$http.get("hot-zone.json").then(function(n){var e=n.data;t.data=e,t.populateHeatMap(t.chosenTime)})},methods:{bringToCenter:function(){this.zoom=16,this.$refs.map.mapObject.panTo(this.location)},chooseSuggestion:function(t){if(this.suggestions=[],t.center){var n=Object(c["a"])(t.center,2),e=n[0],o=n[1];this.center=W.latLng(o,e),this.zoom=16}},getSuggestions:function(t){var n=this;t?V.geocodeForward(t,{proximity:{latitude:this.location.lat,longitude:this.location.lng}},function(t,e){e?n.showSuggestions(e.features):n.suggestions=[]}):this.suggestions=[]},showSuggestions:function(t){this.suggestions=t},getBounds:function(t){var n=t.replace(/^[0-9a-zA-Z]{4}/,"tdr1"),e=f.a.bounds(n),o=e.sw,i=e.ne;return[[o.lat,o.lon],[i.lat,i.lon]]},getColor:function(t){return H[parseInt(10*t,10)]},populateHeatMap:function(t){var n=this;this.rectangles=this.data[R.findIndex(function(n){return n.text===t.text})].map(function(t){var e=t.geohash,o=t.weight,i=n.getBounds(e),a=n.getColor(o);return{bounds:i,color:a}}),console.log(this.rectangles)},getLatLng:function(t){var n=t.latitude,e=t.longitude;return W.latLng(n,e)},createMapFailed:function(t){this.bannerMsg="Error creating map. ".concat(t.message)},updateLocation:function(t){var n=t.coords,e=n.latitude,o=n.longitude;this.location=W.latLng(e,o)},updateLocationFailed:function(){},createMap:function(t){var n=t.coords,e=n.latitude,o=n.longitude;this.center=W.latLng(e,o)}}},q=Q,tt=(e("nNx0"),Object(j["a"])(q,r,s,!1,null,null,null)),nt=tt.exports,et=e("lIOY");Object(et["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["default"].config.productionTip=!1,o["default"].prototype.$http=a.a.create({baseURL:"http://localhost:3000/api/"}),new o["default"]({render:function(t){return t(nt)}}).$mount("#app")},ZZeK:function(t,n,e){var o=e("02c9");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("SZ7m").default;i("6eb9e884",o,!0,{sourceMap:!1,shadowMode:!1})},bXNV:function(t,n,e){t.exports=e.p+"img/caret.41970f5d.svg"},i1fK:function(t,n,e){n=t.exports=e("I1BE")(!1),n.push([t.i,"\n.input-container[data-v-7cceecbf] {\n  position: relative;\n  display: inline-block;\n}\n.input-container .icon[data-v-7cceecbf] {\n    width: 1em;\n    height: 1em;\n    left: 1.25em;\n    top: 50%;\n    position: absolute;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.input-container .clear[data-v-7cceecbf] {\n    top: 50%;\n    right: 1em;\n    width: 1em;\n    height: 1em;\n    cursor: pointer;\n    position: absolute;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.has-icon input[data-v-7cceecbf] {\n  padding-left: 2.25em;\n}\ninput[data-v-7cceecbf] {\n  width: 100%;\n  font-size: 1em;\n  padding: 12px;\n  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: white;\n  border: none;\n}\ninput[data-v-7cceecbf]:focus {\n    outline: none;\n}\n",""])},"iyp/":function(t,n,e){var o=e("8byi");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("SZ7m").default;i("2a7c14de",o,!0,{sourceMap:!1,shadowMode:!1})},mvAX:function(t,n,e){"use strict";var o=e("KoWi"),i=e.n(o);i.a},nNx0:function(t,n,e){"use strict";var o=e("iyp/"),i=e.n(o);i.a},vWb5:function(t,n,e){t.exports=e.p+"img/locate.3c75afda.svg"}});
//# sourceMappingURL=app.f549b34c.js.map