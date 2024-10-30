const hamsterBTN = document.querySelector(".playarea__clicker");
const counterEl = document.querySelector(".counter__current");
const powerupsE1 = document.querySelector(".powerups");


let counter = 90000;

// let counter = +localStorage.getItem("score");

counterEl.innerHTML = counter;

let click = 1;

const powerups = [
    {title: "уничтожить . .",
        price: function(){
            return calcPrice.call(this)
        },
        initialPrice: 100,
        amount: 0,
        profit: 0,
        value: 1,
        coef: 1.1,
        onclick: true
    },
    {
        title: "pukpuk",
        price: function(){
            return calcPrice.call(this)
        },
        initialPrice: 200,
        amount: 0,
        profit: 0,
        value: 2,
        coef: 1.2
    },
    {
        title: "кокнуть . .",
        price: function(){
            return calcPrice.call(this)
        },
        initialPrice: 400,
        amount: 0,
        profit: 0,
        value: 3,
        coef: 1.3
    },
    {
        title: "арбуз арбуз . . .",
        price: function(){
            return calcPrice.call(this)
        },
        initialPrice: 600,
        amount: 0,
        profit: 0,
        value: 4,
        coef: 1.4,
        onclick: true
    },
    {
        title: "слей",
        price: function(){
            return calcPrice.call(this)
        },
        initialPrice: 800,
        amount: 0,
        profit: 0,
        value: 5,
        coef: 1.5
    },
    {
        title: "я в шоке",
        price: function(){
            return calcPrice.call(this)
        },
        initialPrice: 700,
        amount: 0,
        profit: 0,
        value: 7,
        coef: 1.6
    }
];

function calcPrice (){
    if(this.amount <= 0){
        return this.initialPrice;
    } else if (this.amount >= 1){
        return Math.round(this.initialPrice + (this.initialPrice / this.coef )* this.amount 
        );  
    }  
}


`power1.addEventListener("click", () =>{
 
   click+= 1
})`

hamsterBTN.addEventListener("click", () =>{
    counter += click
    counterEl.innerHTML = counter
});

setInterval(() => {
    powerups.forEach((el) => (el.profit = el.amount * el.value));
    const profitPersec =  powerups.reduce((acc, val) => (val.onclick ? acc : acc + val.profit, 0))
    
    localStorage.setItem("score", counter);
},1000);

const generatePowerUp = (powerup) =>{
    return `
        <div class="powerup">
        <div class="powerup__title">${powerup.title}</div>
        <div class="powerup__price">${powerup.price()}</div>
        <div class="powerup__amount">${powerup.amount}</div>
        <div class="profit">
        <span class="profit__value">${powerup.profit}</span>
        <span class="profit__desc">/ s</span>
        </div>
</div>`;
};

const handleClick = (e) => {
   const clickedPowerup = e.target.closest(".powerup").querySelector(".powerup__title").innerHTML
   const selectedPowerup = powerups.find((e) => clickedPowerup === e.title);
   buyPowerup(selectedPowerup)
};

const buyPowerup = (powerup) => {
    console.log(powerup.price())
    if(counter >= powerup.price()){
      counter -=powerup.price();
      powerup.amount++ ; 
      renderPowerups();
      counterEl.innerHTML = counter;
    } else{
        alert("baby no money");
    }
}


const renderPowerups = () => {
    powerupsE1.innerHTML = powerups
    .map((powerup) => generatePowerUp(powerup))
    .join("");

    const powerupE1s = Array.from(powerupsE1.children);
    powerupE1s.forEach((el) => el.addEventListener("click", handleClick));
};

renderPowerups();



