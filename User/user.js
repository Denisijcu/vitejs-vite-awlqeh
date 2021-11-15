import {users } from '../data.js';
import './user_style.css';

let _users = users;

export const Users = `

<ul id="users"></ul>

`

export const showUsers = ()=>{

  const listUser = document.querySelector("#users");

  let lstuser = '';
  _users.map(user => {
      lstuser += `<li> 
      <a href="#!" onclick="showDetail(${user.id})"> 
      <img src="${user.image}" alt="" height="50"> 
    
      ${user.name}
     
      
      </a>

      <button
      
      onclick = "onDelete(${user.id})"

      >
      
      <i class="fa fa-trash" aria-hidden="true"></i>

      </button>
      
      
      </li>`
  });

  listUser.innerHTML = lstuser;
}

export const onDelete = (uId)=>{
  _users = _users.filter(f => f.id!==uId);
  showUsers();

}

    