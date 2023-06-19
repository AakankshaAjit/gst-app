
// this is gst calculation function
function GSt(){
    const price = document.getElementById('price').value
    const Gst   = document.getElementById('percentage').value
const ActualPrice = Number(price)
const ActualPercent = Number(Gst)
console.log(ActualPercent, ActualPrice)
const singlepercent = ActualPrice/100
const GSTamount      =singlepercent*ActualPercent
const totalprice           =GSTamount+ActualPrice
console.log(totalprice)
document.getElementById('totalprice').innerText=totalprice

    



}

// this is Discount calculation function
function Discount(){
    const price = document.getElementById('price').value
    const Gst   = document.getElementById('percentage').value
const ActualPrice = Number(price)
const ActualPercent = Number(Gst)
console.log(ActualPercent, ActualPrice)
const singlepercent = ActualPrice/100
const DiscountAmount      =singlepercent*ActualPercent
const totalprice       =ActualPercent-ActualPrice
console.log(totalprice )
document.getElementById('totalprice').innerText=Math.abs(totalprice)

    





}
 


    

// varifing user logged in or not
function Verify(){

    if(!localStorage.auth){
    window.location.href="login.html"
    }



}

//remove logout
function logout()
{
    localStorage.removeItem('auth')
    window.location.href="login.html"
}