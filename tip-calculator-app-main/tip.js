const buttonsDOM = document.querySelectorAll(`.percentBtns`)
const moneyAmount1 = document.querySelector(`.moneyAmount1`)
const moneyAmount2 = document.querySelector(`.moneyAmount2`)
const allInputsDOM = document.querySelectorAll(`.changeInput`)
const resetBtn = document.querySelector(`.resetBtn`)
const customBtn = document.querySelector(`.customBtn`)

/////////////////////////////////////
let bill=0;
let tip = 10
 let numberOfPeople = 1
 bill= allInputsDOM[0].value ;
  tip= allInputsDOM[1].value;
 numberOfPeople= allInputsDOM[2].value;

///////////////////////////
buttonsDOM.forEach( button =>{
    button.addEventListener(`click`,tipAmountFunc)
})


function tipAmountFunc (event,currentTarget) {
    currentTarget=event.target
    tip = 10
    buttonsDOM.forEach( button =>{
        button.classList.remove(`active`)
       /*  console.log(currentTarget.innerHTML);
        console.log(button.innerHTML); */
        console.log(customBtn.value);
        if(currentTarget.innerHTML === button.innerHTML  ) {
            button.classList.add(`active`)
            tip =parseInt(button.innerHTML.slice(0,-1))
            
        }
    })
    console.log(tip);
    keyupFunc()
}


////////////////////


    allInputsDOM.forEach(
        (item) =>{
        item.addEventListener(`keyup`,  keyupFunc) })

            function keyupFunc (event) {
                bill = parseFloat( allInputsDOM[0].value);
                console.log(bill);

              if(bill < 1){
                event.preventDefault();

              }
          
          
            numberOfPeople = parseFloat( allInputsDOM[2].value);
        
      
            console.log(bill,tip,numberOfPeople);
           if(tip){
            let amount1=parseFloat((((bill/100*tip).toFixed(1))/numberOfPeople).toFixed(1))
            console.log(amount1);
          let amount2=amount1+bill
               console.log(amount1,amount2);
               console.log( bill,tip,numberOfPeople);
        moneyAmount1.innerHTML = `$${amount1}` 
        moneyAmount2.innerHTML = `$${amount2}`
        }
        else{
            moneyAmount1.innerHTML = `$0.00` 
            moneyAmount2.innerHTML = `$0.00`
        }
        if(!bill){
            moneyAmount1.innerHTML = `$0.00` 
            moneyAmount2.innerHTML = `$0.00`
        }
            
         
    }

resetBtn.addEventListener(`click`,function () {
    moneyAmount1.innerHTML = `$0.00` 
    moneyAmount2.innerHTML = `$0.00`
    
    allInputsDOM[0].value = ` `
    allInputsDOM[1].value = ` `
    allInputsDOM[2].value = 1

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
        bill = 0
        keyupFunc()
})

