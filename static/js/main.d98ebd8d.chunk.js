(this.webpackJsonpdelivery_fee_calculator=this.webpackJsonpdelivery_fee_calculator||[]).push([[0],{62:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),r=a.n(o),c=(a(62),a(38)),l=a(112),s=a(113),d=a(27),u=(a(66),a(34)),m={options:[{title:"Within Apalit",insideSourceTown:!0,distanceFromSourceTown:0,baseRate:40,perKm:10},{title:"JA Food Hub - Capalangan",insideSourceTown:!1,distanceFromSourceTown:2.4,baseRate:50,perKm:15},{title:"Pink Planter - Capalangan McArthur",insideSourceTown:!1,distanceFromSourceTown:2.4,baseRate:50,perKm:15},{title:"Let's Get F.A.T. - Capalangan",insideSourceTown:!1,distanceFromSourceTown:3.3,baseRate:50,perKm:15},{title:"Barney's Mang Cha-a - CDCP",insideSourceTown:!1,distanceFromSourceTown:4.5,baseRate:50,perKm:15},{title:"Our Daily Bread Cafe - San Simon",insideSourceTown:!1,distanceFromSourceTown:5.1,baseRate:50,perKm:15},{title:"Milkfridge - Minalin",insideSourceTown:!1,distanceFromSourceTown:5.2,baseRate:50,perKm:15},{title:"Danda's Pizza - Minalin",insideSourceTown:!1,distanceFromSourceTown:5.2,baseRate:50,perKm:15},{title:"92 Parameter - Paligui",insideSourceTown:!1,distanceFromSourceTown:3.4,baseRate:50,perKm:15},{title:"WingShots - Paligui",insideSourceTown:!1,distanceFromSourceTown:3.4,baseRate:50,perKm:15},{title:"Curfew - Sampaga",insideSourceTown:!1,distanceFromSourceTown:1.9,baseRate:50,perKm:15},{title:"Cake's and Cream Cafe - San Simon",insideSourceTown:!1,distanceFromSourceTown:4.5,baseRate:50,perKm:15},{title:"Katsubo Ramen - San Simon",insideSourceTown:!1,distanceFromSourceTown:1.9,baseRate:50,perKm:15}],selectedOption:null,actualKm:0,additionalStore:0,finalDf:0},p=Object(u.b)({name:"calculator",initialState:m,reducers:{setSelectedOptions:function(e,t){e.selectedOption=t.payload},setActualKm:function(e,t){e.actualKm=parseFloat(t.payload)},setFinalDf:function(e,t){e.finalDf=t.payload},setAdditionalStore:function(e,t){e.additionalStore=t.payload},reset:function(e){return m}}}),b=p.actions,S=b.setSelectedOptions,f=b.setActualKm,h=b.setFinalDf,w=b.setAdditionalStore,j=b.reset,T=function(e){return e.calculator},O=p.reducer,g=a(110),v=a(11),F=function(){var e=Object(d.c)(T),t=Object(d.b)();return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(s.a,{value:e.selectedOption,onChange:function(e,a){return t(S(a))},id:"store-codes",options:e.options,getOptionLabel:function(e){return e.title},style:{minWidth:300,maxWidth:400,marginTop:"2rem"},renderInput:function(e){return Object(v.jsx)(l.a,Object(c.a)(Object(c.a)({},e),{},{label:"Store Code",variant:"outlined"}))}}),Object(v.jsx)(l.a,{id:"outlined-basic",label:"Actual KM",variant:"outlined",style:{minWidth:300,maxWidth:400,marginTop:"1.5rem"},type:"number",onChange:function(e){return t(f(e.target.value))},value:0===parseFloat(e.actualKm)?"":parseFloat(e.actualKm),disabled:!e.selectedOption}),Object(v.jsx)(l.a,{id:"outlined-basic",label:"Additional Store",variant:"outlined",style:{minWidth:300,maxWidth:400,marginTop:"1.5rem"},type:"number",onChange:function(e){return t(w(e.target.value))},value:0===parseInt(e.additionalStore)?"":parseFloat(e.additionalStore),disabled:!e.selectedOption}),Object(v.jsx)(l.a,{id:"outlined-basic",label:"Final DF",variant:"outlined",style:{minWidth:300,maxWidth:400,marginTop:"1.5rem",fontWeight:"bold"},type:"number",value:e.finalDf,disabled:!0}),Object(v.jsxs)("div",{className:"buttonWrapper",children:[Object(v.jsx)(g.a,{color:"primary",variant:"contained",style:{minWidth:140,maxWidth:180,marginRight:10,fontWeight:"bold",color:"#fff"},onClick:function(){var a,n=e.selectedOption,i=e.actualKm,o=e.additionalStore,r=n.insideSourceTown,c=n.distanceFromSourceTown,l=n.baseRate,s=n.perKm;if(r)a=s*(i-1)+l;else{var d=0;i<=2.9&&(d=c/2*10),a=s*(i-1)+l+d}t(h(a+25*o))},disabled:!e.selectedOption||0===e.actualKm,children:"Calculate"}),Object(v.jsx)(g.a,{color:"primary",variant:"outlined",style:{minWidth:140,maxWidth:180,fontWeight:"bold"},onClick:function(){return t(j())},children:"Clear"})]})]})},K=Object(u.a)({reducer:{calculator:O}}),y=a(111);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(36),x=a(51),C=Object(x.a)({palette:{primary:{main:"#ffa500"},secondary:{main:"#19857b"},error:{main:W.a.A400},background:{default:"#fff"}}});r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(y.a,{theme:C,children:Object(v.jsx)(d.a,{store:K,children:Object(v.jsx)(F,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[69,1,2]]]);
//# sourceMappingURL=main.d98ebd8d.chunk.js.map