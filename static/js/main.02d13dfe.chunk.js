(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(3),a=n.n(s),o=n(4),i=n(5),l=n(7),j=n(6),u=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={message:""},e.onCreateUser=function(){var t={name:e.refs.name.value,job:e.refs.job.value};fetch("https://reqres.in/api/users/",{method:"POST",headers:{"Content-type":"application/json"},mode:"no-cors",body:t}).then((function(e){return e.json()})).then((function(t){t&&e.setState({message:"New Employee is Created Successfully"})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Please Enter Employee Details..."}),Object(r.jsx)("p",{children:Object(r.jsxs)("label",{children:["Employee name1 : ",Object(r.jsx)("input",{type:"text",ref:"name"})]})}),Object(r.jsx)("p",{children:Object(r.jsxs)("label",{children:["Employee job : ",Object(r.jsx)("input",{type:"text",ref:"job"})]})}),Object(r.jsx)("button",{onClick:this.onCreateUser,children:"Create"})]})}}]),n}(c.Component);n(13);a.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.02d13dfe.chunk.js.map