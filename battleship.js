var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1; 
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk == false){

	guess = prompt("Привет! Это морской бой в одну строчку. В 7 ячейках по горизонтали от 0 до 6 расположен трехпалубный корабль. Твоя задача потопить его за меньшее кол-во попыток. Если ты готов выстрелить, то набери любое число от 0 до 6.");
		if (guess < 0 || guess > 6){
		alert("Введи значени от 0 до 6 :)");
	} else {
		guesses = guesses + 1;

			if(guess == location1 || guess == location2 || guess == location3){
				alert("Ты попал");
				hits = hits + 1;
				
					if (hits == 3){
						isSunk = true;
							alert("Корабль потоплен. Молодец! :)");
					}
			} else {
				alert("Ты промазал...");
			}
	}
}
var status = "Ты выстрелил " + guesses + " раз(а) для того, чтобы потопить корабль." +
 " Твой уровень точности равен: " + (3/guesses*100) + "%";
 alert(status);