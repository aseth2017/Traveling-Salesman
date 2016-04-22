/**
Traveling Salesman
Anish Seth
3/5/16
*/
var dotx = [];
var doty = [];
$(document).ready( function(){
	$("#canvas").click( function() {
		var canvas = $("#canvas").get(0);
		var ctx = canvas.getContext("2d");
		var x = (event.pageX)-11;
		var y = (event.pageY)-155;
		dotx.push(x);
		doty.push(y);
		ctx.fillRect(x,y,6,6);
		
		dotx.push(x);
		doty.push(y);
		console.log(dotx);

	});
	$("#Nearest-Neighbor").click( function() {
		//Nearest Neighbor Heuristic
		var nearx = [];
		var neary = [];
		nearx.push(dotx[0]);
		neary.push(doty[0]);
		for(var i = 0; i < dotx.length; i++)
		{
			var nearest = 0;
			var value = 0;
			for(var c = 0; c < nearx.length; c++)
			{
				distance = distance(dotx[i],nearx[j],doty[i],neary[i]);
				closest = distance(dotx[i],nearx[nearest],dotx[i],neary[nearest]);
				if(distance < closest)
					nearest = distance;
					value = c;
			}
			dotx.splice(nearest,0,dotx[i]);
			doty.splice(nearest,0,doty[i]);
		}
		draw-line(nearx);
	});
	
	$("#Smallest-Increase").click( function() {
		//Smallest Increase Heuristic
		var smallx = [];
		var smally = [];
		smallx.push(dotx[0]);
		smally.push(doty[0]);
		draw-line(smallx);
	});
	function draw-line(array)
	{
			//Line drawing portion
		var canvas = $("#canvas").get(0);
		var ctx = canvas.getContext("2d");
		ctx.strokeStyle = "#0afec0";
		for(var i = 0; i< array.length; i++)
		{
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(300,150);
			ctx.stroke();
	}	
	function distance(x1, y1, x2, y2)
	{
		return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
	}