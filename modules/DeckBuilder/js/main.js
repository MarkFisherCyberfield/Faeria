(this["webpackJsonpdeckbuilder-react"]=this["webpackJsonpdeckbuilder-react"]||[]).push([[0],{54:function(e,a,s){},74:function(e,a,s){},81:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s.n(t),r=s(24),i=s.n(r),n=(s(54),s(10)),d=s(23),l=s(48),j=s(19),o=s.n(j),g=s(49),h=s(85),p=s(2),u=function(e){return e.data?Object(p.jsxs)(g.a,{action:!0,variant:"primary",id:e.id,onClick:e.click,children:[Object(p.jsx)(h.a,{pill:!0,variant:"primary",children:e.data.faeria})," ",e.data.name," ",Object(p.jsxs)(h.a,{variant:"secondary",children:["x",e.count]})]}):Object(p.jsx)(g.a,{})},b=s(88),m=function(e){var a=e.cardlist.map((function(a){return Object(p.jsx)(u,{id:a[0],count:a.length,data:e.data.filter((function(e){return e.id==a[0]}))[0],click:e.click},a[0])}));return Object(p.jsx)(b.a,{children:a})},f={0:"assets/images/cards/cheeksplore.jpg",1:"assets/images/cards/mercheek.jpg",2:"assets/images/cards/dolphin_cheekrider.jpg",3:"assets/images/cards/clamcheek.jpg",4:"assets/images/cards/ninjacheek.jpg",5:"assets/images/cards/song_of_the_mercheek.jpg",6:"assets/images/cards/cheek_in_a_bottle.jpg",7:"assets/images/cards/cheekie_in_a_lamp.jpg",8:"assets/images/cards/cheeklord.jpg",9:"assets/images/cards/rain_of_cheek.jpg",10:"assets/images/cards/cheekdrop.jpg",11:"assets/images/cards/cheekmoon.jpg",12:"assets/images/cards/cheekpearl.jpg",13:"assets/images/cards/crabcheek.jpg",14:"assets/images/cards/cheekcano.jpg",15:"assets/images/cards/cheekdevil.jpg",16:"assets/images/cards/cheekflame.jpg",17:"assets/images/cards/cheekblast.jpg",18:"assets/images/cards/cheekflame_faerie.jpg",19:"assets/images/cards/baby_cheekdevil.jpg",20:"assets/images/cards/ghostcheek_tower.jpg",21:"assets/images/cards/ghostcheek.jpg",22:"assets/images/cards/ghostcheek_alchemist.jpg",23:"assets/images/cards/cheekruption.jpg",24:"assets/images/cards/suncheek.jpg",25:"assets/images/cards/cheekflower.jpg",26:"assets/images/cards/cavecheek_dweller.jpg",27:"assets/images/cards/mushroom_cheek.jpg",28:"assets/images/cards/cheekshrooms.jpg",29:"assets/images/cards/cheektree_giant.jpg",30:"assets/images/cards/cheekworld_tree.jpg",31:"assets/images/cards/cheek_shaman.jpg",32:"assets/images/cards/cheekfox.jpg",33:"assets/images/cards/cheekbloom_spirit.jpg",34:"assets/images/cards/cheekshield_spirit.jpg",35:"assets/images/cards/cheek_dancers.jpg",36:"assets/images/cards/cheeksphynx.jpg",37:"assets/images/cards/cheeksphynx_a.jpg",38:"assets/images/cards/cheeksphynx_b.jpg",39:"assets/images/cards/cheeksphynx_c.jpg",40:"assets/images/cards/mummy_cheek.jpg",41:"assets/images/cards/cheeksquito.jpg",42:"assets/images/cards/cheek_air_balloon.jpg",43:"assets/images/cards/balloon_cheek.jpg",44:"assets/images/cards/dragon_cheekrider.jpg",45:"assets/images/cards/baby_dragoncheek.jpg",46:"assets/images/cards/cheek_glider.jpg",47:"assets/images/cards/cheek_pyramid.jpg",48:"assets/images/cards/cheek_wind.jpg",49:"assets/images/cards/canopic_cheekjar.jpg"},k=(s(74),function(e){var a=e.data.playable?"selectable":"not-selectable",s=e.data.playable?e.click:null;return Object(p.jsx)("div",{style:{width:"15vw",margin:"10px"},id:e.data.id,onClick:s,className:a,children:Object(p.jsx)("img",{style:{width:"15vw"},id:e.data.id,alt:e.data.id,src:f[e.data.id]})})}),O=function(e){return Object(p.jsx)("div",{children:"SearchBar"})},v=s(43),x=s(47),y=s(86),_=s(89),w=s(87),S=function(e){var a=Object(t.useState)([]),s=Object(n.a)(a,2),c=s[0],r=s[1],i=Object(t.useState)(e.data),j=Object(n.a)(i,2),g=j[0],u=j[1],b=Object(t.useState)({neutral:!1,forest:!1,desert:!1,mountain:!1,lake:!1}),f=Object(n.a)(b,2),S=f[0],C=(f[1],Object(t.useState)("")),E=Object(n.a)(C,2),N=E[0];E[1];Object(t.useEffect)((function(){o.a.get("/faeria/Faeria/utils/getCards.php").then((function(e){e.data.forEach((function(e){var a=F.find((function(a){return a.includes(parseInt(e.id))}));"1"===e.legendary?!a||a.length<1?e.playable=!0:e.playable=!1:!a||a.length<3?e.playable=!0:e.playable=!1})),r(e.data)})).catch((function(e){console.log("Network Error",e.message)}))}),[S,N]),Object(t.useEffect)((function(){var e=Object(l.a)(c);e.forEach((function(e){var a=F.find((function(a){return a.includes(parseInt(e.id))}));"1"===e.legendary?!a||a.length<1?e.playable=!0:e.playable=!1:!a||a.length<3?e.playable=!0:e.playable=!1})),r(e)}),[g]);var F=g.cards.reduce((function(e,a,s,t){return a===t[s-1]?e[e.length-1].push(a):e.push([a]),e}),[]),I=function(e){var a=0,s=0;return e.forEach((function(e){s++,a+=parseInt(c.filter((function(a){return a.id==e}))[0].faeria)})),s?a/s:0},J=function(e){var a=Object(d.a)({},g);a.cards.push(parseInt(e.target.id)),a.cards.sort((function(e,a){return e-a})),a.cost=I(a.cards),u(a)},D=c.map((function(e,a){return Object(p.jsx)(k,{click:J,data:e},e.id)})),B=30===g.cards.length?Object(p.jsx)(v.a,{onClick:function(){var a=new FormData;a.append("user",document.getElementById("user").value),a.append("deck",JSON.stringify(g)),o.a.post("/faeria/Faeria/utils/saveDeck.php",a).then((function(){e.click()})).catch((function(e){console.log("Network Error",e.message)}))},variant:"primary",size:"lg",children:"Save"}):Object(p.jsx)(v.a,{disabled:!0,variant:"secondary",size:"lg",children:"Save"}),T=function(e){var a=Object(d.a)({},g);a.deck_name=e.target.value,u(a)},z=function(e){var a=Object(d.a)({},g);a.cover=e.target.id,u(a)},A=c.length>0?c.find((function(e){return e.id==g.cover}))?c.find((function(e){return e.id==g.cover})).name:"No cover":null,W=A?F.map((function(e){return Object(p.jsx)(x.a.Item,{id:e[0],onClick:z,children:c.find((function(a){return a.id==e[0]})).name},e[0])})):null;return Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{style:{display:"flex",flexWrap:"wrap",height:"80vh",width:"70vw",justifyContent:"space-evenly",overflow:"scroll"},children:D}),Object(p.jsx)("div",{style:{display:"flex",flexWrap:"wrap",height:"20vh",width:"70vw",justifyContent:"space-evenly"},children:Object(p.jsx)(O,{landFilter:S,nameFilter:N})})]}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"30vw",height:"100vh",justifyContent:"flex-start",overflow:"scroll"},children:[Object(p.jsxs)(y.a,{children:[Object(p.jsxs)(y.a.Prepend,{children:[Object(p.jsx)(y.a.Text,{children:Object(p.jsx)(h.a,{pill:!0,variant:"primary",children:parseFloat(g.cost).toFixed(1)})}),Object(p.jsxs)(y.a.Text,{children:[g.cards.length,"/30"]}),Object(p.jsx)(y.a.Text,{id:"basic-addon1",children:"Name:"})]}),Object(p.jsx)(_.a,{onChange:T,placeholder:g.deck_name,"aria-label":g.deck_name,"aria-describedby":"basic-addon1"})]}),Object(p.jsxs)(y.a,{children:[Object(p.jsx)(y.a.Prepend,{children:Object(p.jsx)(y.a.Text,{id:"basic-addon2",children:"Cover:"})}),Object(p.jsx)(_.a,{onChange:T,readOnly:!0,defaultValue:A,"aria-label":A,"aria-describedby":"basic-addon2"}),Object(p.jsx)(w.a,{as:y.a.Append,variant:"secondary",title:"Select",id:"input-group-dropdown-2",children:W})]}),Object(p.jsx)(m,{cardlist:F,data:c,click:function(e){var a=Object(d.a)({},g);a.cards.splice(a.cards.findIndex((function(a){return a==e.target.id})),1),a.cost=I(a.cards),u(a)}}),B,Object(p.jsx)(v.a,{onClick:function(){e.click()},variant:"dark",size:"lg",children:"Cancel"})]})]})},C=function(e){return Object(p.jsxs)("div",{data:JSON.stringify(e.data),style:{width:"17vw",cursor:"pointer"},id:e.data.id,onClick:e.click,children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:e.data.deck_name}),Object(p.jsx)("img",{style:{width:"17vw"},id:e.data.id,alt:e.data.id,data:JSON.stringify(e.data),src:f[e.data.cover]})]})},E=function(e){var a=Object(t.useState)([]),s=Object(n.a)(a,2),c=s[0],r=s[1];Object(t.useEffect)((function(){var e=new FormData;e.append("user",document.getElementById("user").value),o.a.post("/faeria/Faeria/utils/getDecks.php",e).then((function(e){r(e.data)})).catch((function(e){console.log("Network Error",e.message)}))}),[]);var i=c.map((function(a){return Object(p.jsx)(C,{data:a,click:e.click},a.id)}));return i.push(Object(p.jsx)(C,{data:{id:0,deck_name:"Add new",cover:0,cards:[],cost:0},click:e.click},"0")),i},N=function(){var e=Object(t.useState)(!0),a=Object(n.a)(e,2),s=a[0],c=a[1],r=Object(t.useState)({}),i=Object(n.a)(r,2),d=i[0],l=i[1];return s?Object(p.jsx)("div",{style:{display:"flex",flexWrap:"wrap",height:"100vh",width:"100vw",justifyContent:"space-evenly",overflow:"scroll"},children:Object(p.jsx)(E,{click:function(e){l(JSON.parse(e.target.attributes.data.value)),c(!1)}})}):Object(p.jsx)(S,{data:d,click:function(){l({}),c(!0)}})},F=function(){return Object(p.jsx)(N,{})};s(80);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("deck-builder"))}},[[81,1,2]]]);
//# sourceMappingURL=main.0395ea51.chunk.js.map