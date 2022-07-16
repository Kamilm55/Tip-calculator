const buttonsDOM = document.querySelectorAll(`.percentBtns`)
const moneyAmount1 = document.querySelector(`.moneyAmount1`)
const moneyAmount2 = document.querySelector(`.moneyAmount2`)
const allInputsDOM = document.querySelectorAll(`.changeInput`)
const resetBtn = document.querySelector(`.resetBtn`)
const customBtn = document.querySelector(`.customBtn`)
const percent10 = document.querySelector(`.percent10`)

let bill=0;
let tip=10;
let numberOfPeople=1
/////////////////////

/* if(allInputsDOM[2].includes(`.`) ||  allInputsDOM[2].includes(`,`)){
    console.log(`salam`);
} */
console.log(allInputsDOM[2].value);

////////////////////////////
allInputsDOM.forEach(
    input =>{
        [`change`,`keyup`].forEach(event =>{
            input.addEventListener(event , inputFunc)
        })
        }  
)
    function inputFunc( event ){
      if(allInputsDOM[0].value){
       bill=parseFloat(allInputsDOM[0].value)
      }
      else{
        bill = 0
      }
      if(allInputsDOM[2].value){
        numberOfPeople =parseFloat(allInputsDOM[2].value)
      }
      else{
        numberOfPeople=1
      }
       
       /*  if( event.key ==`-` || event.key ==`+` ){
            allInputsDOM[0].value =  ` `
        } */
        console.log(bill,tip,numberOfPeople);
        calculationlogic()
    }
///////////////////////////    
[`change`,`keyup`].forEach(
    event =>{
        customBtn.addEventListener(event,function () {
            buttonsDOM.forEach( button =>{
                button.classList.remove(`active`)
                }
                )

                tip =parseFloat(allInputsDOM[1].value) 
                console.log(tip);
                console.log(allInputsDOM[1].value);
                
                if(allInputsDOM[1].value==``){
                    tip=10
                    console.log(tip);
                    percent10.classList.add(`active`)
                }
                else{
                    console.log(bill,tip);
                    calculationlogic()
                }
        } )
        
    }
)
////////////////////////
buttonsDOM.forEach( button =>{
    button.addEventListener(`click`,tipAmountFunc)
})


function tipAmountFunc (event,currentTarget) {
    currentTarget=event.target
    
    buttonsDOM.forEach( button =>{
        button.classList.remove(`active`)
       /*  console.log(currentTarget.innerHTML);
        console.log(button.innerHTML); */
       customBtn.value=``
        if(currentTarget.innerHTML === button.innerHTML  ) {
            button.classList.add(`active`)
            tip =parseInt(button.innerHTML.slice(0,-1))
            
        }
    })
    console.log(tip);
    calculationlogic()
}

/////////////////////////////////
function calculationlogic (amount1,amount2) {
    amount1=((bill/100*tip).toFixed(1)/numberOfPeople).toFixed(2)
    amount2=bill + parseFloat(amount1)
    amount2=amount2.toFixed(2)
        moneyAmount1.innerHTML = `$${amount1}` 
        moneyAmount2.innerHTML = `$${amount2}`
 }
 //////
 
resetBtn.addEventListener(`click`,function () {
    moneyAmount1.innerHTML = `$0.00` 
    moneyAmount2.innerHTML = `$0.00`
    
    allInputsDOM[0].value = ` `
    allInputsDOM[1].value = ` `
    allInputsDOM[2].value = 1
    bill=0
    tip=10
    numberOfPeople=1

    buttonsDOM.forEach(
        item =>{
            if(!(item.innerHTML===`10%`)){
                item.classList.remove(`active`)
            }
            else{
                item.classList.add(`active`)
            }
        }
        )   
})
