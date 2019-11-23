$(document).ready(function(){

	console.log('the doc is ready');
	
	$('#home').fadeIn(5000);
	$('#b1').fadeIn(10000);
	$('#b2').fadeIn(8000);
	$('#b3').fadeIn(5000);
	$('#b4').fadeIn(3000);
	
	$("#par1").mouseover(function(){
		document.getElementById("par1").innerHTML="Hi, my name’s Mitchell Itkin. I started ballroom dancing at the age of 7; my mom put me in it, actually. I wasn’t very good at it, but I kept training, and at age 11, I was on Dancing with the Stars! It was beyond surreal because in addition to the vast viewership of the show, they had my performance shown to the entire school too. Dance has been a huge part of my life ever since. As I progressed, I participated in and placed first at several enormous dance competitions. At 18, I performed at a pep rally, in front of an audience of 5000 students. At 20, I won the Ohio StarBall, which is the biggest dance competition in the United States. I’ve also competed internationally; I competed at Blackpool, which is the most prestigious dance competition in the world, and I placed in the top 13. While at NYU, I’ve organised several dance events to help college students learn how to dance. Dancing’s truly changed my life, and has helped me unleash who I am as a person. I was bullied for dancing at school; yet still, dancing has shaped my confidence in life. It has given me tremendous self esteem. It has also taught me that if I can master this one skill, and be able to connect with audiences of a massive scale so instantaneously, I can overcome almost any barrier in life.";
		
	});
	$("#par1").mouseout(function(){
		document.getElementById("par1").innerHTML="Push yourself, because no one else is going to do it for you."
	});

});

document.addEventListener('DOMContentLoaded', e => {
	var vid = document.getElementById("vid");
	vid.playbackRate = 0.5;
});
