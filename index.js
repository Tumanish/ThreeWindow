class Card {
	constructor(startMoney, r = 90, d = 1, e = 1.08) {
		this.rateR = r;
		this.rateD = d;
		this.rateE = e;

		this.startMoneyDollarPerMonth = startMoney;
		this.moneyDPerMonths = Math.round(startMoney * d);
		this.moneyRPerMonths = Math.round(startMoney * r);
		this.moneyEPerMonths = Math.round(startMoney * e);

		this.moneyDPerDay = Math.round(this.moneyDPerMonths / 30);
		this.moneyRPerDay = Math.round(this.moneyRPerMonths / 30);
		this.moneyEPerDay = Math.round(this.moneyEPerMonths / 30);

		this.timeD = "\/day";
		this.timeM = "\/months";
	}
}



function changeAllToRubPerMonth() {
	document.getElementById("card1-simbol").textContent = "₽";
	document.getElementById("card2-simbol").textContent = "₽";
	document.getElementById("card3-simbol").textContent = "₽";

	document.getElementById("card1-money").textContent = cardOneData.moneyRPerMonths;
	document.getElementById("card2-money").textContent = cardTwoData.moneyRPerMonths;
	document.getElementById("card3-money").textContent = cardThreeData.moneyRPerMonths;

	document.getElementById("card1-time").textContent = cardOneData.timeM;
	document.getElementById("card2-time").textContent = cardTwoData.timeM;
	document.getElementById("card3-time").textContent = cardThreeData.timeM;

}

function changeAllToDollarPerMonth() {
	document.getElementById("card1-simbol").textContent = "$";
	document.getElementById("card2-simbol").textContent = "$";
	document.getElementById("card3-simbol").textContent = "$";

	document.getElementById("card1-money").textContent = cardOneData.moneyDPerMonths;
	document.getElementById("card2-money").textContent = cardTwoData.moneyDPerMonths;
	document.getElementById("card3-money").textContent = cardThreeData.moneyDPerMonths;

	document.getElementById("card1-time").textContent = cardOneData.timeM;
	document.getElementById("card2-time").textContent = cardTwoData.timeM;
	document.getElementById("card3-time").textContent = cardThreeData.timeM;

}

function changeAllToEuroPerMonth() {
	document.getElementById("card1-simbol").textContent = "€";
	document.getElementById("card2-simbol").textContent = "€";
	document.getElementById("card3-simbol").textContent = "€";

	document.getElementById("card1-money").textContent = cardOneData.moneyEPerMonths;
	document.getElementById("card2-money").textContent = cardTwoData.moneyEPerMonths;
	document.getElementById("card3-money").textContent = cardThreeData.moneyEPerMonths;

	document.getElementById("card1-time").textContent = cardOneData.timeM;
	document.getElementById("card2-time").textContent = cardTwoData.timeM;
	document.getElementById("card3-time").textContent = cardThreeData.timeM;

}




function swithAllPerMonth(e) {
	// console.log(e.target.textContent);
	switch (e.target.textContent) {
		case "$":
			changeAllToRubPerMonth();
			break;
		case "₽":
			changeAllToEuroPerMonth();
			break;
		case "€":
			changeAllToDollarPerMonth();
			break;

	}
}


function changeAllByTime(currency, time) {
	if (time == "/day" && currency == "$") {
		document.getElementById("card1-money").textContent = cardOneData.moneyDPerDay;
		document.getElementById("card2-money").textContent = cardTwoData.moneyDPerDay;
		document.getElementById("card3-money").textContent = cardThreeData.moneyDPerDay;

		document.getElementById("card1-time").textContent = cardOneData.timeD;
		document.getElementById("card2-time").textContent = cardTwoData.timeD;
		document.getElementById("card3-time").textContent = cardThreeData.timeD;
	} else if (time == "/months" && currency == "$") {
		document.getElementById("card1-money").textContent = cardOneData.moneyDPerMonths;
		document.getElementById("card2-money").textContent = cardTwoData.moneyDPerMonths;
		document.getElementById("card3-money").textContent = cardThreeData.moneyDPerMonths;

		document.getElementById("card1-time").textContent = cardOneData.timeM;
		document.getElementById("card2-time").textContent = cardTwoData.timeM;
		document.getElementById("card3-time").textContent = cardThreeData.timeM;

	} else if (time == "/day" && currency == "₽") {
		document.getElementById("card1-money").textContent = cardOneData.moneyRPerDay;
		document.getElementById("card2-money").textContent = cardTwoData.moneyRPerDay;
		document.getElementById("card3-money").textContent = cardThreeData.moneyRPerDay;

		document.getElementById("card1-time").textContent = cardOneData.timeD;
		document.getElementById("card2-time").textContent = cardTwoData.timeD;
		document.getElementById("card3-time").textContent = cardThreeData.timeD;

	} else if (time == "/months" && currency == "₽") {
		document.getElementById("card1-money").textContent = cardOneData.moneyRPerMonths;
		document.getElementById("card2-money").textContent = cardTwoData.moneyRPerMonths;
		document.getElementById("card3-money").textContent = cardThreeData.moneyRPerMonths;

		document.getElementById("card1-time").textContent = cardOneData.timeM;
		document.getElementById("card2-time").textContent = cardTwoData.timeM;
		document.getElementById("card3-time").textContent = cardThreeData.timeM;
	} else if (time == "/day" && currency == "€") {
		document.getElementById("card1-money").textContent = cardOneData.moneyEPerDay;
		document.getElementById("card2-money").textContent = cardTwoData.moneyEPerDay;
		document.getElementById("card3-money").textContent = cardThreeData.moneyEPerDay;

		document.getElementById("card1-time").textContent = cardOneData.timeD;
		document.getElementById("card2-time").textContent = cardTwoData.timeD;
		document.getElementById("card3-time").textContent = cardThreeData.timeD;
	} else if (time == "/months" && currency == "€") {
		document.getElementById("card1-money").textContent = cardOneData.moneyEPerMonths;
		document.getElementById("card2-money").textContent = cardTwoData.moneyEPerMonths;
		document.getElementById("card3-money").textContent = cardThreeData.moneyEPerMonths;

		document.getElementById("card1-time").textContent = cardOneData.timeM;
		document.getElementById("card2-time").textContent = cardTwoData.timeM;
		document.getElementById("card3-time").textContent = cardThreeData.timeM;
	}

}



let cardOneData = new Card(30);
let cardTwoData = new Card(276);
let cardThreeData = new Card(420);


document.getElementById("card1-simbol").addEventListener("click", (e) => {
	swithAllPerMonth(e);
});
document.getElementById("card2-simbol").addEventListener("click", (e) => {
	swithAllPerMonth(e);
});
document.getElementById("card3-simbol").addEventListener("click", (e) => {
	swithAllPerMonth(e);
});


document.getElementById("card1-time").addEventListener("click", (e) => {
	e.target.textContent == "/day" ? changeAllByTime(e.target.parentElement.children[0].textContent, "/months") : changeAllByTime(e.target.parentElement.children[0].textContent, "/day");
});

document.getElementById("card2-time").addEventListener("click", (e) => {
	e.target.textContent == "/day" ? changeAllByTime(e.target.parentElement.children[0].textContent, "/months") : changeAllByTime(e.target.parentElement.children[0].textContent, "/day");
});

document.getElementById("card3-time").addEventListener("click", (e) => {
	e.target.textContent == "/day" ? changeAllByTime(e.target.parentElement.children[0].textContent, "/months") : changeAllByTime(e.target.parentElement.children[0].textContent, "/day");
});