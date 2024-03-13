var log = console.log.bind(console);


//START Team Add row button
//Original copy of "add row on click"
var maxFieldRow = 10; //Input fields increment limitation
var fieldCounter = 2; //not the same as y, dont mess with y
$(document).ready(function(){
       
        var addButtonTeam = $('.add_buttonTeam'); //Add button selector
        var wrapper = $('.field_wrapper'); //Input field wrapper
        var y = 2;
        var x = 3; //Initial field counter is 1
        
        var labelHTML = "";
        var fieldHTML = "";
		var tagHTML = "";
        
        $(addButtonTeam).click(function(){ //Once add button is clicked
            if(x < maxFieldRow){ //Check maximum number of input fields
                //labelHTML = '<label for="inputEmail' + x + '" class="col-md-4 control-label">' + '</label>';
               // fieldHTML = '<div class="col-md-6"><input id="inputEmail' + x + '" type="text" name="field_name[]" value=""/><a href="javascript:void(0);" class="remove_button" title="Remove field"><img src="remove-icon.png"/></a></div>'; //New input field html 
				fieldHTML = '<input type="text" id="Player1.'+ x + '" placeholder= "Player name" class="playerNameInput" maxlength="30">   ';
				tagHTML ='<input type="text" id="Player2.'+ x + '" placeholder= "Player name" class="playerNameInput" maxlength="30">   <br>';

                x++; //Increment field counter
                $(wrapper).append(labelHTML, fieldHTML,tagHTML); // Add field html
                y++;
				fieldCounter++;
            }
        });
        $(wrapper).on('click', '.remove_button', function(e){ //Once remove button is clicked
            e.preventDefault();
            $(this).parent('div').prev().remove(); //Remove previous field html
            $(this).parent('div').remove(); //Remove field html
            x--; //Decrement field counter
        });
    });
//END Team Add row button
/************************************************************************************************************************************/


//Hide both divs
var DIVsingle = document.getElementById("DIVsingle");
var DIVteam = document.getElementById("DIVteam");

//DIVteam.style.display = "none";
DIVsingle.style.display = "none";

function DisplayTeamDiv() {
  var x = document.getElementById("DIVteam");
  if (DIVsingle.style.display === "block") { //removes DIVsingle, when DIVteam is clicked
    DIVsingle.style.display = "none";
  }
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
	DIVsingle.style.display = "none";
  }
}

function DisplaySingleDiv() {
  var x = document.getElementById("DIVsingle");
  if (DIVteam.style.display === "block") { //removes DIVteam, when DIVteam is clicked
    DIVteam.style.display = "none";
  }
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
	//DIVteam.style.display = "block";
  }
}

var team1 = [];
var team2 = [];

function StartBtn(){

	var i;
	for (i = 1; i <=fieldCounter; i++) {
	//log("Player1."+i);

	var playerUNO = document.getElementById("Player1."+i).value;
	var playerDOS = document.getElementById("Player2."+i).value;

	team1.push(playerUNO);
	team2.push(playerDOS);
	
	team1 = team1.filter(Boolean);//Removes empty elements from an array
	team2 = team2.filter(Boolean);//Removes empty elements from an array

	}
	
	log(team1);
	log(team2);
	
}

//Checks how many input fields for Team name are occupied
function TeamFieldFilledCounter(){
	
	for (i = 0; i <= fieldCounter; i++) {
	
	//if(){}

	}
	
}


/************************************************************************************************************************************/


