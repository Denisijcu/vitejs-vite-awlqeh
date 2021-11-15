import './style.css';
import {Users, showUsers, onDelete} from './User/user';
import {Detail,showDetail} from './Detail/detail';

let title = 'Users List';

document.querySelector('#app').innerHTML = `
 
 <h1>
 ${title}
 </h1>

${Detail}

${Users}

`;

showUsers();

window.showDetail = showDetail;
window.onDelete = onDelete;
