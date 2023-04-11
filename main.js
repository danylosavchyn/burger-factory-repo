$(document).ready(function(){
	$('.jsDetailsToggle').click(function(){
		$('.burger-details').toggle();
	});
});

/*
let burgers = [
	{
		id: 0,
		name: 'cheeseBurger',
		ingredients: [{id: 'bun, salad, meat(chicken, pork, beef), mega cheese, vegetables(tomato, cucumbers, onion)'}],
		weight: 200	,
		price: '1.5 $'
	},
	{
		id: 2,
		name: 'big burger',
		ingredients: [{id: 'bun, salad, mega meat(chicken, pork, beef), mega cheese, vegetables(tomato, cucumbers, onion)'}],
		weight: 500,
		price: '3 $'
	},
	{
		id: 3,
		id: 'pure bacon',
		ingredients: [{id: 'bun, salad, pure bacon, vegetables(tomato, cucumbers, onion)'}],
		weight: 200,
		price: '1.5 $'
	}
]

function getBurger(){
	const data = burgers.map(function(burger){
		return `
		<ul>
			${burger.ingredients.map(function(ingredient){
				return `<li>${ingredient.id}</li>`
			}).join('')}
		</ul>
		<p>weight: ${burger.weight}<br>
		price: ${burger.price} </p>
		
		`
	}).join('');
	return data;
}

showBurger = function(){
	document.getElementById('burger-details').innerHTML = getBurger()
}
showBurger()
*/


function makeOrder(){
	let cheeseBurger = 10;
	let bigBurger = 20;
	let pureBaconBurger = 40;

	let cheeseBurger_price = 2;
	let bigBurger_price = 3;
	let pureBaconBurger_price = 5;

	let order;
	let quantity;

	let cheeseBurger_result = 0, bigBurger_result = 0, pureBaconBurger_result = 0;

	do{
		order = prompt("зробити замовлення: 1 - cheese burger, 2 - bug burger, 3 - pure bacon burger, 4 - завершити замовлення");
			
		if(order == 1){
			quantity = Number(prompt("введіть кількість"));
				if(cheeseBurger >= quantity && cheeseBurger > 0){
					cheeseBurger_result += quantity;
					cheeseBurger -= quantity;
					alert(`cheese Burger, залишилось ${cheeseBurger}, у кошику ${cheeseBurger_result}`);
				}else{
					alert(`нажаль не має`);
				}	
		} else if(order == 2){
			quantity = Number(prompt('введіть кількість'));
			if(bigBurger >= quantity && bigBurger > 0){
				bigBurger_result += quantity;
				bigBurger -= quantity;
				alert(`big Burger, залишилось ${bigBurger}, у кошику ${bigBurger_result}`);
			}else{
				alert(`нажаль не має`);
			}
		} else if(order == 3){
			quantity = Number(prompt("введіть кількість"))
			if(pureBaconBurger >= quantity && pureBaconBurger > 0){
				pureBaconBurger_result += quantity;
				pureBaconBurger -= quantity;
				alert(`pure Bacon Burger, залишилось ${pureBaconBurger}, у кошику ${pureBaconBurger_result}`);
			}else{
				alert(`нажаль не має`);
			}
		} else if(order == 4){
			// add selected list of products to the order(додати вибраний список продуктів до замовлення)
			const totalPrice =
        	(cheeseBurger_result * cheeseBurger_price) +
        	(bigBurger_result * bigBurger_price) +
        	(pureBaconBurger_result * pureBaconBurger_price);

        	let totalPriceLabel = 'Ваше замовлення: ';
			if (cheeseBurger_result > 0) {
				totalPriceLabel += `\n Cheese burger: ${cheeseBurger_result}`;
			}
			if (bigBurger_result > 0) {
			    totalPriceLabel += `\n Big burger: ${bigBurger_result}`;
			}
			if (pureBaconBurger_result > 0) {
			    totalPriceLabel += `\n Pure bacon burger: ${pureBaconBurger_result}`;
			}
			totalPriceLabel += `\n Total price: ${ totalPrice }`

			alert(totalPriceLabel);
			alert("вільна каса");
			cheeseBurger_result = 0;
			bigBurger_result = 0;
			pureBaconBurger_result = 0;
			break;
		}
	}while(true)
}




