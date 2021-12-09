var D=Object.defineProperty,O=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var S=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))E.call(t,n)&&S(e,n,t[n]);if(N)for(var n of N(t))M.call(t,n)&&S(e,n,t[n]);return e},C=(e,t)=>O(e,R(t));import{j as q,a as p,r as u,R as F,b as T}from"./vendor.8a5ec9ec.js";const _=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};_();const i=q.exports.jsx,m=q.exports.jsxs,I=({message:e})=>i("div",{style:{backgroundColor:"greenyellow",border:"2px green solid",fontSize:"1.3em",marginBottom:30,transition:"all 0.3s ease-in"},children:e}),g="/api/persons",z=async()=>p.get(g).then(t=>t.data),K=async e=>p.post(g,e).then(n=>n.data),U=async(e,t)=>p.put(`${g}/${e}`,t).then(d=>d.data),G=async e=>p.delete(`${g}/${e}`).then(n=>n.data);var b={getAll:z,create:K,updatePhoneBook:U,deletePerson:G};function H(){const[e,t]=u.exports.useState([]),[n,d]=u.exports.useState(""),[o,s]=u.exports.useState(""),[l,P]=u.exports.useState(""),[w,h]=u.exports.useState("");u.exports.useEffect(()=>{b.getAll().then(r=>{t(r)})},[]);const L=r=>{d(r.target.value)},$=r=>{s(r.target.value)},j=r=>{P(r.target.value)},A=r=>{const a=e.find(c=>c.id===r);window.confirm(`Delete ${a.name}`)&&b.deletePerson(r).then(c=>{t(e.filter(v=>v.id!==r))})},B=l.length<1?e:e.filter(r=>r.name.toLowerCase().includes(l.toLowerCase()));return m("div",{children:[i("h2",{children:"Phonebook"}),w!==""&&i(I,{message:w}),m("div",{children:["filter shown with ",i("input",{onChange:j})]}),i("h2",{children:"add a new"}),m("form",{onSubmit:r=>{r.preventDefault();const a=e.find(c=>c.name===n),y={name:n,number:o};if(a){if(window.confirm(`${a.name} is already added to the phone book, replace with a new number?`)){const v=C(k({},a),{number:o});b.updatePhoneBook(a.id,v).then(x=>{t(e.map(f=>f.id===a.id?x:f))}).catch(x=>{h(`${a.name} already removed in the server`),setTimeout(()=>{h("")},5e3),t(e.filter(f=>f.id!==a.id))})}return}b.create(y).then(c=>{t(e.concat(c)),h(`Added ${c.name}`),setTimeout(()=>{h("")},5e3)}),d(""),s("")},children:[m("div",{children:["name: ",i("input",{value:n,onChange:L})]}),m("div",{children:["number: ",i("input",{value:o,onChange:$})]}),i("div",{children:i("button",{type:"submit",children:"add"})})]}),i("h2",{children:"Numbers"}),i("div",{children:B.map(r=>m("div",{children:[r.name," ",r.number," ",i("button",{onClick:()=>A(r.id),children:"Delete"})]},r.id))})]})}F.render(i(T.StrictMode,{children:i(H,{})}),document.getElementById("root"));