const inputText = document.querySelector('[type="text"]');
const submitButton = document.querySelector('[type="submit"]');

inputText.addEventListener("input", function() {
    // Verifica se o campo de entrada está vazio
    if (inputText.value.length <= 3) {
      // Se estiver vazio, desabilita o botão de envio
      submitButton.disabled = true;
    } else {
      // Se não estiver vazio, habilita o botão de envio
      submitButton.disabled = false;      
    }
  });

function submitted(){
    const inviteForm = document.getElementById("invite-form");

    inviteForm.addEventListener("submit", function(event) {
        event.preventDefault();
            
        const inputValue = document.querySelector('[type="text"]').value;

        console.log("Nome de usuário inserido: " + inputValue);
    });
}

submitted();