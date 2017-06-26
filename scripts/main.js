$(document).ready(function(){

	var home = '<h1>Welcome to the Noodle Bar!</h1>'+
				'<h2>Hours</h2>'+
				"<div id = 'content-container'>"+
				'<ul>'+
				'<li>Monday-Thursday: 10:00am-10:00pm</li>'+
				'<li>Friday-Saturday: 11:00am-12:00am</li>'+
				'<li>Sunday: Closed</li>'+
				'</ul>'+
				'</div>'+
				'<h2>Take-out</h2>'+
				"<div id = 'content-container'>"+
				'<div>(555) 555-5555</div>'+
				'<div>1 Foobar Lane</div>'+
				'<div>Rochester, NY 14510</div>'+
				'</div>';
	var about = '<h1>About</h1>'+
				'<h2>What We Do</h2>'+
				"<div id = 'content-container-paragraph'>"+
				'<p>Our kitchen staffs have years of experience from some famous Asian restaurants around the city. We also bring the new twist to some very traditional Chinese dishes.'+
				'Come join us.  Friends,  family, and good time is ahead waiting for you.</p>'+
				'</div>'+
				'<h2>Testimonials and Reviews</h2>'+
				"<div id = 'content-container-paragraph'>"+
				'<p>According to the National Restaurant Association, there are nearly 600 full-service restaurants in Monroe County, '+
				'and between 53 and 73 of them identify themselves as "Chinese," according to listings on Yelp and Rocwiki, respectively.'+
				'But Han Noodle Bar is nearly unique in offering food identical to the stuff sold from carts and tiny stands all over China,'+
				' Taiwan, and Hong Kong: lots of variety meats, unfamiliar vegetables and pickles, and far more saturated flavors than most'+
				' American diners expect from their Chinese food. And according to Tony, patrons cant get enough of it.​'+
				'City Newspaper - 12/27/2015 </p>'+
				'</div>';
	var menu = '<h1>Menu</h1>'+
				'<ul>'+
					'<li>Tofu</li>'+
					'<li>Food</li>'+
					'<li>Buns</li>'+
					'<li>Other stuff</li>'+
				'</ul>';

	var specials = '<h1>Specials</h1>'

	var contact = '<h1>Contact</h1>'


	$('.nav-content').append(home);

	$('#home').click(function(){
		$('.nav-content').empty();
		$('.nav-content').append(home);
	});


	$('#about').click(function(){
		$('.nav-content').empty();
		$('.nav-content').append(about);
	});

	$('#menu').click(function(){
		$('.nav-content').empty();
		$('.nav-content').append(menu);
	});

	$('#specials').click(function(){
		$('.nav-content').empty();
		$('.nav-content').append(specials);
	});

	$('#contact').click(function(){
		$('.nav-content').empty();
		$('.nav-content').append(contact);
	});

						
});

