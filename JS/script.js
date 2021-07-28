// richiesta nome
var firstName = prompt('Qual è il tuo nome?');
//richiesta cognome
var lastName = prompt('Qual è il tuo cognome?');
//richiesta colore
var color = prompt('Qual è il tuo colore preferito?');
//generazione password
var pwd = firstName + lastName + color + "40";
console.log(pwd);
//scrittura in pagina
document.getElementById('new_password').innerHTML = "La nostra nuova pass... ahem... la TUA nuova password è: " + pwd;