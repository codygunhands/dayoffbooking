// main.js
window.onload = function () {
    initializeLiff(); // Initialize LIFF
};

function initializeLiff() {
    liff.init({
        liffId: "YOUR_LIFF_ID" // Replace with your LIFF ID
    }).then(() => {
        if (!liff.isLoggedIn()) {
            liff.login(); // Log the user in if they are not logged in
        }
        // You can now get the user profile, etc.
        // liff.getProfile().then(profile => { ... });
    }).catch(err => {
        console.error('LIFF initialization failed', err);
    });
}

document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Here you would typically send this data to your server for processing.
    console.log('Reservation details:', { name, date, time });
});
