const form = document.querySelector('.form'),
    fullName = form.querySelector('#fullname'),
    email = form.querySelector('#email'),
    password = form.querySelector('#password'),
    confirmPassword = form.querySelector('#confirmPassword');


    const addErr = (elem ,text) => {
        const after = document.createElement('span');
            after.classList.add('validError');
            after.textContent = text
        
            elem.before(after);
    };

const validInput = (type, elem, twoElem = null) => {
    switch (type) {
        case 'fullname':
            if(elem.value.length >= 3 ){
                return true;
                
             } else if (elem.value === ''){
                addErr(elem,'Введите Имя')
                return false
             }else {
                addErr(elem, 'Минимум 3 быквы');
                return false;
                
             }   
        case 'email':
            if(elem.value.includes('@')) {
                return true;
            } else if (elem.value === ''){
                addErr(elem,'Введите email')
                return false;
            } else {
                addErr(elem,'Некоректный email')
                return false;
            }

        case 'comperePass':   
                 if (elem.value.length == 0 || elem.value.length < 5){
                    addErr(elem, 'Пароль должен быть больше 5 цифр' )
                    return false;
                } else if(!(elem.value === twoElem.value))  {
                    addErr(twoElem, 'Пароли не совпадают' )
                    return false;
                } else {
                    return true 
                }   
    }   
}





form.addEventListener('submit', e => {
    e.preventDefault();
    const err = document.querySelectorAll('.validError')
    if(err) {
        err.forEach(item => {
            item.remove();
        })
    }

    if(validInput('fullname', fullName) && validInput('email', email) && validInput('comperePass', password, confirmPassword)){
        const user = {
            fulname: fullName.value,
            email: email.value,
            password: password.value
        }

        console.log(user);
        form.reset();
    }
})