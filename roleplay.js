	function Person(name){
	this.name = name;
	this.tool = tool;
	this.gold = gold;
	this.health = health;}
	
	var knight = new Person();
	knight.name = "Sir Jon";
	knight.tool = "sword";
	knight.gold = 0;
	knight.health = 100;
	
	
	var attorney = new Person();
	attorney.name = "Attorney Jimmy";
	attorney.tool = "voice";
	attorney.gold = 300;
	attorney.health = 100;

	
	var diver = new Person();
	diver.name = "Scuba Larry";
	diver.tool = "tank";
	diver.gold = 0;
	diver.health = 100;
	
	
	Person.prototype.getName = function(){
		return this.name;
	}
	
	Person.prototype.getTool = function(){
		return this.tool;
	}

	Person.prototype.getGold = function(){
		return this.gold;
	}
	
	Person.prototype.getHealth = function(){
		return this.health;
	}
	
	function Person(){
		setGain(() => {this.gold+=5});
	}
	
	function Person(){
		setLoss(() => {this.health+=10});
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
	
	

	
	
	
	
	
	
	
	
	
	
	
	