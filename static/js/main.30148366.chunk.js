(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),l=a.n(s),c=a(8),i=a(24),m=(a(50),a(5)),o=a(23),d=a(13),u=a(14),p=a(6),g=a(16),x=a(15),b=a(4),f=a(22),h=a.n(f),y=a(28),E=function(){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(e){return e.USDT&&delete e.USDT,e.BTC&&(e.BTC.ask=1e3*Number(e.BTC.ask)),Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))},v="SET_USER_EMAIL",N="SET_COINS",w="SET_EXPENDITURE",j="DELETE_EXPENDITURE",O="SET_CUR_EXPENDITURE",k="EDIT_EXPENDITURE",C=function(e){return{type:N,payload:e}},T=a(19),S=a.p+"static/media/logo.ee42c63e.png",F=function(e){Object(g.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={email:"",password:"",isEnable:!1},e.formValidator=e.formValidator.bind(Object(p.a)(e)),e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.submitForm=e.submitForm.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"formValidator",value:function(){var e=this.state,t=e.email,a=e.password,n=/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i.test(t)&&a.length>=6;this.setState({isEnable:n})}},{key:"handleChange",value:function(e){var t=this,a=e.target,n=a.name,r=a.value;this.setState(Object(o.a)({},n,r),(function(){return t.formValidator()}))}},{key:"submitForm",value:function(e){var t=this.state.email,a=this.props,n=a.history,r=a.setEmailGlobal;e.preventDefault(),r(t),n.push("/carteira")}},{key:"render",value:function(){var e=this.state.isEnable;return r.a.createElement("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"max-w-md w-full space-y-8 md:relative md:rounded-xl md:ring-1 md:ring-black md:ring-opacity-5 md:shadow-sm pt-8 pb-6 md:px-6 sm:px-0 md:bg-gray-100"},r.a.createElement("div",null,r.a.createElement("img",{className:"mx-auto h-40 w-auto",src:S,alt:"WalletLogo"})),r.a.createElement("form",{className:"mt-8 space-y-6",onSubmit:this.submitForm},r.a.createElement("div",{className:"rounded-md shadow-sm -space-y-px"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email-address",className:"sr-only"},"Email"),r.a.createElement("input",{id:"email-address",name:"email",type:"email","data-testid":"email-input",placeholder:"Email",required:!0,autoComplete:"email",onChange:this.handleChange,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password",className:"sr-only"},"Senha"),r.a.createElement("input",{id:"password",name:"password",type:"password","data-testid":"password-input",autoComplete:"current-password",placeholder:"Senha",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",onChange:this.handleChange}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:" ".concat(e?"cursor-pointer":"cursor-not-allowed opacity-70"," group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),disabled:!e},r.a.createElement("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3"},e?null:r.a.createElement(T.b,{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})),"Entrar")))))}}]),a}(r.a.Component),B=Object(c.b)(null,(function(e){return{setEmailGlobal:function(t){return e(function(e){return{type:v,payload:e}}(t))}}}))(F),D=a(56),R=a(57),I=a(18);function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pt-BR";if(!isNaN(e))return e=Number(e).toFixed(2),e=String(e).split("."),"en-US"==t?"".concat(Number(e[0]).toLocaleString(t),".").concat(e[1]):"".concat(Number(e[0]).toLocaleString(t),",").concat(e[1])}function P(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var U=function(e){Object(g.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).getTotal=e.getTotal.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"getTotal",value:function(){var e=this.props.expenses;return z(Number(e.reduce((function(e,t){return e+Number(t.value)*Number(t.exchangeRates[t.currency].ask)}),0)).toFixed(2))}},{key:"render",value:function(){var e=this,t=this.props.email;return r.a.createElement(D.a,{className:"relative bg-white"},r.a.createElement("header",{className:"max-w-7xl mx-auto px-4 sm:px-6 z-10"},r.a.createElement("div",{className:"flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10"},r.a.createElement("div",{className:"flex justify-start lg:w-0 lg:flex-1"},r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{className:"sr-only"},"TrybeWallet"),r.a.createElement("img",{className:"h-11 w-auto",src:S,alt:"Logo"}))),r.a.createElement("div",{className:"-mr-2 -my-2 md:hidden"},r.a.createElement(D.a.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},r.a.createElement("span",{className:"sr-only"},"Abrir menu"),r.a.createElement(I.c,{className:"h-6 w-6","aria-hidden":"true"}))),r.a.createElement(D.a.Group,{as:"nav",className:"hidden md:flex space-x-10"},r.a.createElement(D.a,{className:"relative"},(function(t){var a=t.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a.Button,{className:P(a?"text-gray-900":"text-gray-500","group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")},r.a.createElement("span",null,"Carteira"),r.a.createElement(T.a,{className:P(a?"text-gray-600":"text-gray-400","ml-2 h-5 w-5 group-hover:text-gray-500"),"aria-hidden":"true"})),r.a.createElement(R.a,{as:n.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1"},r.a.createElement(D.a.Panel,{className:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},r.a.createElement("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},r.a.createElement("div",{className:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},r.a.createElement("div",{className:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"},r.a.createElement(I.a,{className:"flex-shrink-0 h-6 w-6 text-indigo-600","aria-hidden":"true"}),r.a.createElement("div",{className:"ml-4"},r.a.createElement("p",{className:"text-base font-medium text-gray-900"},"".concat(e.getTotal()," BRL")))))))))})),r.a.createElement(D.a,{className:"relative"},(function(e){var a=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a.Button,{className:P(a?"text-gray-900":"text-gray-500","group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")},r.a.createElement("span",null,"Usu\xe1rio"),r.a.createElement(T.a,{className:P(a?"text-gray-600":"text-gray-400","ml-2 h-5 w-5 group-hover:text-gray-500"),"aria-hidden":"true"})),r.a.createElement(R.a,{as:n.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1"},r.a.createElement(D.a.Panel,{className:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},r.a.createElement("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},r.a.createElement("div",{className:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},r.a.createElement("div",{className:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"},r.a.createElement(I.b,{className:"flex-shrink-0 h-6 w-6 text-indigo-600","aria-hidden":"true"}),r.a.createElement("div",{className:"ml-4"},r.a.createElement("p",{className:"text-base font-medium text-gray-900"},t||"default-email@trybewallet.com"))))))))}))),r.a.createElement("div",{className:"hidden md:flex items-center justify-end md:flex-1 lg:w-0"},r.a.createElement(i.b,{to:"/",className:"ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"},"Sair")))),r.a.createElement(R.a,{as:n.Fragment,enter:"duration-200 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},r.a.createElement(D.a.Panel,{focus:!0,className:"z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},r.a.createElement("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},r.a.createElement("div",{className:"pt-5 pb-6 px-5"},r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("div",null,r.a.createElement("img",{className:"h-11 w-auto",src:S,alt:"Logo"})),r.a.createElement("div",{className:"-mr-2"},r.a.createElement(D.a.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},r.a.createElement("span",{className:"sr-only"},"Fechar menu"),r.a.createElement(I.e,{className:"h-6 w-6","aria-hidden":"true"})))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("div",{className:"grid gap-y-8"},r.a.createElement("div",{className:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"},r.a.createElement(I.a,{className:"flex-shrink-0 h-6 w-6 text-indigo-600","aria-hidden":"true"}),r.a.createElement("span",{className:"ml-3 text-base font-medium text-gray-900"},"".concat(this.getTotal()," BRL")))))),r.a.createElement("div",{className:"py-3 px-5 space-y-6"},r.a.createElement("div",{className:"grid grid-cols-2 gap-y-4 gap-x-8"},r.a.createElement("div",{className:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"},r.a.createElement(I.b,{className:"flex-shrink-0 h-6 w-6 text-indigo-600","aria-hidden":"true"}),r.a.createElement("span",{className:"ml-3 text-base font-medium text-gray-900"},t||"default-email@trybewallet.com"))),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/",className:"w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"},"Sair")))))))}}]),a}(r.a.Component),L=Object(c.b)((function(e){return{email:e.user.email,expenses:e.wallet.expenses}}))(U),M={value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"},V=function(e){Object(g.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={forms:M,isEditing:!1},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.handleNumberChange=e.handleNumberChange.bind(Object(p.a)(e)),e.submit=e.submit.bind(Object(p.a)(e)),e.renderInputs=e.renderInputs.bind(Object(p.a)(e)),e.renderSubmitButton=e.renderSubmitButton.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.id,n=t.value;this.setState((function(e){return{forms:Object(b.a)(Object(b.a)({},e.forms),{},Object(o.a)({},a,n))}}))}},{key:"handleNumberChange",value:function(e){var t=e.target,a=t.id,n=t.value;isNaN(n)||this.setState((function(e){return{forms:Object(b.a)(Object(b.a)({},e.forms),{},Object(o.a)({},a,n))}}))}},{key:"submit",value:function(){var e=Object(y.a)(h.a.mark((function e(t){var a,n,r,s,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=this.props,n=a.setExpenditure,r=a.editExpenditure,s=this.state,l=s.forms,!s.isEditing){e.next=5;break}return e.abrupt("return",r(l));case 5:n(l),this.setState({forms:M});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderInputs",value:function(){var e=this.state.forms,t=e.value,a=e.description,n=e.currency,s=e.method,l=e.tag,c=this.props.coins;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-span-12 md:col-span-4"},r.a.createElement("label",{htmlFor:"value",className:"ml-2 block text-sm font-medium text-gray-700"},"Valor"),r.a.createElement("div",{className:"mt-1 relative rounded-md shadow-sm"},r.a.createElement("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},r.a.createElement("span",{className:"text-gray-500 sm:text-sm"},"$")),r.a.createElement("input",{type:"text",id:"value",value:t,placeholder:"Valor",onChange:this.handleNumberChange,className:"py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-5 pr-12 sm:text-sm border-gray-300 rounded-md border-2"}),r.a.createElement("div",{className:"absolute inset-y-0 right-0 flex items-center"},r.a.createElement("label",{htmlFor:"currency",className:"sr-only"},"Moeda"),r.a.createElement("select",{id:"currency",name:"currency",className:"focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-4 mr-1 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",value:n,onChange:this.handleChange},c.map((function(e){return r.a.createElement("option",{key:e},e)})))))),r.a.createElement("div",{className:"col-span-12 md:col-span-4"},r.a.createElement("label",{htmlFor:"method",className:"ml-2 block text-sm font-medium text-gray-700"},"M\xe9todo de pagamento"),r.a.createElement("select",{onChange:this.handleChange,id:"method",value:s,className:"py-2 px-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2"},["Dinheiro","Cart\xe3o de cr\xe9dito","Cart\xe3o de d\xe9bito"].map((function(e){return r.a.createElement("option",{key:e},e)})))),r.a.createElement("div",{className:"col-span-12 md:col-span-4"},r.a.createElement("label",{htmlFor:"tag",className:"ml-2 block text-sm font-medium text-gray-700"},"Tag"),r.a.createElement("select",{onChange:this.handleChange,id:"tag",value:l,className:"py-2 px-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2"},["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"].map((function(e){return r.a.createElement("option",{key:e},e)})))),r.a.createElement("div",{className:"col-span-12"},r.a.createElement("label",{htmlFor:"description",className:"ml-2 block text-sm font-medium text-gray-700"},"Descri\xe7\xe3o"),r.a.createElement("input",{type:"text",id:"description",value:a,placeholder:"Descri\xe7\xe3o",onChange:this.handleChange,className:"py-2 px-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2"})))}},{key:"renderSubmitButton",value:function(){return this.state.isEditing?r.a.createElement("button",{type:"submit",className:"mt-2 col-span-12 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600"},r.a.createElement(I.d,{className:"h-6 w-6 mr-2","aria-hidden":"true"}),"Editar despesa"):r.a.createElement("button",{type:"submit",className:"mt-2 col-span-12 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600"},r.a.createElement(T.c,{className:"h-6 w-6 mr-2","aria-hidden":"true"}),"Adicionar despesa")}},{key:"render",value:function(){var e=this.state.isEditing?"bg-green-100":"bg-white";return r.a.createElement("form",{onSubmit:this.submit,className:"max-w-7xl mx-auto px-4 sm:px-6 mt-5 md:col-span-2"},r.a.createElement("div",{className:"shadow overflow-hidden sm:rounded-md"},r.a.createElement("div",{className:"".concat(e," px-4 py-5 sm:p-6")},r.a.createElement("div",{className:"grid grid-cols-12 gap-2"},this.renderInputs(),this.renderSubmitButton()))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.isEditing,n=e.curExpenditure;return a&&a!==t.isEditing?{forms:n,isEditing:a}:a||a===t.isEditing?null:{forms:M,isEditing:a}}}]),a}(r.a.Component);V.defaultProps={isEditing:!1,curExpenditure:{}};var _=Object(c.b)((function(e){var t=e.wallet;return{coins:t.currencies,isEditing:t.isEditing,curExpenditure:t.curExpenditure}}),(function(e){return{setExpenditure:function(t){return e(function(e){return function(){var t=Object(y.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:n=t.sent,a({type:w,payload:Object(b.a)(Object(b.a)({},e),{},{exchangeRates:n})});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},editExpenditure:function(t){return e(function(e){return{type:k,payload:e}}(t))}}}))(V),A=function(e){Object(g.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).deleteExpense=e.deleteExpense.bind(Object(p.a)(e)),e.editExpense=e.editExpense.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"deleteExpense",value:function(){var e=this.props,t=e.id;(0,e.deleteById)(t)}},{key:"editExpense",value:function(){var e=this.props,t=e.id;(0,e.setCurExpense)(t)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{"data-testid":"delete-btn",onClick:this.deleteExpense,className:"mr-2 whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-700"},r.a.createElement(T.d,{className:"h-5 w-5"})),r.a.createElement("button",{"data-testid":"edit-btn",onClick:this.editExpense,className:"mr-2 whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600"},r.a.createElement(I.d,{className:"h-5 w-5"})))}}]),a}(r.a.Component),W=Object(c.b)(null,(function(e){return{deleteById:function(t){return e(function(e){return{type:j,payload:e}}(t))},setCurExpense:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))(A),X=function(e){Object(g.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).renderTableRow=e.renderTableRow.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"renderTableRow",value:function(e){var t=e.id,a=e.value,n=e.description,s=e.currency,l=e.method,c=e.tag,i=e.exchangeRates;return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap"},r.a.createElement("div",{className:"flex items-center place-content-center"},r.a.createElement("div",{className:"text-sm font-medium text-gray-900 truncate sm:max-w-xss xl:max-w-mdd"},n||"-"))),r.a.createElement("td",{className:"sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap"},r.a.createElement("div",{className:"flex items-center place-content-center"},r.a.createElement("div",{className:"text-sm font-medium text-gray-900"},c))),r.a.createElement("td",{className:"sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap"},r.a.createElement("div",{className:"flex items-center place-content-center"},r.a.createElement("div",{className:"text-sm font-medium text-gray-900"},l))),r.a.createElement("td",{className:"sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap"},r.a.createElement("div",{className:"flex items-center place-content-center"},r.a.createElement("div",{className:"text-sm font-medium text-gray-900"},"".concat(s," ").concat(z(Number(a)))))),r.a.createElement("td",{className:"sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap"},r.a.createElement("div",{className:"flex items-center place-content-center"},r.a.createElement("div",{className:"text-sm font-medium text-gray-900"},i[s].name.replace("/Real Brasileiro","")))),r.a.createElement("td",{className:"sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap"},r.a.createElement("div",{className:"flex items-center place-content-center"},r.a.createElement("div",{className:"text-sm font-medium text-gray-900"},z(Number(i[s].ask))))),r.a.createElement("td",{className:"sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap"},r.a.createElement("div",{className:"flex items-center place-content-center"},r.a.createElement("div",{className:"text-sm font-medium text-gray-900"},z(Number(i[s].ask)*Number(a))))),r.a.createElement("td",{className:"sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap"},r.a.createElement("div",{className:"flex items-center place-content-center"},r.a.createElement("div",{className:"text-sm font-medium text-gray-900"},"Real"))),r.a.createElement("td",{className:"sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap"},r.a.createElement("div",{className:"flex items-center place-content-center"},r.a.createElement("div",{className:"text-sm font-medium text-gray-900"},r.a.createElement(W,{id:t})))))}},{key:"render",value:function(){var e=this.props.expenses;return r.a.createElement("div",{className:"flex flex-col mt-10"},r.a.createElement("div",{className:"-my-2 overflow-x-auto"},r.a.createElement("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},r.a.createElement("div",{className:"shadow overflow-hidden border-b border-t border-gray-300 sm:rounded-lg"},r.a.createElement("table",{className:"min-w-full divide-y divide-gray-200"},r.a.createElement("thead",{className:"bg-gray-50"},r.a.createElement("tr",null,r.a.createElement("th",{className:"sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Descri\xe7\xe3o"),r.a.createElement("th",{className:"sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Tag"),r.a.createElement("th",{className:"sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"M\xe9todo de pagamento"),r.a.createElement("th",{className:"sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Valor"),r.a.createElement("th",{className:"sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Moeda"),r.a.createElement("th",{className:"sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"C\xe2mbio utilizado"),r.a.createElement("th",{className:"sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Valor convertido"),r.a.createElement("th",{className:"sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Moeda de convers\xe3o"),r.a.createElement("th",{className:"sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Editar/Excluir"))),r.a.createElement("tbody",{className:"bg-white divide-y divide-gray-200"},e.map(this.renderTableRow)))))))}}]),a}(r.a.Component),G=Object(c.b)((function(e){return{expenses:e.wallet.expenses}}))(X),q=function(e){Object(g.a)(a,e);var t=Object(x.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getCoins)()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(_,null),r.a.createElement(G,null))}}]),a}(r.a.Component),J=Object(c.b)(null,(function(e){return{getCoins:function(){return e(function(){var e=Object(y.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:a=e.sent,t(C(Object.keys(a)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(q);a(53);var $=function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:B}),r.a.createElement(m.a,{exact:!0,path:"/carteira",component:J}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(21),K=a(40),Q=a(41),Y={email:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;return t.type===v?Object(b.a)(Object(b.a)({},e),{},{email:t.payload}):e},ee=a(32),te={currencies:[],expenses:[],isEditing:!1,curExpenditure:{}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{currencies:t.payload});case w:return Object(b.a)(Object(b.a)({},e),{},{isEditing:!1,expenses:[].concat(Object(ee.a)(e.expenses),[Object(b.a)({id:e.expenses.length},t.payload)])});case j:return Object(b.a)(Object(b.a)({},e),{},{isEditing:!1,expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case O:return Object(b.a)(Object(b.a)({},e),{},{isEditing:!0,curExpenditure:e.expenses.find((function(e){return e.id===t.payload}))});case k:return Object(b.a)(Object(b.a)({},e),{},{isEditing:!1,curExpenditure:{},expenses:e.expenses.reduce((function(e,a){var n=t.payload;return a.id===n.id?[].concat(Object(ee.a)(e),[n]):[].concat(Object(ee.a)(e),[a])}),[])});default:return e}},ne=Object(H.combineReducers)({user:Z,wallet:ae}),re=Object(H.createStore)(ne,Object(Q.composeWithDevTools)(Object(H.applyMiddleware)(K.a)));l.a.render(r.a.createElement(c.a,{store:re},r.a.createElement(i.a,{basename:"/TrybeWallet"},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.30148366.chunk.js.map