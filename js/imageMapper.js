"use strict";
/*
   Warrior Image Script
   Author: Jennifer Putnam
   Date: 5/3/2022
*/

// Insert User Character image for corresponding move

function imageMap(move) {
	var mapNum = 0;
	switch(move) {
		case 1: mapNum = 1;
				imgStr = "<img src='img/battle_hydra"+ mapNum +".png' />";
				document.getElementById("inputDiv").insertAdjacentHTML("afterBegin", imgStr);
				break;
		case 2: mapNum = 3;
				imgStr = "<img src='img/battle_hydra"+ mapNum +".png' />";
				document.getElementById("inputDiv").insertAdjacentHTML("afterBegin", imgStr);
				break;
	}
}
