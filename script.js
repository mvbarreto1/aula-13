document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const nomeLoja = document.getElementById('nomeLoja').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const valorVendido = parseFloat(document.getElementById('valorVendido').value);

    try {
        validarCampos(nomeLoja, cidade, valorVendido);
       
        alert('Cadastro realizado com sucesso!');
    } catch (erro) {
  
        document.getElementById('mensagemErro').textContent = erro;
    } finally {
 
        console.log('Processamento do formulário concluído.');
    }
});

function validarCampos(nomeLoja, cidade, valorVendido) {
    if (!nomeLoja || !cidade || isNaN(valorVendido)) {
        throw 'Todos os campos devem ser preenchidos.';
    }
    if (valorVendido < 0) {
        throw 'O valor total vendido no mês deve ser maior ou igual a zero.';
    }
}
