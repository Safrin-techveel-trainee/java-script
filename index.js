const savebtn = document.getElementById('btn1');
const clrbtn = document.getElementById('btn2');
const errorMessage=document.getElementById('error-message');
clrbtn.addEventListener('click',()=>{
    document.getElementById('name').value=''
    document.getElementById('email').value=''
    document.getElementById('telephone').value=''
    document.getElementById('city').value=''
    document.getElementById('state').value=''
    document.getElementById('address').value=''
    document.getElementById('pincode').value=''
    // document.getElementById('name-error').value=''
    // document.getElementById('email-error').value=''
    // document.getElementById('telephone-error').value=''
    // document.getElementById('address-error').value=''
    // document.getElementById('city-error').value=''
    // document.getElementById('state-error').value=''
    // document.getElementById('pincode-error').value=''
})
savebtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('telephone').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const address = document.getElementById('address').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const nameerror=document.getElementById('name-error');
    const emailerror=document.getElementById('email-error');
    const phoneerror=document.getElementById('telephone-error');
    const cityerror=document.getElementById('address-error');
    const stateerror=document.getElementById('city-error');
    const addresserror=document.getElementById('state-error');
    const pincodeerror=document.getElementById('pincode-error');
    
   

     if (name === '') {
         nameerror.innerHTML= 'Please enter your name.\n';
     }

     if (email === '') {
         emailerror.innerHTML= 'Please enter your email.\n';
     } else if (!validateEmail(email)) {
         emailerror.innerHTML= 'Please enter a valid email.\n';
     }

     if (phone === '') {
         phoneerror.innerHTML= 'Please enter your phone number.\n';
     } else if (!validatePhone(phone)) {
         phoneerror.innerHTML= 'Please enter a valid phone number.\n';
     }

     if (city === '') {
         cityerror.innerHTML = 'Please enter your city.\n';
     }
     if (state === '') {
         stateerror.innerHTML = 'Please enter your state.\n';
     }
     if (address === '') {
         addresserror.innerHTML= 'Please enter your address.\n';
     }
     if (pincode === '') {
        pincodeerror.innerHTML = 'Please enter your pincode.\n';
    }   
})
