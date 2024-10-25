

const pass = document.getElementById('password');
const msg = document.getElementById('message');
const str = document.getElementById('strength');



pass.addEventListener('input', ()=>{
    if(pass.value.length = ''){
        msg.style.display= 'block';
     }
    else if(pass.value.length < 4) {
        msg.style.display='block';
        str.innerHTML = 'weak';
        pass.style.borderColor = 'red';
        msg.style.color = 'red';
    };
    if (pass.value.length >= 4 && pass.value.length < 8 ){
        msg.style.display='block';
        str.innerHTML = 'medium';
        pass.style.borderColor = 'yellow';
        msg.style.color = 'yellow';
    };
     if (pass.value.length > 8 ){
        msg.style.display='block';
        str.innerHTML = 'strong';
        pass.style.borderColor = 'green';
        msg.style.color = 'green';
    };
    
})