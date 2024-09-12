import{a as f}from"/build/_shared/chunk-5DNCLJX5.js";import{d as c}from"/build/_shared/chunk-OF7TX32X.js";import{a as l}from"/build/_shared/chunk-FZCUADOT.js";import{a as n}from"/build/_shared/chunk-GLL77XL4.js";import"/build/_shared/chunk-DGA7IYTA.js";import"/build/_shared/chunk-L4JQJ63A.js";import{b as m}from"/build/_shared/chunk-BVJBT3X3.js";import{d as i}from"/build/_shared/chunk-T36URGAI.js";var t=i(m(),1),p=({data:e})=>{let a=e?.billing_vs_actual,o=e?.all_item_total;console.log(e);let u=r=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(r),s=f().default,b={chart:{id:"chart1",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",dataLabels:{position:"top"}}},xaxis:{categories:["Committed","Actual","Labor","Invoiced"]},yaxis:{labels:{formatter:function(r){return`${r.toFixed(0)}%`}},min:0,max:1e3},dataLabels:{enabled:!1},stroke:{colors:["transparent"],width:5},tooltip:{shared:!0,intersect:!1,y:{formatter:function(r){return u(Number(r))}}},colors:["#7989A9","#F9C75C"],legend:{show:!1,position:"top"}},d=[{name:"Invoiced to Date",data:[Number(o?.total?.commited_total)||0,Number(o?.total?.actual_total)||0,Number(o?.labor?.actual_total)||0,Number(a?.amount_invoiced/100)||0]},{name:"Total Project Amount",data:[Number(o?.unassigned?.estimated_total)||0,Number(o?.total?.estimated_total)||0,Number(o?.labor?.estimated_total)||0,Number(a?.original_contract_amount/100)||0]}];return(0,t.jsxs)("div",{className:"h-full",children:[(0,t.jsx)(n,{icon:c,label:"Summary Percentages",bgColor:"#FEF6E5",color:"#F8AB07",className:"text-base"}),s?(0,t.jsx)(s,{type:"bar",height:307,options:b,series:d}):(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsx)(N,{})})]})},y=p,N=()=>(0,t.jsxs)("div",{className:"relative h-64 ",children:[(0,t.jsx)("div",{className:"absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2",children:[...Array(6)].map((e,a)=>(0,t.jsx)(l,{className:"w-10 h-2"},a))}),(0,t.jsx)("div",{className:"absolute left-14  right-0 top-0 bottom-8 flex justify-between items-end",children:[10,16,60,20,40].map((e,a)=>(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsx)(l,{className:`w-12 mb-1 h-${e}`}),(0,t.jsx)(l,{className:"w-16 h-2"})]},a))})]});export{y as default};
