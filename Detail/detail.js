import {users } from '../data.js';
import './detail_style.css';

export const Detail = `

<div id="detail"></div>

`;

export const showDetail = (i)=>{

  const uiDetail = document.querySelector("#detail");

  const _user = users.filter(f => f.id===i);
   const {id,name,lastname,email,image} = _user[0];

   let detail = `
   
   <p> Id: ${id} </p>
   <p> Name: ${name} </p>
   <p> Last Name: ${lastname} </p>
   <p> Email: ${email} </p>
   <img src="${image}" width="150" height="150" alt="${name}" title="${name}" >
   

   <i class="fa fa-arrow-left" aria-hidden="true"></i>

   `;

   uiDetail.innerHTML = detail;
}