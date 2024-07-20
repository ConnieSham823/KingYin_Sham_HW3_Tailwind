console.log("JS file connected");

const label = document.querySelector('label');
    const dropdown = document.querySelector('.dropdown');

    label.addEventListener('click', function() {
        dropdown.classList.toggle('hidden');
    });


    document.addEventListener('DOMContentLoaded', () => {
      // Example JavaScript code here
      console.log('JavaScript loaded successfully.');
    });