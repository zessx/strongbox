window.onload = function() {
    document.body.className = 'question';
}
function generate() {
    var urlparts = window.location.pathname.substr(1).split('/');
    var startto  = 0;
    var service  = urlparts[startto] || '';
    var length   = urlparts[startto+1] || 12;
    var password = document.getElementById('password').value;
    document.getElementById('password').value = null;

    document.body.className = 'answer';
    document.getElementById('answer').innerHTML = btoa(CryptoJS.SHA256(service + password + length).toString()).slice(0, length);

    return false;
}