const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdowns=document.querySelectorAll(".dropdown select")
const btn=document.querySelector("from button");
const fromCurr=document.querySelector(".from select");
const msg=document.querySelector(".msg");




for(let select of dropdowns){
    for(currCode in countryList){
      let newOption=document.createElement("option");
      newOption.innerText=currCode;
      if(select.name==="from" && currCode==="USD"){
        newOption.selected="selected"
      }
      else if(select.name==="to" && currCode==="INR"){
        newOption.selected="selected"
      }
      select.append(newOption);
    }


select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
}

const updateFlag=(element)=>{
  let currCode=element.value;
  let countryCode=countryList[currCode];
  let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
  let img=element.parentElement.querySelector("img");
  img.Scr=newSrc;
};


btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
    }
   
);


document.addEventListener("load",()=>{
    updateExchangeRate();
});


const updateExchangeRate=async()=>{
  let amount=document.querySelector(".amount input");
  let amtval=amount.value;
  if(amtVal===""  || amtVal<1){
    amtval=1;
    amount.value="1";
  }

  const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`;
  let responce=await fetch(URL);
  let data=await responce.json();
  let rate=data[toCurr.value.toLowerCase()];

  let finalAmount=amtVal*rate;
  msg.innerText=`${amtVal} ${fromCurr.value}=${finalAmount} ${toCurr.value}`;


};


