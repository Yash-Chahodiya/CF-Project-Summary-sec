import{a as _}from"./chunk-XWTN2QSH.js";import{a as w}from"./chunk-3PEBKSMA.js";import{j as h}from"./chunk-TVJAXB4Y.js";import{a as i}from"./chunk-VAMN75EF.js";import{a as b}from"./chunk-EUB67SJ3.js";import"./chunk-7S4WJWCM.js";import{a as x,b as f}from"./chunk-LTFFWF27.js";import{c}from"./chunk-5TBO732O.js";var a=c(x(),1);var t=c(f(),1),I=({projectId:N,userId:l,compId:m})=>{let[r,g]=(0,a.useState)([]);(0,a.useEffect)(()=>{let u=async()=>{try{let e=new FormData;e.append("op","get_project_reference_detail"),e.append("project_id",N.toString()),e.append("need_more_data","0"),e.append("for_module_key",""),e.append("version","web"),e.append("from","panel"),e.append("iframe_call","0"),e.append("tz","+5:30"),e.append("tzid","Asia/Calcutta"),e.append("curr_time","2024-08-31 15:50:38"),e.append("force_login","0"),e.append("global_project",""),e.append("user_id",l.toString()),e.append("company_id",m.toString());let C=await _.post(`https://api-cfdev.contractorforeman.net/service.php?opp=get_project_reference_detail&c=${Number(m)}&u=${Number(l)}&p=manage_projects`,e);g(C?.data?.data?.modules)}catch(e){console.log("Error fetching data:",e)}},o=setTimeout(()=>{u()},500);return()=>{clearTimeout(o)}},[]);let d=w().default,v={chart:{id:"chart1",type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,dataLabels:{total:{enabled:!0,offsetX:0,style:{fontSize:"13px",fontWeight:900}}}}},xaxis:{categories:["OPEN","DUE","CLOSED"],tickPlacement:"on"},colors:["#684CC7","#e01f35","#282691"],legend:{show:!0,position:"top"}},n=r?.open_incomplete_item?.opnIncoInvoice[0]||{},p=r?.open_incomplete_item?.opnIncoBills[0]||{},s=r?.open_incomplete_item?.opnIncoPurchaseOrder[0]||{},y=[{name:"Invocies",data:[Number(n?.total_open)||0,Number(n?.total_due)||0,Number(n?.total_close)||0]},{name:"Bills",data:[Number(p?.total_open)||0,Number(p?.bill_count)||0,Number(p?.total_close)||0]},{name:"Bills",data:[Number(s?.total_open)||0,Number(s?.bill_count)||0,Number(s?.total_close)||0]}];return(0,t.jsxs)("div",{className:"h-full",children:[(0,t.jsx)(b,{icon:h,label:"Action-Items",bgColor:"#ECF3FE",color:"#7FB2FF"}),d?(0,t.jsx)(d,{type:"bar",options:v,series:y,height:307}):(0,t.jsx)("div",{className:"space-y-4",children:[...Array(4)].map((u,o)=>(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)(i,{className:"w-8 h-4"}),(0,t.jsx)(i,{className:`h-14 ${o===1?"w-3/4":o===2?"w-full":"w-1/2"}`})]},o))})]})},k=I;export{k as default};
