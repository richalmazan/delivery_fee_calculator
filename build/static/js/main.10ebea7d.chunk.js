(this["webpackJsonpdistance-calculator"]=this["webpackJsonpdistance-calculator"]||[]).push([[0],{62:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),r=a.n(o),c=(a(62),a(38)),l=a(112),d=a(113),s=a(27),u=(a(66),a(34)),m={options:[{title:"Within Apalit",insideSourceTown:!0,distanceFromSourceTown:0,baseRate:40,perKm:10},{title:"Barney's Mang Cha-a - CDCP",insideSourceTown:!1,distanceFromSourceTown:4.5,baseRate:50,perKm:15},{title:"Cake's and Cream Cafe",insideSourceTown:!1,distanceFromSourceTown:4.5,baseRate:50,perKm:15},{title:"Our Daily Bread Cafe - San Simon",insideSourceTown:!1,distanceFromSourceTown:5.1,baseRate:50,perKm:15},{title:"Milkfridge - Minalin",insideSourceTown:!1,distanceFromSourceTown:5.2,baseRate:50,perKm:15},{title:"WingShots - Paligui",insideSourceTown:!1,distanceFromSourceTown:3.4,baseRate:50,perKm:15}],selectedOption:null,actualKm:0,additionalStore:0,finalDf:0},b=Object(u.b)({name:"calculator",initialState:m,reducers:{setSelectedOptions:function(e,t){e.selectedOption=t.payload},setActualKm:function(e,t){e.actualKm=parseFloat(t.payload)},setFinalDf:function(e,t){e.finalDf=t.payload},setAdditionalStore:function(e,t){e.additionalStore=t.payload},reset:function(e){return m}}}),p=b.actions,f=p.setSelectedOptions,h=p.setActualKm,j=p.setFinalDf,O=p.setAdditionalStore,S=p.reset,g=function(e){return e.calculator},v=b.reducer,w=a(110),y=a(11),W=function(){var e=Object(s.c)(g),t=Object(s.b)();return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(d.a,{value:e.selectedOption,onChange:function(e,a){return t(f(a))},id:"store-codes",options:e.options,getOptionLabel:function(e){return e.title},style:{minWidth:300,maxWidth:400,marginTop:"2rem"},renderInput:function(e){return Object(y.jsx)(l.a,Object(c.a)(Object(c.a)({},e),{},{label:"Store Code",variant:"outlined"}))}}),Object(y.jsx)(l.a,{id:"outlined-basic",label:"Actual KM",variant:"outlined",style:{minWidth:300,maxWidth:400,marginTop:"1.5rem"},type:"number",onChange:function(e){return t(h(e.target.value))},value:0===parseFloat(e.actualKm)?"":parseFloat(e.actualKm),disabled:!e.selectedOption}),Object(y.jsx)(l.a,{id:"outlined-basic",label:"Additional Store",variant:"outlined",style:{minWidth:300,maxWidth:400,marginTop:"1.5rem"},type:"number",onChange:function(e){return t(O(e.target.value))},value:0===parseInt(e.additionalStore)?"":parseFloat(e.additionalStore),disabled:!e.selectedOption}),Object(y.jsx)(l.a,{id:"outlined-basic",label:"Final DF",variant:"outlined",style:{minWidth:300,maxWidth:400,marginTop:"1.5rem",fontWeight:"bold"},type:"number",value:e.finalDf,disabled:!0}),Object(y.jsxs)("div",{className:"buttonWrapper",children:[Object(y.jsx)(w.a,{color:"primary",variant:"contained",style:{minWidth:140,maxWidth:180,marginRight:10,fontWeight:"bold",color:"#fff"},onClick:function(){var a,n=e.selectedOption,i=e.actualKm,o=e.additionalStore,r=n.insideSourceTown,c=n.distanceFromSourceTown,l=n.baseRate,d=n.perKm;if(r)a=d*(i-1)+l;else{var s=0;i<=2.9&&(s=c/2*10),a=d*(i-1)+l+s}t(j(a+25*o))},disabled:!e.selectedOption||0===e.actualKm,children:"Calculate"}),Object(y.jsx)(w.a,{color:"primary",variant:"outlined",style:{minWidth:140,maxWidth:180,fontWeight:"bold"},onClick:function(){return t(S())},children:"Clear"})]})]})},x=Object(u.a)({reducer:{calculator:v}}),T=a(111);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(36),C=a(51),F=Object(C.a)({palette:{primary:{main:"#ffa500"},secondary:{main:"#19857b"},error:{main:K.a.A400},background:{default:"#fff"}}});r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(T.a,{theme:F,children:Object(y.jsx)(s.a,{store:x,children:Object(y.jsx)(W,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[69,1,2]]]);
//# sourceMappingURL=main.10ebea7d.chunk.js.map