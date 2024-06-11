import{C as p,c as d}from"./convertFormDataToObject-D0F51Mbs.js";import"./index-CDs2tPxN.js";import"./index.es-DKiAfh4b.js";import"./index-27BIJqHF.js";import"./index-BsRM_kXB.js";import"./index-VrfOCAZU.js";const b=r=>{r.preventDefault();const n=r.target,c=new FormData(n),o=d(c),a=(Number(o.price)||0)*Number(o.quantity),i=a*(Number(o.discount)||0)/100,u=a-i;alert(`Calculation: $${u}`)},w={component:p},t={args:{width:"15rem",onSubmit:b}};var e,m,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    width: "15rem",
    onSubmit: submit
  }
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const C=["Form"];export{t as Form,C as __namedExportsOrder,w as default};
