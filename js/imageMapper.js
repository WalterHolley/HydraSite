"use strict";
/*
   Warrior Image Script
   Author: Jennifer Putnam
   Date: 5/3/2022
*/

// Insert User Character image for corresponding move

function imageMap(move) {
	var mapNum = 0;
	var imgStr = "";
	switch(move) {
		case 1: mapNum = 1;
				break;
		case 2: mapNum = 3;
				break;
	}

	imgStr = "img/battle_hydra"+ mapNum +".png";
	document.getElementById("playerImage").src = imgStr;
}
