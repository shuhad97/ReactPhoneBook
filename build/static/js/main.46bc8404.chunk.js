(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n.n(r),o=n(13),u=n.n(o),s=n(2),l=n.n(s),i=n(14),m=function(e,t,n){l.a.post("/api/persons/",n).then((function(a){var r=Object(i.a)({},n,{id:a.data.id});t(e.concat(r))}))},p=!1,f=function(e){var t=e.persons,n=e.setPersons,a=e.newName,r=e.setNewName,o=e.newNumber,u=e.setNewNumber;return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var c={name:a,number:o};t.forEach((function(e){e.name===c.name&&(p=!0)})),p?(alert("User ".concat(c.name," already Exists")),p=!1):(m(t,n,c),r(""))}},c.a.createElement("div",null,"name: ",c.a.createElement("input",{onChange:function(e){r(e.target.value),console.log(e.target.value)}})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{onChange:function(e){u(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add"))))},b=function(e){var t=e.persons,n=e.setPersons,a=e.tempPersonList,r=e.searchInput;return c.a.createElement("div",null,c.a.createElement("h1",null,"Search Person"),c.a.createElement("div",null,"Search ",c.a.createElement("input",{onChange:function(e){if(0!==e.target.value.length){r=!0;var c=t.filter((function(t){return t.name.includes(e.target.value)}));n(c),console.log(r)}else n(a),r=!1}})))},d=(n(37),function(e){var t=e.persons,n=e.setPersons,a=e.tempPersonList,r=e.searchInput,o=t.map((function(e){return c.a.createElement("li",{className:"contact",key:e.number},e.name," : ",e.number,"  ",c.a.createElement("button",{onClick:function(){l.a.delete("".concat("/api/persons","/").concat(e.id)).then((function(a){n(t.filter((function(t){return t.id!==e.id})))}))}},"Remove"))})),u=a.map((function(e){return c.a.createElement("li",{key:e.number},e.name," : ",e.number,"  ",c.a.createElement("button",{onClick:function(){l.a.delete("".concat("/api/persons","/").concat(e.id)).then((function(a){n(t.filter((function(t){return t.id!==e.id})))}))}},"Remove"))}));return c.a.createElement("div",null,c.a.createElement("h2",null,"Numbers"),r?u:o)});u.a.render(c.a.createElement((function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1],u=Object(r.useState)([]),s=Object(a.a)(u,2),i=s[0],m=s[1],p=Object(r.useState)(""),E=Object(a.a)(p,2),h=E[0],v=E[1],g=Object(r.useState)(""),N=Object(a.a)(g,2),P=N[0],j=N[1];return Object(r.useEffect)((function(){l.a.get("http://localhost:3001/init").then((function(e){console.log(e.data),o(e.data),m(e.data)}))}),[]),c.a.createElement("div",null,c.a.createElement(b,{persons:n,setPersons:o,tempPersonList:i,searchInput:!1}),c.a.createElement(f,{persons:n,setPersons:o,newName:h,setNewName:v,setNewNumber:j,newNumber:P}),c.a.createElement(d,{persons:n,setPersons:o,tempPersonList:i,searchInput:!1}),"...")}),null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.46bc8404.chunk.js.map