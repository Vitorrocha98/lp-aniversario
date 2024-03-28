const inputText = document.querySelector('[type="text"]');
const submitButton = document.querySelector('[type="submit"]');

inputText.addEventListener("input", function() {    
    if (inputText.value.length < 3) {      
      submitButton.disabled = true;
    } else {      
      submitButton.disabled = false;      
    }
  });

function submitted(){
    const inviteForm = document.getElementById("invite-form");

    inviteForm.addEventListener("submit", function(event) {
        event.preventDefault();
            
        const inputValue = document.querySelector('[type="text"]').value.trim();
        const titleDetails = document.querySelector('.block-invite__invitation-details__description h3');
        const blockStartInvitation = document.querySelector('.block-invite__start-invitation');
        const blockDetailsInvitation = document.querySelector('.block-invite__invitation-details');

        titleDetails.textContent = `Oi, ${inputValue}! Tudo bem?`

        blockStartInvitation.classList.add('hidden');
        setTimeout(() => {          
          blockStartInvitation.setAttribute('style', 'display:none;');
          blockDetailsInvitation.setAttribute('style', 'display:flex;');          
        }, 500);
        
        setTimeout(() => {          
          blockDetailsInvitation.classList.add('visible');
          blockDetailsInvitation.closest('.block-invite').setAttribute('style', 'overflow:auto;')
        }, 550);
    });
}

submitted();