
let  baseurl="https://open.er-api.com/v6/latest/USD";
const dropdow=document.querySelectorAll(".dropdown select")
const button = document.querySelector("form button");
const fromcurr = document.querySelector("select[name='from']");
const tocurr = document.querySelector("select[name='to']");
const msg=document.querySelector(".msg")

for(let select of dropdow){
    for(currcode in countryList){
let newoption=document.createElement("option")
newoption.innerText=currcode;
newoption.value=currcode;
if(select.name==="from"&& currcode==="USD"){
newoption.selected="selected"
} 
else if(select.name==="to"&& currcode==="INR"){
    newoption.selected="selected"
}
select.append(newoption)
}
select.addEventListener("change",(event)=>{
    updateflag(event.target)
})
}
const updateflag=(element)=>{
let currcode=element.value
let currencycode=countryList[currcode]
let newsrc=`https://flagsapi.com/${currencycode}/flat/64.png`
let img= element.parentElement.querySelector("img")
img.src=newsrc;
}
button.addEventListener("click",async(event)=>{
event.preventDefault();
let amount=document.querySelector("#amount ");
let amountvalue=amount.value
if (!amountvalue || amountvalue < 1){
    amountvalue=1,
    amount.value="1"
}
 try {
    let response = await fetch(baseurl);
    let data = await response.json();
    let rate = data.rates[tocurr.value];
    let convertedAmount = (amountvalue * rate).toFixed(2);
    console.log(`${amountvalue} ${fromcurr.value} = ${convertedAmount} ${tocurr.value}`);
    msg.innerText= `${amountvalue} ${fromcurr.value} = ${convertedAmount} ${tocurr.value}`;

  } catch (error) {
    console.error("Error fetching data:", error);
  }
});


