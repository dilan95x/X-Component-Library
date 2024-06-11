import{C as p,c as l}from"./convertFormDataToObject-D0F51Mbs.js";import"./index-CDs2tPxN.js";import"./index.es-DKiAfh4b.js";import"./index-27BIJqHF.js";import"./index-BsRM_kXB.js";import"./index-VrfOCAZU.js";const d=r=>{r.preventDefault();const n=r.target,c=new FormData(n),t=l(c);console.log(`Event: ${r}`),console.log(`Form Data ${t}`);const a=(Number(t.price)||0)*Number(t.quantity),i=a*(Number(t.discount)||0)/100,u=a-i;alert(`Calculation: $${u}`)},$={component:p},o={args:{width:"15rem",onSubmit:d}};var e,s,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    width: "15rem",
    onSubmit: submit
  }
}`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const v=["Form"];export{o as Form,v as __namedExportsOrder,$ as default};
