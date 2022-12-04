const usuario = document.querySelector('#usuario');
const password = document.querySelector('#password');
const formulario = document.getElementById('form');


const credenciales = {
    usuario: 'admin',
    password: 'admin'
}

const user = {
    usuario: 'usuario',
    password: 'usuario'
}



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
console.log('hola') 
    const usuarioTxt = usuario.value;
    const passwordTxt = password.value;

    if (usuarioTxt === credenciales.usuario && passwordTxt === credenciales.password){
        window.location="../shop/index.html";
    }else if(usuarioTxt === user.usuario && passwordTxt === user.password){
        window.location="https://web.whatsapp.com/";
    }


    return window.alert('Usuario no existente')


});