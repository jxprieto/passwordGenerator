const $ = (id)=> document.getElementById(id)

document.addEventListener('DOMContentLoaded', () => {

    let timeoutId;
    const passwordField = $('password');
    const generateBtn = $('generate-btn');
    const copyBtn = $('copy-btn');

    const generatePassword = () => {
        const length = 12;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let password = '';
        for (let i = 0; i < length; ++i)
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        passwordField.value = password;
        if(timeoutId){
            clearTimeout(timeoutId);
            copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        }
    }

    const copyPassword = () => {
        passwordField.select();
        if (passwordField.value){
            navigator.clipboard.
                writeText(passwordField.value)
                .then(() => {
                    copyBtn.innerHTML = '<i class="fas fa-check"></i>'
                    if (timeoutId) clearTimeout(timeoutId);
                    timeoutId = setTimeout(()=> {copyBtn.innerHTML = '<i class="fas fa-copy"></i>';timeoutId = null;}, 2000);
                })
        }
    }

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);
})