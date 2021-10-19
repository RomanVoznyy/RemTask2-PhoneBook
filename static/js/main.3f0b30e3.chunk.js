(this["webpackJsonptask2-phonebook"]=this["webpackJsonptask2-phonebook"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),s=n.n(r),i=(n(15),n(3)),l=n(9),d=n(7),o=n(10),u=n(0),b="",j="",m=function(e){var t=e.contacts,n=e.setContacts,c=Object(a.useState)(b),r=Object(i.a)(c,2),s=r[0],m=r[1],O=Object(a.useState)(j),h=Object(i.a)(O,2),f=h[0],p=h[1],x=function(e){var t=e.target;return"number"===t.name?p(t.value):m(t.value)};return Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var a,c=Object(d.a)(t);try{for(c.s();!(a=c.n()).done;){if(a.value.name.toLowerCase()===s.toLowerCase())return void alert("".concat(s," is already in contacts"))}}catch(r){c.e(r)}finally{c.f()}n((function(e){return[].concat(Object(l.a)(e),[{id:Object(o.a)(),name:s,number:f}])})),m(b),p(j)},children:[Object(u.jsxs)("label",{className:"labelNameField",children:[Object(u.jsx)("span",{className:"titleNameField",children:"Name"}),Object(u.jsx)("input",{type:"text",className:"nameField",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.",value:s,onChange:x,required:!0})]}),Object(u.jsxs)("label",{className:"labelNumberField",children:[Object(u.jsx)("span",{className:"titleNumberField",children:"Number"}),Object(u.jsx)("input",{type:"tel",className:"numberField",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:f,onChange:x,required:!0})]}),Object(u.jsx)("button",{type:"submit",className:"addButton",children:"Add contact"})]})},O=n(8),h=function(e){var t=e.contacts,n=e.filteredArray,a=e.deleteContact,c=function(e){return a(e.target.dataset.id)};return Object(u.jsx)("ul",{children:t.length>0&&n(t).map((function(e){return Object(u.jsxs)("li",{className:"listItem",children:[Object(u.jsx)(O.a,{style:{color:"#000099"}})," -"," ",Object(u.jsx)("span",{children:e.name}),": ",Object(u.jsx)("span",{children:e.number}),Object(u.jsx)("button",{type:"button","data-id":e.id,className:"deleteButton",onClick:c,children:"Delete"})]},e.id)}))})},f=function(e){var t=e.filter,n=e.handleInputField;return Object(u.jsxs)("label",{className:"labelFilterField",children:[Object(u.jsx)("span",{className:"titleFilterField",children:"Find contacts by Name:"}),Object(u.jsx)("input",{type:"text",className:"filterField",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.",value:t,onChange:n})]})},p=(n(17),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),x="";var N=function(){var e=Object(a.useState)(p),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(x),s=Object(i.a)(r,2),l=s[0],d=s[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"PhoneBook"}),Object(u.jsx)("h3",{children:"Add new contact"}),Object(u.jsx)(m,{contacts:n,setContacts:c}),Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(f,{filter:l,handleInputField:function(e){var t=e.target;return d(t.value)}}),Object(u.jsx)(h,{contacts:n,filteredArray:function(e){return e.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}))},deleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3f0b30e3.chunk.js.map