(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),s=(a(87),a(4)),i=a(5),c=a(7),u=a(6),h=a(8),m=a(196),d=a(194),p=a(197),f=a(23),b=a(3),g=a(34),v=a.n(g),E=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/currentUser").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.service=v.a.create({baseURL:"".concat("https://board-game-market.herokuapp.com/api","/auth"),withCredentials:!0})},w=a(193),y=a(2),I=a.n(y),j=a(11),C=a.n(j),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then(function(e){a.setState({username:"",password:""}),a.props.getUser(e.user)}).then(function(){a.props.history.push("/profile")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.state={username:"",password:"",show:!0},a.service=new E,a.handleShow=a.handleShow.bind(Object(b.a)(Object(b.a)(a))),a.handleClose=a.handleClose.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1}),this.props.history.push("/")}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(I.a,{show:this.state.show,onHide:this.handleClose,style:{color:"white"},bsSize:"large"},r.a.createElement(I.a.Header,{style:{backgroundColor:"blue"},closeButton:!0},r.a.createElement(I.a.Title,null,"Crea una nueva cuenta")),r.a.createElement(I.a.Body,{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",color:"blue"}},r.a.createElement("div",{style:{border:"1px solid red",width:"500px"}},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Nombre de usuario:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Contrase\xf1a:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Reg\xedstrate"})),r.a.createElement(w.a,{to:"/login"},r.a.createElement("button",null,"O Inicia sesi\xf3n")))),r.a.createElement(I.a.Footer,{style:{backgroundColor:"blue"}},r.a.createElement(C.a,{onClick:this.handleClose},"Cerrar"))))}}]),t}(r.a.Component),S=Object(p.a)(O),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:t,password:n,error:!1}),a.props.getUser(e)}).catch(function(e){a.setState({username:t,password:n,error:!0})}),a.props.history.push("/profile")},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.state={username:"",password:"",show:!0},a.service=new E,a.handleShow=a.handleShow.bind(Object(b.a)(Object(b.a)(a))),a.handleClose=a.handleClose.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1}),this.props.history.push("/")}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(I.a,{show:this.state.show,onHide:this.handleClose,style:{color:"white"},bsSize:"large"},r.a.createElement(I.a.Header,{style:{backgroundColor:"blue"},closeButton:!0},r.a.createElement(I.a.Title,null,"Inicia tu sesi\xf3n")),r.a.createElement(I.a.Body,{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",color:"blue"}},r.a.createElement("div",{style:{border:"1px solid red",width:"500px"}},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Nombre de usuario:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Contrase\xf1a:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Inicia Sesi\xf3n"})),r.a.createElement(w.a,{to:"/signup"},r.a.createElement("button",null,"O Reg\xedstrate")),r.a.createElement("h1",null,this.state.error?"Error":""))),r.a.createElement(I.a.Footer,{style:{backgroundColor:"blue"}},r.a.createElement(C.a,{onClick:this.handleClose},"Cerrar"))))}}]),t}(r.a.Component),x=Object(p.a)(k),U=a(81),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.editUser=function(){return a.service.put("/editUser/".concat(a.state.loggedInUser._id))},a.state={loggedInUser:null},a.service=new E,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(U.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.state.loggedInUser?r.a.createElement("nav",{className:"navbar"},r.a.createElement("img",{src:this.state.loggedInUser.avatarPath,alt:""}),r.a.createElement("h2",null,this.state.loggedInUser.username),r.a.createElement(w.a,{to:"/"},r.a.createElement("button",{onClick:this.handleLogout},"Log out")),r.a.createElement(w.a,{to:"/board"},r.a.createElement("button",null,"Ve al mercado")),r.a.createElement(w.a,{to:"/profile"},r.a.createElement("button",null,"Ve a tu perfil"))):r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement(w.a,{to:"/signup"},r.a.createElement("button",null,"Sign up")),r.a.createElement(w.a,{to:"/login"},r.a.createElement("button",null,"Log in"))))}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){a.setState({stringToSearch:e.target.value})},a.handleSubmit=function(){var e=a.state.stringToSearch;a.props.submitSearch(e)},a.state={stringToSearch:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.stringToSearch;return r.a.createElement("div",null,r.a.createElement("input",{style:{width:"400px"},placeholder:"\xbfQu\xe9 juego quieres buscar?",type:"text",value:t,onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("button",{onClick:function(){return e.handleSubmit()}},"Busca juegos a la venta"))}}]),t}(r.a.Component),P=function e(){var t=this;Object(s.a)(this,e),this.findProfileItems=function(){return t.service.get("/profile").then(function(e){return e.data})},this.deleteItem=function(e){return t.service.post("/delete",{itemId:e}).then(function(e){return e.data})},this.searchItems=function(e){return t.service.post("/searchItems",{stringToSearch:e}).then(function(e){return e.data})},this.searchGames=function(e){return t.service.post("/searchGames",{stringToSearch:e}).then(function(e){return e.data})},this.addItem=function(e,a,n,r,l){return t.service.post("/addItem",{name:e,yearpublished:a,image_url:n,price:r,condition:l}).then(function(e){return e.data})},this.followItem=function(e){return t.service.post("/followItem",{itemId:e}).then(function(e){return e.data})},this.unfollowItem=function(e){return t.service.post("/unfollowItem",{itemId:e}).then(function(e){return e.data})},this.service=v.a.create({baseURL:"".concat("https://board-game-market.herokuapp.com/api","/item"),withCredentials:!0})},T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleShow=a.handleShow.bind(Object(b.a)(Object(b.a)(a))),a.handleClose=a.handleClose.bind(Object(b.a)(Object(b.a)(a))),a.state={show:!1,owned:!1,followed:!1,itemId:a.props.itemInfo._id},a.service=new P,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleDate",value:function(){var e=this.props.itemInfo.created_at.slice(0,10),t=e.substr(0,4),a=e.substr(5,2);return e.substr(8,2)+"-"+a+"-"+t}},{key:"componentWillMount",value:function(){if(this.props.userInfo){var e=this.props.itemInfo.ownerUser.username,t=this.props.userInfo.username,a=this.state.itemId,n=this.props.userInfo.followedItems;e===t&&this.setState({owned:!0}),n.includes(a)&&this.setState({followed:!0})}}},{key:"followedOrNot",value:function(){var e=this,t=this.state.owned,a=this.state.followed,n=this.props.itemInfo.ownerUser.username;return!t&!a?r.a.createElement("div",null,r.a.createElement("p",null,"Propietario: ",n),r.a.createElement("button",{style:{color:"orange"},onClick:function(){return e.followItem()}},"Seguir Juego")):!t&a?r.a.createElement("div",null,r.a.createElement("p",null,"Propietario: ",n),r.a.createElement("button",{style:{color:"orange"},onClick:function(){return e.unfollowItem()}},"Dejar de seguir")):void 0}},{key:"followItem",value:function(){var e=this,t=this.state.itemId;this.service.followItem(t).then(function(t){e.setState({followed:!0})}).then(function(){e.props.handleChanges()}).catch(function(e){return alert("Inicia sesi\xf3n para poder seguir")})}},{key:"unfollowItem",value:function(){var e=this,t=this.state.itemId;this.service.unfollowItem(t).then(function(t){e.setState({followed:!1})}).then(function(){e.props.handleChanges()}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props.itemInfo,t=e.name,a=e.yearpublished,n=e.condition,l=e.price,o=e.image_url,s=this.handleDate(),i=this.state.owned;return r.a.createElement("div",null,r.a.createElement(C.a,{bsStyle:"primary",bsSize:"large",onClick:this.handleShow},"Ver m\xe1s"),r.a.createElement(I.a,{show:this.state.show,onHide:this.handleClose,style:{color:"white"},bsSize:"large"},r.a.createElement(I.a.Header,{style:{backgroundColor:"blue"},closeButton:!0},r.a.createElement(I.a.Title,null,t)),r.a.createElement(I.a.Body,{style:{backgroundColor:"orange",display:"flex",flexWrap:"wrap"}},r.a.createElement("div",null,r.a.createElement("img",{src:o,alt:t,width:"250px"})),r.a.createElement("div",{style:{border:"1px solid red",width:"500px"}},r.a.createElement("p",null,"Precio: ",l," \u20ac"),r.a.createElement("p",null,"Estado: ",n),r.a.createElement("p",null,"A\xf1o de Publicaci\xf3n: ",a),r.a.createElement("p",null,"Puesto a la venta: ",s),i&&r.a.createElement("button",{style:{color:"orange"},onClick:this.props.deleteItem},"Quita este juego de la venta"),this.followedOrNot())),r.a.createElement(I.a.Footer,{style:{backgroundColor:"blue"}},r.a.createElement(C.a,{onClick:this.handleClose},"Cerrar"))))}}]),t}(r.a.Component),M=function(e){var t=e.itemInfo.created_at.slice(0,10),a=t.substr(0,4),n=t.substr(5,2),l=t.substr(8,2)+"-"+n+"-"+a;return r.a.createElement("div",{style:{border:"1px solid red",display:"flex"}},r.a.createElement("div",{style:{width:120}},r.a.createElement("h4",null," ",e.itemInfo.name),r.a.createElement("img",{src:e.itemInfo.image_url,alt:e.itemInfo.name,width:"100px"})),r.a.createElement("div",{style:{width:120}},r.a.createElement("p",null,"Precio: ",e.itemInfo.price," \u20ac"),r.a.createElement("p",null,"Publicado el: ",l),r.a.createElement(T,{itemInfo:e.itemInfo,userInfo:e.userInfo,deleteItem:function(){var t=e.itemInfo._id;e.deleteItem(t)},handleChanges:function(){return e.handleChanges()}})))},W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getItems=function(e){return a.service.searchItems(e).then(function(e){a.setState({results:e})}).catch(function(e){return console.log(e)})},a.state={results:[]},a.service=new P,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.getItems("")}},{key:"render",value:function(){var e=this,t=this.state.results,a=this.props.userInfo;return r.a.createElement("div",null,r.a.createElement(B,{submitSearch:function(t){return e.getItems(t)}}),r.a.createElement("div",{style:{border:"1px solid red",display:"flex",flexWrap:"wrap"}},t.map(function(e,t){return r.a.createElement(M,{itemInfo:e,key:t,userInfo:a})})))}}]),t}(r.a.Component),_=function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("p",{style:{height:500,fontSize:40}},"Aqu\xed va un mensaje grande explicativo, intro a la p\xe1gina.",r.a.createElement("br",null),"Despu\xe9s, dos cuadraditos con las dos opciones:",r.a.createElement("br",null),"1.- Busca juegos a la venta --\x3e va al dashboard principal, no necesario login.",r.a.createElement("br",null),"2.- Pon juegos a la venta --\x3e 'Date de alta como usuario o eg\xedstrate para poder poner tus juegos a la venta' --\x3e con los links a login y signup, igual que en la navbar arriba. Tras log, queda en '/' pero al estar ya registrado te lleva a profile, donde se podr\xe1 a\xf1adir juegos a la venta."),r.a.createElement(w.a,{to:"/board"},r.a.createElement("button",{style:{fontSize:80}},"Ir al Mercado")))},D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.yearpublished,l=t.image_url,o=t.price,s=t.condition;a.service.addItem(n,r,l,o,s).then(function(){return a.props.history.push("/profile")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.state={name:a.props.name,yearpublished:a.props.yearpublished,image_url:a.props.image_url,price:"",condition:""},a.service=new P,a.handleShow=a.handleShow.bind(Object(b.a)(Object(b.a)(a))),a.handleClose=a.handleClose.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(C.a,{bsStyle:"primary",bsSize:"large",onClick:this.handleShow},"A\xf1adir"),r.a.createElement(I.a,{show:this.state.show,onHide:this.handleClose,style:{color:"white"},bsSize:"large"},r.a.createElement(I.a.Header,{style:{backgroundColor:"blue"},closeButton:!0},r.a.createElement(I.a.Title,null,r.a.createElement("p",null,"A\xf1ade un juego a la venta usando el buscador"))),r.a.createElement(I.a.Body,{style:{backgroundColor:"orange",display:"flex",flexWrap:"wrap",color:"blue"}},r.a.createElement("div",{style:{border:"1px solid red",width:"500px"}},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Precio:"),r.a.createElement("input",{type:"text",name:"price",value:this.state.price,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Estado:"),r.a.createElement("select",{name:"condition",onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{selected:!0,value:"Elige una opci\xf3n"},"Elige una opci\xf3n"),r.a.createElement("option",{value:"Nuevo"},"Nuevo"),r.a.createElement("option",{value:"Como Nuevo"},"Como Nuevo"),r.a.createElement("option",{value:"Muy Bueno"},"Muy Bueno"),r.a.createElement("option",{value:"Bueno"},"Bueno"),r.a.createElement("option",{value:"Normal"},"Normal"),r.a.createElement("option",{value:"Malo"},"Malo"))),r.a.createElement("input",{type:"submit",value:"A\xf1ade juego a la venta"})))),r.a.createElement(I.a.Footer,{style:{backgroundColor:"blue"}},r.a.createElement(C.a,{onClick:this.handleClose},"Cerrar"))))}}]),t}(r.a.Component),A=Object(p.a)(D),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.gameInfo,a=t.yearpublished,n=t.image_url,l=this.props.gameInfo.name.text;return r.a.createElement("div",null,r.a.createElement("div",{style:{border:"1px solid red",display:"flex"}},r.a.createElement("div",{style:{width:120}},r.a.createElement("img",{src:n,alt:l,width:"100px"})),r.a.createElement("div",{style:{width:120}},r.a.createElement("h4",null," ",l.text),r.a.createElement("p",null,"A\xf1o de publicaci\xf3n: ",a),r.a.createElement(A,{name:l,yearpublished:a,image_url:n,addedGame:function(){e.props.addedGame()}}))))}}]),t}(r.a.Component),R=(r.a.Component,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).searchGames=function(e){return a.setState({tooMuchResults:!1,results:[]}),a.service.searchGames(e).then(function(e){e.length>=60?a.setState({tooMuchResults:!0}):a.setState({results:e,tooMuchResults:!1})}).catch(function(e){return console.log(e)})},a.state={ownedItems:[],followedItems:[],results:[],tooMuchResults:!1},a.service=new P,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.findProfileItems()}},{key:"findProfileItems",value:function(){var e=this;this.service.findProfileItems().then(function(t){e.setState({ownedItems:t.ownedList,followedItems:t.followedList.followedItems})}).catch(function(e){return console.log(e)})}},{key:"deleteItem",value:function(e){var t=this;this.service.deleteItem(e).then(function(e){t.findProfileItems()}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.ownedItems,n=t.followedItems,l=t.results,o=t.tooMuchResults,s=this.props.userInfo;return r.a.createElement("div",null,r.a.createElement("h4",null,"Busca un juego para poner a la venta"),r.a.createElement(B,{submitSearch:function(t){return e.searchGames(t)}}),o?r.a.createElement("p",null,"Demasiados resultados, restringe m\xe1s tu b\xfasqueda"):r.a.createElement("div",{style:{border:"1px solid red",display:"flex",flexWrap:"wrap"}},l.map(function(e,t){return r.a.createElement(F,{gameInfo:e,key:t})})),r.a.createElement("h4",null,"Juegos que tienes a la venta:"),r.a.createElement("div",{style:{border:"1px solid red",display:"flex",flexWrap:"wrap"}},a.map(function(t,a){return r.a.createElement(M,{itemInfo:t,key:a,userInfo:s,deleteItem:function(t){return e.deleteItem(t)}})})),r.a.createElement("h4",null,"Juegos que sigues:"),r.a.createElement("div",{style:{border:"1px solid red",display:"flex",flexWrap:"wrap"}},n.map(function(t,a){return r.a.createElement(M,{itemInfo:t,key:a,userInfo:s,handleChanges:function(){return e.findProfileItems()}})})))}}]),t}(r.a.Component)),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then(function(){a.setState({loggedInUser:null})}).then(function(){a.props.history.push("/")})},a.state={loggedInUser:null},a.service=new E,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(N,{userInSession:this.state.loggedInUser,logout:this.logout})),r.a.createElement("div",{className:"main-container"},r.a.createElement(m.a,null,r.a.createElement(d.a,{exact:!0,path:"/profile",component:function(){return r.a.createElement(R,{userInfo:e.state.loggedInUser})}}),r.a.createElement(d.a,{exact:!0,path:"/board",component:function(){return r.a.createElement(W,{userInfo:e.state.loggedInUser})}}))))):r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(N,{userInSession:this.state.loggedInUser,logout:this.logout})),r.a.createElement("div",{className:"main-container"},r.a.createElement(m.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:_}),",",r.a.createElement(d.a,{exact:!0,path:"/signup",component:function(){return r.a.createElement(S,{getUser:e.getTheUser})}}),",",r.a.createElement(d.a,{exact:!0,path:"/login",component:function(){return r.a.createElement(x,{getUser:e.getTheUser})}}),",",r.a.createElement(d.a,{exact:!0,path:"/board",component:W})))))}}]),t}(r.a.Component),H=Object(p.a)(z),L=a(195);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a(192)},87:function(e,t,a){}},[[82,2,1]]]);
//# sourceMappingURL=main.aad06380.chunk.js.map