'use strict'

{
const menu_open = document.querySelector('.menu_open');
const menu_close = document.querySelector('.menu_close');
const menu_overlay = document.querySelector('.menu-overlay');
const menu_wrap = document.querySelector('.menu-wrap');

// メニューを開く
menu_open.addEventListener('click', () => {
    menu_overlay.classList.add('show');
    menu_wrap.classList.add('show');
    menu_close.classList.add('show');
    menu_open.classList.add('hidden');
})

// メニューを閉じる
menu_close.addEventListener('click', () => {
    menu_overlay.classList.remove('show');
    menu_wrap.classList.remove('show');
    menu_open.classList.remove('hidden');
    menu_close.classList.remove('show');
})

    // 背景をクリックしてもメニューが閉じるようにする
    menu_wrap.addEventListener('click', () => {
        if(menu_wrap.classList.contains('show')){
            menu_overlay.classList.remove('show');
            menu_wrap.classList.remove('show');
            menu_open.classList.remove('hidden');
            menu_close.classList.remove('show');
        }
    })

}