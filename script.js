
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'dakshupadhyaytheoneandonlyadmin' && password === 'dakshupadhyaytheoneandonlyadmin') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
}
