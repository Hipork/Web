// BURGER-OPEN-CLOSE
const burgerOpen = document.querySelector(".burger-open")
const burgerClose = document.querySelector(".burger-menu__close")
const burgerMenu = document.querySelector(".burger-menu")


burgerOpen.addEventListener('click',function(){
    burgerMenu.classList.add('burger-menu_active')
})
burgerClose.addEventListener('click',function(){
    burgerMenu.classList.remove('burger-menu_active')
})
// -----------------------------------









// MODAL-OPEN-CLOSE
const modal = document.querySelector('.modal')
const modalOpen = document.querySelector('.main-screen__button')
const modalClose = document.querySelector('.modal__close')


modalOpen.addEventListener('click',function(){
    modal.classList.add('modal_active')
})
modalClose.addEventListener('click',function(){
    modal.classList.remove('modal_active')
})
// --------------------------------------









// MODAL-ICON-FOCUS
const iconName = document.querySelector('.modal__input_icon_name')
const inputNameFocus = document.querySelector('.modal__input_name')
const iconPhone = document.querySelector('.modal__input_icon_phone')
const inputPhoneFocus = document.querySelector('.modal__input_phone')
const iconEmail = document.querySelector('.modal__input_icon_email')
const inputEmailFocus = document.querySelector('.modal__input_email')


inputNameFocus.onfocus = function () {
    iconName.classList.add('modal__input_icon_active')
}
inputNameFocus.onblur = function () {
    iconName.classList.remove('modal__input_icon_active') 
}
inputPhoneFocus.onfocus = function () {
    iconPhone.classList.add('modal__input_icon_active')
}
inputPhoneFocus.onblur = function () {
    iconPhone.classList.remove('modal__input_icon_active')
}
inputEmailFocus.onfocus = function () {
    iconEmail.classList.add('modal__input_icon_active')
}
inputEmailFocus.onblur = function () {
    iconEmail.classList.remove('modal__input_icon_active')
}
// ----------------------------------









// CUSTOM-CHECKBOX
const checkboxTrue = document.querySelector('.modal__checkbox')
const checkboxFalse = document.querySelector('.modal__checkbox-false')


checkboxFalse.addEventListener('click',function(){
    if(checkboxTrue.checked == true) {
        checkboxTrue.checked = false
        checkboxFalse.classList.remove('modal__checkbox-false_checked')
        
    } else {
        checkboxTrue.checked = true
        checkboxFalse.classList.add('modal__checkbox-false_checked')
        
    }
})
// -------------------------------









// MODAL-CHECK+CLOSE---------------------
const modalSend = document.querySelector('.modal__button')

modalSend.addEventListener('click', function (){
    let nameLengt = inputNameFocus.value.length
    let phoneLenght = inputPhoneFocus.value.length
    if(nameLengt >= 2 && phoneLenght === 12) {
        modal.classList.remove('modal_active')
    } else {
        alert("Неверно введены данные")
    }

})
// ---------------------------------------

