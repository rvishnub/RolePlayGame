	function Person(name){
	this.name = name;
	this.tool = tool;
	this.gold = gold;
	this.health = health;}
	
	var person = new Person("Sir Jon");
	person.name = "Sir Jon";
	person.tool = "sword";
	person.gold = 0;
	person.health = 100;
	
	
	var person = new Person("Attorney Jimmy");
	person.name = "Attorney Jimmy";
	person.tool = "voice";
	person.gold = 300;
	person.health = 100;

	
	var person = new Person("Scuba Larry");
	person.name = "Scuba Larry";
	person.tool = "tank";
	person.gold = 0;
	person.health = 100;
	
	
	Person.prototype.getName = function(){
		return this.name;
	}
	
	Person.prototype.getTool = function(){
		return this.tool;
	}

	Person.prototype.getGold = function(){
		var gold = this.gold;
		$("#gold").text(gold);
		document.getElementById("gold").innerHTML = this.gold;
	}
	
	Person.prototype.getHealth = function(){
		var health = this.health;
		$("#health").text(health);
		document.getElementById("health").innerHTML = this.health;
	}
	
	function setGain(number)
	{
		this.gold+=number;
	}
	
	function setLoss() 
	{
		this.health-=10;
	}
	
  $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );
	
	function myStop1() {

	document.getElementById("stop1").style.display = "block";

	document.getElementById("stop2").style.display = "none";

	}
	
	function myStop2() {

	document.getElementById("stop1").style.display = "none";

	document.getElementById("stop2").style.display = "block";

	}
	
	function ShowDiv(id) {
    document.getElementById(id).style.display = "";
}
	function mySetPlayer() {
    var x = document.getElementById("radio-player").value;
	if (x == "knight")
	{
		var knight = new Person();
	}
	if (x == "attorney")
	{
		var attorney = new Person();
	}
	if (x == "diver")
	{
		var diver = new Person();
	}
		if (x == "quit")
	{
		close.Window();
	}

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
	document.getElementById("gold").innerHTML = this.gold;
}

	
	
	
	
	
	
	
	
	
	
	
	