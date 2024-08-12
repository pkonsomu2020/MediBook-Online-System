// submitMessage.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('messageForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('/submitMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.text();
            alert(result); // Notify user of success
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your message');
        }
    });
});