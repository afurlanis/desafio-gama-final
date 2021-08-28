document.forms['cv_form'].addEventListener('submit', (event) => {
    event.preventDefault();
    const button = document.getElementById('submit-btn');
    const i = document.querySelector('i');
    button.classList.add('buttonload');
    i.classList.add('fa');
    i.classList.add('fa-circle-o-notch');
    i.classList.add('fa-spin');
    
    fetch(event.target.action, {
        method: 'POST',
        body: new URLSearchParams(new FormData(event.target)) 
    }).then((resp) => {
        if (resp.redirected) {
            window.location.href = resp.url;
        }
        return resp.json();
    }).then((body) => {
        if (body.error == 1) {
            alert("Não é possivel Cadastrar, pois esse CPF já está cadastrado!")
        } 
    }).catch((error) => {

    });
    button.classList.remove('buttonload');
    i.classList.remove('fa');
    i.classList.remove('fa-circle-o-notch');
    i.classList.remove('fa-spin');
});










//CEEEEEEEEEEEEEEP
$("#cep").focusout(function(){
    //Início do Comando AJAX
    $.ajax({
        //O campo URL diz o caminho de onde virá os dados
        url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
        //tipo de dados JSON
        dataType: 'json',

        success: function(resposta){
            // preenchimento automaticom
            $("#endereço").val(resposta.logradouro);
            $("#complemento").val(resposta.complemento);
            $("#bairro").val(resposta.bairro);
            $("#cidade").val(resposta.localidade);
            $("#uf").val(resposta.uf);

            $("#numero").focus();
        }
    });
});
