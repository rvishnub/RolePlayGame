function Person(name){
	this.name = name;
	this.tool = "";
	this.gold = 0;
	this.health = 90;
	}
	
	var person = new Person("Sir Jon");
	person.name = "Sir Jon";
	person.tool = "sword";
	person.gold = 0;
	person.health = 90;
	
	
	var person = new Person("Attorney Jimmy");
	person.name = "Attorney Jimmy";
	person.tool = "voice";
	person.gold = 300;
	person.health = 90;

	
	var person = new Person("Scuba Larry");
	person.name = "Scuba Larry";
	person.tool = "tank";
	person.gold = 0;
	person.health = 90;
	
	
Person.prototype.getName = function(){
		return person.name;
	}
	
Person.prototype.getTool = function(){
		return person.tool;
	}

Person.prototype.getGold = function(){
		var gold = person.gold;
		$("#gold").text(gold);
		document.getElementById("gold").innerHTML = this.gold;
	}
	
Person.prototype.getHealth = function(){
		var health = person.health;
		$("#health").text(health);
		document.getElementById("health").innerHTML = this.health;
	}
	
function setGain(number)
	{
		person.gold+=number;
	}
	
function setLoss() 
	{
		person.health-=10;
	}
	

function getDecision(id) {
    var x = document.getElementById(id).value;
	if (x == "first")
	{
		setGain(30);
	}if (x == "second")
	{
		setGain(15);
	}

	if (x == "third")
	{
		setGain(10);
	}
		if (x == "fourth")
	{
		setGain(5);
	}
	return this.gold;
}
	
	function getDecisionHealth(id) {
    var x = document.getElementById(id).value;
	this.health -=10;
	return this.health;
}

function UpdateGold()
{
	document.getElementById("score").innerHTML = person.gold;
}

function UpdateHealth()
{
	document.getElementById("health").innerHTML = person.health;
}

function GetFinalScore()
{
	person["finalScore"] = person.gold * person.health + 1004;
}

function page00Button(){
	if (document.getElementById("radio-1").checked) {
		var person = new Person("Sir Jon");
	}
	if (document.getElementById("radio-2").checked) {
		var person = new Person("Attorney Jimmy");
		person.gold = 300;
	}
	if (document.getElementById("radio-3").checked) {
		var person = new Person("Scuba Larry");
	}
	var value = person.name;
	var scoreDisplay = person.gold;
	var healthDisplay = person.health;
	document.getElementById("player").innerHTML = value;
	document.getElementById("score").innerHTML = scoreDisplay;
	document.getElementById("health").innerHTML = healthDisplay;
	document.getElementById("playerData").style.display = "block";
	document.getElementById("page00").style.display = "none";
	document.getElementById("page01").style.display = "block";
}
			
function page01Button(health, score){
	var value = 0;
	if (document.getElementById("radio-5").checked) {
		value = document.getElementById("radio-5").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-6").checked) {
		value = document.getElementById("radio-6").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-7").checked) {
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-8").checked) {
		value = document.getElementById("radio-8").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	person.health -=Math.ceil(Math.random()*10);
	document.getElementById("score").innerHTML = person.gold;
	document.getElementById("health").innerHTML = person.health;
	document.getElementById("page01").style.display = "none";
	document.getElementById("page02").style.display = "block";
}

function page02Button(health, score)
{
	var value = 0;
	if (document.getElementById("radio-9").checked) {
		value = document.getElementById("radio-9").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-10").checked) {
		value = document.getElementById("radio-10").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-11").checked) {
		value = document.getElementById("radio-11").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-12").checked) {
		value = document.getElementById("radio-12").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	person.health -=Math.ceil(Math.random()*10);
	document.getElementById("score").innerHTML = person.gold;
	document.getElementById("health").innerHTML = person.health;
	document.getElementById("page02").style.display = "none";
	document.getElementById("page03").style.display = "block";
}

function page03Button(health, score)
{
	var value = 0;
	if (document.getElementById("radio-13").checked) {
		value = document.getElementById("radio-13").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-14").checked) {
		value = document.getElementById("radio-14").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-15").checked) {
		value = document.getElementById("radio-15").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-16").checked) {
		value = document.getElementById("radio-16").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	person.health -=Math.ceil(Math.random()*10);
	document.getElementById("score").innerHTML = person.gold;
	document.getElementById("health").innerHTML = person.health;
	document.getElementById("page03").style.display = "none";
	document.getElementById("page04").style.display = "block";
}

function page04Button(health, score)
{
	var value = 0;
	if (document.getElementById("radio-17").checked) {
		value = document.getElementById("radio-17").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-17").checked) {
		value = document.getElementById("radio-17").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-18").checked) {
		value = document.getElementById("radio-18").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-19").checked) {
		value = document.getElementById("radio-19").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	person.health -=Math.ceil(Math.random()*10);
	document.getElementById("score").innerHTML = person.gold;
	document.getElementById("health").innerHTML = person.health;
	document.getElementById("page04").style.display = "none";
	document.getElementById("page05").style.display = "block";
}

function page05Button(health, score)
{
	var value = 0;
	if (document.getElementById("radio-21").checked) {
		value = document.getElementById("radio-20").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-22").checked) {
		value = document.getElementById("radio-22").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-23").checked) {
		value = document.getElementById("radio-23").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-24").checked) {
		value = document.getElementById("radio-24").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	person.health -=Math.ceil(Math.random()*10);
	document.getElementById("score").innerHTML = person.gold;
	document.getElementById("health").innerHTML = person.health;
	document.getElementById("page05").style.display = "none";
	document.getElementById("page06").style.display = "block";
}

function page06Button(health, score)
{
	var value = 0;
	if (document.getElementById("radio-25").checked) {
		value = document.getElementById("radio-25").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-26").checked) {
		value = document.getElementById("radio-26").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-27").checked) {
		value = document.getElementById("radio-27").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-28").checked) {
		value = document.getElementById("radio-28").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	person.health -=Math.ceil(Math.random()*10);
	document.getElementById("score").innerHTML = person.gold;
	document.getElementById("health").innerHTML = person.health;
	document.getElementById("page06").style.display = "none";
	document.getElementById("page07").style.display = "block";
}

function page07Button(health, score)
{
	var value = 0;
	if (document.getElementById("radio-29").checked) {
		value = document.getElementById("radio-29").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-30").checked) {
		value = document.getElementById("radio-30").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-31").checked) {
		value = document.getElementById("radio-31").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-32").checked) {
		value = document.getElementById("radio-32").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	person.health -=Math.ceil(Math.random()*10);
	document.getElementById("score").innerHTML = person.gold;
	document.getElementById("health").innerHTML = person.health;
	document.getElementById("page07").style.display = "none";
	document.getElementById("page08").style.display = "block";
}

function page08Button(health, score)
{
	var value = 0;
	if (document.getElementById("radio-33").checked) {
		value = document.getElementById("radio-33").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-34").checked) {
		value = document.getElementById("radio-34").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-35").checked) {
		value = document.getElementById("radio-35").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	if (document.getElementById("radio-36").checked) {
		value = document.getElementById("radio-36").value;
		person.gold+=(parseInt(value)+Math.ceil(Math.random()*10));
	}
	person.health -=Math.ceil(Math.random()*10);
	document.getElementById("score").innerHTML = person.gold;
	document.getElementById("health").innerHTML = person.health;
	document.getElementById("page08").style.display = "none";
	document.getElementById("page09").style.display = "block";
}

function page09Button(health, score)
{
	document.getElementById("final score").innerHTML = GetFinalScore.call(person);
	document.getElementById("page09").style.display = "none";
}


	
	
	
	
	
	
	