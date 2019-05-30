passwords = ['user', 'spring', 'John'];
message = ['Hello world', 'I will be back', 'Viva Las Vegas'];

const input = document.querySelector('input');
const displayAnswer = document.querySelector('h2.message');

input.addEventListener('input', function (e) {
  displayAnswer.textContent = '';

  const passwordToFind = e.target.value;
  const index = passwords.findIndex(pass => pass === passwordToFind);

  if (index !== -1) {
    console.log(message[index]);
    displayAnswer.textContent = message[index];
    this.value = '';
  }
})