(this.webpackJsonpdanyelkoca=this.webpackJsonpdanyelkoca||[]).push([[0],{89:function(e,t,i){},97:function(e,t,i){"use strict";i.r(t);var a=i(10),n=i.n(a),c=(i(89),i(76)),o=i(147),r=i(23),l=i(0),s=i.n(l),A=i(99),j=i(143),d=i(71),p=i.n(d),h=i(70),b=i.n(h),g=i(148),u=i(150),m=i(69),K=i.n(m),x=i(68),f=i.n(x),O=i(8),y=i(19),v=Object(y.b)({name:"theme",initialState:{value:!1},reducers:{changeTheme:function(e){e.value=!e.value}}}),k=v.actions.changeTheme,w=v.reducer,F=Object(y.b)({name:"lang",initialState:{value:"en"},reducers:{changeLang:function(e,t){e.value=t.payload}}}),U=F.actions.changeLang,R=F.reducer,C=Object(y.b)({name:"visible",initialState:{value:"home"},reducers:{changeVisible:function(e,t){e.value=t.payload}}}),B=C.actions.changeVisible,S=C.reducer,P=i(140),D=i(1),H=function(){var e=Object(O.c)((function(e){return e.theme.value})),t=Object(O.c)((function(e){return e.lang.value})),i=Object(O.b)(),a=s.a.useState(null),n=Object(r.a)(a,2),c=n[0],o=n[1],l=function(){o(null)},d=s.a.useState(null),h=Object(r.a)(d,2),m=h[0],x=h[1],y=function(){x(null)};return Object(D.jsxs)("div",{style:{borderBottom:e?"1px solid rgba(255,255,255,0.3)":"1px solid rgba(0,0,0,0.1)",display:"flex",justifyContent:"space-between",alignItems:"center",padding:10},children:[Object(D.jsx)(P.a,{onClick:function(){i(B("home"))},href:"#",style:{textDecoration:"none",color:"inherit"},children:Object(D.jsx)(A.a,{variant:"h6",children:"en"===t?"Danyel Koca":"\u30b3\u30b8\u30e3\u30fb\u30c0\u30cb\u30a8\u30eb"})}),Object(D.jsxs)("div",{children:[Object(D.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"nightMode",onClick:function(){return i(k())},style:{marginRight:10},children:e?Object(D.jsx)(f.a,{}):Object(D.jsx)(K.a,{})}),Object(D.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"translate","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},"aria-controls":"translate-menu",style:{marginRight:10},children:Object(D.jsx)(b.a,{})}),Object(D.jsxs)(g.a,{id:"translate-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:l,children:[Object(D.jsx)(u.a,{disabled:"en"===t,onClick:function(){l(),i(U("en"==t?"jp":"en"))},children:"en"===t?"English":"\u82f1\u8a9e"}),Object(D.jsx)(u.a,{disabled:"jp"===t,onClick:function(){l(),i(U("en"==t?"jp":"en"))},children:"en"===t?"Japanese":"\u65e5\u672c\u8a9e"})]}),Object(D.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"main menu","aria-haspopup":"true",onClick:function(e){x(e.currentTarget)},"aria-controls":"main-menu",children:Object(D.jsx)(p.a,{})}),Object(D.jsxs)(g.a,{id:"main-menu",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:y,children:[Object(D.jsx)(u.a,{onClick:y,children:Object(D.jsx)(P.a,{onClick:function(){i(B("home"))},href:"#my-works",style:{textDecoration:"none",color:"black"},children:"en"===t?"My works":"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4e8b\u4f8b"})}),Object(D.jsx)(u.a,{onClick:y,children:Object(D.jsx)(P.a,{onClick:function(){i(B("home"))},href:"#about",style:{textDecoration:"none",color:"black"},children:"en"===t?"My story":"\u5b66\u30fb\u7d4c\u6b74"})}),Object(D.jsx)(u.a,{onClick:y,children:Object(D.jsx)(P.a,{onClick:function(){i(B("home"))},href:"#blog",style:{textDecoration:"none",color:"black"},children:"en"===t?"Blog":"\u30d6\u30ed\u30b0"})}),Object(D.jsx)(u.a,{onClick:y,children:Object(D.jsx)(P.a,{onClick:function(){i(B("home"))},href:"#contact",style:{textDecoration:"none",color:"black"},children:"en"===t?"Contact":"\u30b3\u30f3\u30bf\u30af\u30c8"})})]})]})]})},Q=i(16),N=i.p+"static/media/profile.d3b4a60b.jpg",T=i(144),E=Object(T.a)((function(e){var t;return{profile:(t={width:"100%",height:"100%",borderRadius:1e3,maxWidth:"200px",maxHeight:"200px"},Object(Q.a)(t,"width","auto"),Object(Q.a)(t,"height","auto"),Object(Q.a)(t,"filter","brightness(110%) saturate(110%)"),t)}})),M=function(){var e=Object(O.c)((function(e){return e.lang.value})),t=E();return Object(D.jsxs)("div",{className:"info",children:[Object(D.jsx)("div",{style:{marginRight:20},className:"infoImgDiv",children:Object(D.jsx)("img",{src:N,alt:"profile",className:t.profile})}),Object(D.jsx)("div",{children:Object(D.jsx)(A.a,{variant:"h3",style:{width:"100%"},children:"en"===e?"Hi! I'm Danyel, an entrepreneur based in Tokyo\ud83d\uddfc":"\u3053\u3093\u306b\u3061\u306f\uff01\u6771\u4eac\u5728\u4f4f\u306e\u4e8b\u696d\u5bb6\u3067\u3059\ud83d\uddfc"})})]})},I=i(145),W=i.p+"static/media/health.0908b618.jpg",V=i.p+"static/media/data.366cb70c.jpg",J=i.p+"static/media/web.559cd194.jpg",q=i.p+"static/media/healthDark.6c5464ca.jpg",z=i.p+"static/media/dataDark.6389a326.jpg",L=i.p+"static/media/webDark.34024c21.jpg",X=function(e){var t=e.title,i=e.noMarginBottom,a=Object(O.c)((function(e){return e.theme.value})),n=Object(O.c)((function(e){return e.lang.value}));return Object(D.jsx)("div",{className:a?"section-title section-title-dark":"section-title",style:{marginBottom:i?0:20},children:Object(D.jsx)(A.a,{variant:"h5",component:"span",style:{fontWeight:"300",padding:"0px 40px",backgroundColor:a?"#121212":"white",zIndex:2},children:t[n]})})},G=Object(y.b)({name:"work",initialState:{value:"all"},reducers:{changeWork:function(e,t){e.value=t.payload}}}),Y=G.actions.changeWork,Z=G.reducer,_=Object(T.a)((function(e){return{profile:{width:"100%",height:"100%",borderRadius:1e3,maxWidth:"200px",filter:"brightness(110%)",boxShadow:"0px 0px 3px 1px rgba(0, 0, 0, 0.2)"}}})),$={data:{en:"Data Science",jp:"\u30c7\u30fc\u30bf\u30b5\u30a4\u30a8\u30f3\u30b9",img:{day:V,night:z}},web:{en:"Web Development",jp:"Web\u958b\u767a",img:{day:J,night:L}},health:{en:"Healthcare",jp:"\u533b\u7642",img:{day:W,night:q}}},ee=function(){_();var e=Object(O.c)((function(e){return e.theme.value})),t=Object(O.c)((function(e){return e.lang.value})),i=Object(O.b)();return Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column"},id:"my-works",children:[Object(D.jsx)(X,{title:{en:"My works",jp:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4e8b\u4f8b"}}),Object(D.jsx)("div",{children:Object(D.jsx)(I.a,{container:!0,spacing:3,style:{marginBottom:20},children:Object.keys($).map((function(a){return Object(D.jsx)(I.a,{item:!0,xs:"12",md:"4",className:"work work-main",children:Object(D.jsxs)(P.a,{href:"#",className:"workLink",onClick:function(){i(Y(a)),i(B("works"))},children:[Object(D.jsx)("img",{style:{filter:e?"grayscale(0.5)":"grayscale(0)"},src:e?$[a].img.night:$[a].img.day,alt:$[a][t]}),Object(D.jsx)(A.a,{children:$[a][t]})]})})}))})})]})},te=i(151),ie=i(72),ae=i.n(ie),ne=[{title:{en:"My articles have reached 2k+ views!",jp:"\u4f5c\u6210\u3057\u305f\u8a18\u4e8b\u306e\u518d\u751f\u56de\u6570\u306f\uff12\u5343\u56de\u3092\u7a81\u7834\u3057\u307e\u3057\u305f"},date:"2022/2/26",content:{en:Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{children:"I have been publishing on Medium (in English) and Qiita (in Japanese) since last year and I'm glad to announce that my channels have exceeded 2k views. I usually publish about data science projects trying to solve business problems relating to Japan market. Please see below for the articles:"}),Object(D.jsxs)("ul",{className:"ul",children:[Object(D.jsx)("li",{children:Object(D.jsx)("a",{target:"_blank",href:"https://medium.com/p/8cc980cbc350",children:"Predicting house prices with machine learning"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{target:"_blank",href:"https://medium.com/p/11b1fdc7c27e",children:"Japanese multiclass text classification with 97% accuracy using BERT"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{target:"_blank",href:"https://qiita.com/dannyk/items/bee0249af1f77bc416d8",children:"BERT\u3092\u7528\u3044\u3066NHK\u756a\u7d44\u306e\u30b8\u30e3\u30f3\u30eb\u309297\uff05\u306e\u7cbe\u5ea6\u3067\u4e88\u6e2c\u3057\u307e\u3057\u3087\u3046"})})]}),Object(D.jsx)("p",{children:"There are more projects in pipeline so please stay tuned!"})]}),jp:Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{children:"2021\u306e\u79cb\u9803\u306b\u82f1\u8a9e\u3068\u65e5\u672c\u8a9e\u3067\u8a18\u4e8b\u3092\u4f5c\u6210\u3057\u59cb\u3081\u30012022\u5e742\u6708\u6642\u70b9\u3067\u518d\u751f\u56de\u6570\u306f\uff12\u5343\u56de\u3092\u7a81\u7834\u3057\u307e\u3057\u305f\u3002 \u8a18\u4e8b\u306e\u4e3b\u306a\u30c6\u30fc\u30de\u306f\u65e5\u672c\u306e\u30c7\u30fc\u30bf\u3092\u7528\u3044\u3066\u3001\u73fe\u4ee3\u306e\u30d3\u30b8\u30cd\u30b9\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u306a\u308a\u307e\u3059\u3002 \u4eca\u307e\u3067\u306b\u4f5c\u6210\u3057\u305f\u8a18\u4e8b\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\uff1a"}),Object(D.jsxs)("ul",{className:"ul",children:[Object(D.jsx)("li",{children:Object(D.jsx)("a",{target:"_blank",href:"https://medium.com/p/8cc980cbc350",children:"Predicting house prices with machine learning"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{target:"_blank",href:"https://medium.com/p/11b1fdc7c27e",children:"Japanese multiclass text classification with 97% accuracy using BERT"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{target:"_blank",href:"https://qiita.com/dannyk/items/bee0249af1f77bc416d8",children:"BERT\u3092\u7528\u3044\u3066NHK\u756a\u7d44\u306e\u30b8\u30e3\u30f3\u30eb\u309297\uff05\u306e\u7cbe\u5ea6\u3067\u4e88\u6e2c\u3057\u307e\u3057\u3087\u3046"})})]}),Object(D.jsx)("p",{children:"\u73fe\u5728\u3082\u8907\u6570\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5b9f\u65bd\u3057\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u5b8c\u4e86\u6b21\u7b2c\u306b\u5171\u6709\u3057\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"})]})}}],ce=function(){var e=Object(O.c)((function(e){return e.lang.value})),t=Object(O.c)((function(e){return e.theme.value}));return Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column"},id:"blog",children:[Object(D.jsx)(X,{title:{en:"Blog",jp:"\u30d6\u30ed\u30b0"}}),Object(D.jsx)(I.a,{container:!0,spacing:3,children:ne.map((function(i,a){return Object(D.jsx)(I.a,{item:!0,xs:"12",children:Object(D.jsxs)("div",{className:"blogItem",style:{textDecoration:"none",background:t?"rgba(255,255,255,0.05)":"aliceblue"},children:[Object(D.jsxs)("div",{className:"flex",children:[Object(D.jsx)(A.a,{variant:"h6",component:"span",style:{marginRight:20},children:i.title[e]}),Object(D.jsx)(te.a,{icon:Object(D.jsx)(ae.a,{}),variant:"outlined",label:i.date,style:{color:t?"gray":"black"}})]}),Object(D.jsx)(A.a,{variant:"body2",children:i.content[e]})]})})}))})]})};var oe=function(e){var t,i=e.img,a=e.text,n=e.date,c=(e.index,Object(O.c)((function(e){return e.theme.value})));return Object(D.jsxs)("div",{className:c?"item itemNight":"item",style:{backgroundColor:c?"rgba(255,255,255,0.05)":(t=.6,"hsla(".concat(360*Math.random(),", ").concat(25+70*Math.random(),"%, ").concat(85+10*Math.random(),"%, ").concat(t,")"))},children:[Object(D.jsx)("span",{className:c?"date dateNight":"date",children:n}),Object(D.jsx)("img",{src:i,alt:a}),Object(D.jsx)(A.a,{variant:"subtitle2",children:a})]})},re=i.p+"static/media/slovenia.44543dc7.jpg",le=i.p+"static/media/toefl.754fcf4a.jpg",se=i.p+"static/media/sat.12750553.jpg",Ae=i.p+"static/media/mext.221e75f2.jpg",je=i.p+"static/media/kyotouniversity.5a91c9fb.jpg",de=i.p+"static/media/roots.a30e81f0.jpg",pe=i.p+"static/media/internship.a5414802.jpg",he=i.p+"static/media/gomigo.20778b80.jpg",be=i.p+"static/media/its.f27049f5.jpg",ge=i.p+"static/media/japanese.42e1f330.jpg",ue=i.p+"static/media/mynexthouse.5ca13ed7.jpg",me=i.p+"static/media/graduation.4708a2eb.jpg",Ke=i.p+"static/media/aimer.09d4e2f3.jpg",xe=i.p+"static/media/od.72783e15.jpg",fe=i.p+"static/media/promotion.c3cf21a7.jpg",Oe=i.p+"static/media/jdd.54951d1e.jpg",ye=[{img:Oe,text:{en:Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Released: "}),Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://drugs.vercel.app/",children:"Japan Drug Database"})]}),jp:Object(D.jsx)("div",{children:Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://drugs.vercel.app/",children:"\u65e5\u672c\u306b\u304a\u3051\u308b\u85ac\u54c1\u30fb\u75be\u60a3\u30fb\u88fd\u85ac\u4f1a\u793e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u767a\u8db3"})})},date:"2021 Dec"},{img:fe,text:{en:Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Promoted to Associate Consultant @ "}),Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://www.zs.com/",children:"ZS Tokyo Office"})]}),jp:Object(D.jsxs)("div",{children:[Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://www.zs.com/jp/japan",children:"ZS\u30a2\u30bd\u30b7\u30a8\u30a4\u30c4"}),Object(D.jsx)("span",{children:" \u30a2\u30bd\u30b7\u30a8\u30a4\u30c8\u30b3\u30f3\u30b5\u30eb\u30bf\u30f3\u30c8\u306b\u6607\u9032"})]})},date:"2021 Dec"},{img:xe,text:{en:Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Published: "}),Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://ieeexplore.ieee.org/document/9529275",children:"Origin-destination matrix estimation by deep learning using maps with New York case study"})]}),jp:Object(D.jsxs)("div",{children:[Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://ieeexplore.ieee.org/document/9529275",children:"\u5730\u56f3\u30c7\u30fc\u30bf\u3068\u30c7\u30a3\u30fc\u30d7\u30e9\u30fc\u30cb\u30f3\u30b0\u3092\u7528\u3044\u305fOD\u4ea4\u901a\u91cf\u63a8\u5b9a\u30fbNY\u5b9f\u8a3c\u5b9f\u9a13"}),Object(D.jsx)("span",{children:"IEEE\u5de5\u5b66\u5b66\u554f\u96d1\u8a8c\u3067\u306e\u767a\u884c"})]})},date:"2021 Sep"},{img:Ke,text:{en:Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Launched: "}),Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://aimer-health-app.herokuapp.com/",children:"Aimer - Japan Healthcare Intelligence App"})]}),jp:Object(D.jsxs)("div",{children:[Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://aimer-health-app.herokuapp.com/",children:"Aimer"}),Object(D.jsx)("span",{children:"\u65e5\u672c\u533b\u7642\u30a2\u30d7\u30ea\u3092\u767a\u8db3"})]})},date:"2021 Aug"},{img:"data:image/jpeg;base64,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l1ick5S1U4eT+97Ck0LQptYuMnKWyH539fYV6Ra28VrCkEChY0GFAFeFleVus/a1Ph/M9XHY5Ul7OHxfkUtXjWLSHRRgKFAHsK5k11Wt/wDIKl+o/nXK19glpY+de9w710mk/wDIDb/gdc33rpNI/wCQIf8AgdAHN05I3mkWONSzHoBQiNK6qiks3AA711GmaYtlHvfBnbqfT2FADtM08WMJJOZX+96Cr/aiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//1ff6KKKACiiigBMVha9oz6zcWabtkMbEyN3xjoK3aMVlWpRqx5J7F06kqcuaO5Ba2sVpbpBAgSNBhVAqcDB60tFaRioqyIbu7sztc/5Bcv1H865Wuq1z/kFy/UfzrlapCYd66XRwW0bAHJLAVzaIzuFRSzE4AHeuu0y1a0sUicgtyTj3oYIi0zTFs4974M56n+77CtGiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9b3+iiigAooooAKKKKACiiigDO1z/kFy/Ufzrl1Uu4VQSxOAB3rqdaVn011UEkkAADrzTNL0xbRfMlAMx/8dHpQINL0tbNPMkwZ2HJ/uj0rToooGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/1/f6KKKACiiigAooooAKKKKADGaMYoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9D3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//0ff6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z",text:{en:Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Decision Analytics Associate @ "}),Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://www.zs.com/",children:"ZS Tokyo Office"})]}),jp:Object(D.jsxs)("div",{children:[Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://www.zs.com/jp/japan",children:"ZS\u30a2\u30bd\u30b7\u30a8\u30a4\u30c4\u6771\u4eac\u30aa\u30d5\u30a3\u30b9"}),Object(D.jsx)("span",{children:"\u5165\u793e"})]})},date:"2020 Mar"},{img:me,text:{en:"Graduation from Kyoto University with GPA 3.75 out of 4",jp:"\u4eac\u90fd\u5927\u5b66\u5de5\u5b66\u90e8\u304b\u3089\u5352\u696d\u3002\u6210\u7e3e\uff1a3.75 / 4"},date:"2020 Mar"},{img:ue,text:{en:"My Next House: Winner of JPY 300K @ Osaka International Startup Competition",jp:"My Next House: \u5927\u962a\u56fd\u969bStart-up\u7af6\u6280\u3067\u512a\u52dd\u30fb30\u4e07\u5186\u53d7\u8cde"},date:"2019 Nov"},{img:ge,text:{en:"Japanese Language Proficiency Test (JLPT): Acquiring N1",jp:"\u65e5\u672c\u8a9e\u80fd\u529b\u8a66\u9a13\u30fbN1\uff08\u4e0a\u7d1a\uff09\u5408\u683c"},date:"2019 Jul"},{img:be,text:{en:Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Researcher @ "}),Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://trans.kuciv.kyoto-u.ac.jp/its/english/index.html",children:"Intelligent Transport Systems Laboratory"})]}),jp:Object(D.jsxs)("div",{children:[Object(D.jsx)(P.a,{target:"_blank",rel:"noopener",href:"https://trans.kuciv.kyoto-u.ac.jp/its/index.html",children:"\u4eac\u90fd\u5927\u5b66\u30fb\u4ea4\u901a\u60c5\u5831\u5de5\u5b66\u7814\u7a76\u5ba4"}),Object(D.jsx)("span",{children:"\u5165\u5ba4"})]})},date:"2019 Apr"},{img:he,text:{en:"Gomigo: Winner of Hult Prize Kyoto University",jp:"Gomigo: Hult Prize\u30fb\u4eac\u90fd\u5927\u5b66\u4e88\u9078\u30fb\u512a\u52dd"},date:"2018 Nov"},{img:pe,text:{en:"Internship at Toyo Construction - Naruohama Research Center",jp:"\u30a4\u30f3\u30bf\u30fc\u30f3\u30b7\u30c3\u30d7\uff1a\u6771\u6d0b\u5efa\u8a2d\u30fb\u9cf4\u6d5c\u7814\u7a76\u6240"},date:"2018 Sep"},{img:de,text:{en:"Roots: Winner of Kyoto Startup Summer School",jp:"Roots: Kyoto Startup Summer School\u30fb\u512a\u52dd"},date:"2018 Aug"},{img:je,text:{en:"Kyoto University - Faculty of Engineering - Undergraduate School of Global Engineering Commencement",jp:"\u4eac\u90fd\u5927\u5b66\u30fb\u5de5\u5b66\u90e8\u30fb\u571f\u6728\u5de5\u5b66\u79d1\uff1a\u5165\u5b66"},date:"2016 Apr"},{img:Ae,text:{en:"MEXT (Japanese Ministry of Education, Culture, Sports, Science and Technology) Scholarship Awardee",jp:"\u6587\u90e8\u79d1\u5b66\u7701\u30fb\u5968\u5b66\u91d1\u53d7\u8cde"},date:"2016 Mar"},{img:se,text:{en:"SAT Subject Tests: Math-2, Chemistry, Physics Full Score (2,400/ 2,400)",jp:"SAT \u6570\u5b66\u30fb\u7269\u7406\u5b66\u30fb\u5316\u5b66\uff1a\u6e80\u70b9\u7372\u5f97\uff082,400\u70b9\uff09"},date:"2015 Jun"},{img:le,text:{en:"TOEFL: 105",jp:"TOEFL\u70b9\u6570: 105"},date:"2015 Jan"},{img:re,text:{en:"Exchange in Slovenia",jp:"\u30b9\u30ed\u30d9\u30cb\u30a2\u3067\u7559\u5b66"},date:"2014 Feb"}],ve=function(){var e=Object(O.c)((function(e){return e.lang.value}));return Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column"},id:"about",children:[Object(D.jsx)(X,{lang:e,title:{en:"My story",jp:"\u79c1\u306b\u3064\u3044\u3066"},noMarginBottom:!0}),Object(D.jsx)("div",{id:"blogScroll",className:"smallPadding",style:{overflow:"auto"},children:Object(D.jsx)("div",{style:{paddingTop:25,display:"flex",flexDirection:"row"},className:"itemHolder",children:ye.map((function(t,i){return Object(D.jsx)(oe,{img:t.img,text:t.text[e],date:t.date,index:i+1})}))})})]})},ke=i(73),we=i.n(ke),Fe=i(75),Ue=i.n(Fe),Re=i(74),Ce=i.n(Re),Be=function(){var e=Object(O.c)((function(e){return e.theme.value})),t=Object(O.c)((function(e){return e.lang.value}));return Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column"},id:"contact",children:[Object(D.jsx)(X,{lang:t,title:{en:"Contact",jp:"\u30b3\u30f3\u30bf\u30af\u30c8"}}),Object(D.jsxs)("div",{style:{marginBottom:20,textAlign:"center"},children:[Object(D.jsx)(P.a,{href:"https://www.linkedin.com/in/danyelkoca",style:{margin:10},children:Object(D.jsx)(j.a,{"aria-label":"LinkedIn",children:Object(D.jsx)(we.a,{fontSize:"large",style:{color:e?"white":""}})})}),Object(D.jsx)(P.a,{href:"https://github.com/danyelkoca",style:{margin:10},children:Object(D.jsx)(j.a,{"aria-label":"GitHub",children:Object(D.jsx)(Ce.a,{fontSize:"large",style:{color:e?"white":""}})})}),Object(D.jsx)(P.a,{href:"https://www.facebook.com/danyelkoca/",style:{margin:10},children:Object(D.jsx)(j.a,{"aria-label":"Facebook",children:Object(D.jsx)(Ue.a,{fontSize:"large",style:{color:e?"white":""}})})})]})]})},Se=function(){return Object(D.jsxs)("div",{className:"noScroll",children:[Object(D.jsx)(M,{className:"noScroll"}),Object(D.jsx)(ee,{}),Object(D.jsx)(ve,{}),Object(D.jsx)(ce,{}),Object(D.jsx)(Be,{})]})},Pe=i(146),De=i(101),He=i.p+"static/media/aimer.b373d75e.jpg",Qe=i.p+"static/media/bert.de0e17b5.jpg",Ne=[{type:["data"],link:"https://medium.com/p/8cc980cbc350",img:i.p+"static/media/real_estate.2df94e54.jpg",title:{en:"House price prediction using machine learning",jp:"\u6a5f\u68b0\u5b66\u7fd2\u3092\u7528\u3044\u3066\u6771\u4eac\u306e\u8cc3\u8cb8\u4fa1\u683c\u4e88\u6e2c"}},{type:["web","health"],link:"https://drugs.vercel.app/",img:Oe,title:{en:"Japan Drug Database",jp:"\u65e5\u672c\u85ac\u54c1\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"}},{type:["data"],link:"https://ieeexplore.ieee.org/document/9529275",img:xe,title:{en:"Origin-destination matrix estimation by deep learning using maps with New York case study",jp:"\u5730\u56f3\u30c7\u30fc\u30bf\u3068\u30c7\u30a3\u30fc\u30d7\u30e9\u30fc\u30cb\u30f3\u30b0\u3092\u7528\u3044\u305fOD\u4ea4\u901a\u91cf\u63a8\u5b9a\u30fbNY\u5b9f\u8a3c\u5b9f\u9a13"}},{type:["web","health"],link:"https://aimer-health-app.herokuapp.com/",img:He,title:{en:"Aimer: Healthcare Intelligence App",jp:"Aimer: \u65e5\u672c\u533b\u7642\u30a2\u30d7\u30ea"}},{type:["data"],link:{en:"https://towardsdatascience.com/japanese-multiclass-text-classification-with-97-accuracy-using-bert-11b1fdc7c27e",jp:"https://qiita.com/dannyk/items/bee0249af1f77bc416d8"},img:Qe,title:{en:"Japanese multiclass text classification with 97% accuracy using BERT",jp:"BERT\u3092\u7528\u3044\u3066NHK\u756a\u7d44\u306e\u30b8\u30e3\u30f3\u30eb\u309297\uff05\u306e\u7cbe\u5ea6\u3067\u4e88\u6e2c\u3057\u307e\u3057\u3087\u3046"}}],Te={all:{en:"All",jp:"\u5168\u90e8"},health:{en:"Healthcare",jp:"\u533b\u7642"},data:{en:"Data Science",jp:"\u30c7\u30fc\u30bf\u30b5\u30a4\u30a8\u30f3\u30b9"},web:{en:"Web Development",jp:"Web\u958b\u767a"}},Ee=function(){var e=Object(O.c)((function(e){return e.lang.value})),t=Object(O.c)((function(e){return e.work.value})),i=Object(O.c)((function(e){return e.theme.value})),a=Object(O.b)();return Object(D.jsx)("div",{children:Object(D.jsxs)(I.a,{container:!0,spacing:3,style:{marginTop:20,marginBottom:20},children:[Object(D.jsx)(I.a,{xs:"12",item:!0,style:{display:"flex",justifyContent:"center"},children:Object(D.jsx)(Pe.a,{className:"smallPadding",variant:"outlined","aria-label":"outlined button group",children:Object.keys(Te).map((function(n){return Object(D.jsx)(De.a,{className:i&t===n?"active-button-night":!i&t===n?"active-button-day":"",onClick:function(){return a(Y(n))},style:{backgroundColor:i?"#121212":"white",color:i?"white":"#121212",borderColor:i?"white":"#121212"},children:Te[n][e]})}))})}),Object(D.jsx)(I.a,{container:!0,item:!0,spacing:3,children:Ne.filter((function(e){return"all"===t|e.type.includes(t)})).map((function(t){return Object(D.jsx)(I.a,{className:"work work-display",item:!0,xs:"12",sm:"4",children:Object(D.jsxs)(P.a,{className:"workLink",target:"_blank",rel:"noopener",href:t.link[e]?t.link[e]:t.link,children:[Object(D.jsx)("img",{src:t.img,alt:t.title[e]}),Object(D.jsx)(A.a,{children:t.title[e]})]})})}))})]})})},Me=i(149),Ie=Object(c.a)({palette:{primary:{main:"rgb(70,130,180)"},breakpoints:{values:{xs:0,sm:600,md:1e3,lg:1200,xl:1536}}}});var We=function(){var e=Object(O.c)((function(e){return e.theme.value})),t=Object(O.c)((function(e){return e.visible.value}));return Object(D.jsx)(o.a,{theme:Ie,className:"noScroll",children:Object(D.jsx)("div",{className:"noScroll",style:{display:"flex",justifyContent:"center",flexGrow:1,backgroundColor:e?"#121212":"white",color:e?"white":"#121212"},children:Object(D.jsxs)("div",{style:{maxWidth:1e3,width:"100%",fexGrow:1,minHeight:"100vh",position:"relative"},children:[Object(D.jsx)(H,{}),Object(D.jsxs)("div",{style:{position:"relative"},children:[Object(D.jsx)(Me.a,{in:"home"===t,timeout:200,classNames:"page",unmountOnExit:!0,children:Object(D.jsx)("div",{className:"page",children:Object(D.jsx)(Se,{})})}),Object(D.jsx)(Me.a,{in:"works"===t,timeout:200,classNames:"page",unmountOnExit:!0,children:Object(D.jsx)("div",{className:"page",children:Object(D.jsx)(Ee,{})})})]})]})})})},Ve=Object(y.a)({reducer:{theme:w,lang:R,work:Z,visible:S}});n.a.render(Object(D.jsx)(O.a,{store:Ve,children:Object(D.jsx)(We,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.01fd9de4.chunk.js.map