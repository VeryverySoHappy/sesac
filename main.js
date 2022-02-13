const closeBtn = document.querySelector('.close_label');
const openBtn = document.querySelector('.open_label');
const sidebarMenu = document.querySelector('.sidebar_content')
const backgroundColor = document.querySelector('.background');
const mypageBtn = document.querySelector('.my_page');

openBtn.addEventListener('click', () => {
sidebarMenu.style.right = 0 + 'px'
backgroundColor.style.opacity = 1;
backgroundColor.style.visibility = 'visible';
})

closeBtn.addEventListener('click', () => {
sidebarMenu.style.right = -405 + 'px'
backgroundColor.style.opacity = 0;
backgroundColor.style.visibility = 'hidden';
})

backgroundColor.addEventListener('click', () => {
sidebarMenu.style.right = -405 + 'px'
backgroundColor.style.opacity = 0;
backgroundColor.style.visibility = 'hidden';
})
