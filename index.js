const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validEmail = false;
let validPhone = false;
let validName = false;

name.addEventListener('blur' , () =>{
    console.log("name is blurred");

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex , str);
    if(regex.test(str))                   // regex.test to check the value in str  if it is equal then it is correct
    {
        console.log('Your Name is valid');
        name.classList.remove('is-invalid');
        validName = true;
    }
    else{
        console.log('Your name is not valid')
        name.classList.add('is-invalid');
        validName = false;

    }
});

email.addEventListener('blur' , () =>{
    console.log("email is blurred");

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex , str);
    if(regex.test(str))                   // regex.test to check the value in str  if it is equal then it is correct
    {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid')
        email.classList.add('is-invalid');
        validEmail = false;

    }
});

phone.addEventListener('blur' , () =>{
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex , str);
    if(regex.test(str))                   // regex.test to check the value in str  if it is equal then it is correct
    {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid')
        phone.classList.add('is-invalid');
        validPhone = false;

    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click' , (e)=>{
    e.preventDefault();
    console.log("you Clicked");
    console.log(validEmail , validName , validPhone);

    if(validEmail && validPhone && validName)
    {
        // let failure = document.getElementById('failure');
        // console.log('phone , email and user are valid . submitting the form');
        // let success = document.getElementById('success');
        // success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        // $('#failure').hide();
        // $('#success').show();
        alert("Your form is submitting");
    }
    else
    {
        // console.log('One of Phone , email and user are not valid . Hence not submitting the form');
        // let failure = document.getElementById('failure');
        // failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        // $('#success').hide();
        // $('#failure').show();
        alert("You cant submit form due to unappropriate form")
    }
})