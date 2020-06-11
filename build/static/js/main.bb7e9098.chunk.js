(this["webpackJsonpherolo-messaging-system"]=this["webpackJsonpherolo-messaging-system"]||[]).push([[0],{118:function(e,a,t){e.exports=t(148)},148:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(8),o=t.n(s),i=t(111),c=t(11),l=t(20),u=t(43),m=t(101),p=t(12),d={authenticated:"",errorMessage:""},g={user:{},errorMessage:""},h={messagesReceived:void 0,messagesSent:void 0,errorMessage:""},f=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"auth_user":return Object(p.a)(Object(p.a)({},e),{},{authenticated:a.payload,errorMessage:""});case"auth_error":return Object(p.a)(Object(p.a)({},e),{},{errorMessage:a.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"user_data":return Object(p.a)(Object(p.a)({},e),{},{user:a.payload,errorMessage:""});case"user_error":return Object(p.a)(Object(p.a)({},e),{},{errorMessage:a.payload});case"user_clear":return g;default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"message_send":return Object(p.a)(Object(p.a)({},e),{},{errorMessage:""});case"message_sent":return Object(p.a)(Object(p.a)({},e),{},{messagesSent:a.payload,errorMessage:""});case"message_received":return Object(p.a)(Object(p.a)({},e),{},{messagesReceived:a.payload,errorMessage:""});case"message_clear":return h;case"message_error":return Object(p.a)(Object(p.a)({},e),{},{errorMessage:a.payload});default:return e}}}),v=function(e){var a=e.children;return r.a.createElement("div",null,a)},b=t(30),y=t(31),E=t(33),w=t(32),j=t(211),O=t(197),x=t(194),S=t(208),k=t(198),C=t(195),M=t(55),N=t(192),D=t(71),I=t.n(D),_=t(189),B=t(4),P=t(13),T=t.n(P),W=t(25),U=t(26),A=t.n(U),R=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT||5e3,q=function(e){return function(){var a=Object(W.a)(T.a.mark((function a(t){var n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A.a.post("http://localhost:".concat(R,"/getUserDetailsById"),{userToken:e});case 3:return n=a.sent,t({type:"user_data",payload:n.data.user}),a.abrupt("return",n);case 8:a.prev=8,a.t0=a.catch(0),t({type:"user_error",payload:"invalid Username"});case 11:case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},F=Object(_.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),H=function(e){Object(E.a)(t,e);var a=Object(w.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.props.signup(n.state).then((function(){n.props.getUserDetailsByToken(n.props.authenticated).then((function(){n.props.history.push("/")}))}))},n.state={name:"",username:"",password:"",confirmPassword:""},n}return Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.authenticated&&this.props.getUserDetailsByToken(this.props.authenticated).then((function(){e.props.history.push("/")}))}},{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(N.a,{component:"main",maxWidth:"xs"},r.a.createElement(x.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(j.a,{className:a.avatar},r.a.createElement(I.a,null))),r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(M.a,{component:"h1",variant:"h5"},"Sign up")),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(S.a,{autoComplete:"name",name:"name",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",onInput:function(a){return e.setState({name:a.target.value})},autoFocus:!0}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",onInput:function(a){return e.setState({username:a.target.value})},autoComplete:"username"}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",type:"password",onInput:function(a){return e.setState({password:a.target.value})},autoComplete:"current-password"}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",onInput:function(a){return e.setState({confirmPassword:a.target.value})},autoComplete:"current-password"}),r.a.createElement(M.a,{align:"center",color:"error"},this.props.errorMessage),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(C.a,{item:!0},r.a.createElement(k.a,{href:"",variant:"body2",onClick:function(){e.props.history.push("/signin")}},"Already have an account? Sign in"))))))}}]),t}(n.Component);var z=Object(B.a)(F)(Object(l.b)((function(e){return{authenticated:e.auth.authenticated,errorMessage:e.auth.errorMessage}}),{signup:function(e){return function(){var a=Object(W.a)(T.a.mark((function a(t){var n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A.a.post("http://localhost:".concat(R,"/signup"),e);case 3:return n=a.sent,t({type:"auth_user",payload:n.data.token}),localStorage.setItem("token",n.data.token),a.abrupt("return",n);case 9:a.prev=9,a.t0=a.catch(0),t({type:"auth_error",payload:"Username in use"});case 12:case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},getUserDetailsByToken:q})(H)),V=Object(_.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Y=function(e){Object(E.a)(t,e);var a=Object(w.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.props.signin(n.state).then((function(){n.props.getUserDetailsByToken(n.props.authenticated).then((function(){n.props.history.push("/")}))}))},n.state={username:"",password:""},n}return Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.authenticated&&this.props.getUserDetailsByToken(this.props.authenticated).then((function(){e.props.history.push("/")}))}},{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(N.a,{component:"main",maxWidth:"xs"},r.a.createElement(x.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(j.a,{className:a.avatar},r.a.createElement(I.a,null))),r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(M.a,{component:"h1",variant:"h5"},"Sign in")),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",onInput:function(a){return e.setState({username:a.target.value})},autoFocus:!0}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onInput:function(a){return e.setState({password:a.target.value})},autoComplete:"current-password"}),r.a.createElement(M.a,{align:"center",color:"error"},this.props.errorMessage),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(C.a,{item:!0},r.a.createElement(k.a,{href:"",variant:"body2",onClick:function(){e.props.history.push("/signup")}},"Don't have an account? Sign Up"))))))}}]),t}(n.Component);var L=Object(B.a)(V)(Object(l.b)((function(e){return{authenticated:e.auth.authenticated,errorMessage:e.auth.errorMessage}}),{signin:function(e){return function(){var a=Object(W.a)(T.a.mark((function a(t){var n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A.a.post("http://localhost:".concat(R,"/signin"),e);case 3:return n=a.sent,t({type:"auth_user",payload:n.data.token}),localStorage.setItem("token",n.data.token),a.abrupt("return",n);case 9:a.prev=9,a.t0=a.catch(0),t({type:"auth_error",payload:"Invalid login credentials"});case 12:case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},getUserDetailsByToken:q})(Y)),K=t(36),$=t(64),G=t(54),J=t(3),X=t(212),Q=t(206),Z=t(207),ee=t(200),ae=t(151),te=t(149),ne=t(209),re=t(199),se=t(150),oe=t(108),ie=t.n(oe),ce=t(110),le=t.n(ce),ue=t(109),me=t.n(ue),pe=t(196),de=t(201),ge=t(202),he=t(203),fe=t(39),ve=t.n(fe),be=t(105),ye=t.n(be),Ee=t(104),we=t.n(Ee),je=t(103),Oe=t.n(je),xe=function(e){Object(E.a)(t,e);var a=Object(w.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){var a=n.props,t=a.writeMessage,r=a.handleClose;e.preventDefault(),t(n.state).then((function(){r(!0)}))},n.state={sender:e.username,receiver:e.receiver?e.receiver:"",subject:"",message:""},n}return Object(y.a)(t,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(N.a,{component:"main",maxWidth:"xs"},r.a.createElement(x.a,null),r.a.createElement("div",{className:a.main},r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(j.a,{className:a.avatar},r.a.createElement(Oe.a,null))),r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(M.a,{component:"h1",variant:"h5"},"Compose New Message")),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(S.a,{autoComplete:"receiver",name:"receiver",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"receiver",label:"To",value:this.state.receiver,onInput:function(a){return e.setState({receiver:a.target.value})},autoFocus:!0}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"subject",label:"Subject",name:"subject",onInput:function(a){return e.setState({subject:a.target.value})},autoComplete:"subject"}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,multiline:!0,rows:5,rowsMax:20,id:"message",label:"Context",name:"message",onInput:function(a){return e.setState({message:a.target.value})},autoComplete:"message"}),r.a.createElement(M.a,{align:"center",color:"error"},this.props.errorMessage),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",startIcon:r.a.createElement(ve.a,null),className:a.submit},"Send"))))}}]),t}(n.Component);var Se=Object(l.b)((function(e){return{username:e.user.user.username,errorMessage:e.messages.errorMessage}}),{writeMessage:function(e){return function(){var a=Object(W.a)(T.a.mark((function a(t){var n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A.a.post("http://localhost:".concat(R,"/writeMessage"),e);case 3:return n=a.sent,t({type:"message_send",payload:""}),a.abrupt("return",n);case 8:a.prev=8,a.t0=a.catch(0),t({type:"message_error",payload:"message was not sent"});case 11:case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}})(xe),ke=Object(_.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},grid:{marginBottom:e.spacing(1)},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},main:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),Ce=function(e){var a=ke(),t=e.isDrawerOpen,s=e.isInbox,o=e.handleAddition,i=e.handleMessagesShown,c=Object(n.useState)(s?"inbox":"sent"),l=Object(K.a)(c,2),u=l[0],m=l[1],p=Object(n.useState)(!1),d=Object(K.a)(p,2),g=d[0],h=d[1],f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];h(!1),e&&o()},v=function(e,a){m(a),i(s)};return r.a.createElement("div",{className:a.root},r.a.createElement(pe.a,{component:"nav","aria-label":"main mailbox folders"},t&&r.a.createElement(C.a,{container:!0,justify:"center",className:a.grid},r.a.createElement(O.a,{variant:"contained",color:"primary",size:"small",startIcon:r.a.createElement(we.a,null),onClick:function(){h(!0)}},"New Message"),r.a.createElement(ne.a,{className:a.modal,open:g,onClose:f,closeAfterTransition:!0,BackdropComponent:re.a,BackdropProps:{timeout:500}},r.a.createElement(se.a,{in:g},r.a.createElement("div",{className:a.paper},r.a.createElement(Se,{classes:a,inbox:s,handleClose:f}))))),r.a.createElement(ee.a,null),r.a.createElement(de.a,{button:!0,selected:"inbox"===u,onClick:function(e){return v(0,"inbox")}},r.a.createElement(ge.a,null,r.a.createElement(ye.a,null)),r.a.createElement(he.a,{primary:"Inbox"})),r.a.createElement(de.a,{button:!0,selected:"sent"===u,onClick:function(e){return v(0,"sent")}},r.a.createElement(ge.a,null,r.a.createElement(ve.a,null)),r.a.createElement(he.a,{primary:"Messages Sent"}))))},Me=t(210),Ne=t(204),De=t(205),Ie=t(106),_e=t.n(Ie),Be=function(e){var a=new Date(e);return function(e){var a=new Date;return e.getDate()===a.getDate()&&e.getMonth()===a.getMonth()&&e.getFullYear()===a.getFullYear()}(a)?(a.getHours()>=10?a.getHours():"0"+a.getHours())+":"+(a.getMinutes()>=10?a.getMinutes():"0"+a.getMinutes()):function(e){var a=new Date;return e.getFullYear()===a.getFullYear()}(a)?a.getMonth()+" "+a.getDay():a.toLocaleDateString()},Pe=Object(B.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none",width:"100%","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(Me.a),Te=Object(B.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,width:"100%",minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(Ne.a),We=Object(B.a)((function(e){return{root:{padding:e.spacing(2),width:"100%"}}}))(De.a),Ue=Object(B.a)((function(e){return{root:{alignSelf:"center"}}}))(M.a),Ae=Object(_.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),Re=function(e){var a=Ae(),t=e.messages,s=e.isInbox,o=e.handleAddition,i=e.handleDelete,c=Object(n.useState)(""),l=Object(K.a)(c,2),u=l[0],m=l[1],p=Object(n.useState)(!1),d=Object(K.a)(p,2),g=d[0],h=d[1],f=function(){h(!0)},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];h(!1),e&&o()};return Object(G.isEmpty)(t)?r.a.createElement(n.Fragment,null,"You have no messages at this moment"):t.map((function(e,o){return r.a.createElement(Pe,{square:!0,display:"grid",expanded:u==="panel".concat(o),onChange:(c="panel"+o,function(e,a){m(!!a&&c)}),key:o},r.a.createElement(Te,{"aria-controls":"panel".concat(o,"d-content"),id:"panel".concat(o,"d-header")},r.a.createElement(n.Fragment,null,r.a.createElement(M.a,{style:{marginRight:"auto"}},"From: ".concat(e.sender)," ",r.a.createElement("br",null)," ","To: ".concat(e.receiver)),r.a.createElement(Ue,{style:{marginRight:"auto"}},e.subject),r.a.createElement(Ue,null,Be(e.creationDate)),r.a.createElement(ae.a,{onClick:function(){i(e._id,t)}},r.a.createElement(_e.a,null)))),r.a.createElement(We,null,r.a.createElement(M.a,{style:{marginRight:"auto"}},e.message),s&&r.a.createElement(ae.a,{size:"small",onClick:f},"Reply",r.a.createElement(ve.a,null)),r.a.createElement(ne.a,{className:a.modal,open:g,onClose:v,closeAfterTransition:!0,BackdropComponent:re.a,BackdropProps:{timeout:500}},r.a.createElement(se.a,{in:g},r.a.createElement("div",{className:a.paper},r.a.createElement(Se,{receiver:e.sender,classes:a,inbox:s,handleClose:v}))))));var c}))},qe=t(107),Fe=t.n(qe),He=function(e){Object(E.a)(t,e);var a=Object(w.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){var a=n.props,t=a.editUserDetails,r=a.handleClose;e.preventDefault(),t(n.state).then((function(){r(!0)}))},n.state={username:e.user.username,newName:e.user.name?e.user.name:"",oldPassword:"",newPassword:""},n}return Object(y.a)(t,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(N.a,{component:"main",maxWidth:"xs"},r.a.createElement(x.a,null),r.a.createElement("div",{className:a.main},r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(j.a,{className:a.avatar},r.a.createElement(Fe.a,null))),r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(M.a,{component:"h1",variant:"h5"},"Compose New Message")),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(S.a,{autoComplete:"username",name:"username",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,disabled:!0,id:"username",label:"Username",value:this.state.username,autoFocus:!0}),r.a.createElement(S.a,{autoComplete:"newName",name:"newName",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"newName",label:"Name",value:this.state.newName,onInput:function(a){return e.setState({newName:a.target.value})},autoFocus:!0}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"oldPassword",label:"Old Password",name:"oldPassword",type:"password",onInput:function(a){return e.setState({oldPassword:a.target.value})},autoComplete:"current-password"}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"newPassword",label:"New Password",name:"newPassword",type:"password",onInput:function(a){return e.setState({newPassword:a.target.value})},autoComplete:"current-password"}),r.a.createElement(M.a,{align:"center",color:"error"},this.props.errorMessage),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",startIcon:r.a.createElement(ve.a,null),className:a.submit},"Send"))))}}]),t}(n.Component);var ze=Object(l.b)((function(e){return{user:e.user.user,errorMessage:e.user.errorMessage}}),{editUserDetails:function(e){return function(){var a=Object(W.a)(T.a.mark((function a(t){var n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A.a.post("http://localhost:3090/editUserDetails",e);case 3:return n=a.sent,t({type:"user_data",payload:n.data.user}),a.abrupt("return",n);case 8:a.prev=8,a.t0=a.catch(0),t({type:"user_error",payload:"invalid Username"});case 11:case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}})(He),Ve=Object(_.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1,alignItems:"center"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object($.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},modalPaper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},main:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var Ye=Object(B.a)(Ve)(Object(l.b)((function(e){return{authenticated:e.auth.authenticated,user:e.user.user,messagesReceived:e.messages.messagesReceived,messagesSent:e.messages.messagesSent}}),{getUserDetailsByToken:q,clearUser:function(){return{type:"user_clear",payload:void 0}},getAllReceivedMessages:function(e){return function(){var a=Object(W.a)(T.a.mark((function a(t){var n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A.a.post("http://localhost:".concat(R,"/getAllReceivedMessages"),e);case 3:return n=a.sent,t({type:"message_received",payload:n.data.messages}),a.abrupt("return",n);case 8:a.prev=8,a.t0=a.catch(0),t({type:"message_error",payload:"couldnt get messages"});case 11:case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},getAllSentMessages:function(e){return function(){var a=Object(W.a)(T.a.mark((function a(t){var n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A.a.post("http://localhost:".concat(R,"/getAllSentMessages"),e);case 3:return n=a.sent,t({type:"message_sent",payload:n.data.messages}),a.abrupt("return",n);case 8:a.prev=8,a.t0=a.catch(0),t({type:"message_error",payload:"couldnt get messages"});case 11:case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},deleteMessage:function(e,a){return function(){var t=Object(W.a)(T.a.mark((function t(n){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.a.post("http://localhost:".concat(R,"/deleteMessage"),{messageId:e,isDeleterSender:a});case 3:return r=t.sent,n({type:"message_send",payload:""}),t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),n({type:"message_error",payload:"message was not deleted"});case 11:case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},clearMessages:function(){return{type:"message_clear",payload:void 0}},signout:function(){return localStorage.removeItem("token"),{type:"auth_user",payload:""}}})(function(e){var a=function(a){Object(E.a)(n,a);var t=Object(w.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.shouldNavigateAway()}},{key:"componentDidUpdate",value:function(){this.shouldNavigateAway()}},{key:"shouldNavigateAway",value:function(){this.props.auth||this.props.history.push("/signin")}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),n}(n.Component);return Object(l.b)((function(e){return{auth:e.auth.authenticated}}))(a)}((function(e){var a=Ve(),t=Object(n.useState)(!0),s=Object(K.a)(t,2),o=s[0],i=s[1],c=Object(n.useState)(!0),l=Object(K.a)(c,2),u=l[0],m=l[1],p=Object(n.useState)(!1),d=Object(K.a)(p,2),g=d[0],h=d[1],f=e.authenticated,v=e.user,b=e.messagesReceived,y=e.messagesSent,E=e.getUserDetailsByToken,w=e.clearUser,j=e.getAllReceivedMessages,O=e.getAllSentMessages,S=e.deleteMessage,k=e.clearMessages,D=e.signout,I=function(){h(!1)};Object(n.useEffect)((function(){f&&Object(G.isEmpty)(v)?E(f):f&&(u?void 0===b&&_(v.username):void 0===y&&B(v.username))}));var _=function(e){j({username:e})},B=function(e){O({username:e})},P=function(){B(v.username)};return Object(G.isEmpty)(v)?r.a.createElement("div",null):r.a.createElement("div",{className:a.root},r.a.createElement(x.a,null),r.a.createElement(Q.a,{position:"absolute",className:Object(J.a)(a.appBar,o&&a.appBarShift)},r.a.createElement(Z.a,{className:a.toolbar},r.a.createElement(ae.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(J.a)(a.menuButton,o&&a.menuButtonHidden)},r.a.createElement(ie.a,null)),r.a.createElement(M.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title},"Welcome",r.a.createElement(ae.a,{color:"inherit",size:"small",onClick:function(){h(!0)}},v.username),r.a.createElement(ne.a,{className:a.modal,open:g,onClose:I,closeAfterTransition:!0,BackdropComponent:re.a,BackdropProps:{timeout:500}},r.a.createElement(se.a,{in:g},r.a.createElement("div",{className:a.modalPaper},r.a.createElement(ze,{classes:a,handleClose:I}))))),r.a.createElement(ae.a,{color:"inherit",onClick:function(){k(),w(),D()}},r.a.createElement(me.a,null),"Sign Out"))),r.a.createElement(X.a,{variant:"permanent",classes:{paper:Object(J.a)(a.drawerPaper,!o&&a.drawerPaperClose)},open:o},r.a.createElement("div",{className:a.toolbarIcon},r.a.createElement(ae.a,{onClick:function(){i(!1)}},r.a.createElement(le.a,null))),r.a.createElement(ee.a,null),r.a.createElement(Ce,{isDrawerOpen:o,isInbox:u,handleAddition:P,handleMessagesShown:function(e){m(!e)}})),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement(N.a,{maxWidth:!1,className:a.container},r.a.createElement(C.a,{container:!0,style:{display:"grid"}},r.a.createElement(C.a,{item:!0},r.a.createElement(te.a,{className:a.paper},r.a.createElement(Re,{messages:u?b:y,isInbox:u,handleAddition:P,handleDelete:function(e,a){var t=a.filter((function(a){return a._id!==e}));S(e,!u).then((function(){u?t.length<b.length&&_(v.username):t.length<y.length&&B(v.username)}))}})))))))})))),Le=Object(u.d)(f,{auth:{authenticated:localStorage.getItem("token")}},Object(u.a)(m.a));o.a.render(r.a.createElement(l.a,{store:Le},r.a.createElement(i.a,null,r.a.createElement(v,null,r.a.createElement(c.a,{path:"/",exact:!0,component:Ye}),r.a.createElement(c.a,{path:"/signin",component:L}),r.a.createElement(c.a,{path:"/signup",component:z})))),document.querySelector("#root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.bb7e9098.chunk.js.map