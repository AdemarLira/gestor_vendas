// Validações do formulário
function validarFormulario(){
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var senha = document.getElementById('senha').value.trim();
    
    if(nome === "" || email === "" || senha === ""){
      alert("Todos os campos são obrigatórios!");
      return false;
    }
  
      if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.startsWith('@') || email.endsWith('.') || email.indexOf('@') > email.lastIndexOf('.')) {
        alert("Por favor, insira um email válido!");
        return false; 
      }
      
      if (senha.length < 8 ){
        alert("A senha deve conter pelo menos 8 caracteres!")
        return false;
      }
      
      return true; 
    }
  
    function salvarCadastro() {
      if(input === ''){
        alert('preencha todos os campos!')
      }
      alert('Cadastro criado com sucesso');
    }
  
    function login() {
    
    }
  
    // function excluirCadastro() {
    //   if(confirm('Deseja excluir este cadastro?')){
    //     alert('Cadastro excluído com sucesso');
    //   }
    // }
  
    // function alterarCadastro() {
    //   alert('Cadastro alterado com sucesso');
    // }
  
    // function consultarCadastro() {
    //   alert('Consultando cadastro...');
    // }
  
    // function limparForm() {
    //   document.getElementById('nome').value = '';
    //   document.getElementById('email').value = '';
    //   document.getElementById('senha').value = '';
    // } 
  