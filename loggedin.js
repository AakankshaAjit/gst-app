// varifing user logged in or not
function Verify(){

    if(localStorage.auth){
        window.location.href="/"
    }



}


Verify()
// this is login function
function submitMyForm()
{

  
    const myEmail = document.getElementById('mail').value
    const mypassword = document.getElementById('pass').value

    if(myEmail==="aakankshaajit851@gmail.com"&& mypassword==="aakanksha6910"){
        localStorage.setItem('auth',true)
        console.log('success')
        window.location.href="index.html"


    }

else{
alert('wrong credentials')
}



}



    


