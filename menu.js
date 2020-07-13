const mq = window.matchMedia( "(min-width:615px)");
const navmenu = document.getElementById('mobile-drawer');
const openbtn = document.getElementById('menubtn');
const closebtn = document.getElementById('closeMenubtn');


if(mq.matches){
  changeMenuDK();
}else{
  changeMenuMob();
}


function menuToggle(){
  if(navmenu.classList.contains('hidden')){
    changeMenuDK();
    closebtn.classList.remove('hidden');
  }else{
    changeMenuMob();
    closebtn.classList.add('hidden');
  }

}


function changeMenuDK(){
  navmenu.classList.remove('hidden');
  openbtn.classList.add('hidden');
}

function changeMenuMob(){
  navmenu.classList.add('hidden');
  openbtn.classList.remove('hidden');
}
