const form_area = document.querySelector('#input-wrapper')

const submit = document.querySelector('#submitbtn')

const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    let password = document.querySelector('#password').value
    let confirm_pass = document.querySelector('#confirm').value
    const err = document.querySelector('#pass-error')
    if (password!== confirm_pass){
        err.style.display = 'block'
    } else {
        document.querySelector('form').submit()
    }

})

/*
submit.addEventListener('click', () =>{
    console.log(password.value)
    console.log(confirm_pass.value)
    if (password.textContent !== confirm_pass.textContent){
        let mismatch = document.createElement('span')
        mismatch.style.fontSize = '.2rem'
        mismatch.style.color = 'red'
        form_area.appendChild(mismatch)
        console.log('false')
    }
})
*/
