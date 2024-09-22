const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnLoginPopup.addEventListener('click', () => {
    wrapper.style.display = 'block';
    wrapper.classList.add('active');
})

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

iconClose.addEventListener('click', () => {
    wrapper.style.display = 'none';
    wrapper.classList.remove('active')
});



