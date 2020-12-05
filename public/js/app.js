const message1 = document.querySelector('#message-1')
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    message1.textContent = 'Loading..'
    const password =  document.getElementById('pwd').value
    const conformPassword = document.getElementById('conpwd').value
    if(password != conformPassword){
        message1.textContent = 'password not matching..'
    }else{
        const name  = document.getElementById('name').value
    
        const mobilenumber = document.getElementById('mbno').value
        message1.textContent = 'good you are loged in '
        window.location.href = `/home?name=${name}&password=${password}&mobile=${mobilenumber}`
    }

    
    
    
    
    
})