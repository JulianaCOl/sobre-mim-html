//inicializando o emailjs com um token (public key)
    emailjs.init(window.env.EMAIL_PUBLIC_KEY);

//função para enviar o formulário por email
function enviarFormulario(e){
//impede a página de recarregar quando o formulário dor enviado
    e.preventDefault();

    //pegando os campos do formulário por ID e armazenando em variáveis
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value ;
    let mensagem = document.getElementById("mensagem").value;
    let resposta = document.getElementById("resposta");
    let form = document.getElementById("form");
   
    //envia o e-mail usando o:
     //service_id
     //template_id
     //campos do email
    emailjs.send(window.env.EMAIL_SERVICE_ID, window.env.EMAIL_TEMPLATE_ID_ADMIN, {
        nome: nome,
        email: email,
        mensagem: mensagem
    });

    emailjs.send (window.env.EMAIL_SERVICE_ID, window.env.EMAIL_TEMPLATE_ID_REPLY, {
        nome: nome,
        email: email
    });

    //alert("Sua mensagem foi enviada com sucesso! Aguarde nosso contato!");
    //inserir dentro do paragrafo (HTML) o texto após enviar a mensagem
    resposta.innerHTML = "Sua mensagem foi enviada com sucesso! Aguarde nosso contato!";
    
    //limpa os campos do formulário
    form.reset();
}