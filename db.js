const scriptURL = 'https://script.google.com/macros/s/AKfycbxVFmDsB8rr3s5vtBCl7kE6OY8TXA5sZXVsZqC1hVnUSJReT8OQLppvUMGNbKi0PDKFLA/exec'

const form = document.forms['reservation-form']

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.checkValidity()) {
        alert("Please fill up the form before submitting, thank you.");
        return;
    }

    const formData = new FormData(form);
    let isBlank = false;
    for (const value of formData.values()) {
        if (value.trim() === '') {
            isBlank = true;
            break;
        }
    }
    if (isBlank) {
        alert("Please fill up all fields before submitting, thank you.");
        return;
    }

    fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
        alert("Thank you! Your form is submitted successfully. We'll respond to your inquiry ASAP via Email. Have a great day!");
        window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});