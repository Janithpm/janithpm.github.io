const customAlert = document.getElementById('alert');

const sendEmail = (from, body) => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "janithpm9991@gmail.com",
        Password : "D9DC1C962891D83E6AED12C948A2F3690D0C",
        To : 'janithpm0@gmail.com',
        From : 'janithpm9991@gmail.com',
        Subject : "New Message from " + from + " via janithpm.tech",
        Body : body
    }).then(
      message => {
        if(message === 'OK'){
            console.log(message);
            customAlert.classList.remove('left-[-100%]');
            customAlert.classList.add('left-0');
            customAlert.classList.add('bg-green-500/70')
            const p = customAlert.querySelector('p');
            p.textContent = 'Message sent successfully. I will contact you soon. Thank you for contacting me. ';
            setTimeout(() => {
                // p.textContent = '';
                customAlert.classList.remove('left-0');
                customAlert.classList.add('left-[-100%]');
                customAlert.classList.remove('bg-green-500/70')
            }, 3000)
            emailInput.value = '';
            nameInput.value = '';
            messageInput.value = '';
        }
        else{
          console.error(message);
          customAlert.classList.remove('left-[-100%]');
          customAlert.classList.add('left-0');
          customAlert.classList.add('bg-accent/70')
          const p = customAlert.querySelector('p');
          p.textContent = 'Something went wrong. Please try again.';
          setTimeout(() => {
            //   p.textContent = '';
                customAlert.classList.add('left-[-100%]');
                customAlert.classList.remove('left-0');
                customAlert.classList.remove('bg-accent/70')
            }, 3000)
            emailInput.value = '';
            nameInput.value = '';
            messageInput.value = '';
        }
      }
    ).catch(err => console.log(err))
}

const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const from = emailInput.value;
    const body = `
        <h4
        style="border-bottom: 1px solid #000; padding-bottom: 10px; margin-bottom: 10px; color: #101c2d;"
        >Message from ${nameInput.value} | ${from}</h4>
        <p>${messageInput.value}</p>
    `

    if(from === '' || nameInput.value === '' || messageInput.value === ''){
        customAlert.classList.add('left-0');
            customAlert.classList.add('bg-green-500/70')
            const p = customAlert.querySelector('p');
            p.textContent = 'Something went wrong. Please try again.';
            setTimeout(() => {
                p.textContent = '';
                customAlert.classList.remove('left-0');
                customAlert.classList.remove('bg-accent/70')
            }, 3000)
            return
    }
    sendEmail(from, body);
})


// smtp.elasticemail.com
// D9DC1C962891D83E6AED12C948A2F3690D0C
// 2525
