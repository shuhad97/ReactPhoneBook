(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(0),c=t.n(r),o=t(13),u=t.n(o),s=t(14),i=t(2),l=t.n(i),m="/api/persons/",p=function(e){var n=e.persons,t=e.setPersons,a=e.newName,r=e.setNewName,o=e.newNumber,u=e.setNewNumber,i=!1;return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r={name:a,number:o};n.forEach((function(e){e.name===r.name&&(i=!0,function(e,n,t){var a={id:n,number:t};l.a.put(m,a).then((function(n){e(n.data)}))}(t,e.id,r.number))})),i||function(e,n,t){l.a.post(m,t).then((function(a){var r=Object(s.a)({},t,{id:a.data.id});n(e.concat(r))}))}(n,t,r)}},c.a.createElement("div",null,"name: ",c.a.createElement("input",{onChange:function(e){r(e.target.value)}})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{onChange:function(e){u(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add"))))},f=function(e){var n=e.persons,t=e.setPersons,a=e.tempPersonList,r=e.searchInput;return c.a.createElement("div",null,c.a.createElement("h1",null,"Search Person"),c.a.createElement("div",null,"Search ",c.a.createElement("input",{onChange:function(e){if(0!==e.target.value.length){r=!0;var c=n.filter((function(n){return n.name.includes(e.target.value)}));t(c),console.log(r)}else t(a),r=!1}})))},b=(t(37),function(e){var n=e.persons,t=e.setPersons,a=e.tempPersonList,r=e.searchInput,o=n.map((function(e){return c.a.createElement("li",{className:"contact",key:e.number},e.name," : ",e.number,"  ",c.a.createElement("button",{onClick:function(){l.a.delete("".concat("/api/persons","/").concat(e.id)).then((function(a){t(n.filter((function(n){return n.id!==e.id})))}))}},"Remove"))})),u=a.map((function(e){return c.a.createElement("li",{key:e.number},e.name," : ",e.number,"  ",c.a.createElement("button",{onClick:function(){l.a.delete("".concat("/api/persons","/").concat(e.id)).then((function(a){t(n.filter((function(n){return n.id!==e.id})))}))}},"Remove"))}));return c.a.createElement("div",null,c.a.createElement("h2",null,"Numbers"),r?u:o)});u.a.render(c.a.createElement((function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],o=n[1],u=Object(r.useState)([]),s=Object(a.a)(u,2),i=s[0],m=s[1],d=Object(r.useState)(""),E=Object(a.a)(d,2),h=E[0],v=E[1],N=Object(r.useState)(""),g=Object(a.a)(N,2),P=g[0],j=g[1];return Object(r.useEffect)((function(){l.a.get("/init").then((function(e){console.log(e.data),o(e.data),m(e.data)}))}),[]),c.a.createElement("div",null,c.a.createElement(f,{persons:t,setPersons:o,tempPersonList:i,searchInput:!1}),c.a.createElement(p,{persons:t,setPersons:o,newName:h,setNewName:v,setNewNumber:j,newNumber:P}),c.a.createElement(b,{persons:t,setPersons:o,tempPersonList:i,searchInput:!1}))}),null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.44a915aa.chunk.js.map