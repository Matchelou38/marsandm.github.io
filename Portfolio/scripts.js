
    const nameField = document.getElementById('name');
    if (nameField) {
        nameField.addEventListener('input', function() {
            const nameValue = nameField.value;

            if (/\d/.test(nameValue)) {
                nameField.classList.add('error');
            } else {
                nameField.classList.remove('error');
            }
        });
    }

    const emailField = document.getElementById('email');
    if (emailField) {
        emailField.addEventListener('input', function() {
            const emailValue = emailField.value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {
                emailField.classList.add('error');
            } else {
                emailField.classList.remove('error');
            }
        });
    }
