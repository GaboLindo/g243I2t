const btnLogin = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
let usuarioLolago = null;

(() => {
    usuarioLogado = localStorage.getItem("usuario");
    if(usuarioLogado){
        window.location.href = "/tmp/guest-wgolpj/g243i2t/logado.html";
    }
})();

btnLogin.onclick = () => {
    e.preventDefault();
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(usuario){
        if(usuario ==="raul"){
            if(senha ==="123"){
                localStorage.setItem("usuario",usuario);
                window.location.href = "/logado.html";
            }
        }else{
            inputUsuario.focus();
        }
    }
}