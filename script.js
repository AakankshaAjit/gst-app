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

 

