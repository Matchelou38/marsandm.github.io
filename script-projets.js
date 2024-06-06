document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn');
    
    if (buttons.length === 0) {
        console.error("No toggle buttons found");
        return;
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            if (!content) {
                console.error("No content element found after the button");
                return;
            }
            
            content.classList.toggle('show');
            
            if (content.classList.contains('show')) {
                this.textContent = 'Voir moins';
            } else {
                this.textContent = 'Voir plus';
            }
        });
    });
});