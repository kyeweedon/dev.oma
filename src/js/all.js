
	// Kye Weedon
	// kyeweedon.com
	// June 2012

// { jsHint rules
/*jshint multistr:true */
// } jsHint rules

// ==============
// { Handlers

// { Modal

// { Background
$('#modalBackground').on({

	click:function() {
		
		$('#mfClose').click();
	
	}

});
// } Background

// { Frame
$('#modalFrame').on({

	click:function(event) {
		
		event.stopPropagation();
		
	}

});
// } Frame

// { Close
$('#mfClose').on({

	click:function(event) {
		
		$("#modalBackground").fadeOut();
		event.stopPropagation();
		
	}

});
// } Close

// } Modal

// { Top nav

// { Links (all)
$('.mfhnLink:not(.mfhnHere)').on({
	
	mouseenter:function() {
		
		$(this).animate({
			
			fontSize:'120%'
			
		}, 250);
		
	},
	mouseleave:function() {
		
		$(this).animate({
			
			fontSize:'100%'
			
		}, 250);
		
	}
		
});
// } Links (all)

// } Top nav

// { Footer links (all)
$('.footLink').on({

	click:function() {
	
		$('#modalHeader').html($(this).html());
		$('#modalBackground').fadeIn();
	
	}
	
});
// } Footer links (all)

// { Footer links (each)
$('#ffcContact').on({

	click:function() {
	
		$('#modalContent').html(
		
			'<h3>Sales & Admin</h3>' +
			'<p>42/1 Forbes Street, Carringon, NSW 2294</p>' +
			'<p><a href="mailto:sales@outboardmotorsaustralia.com.au">sales@outboardmotorsaustralia.com.au</a></p>' +
			'<p><a href="mailto:service@outboardmotorsaustralia.com.au">service@outboardmotorsaustralia.com.au</a></p>' +
			'<p>(M) 0408 853 994</p>' +
			'<p>(T) 0249 616 746</p>' +
			'<p>(F) 0249 616 748</p>' +
			
			'<h3>Warehouse & Workshop</h3>' +
			'<p>17 Pavill Crescent, Wyong, NSW 2259</p>' +
			'<p>(M) 0437 592 729</p>'
		
		);
	
	}
	
});

$('#ffcShipping').on({

	click:function() {
	
		$('#modalContent').html(
			
			'<div class="tiny">' +
			
				'<p>As soon as you order online, you will receive an email from CommWeb confirming your order details. Outboard Motors Australia will process order by pre delivering each engine at our Wyong, NSW warehouse, entering engine serial number into our computer data base interactive system. Book and Record is our computer data base interactive system for each owner to check the status of their engine in real-time. This means that you can retrieve important information like; the date of your last engine service, the date the next service is due and a range of technical data designed to keep you informed and ahead of possible engine failure, preventative maintenance not just in time repairs.</p>' +
				'<br/>' +
				'<p>Outboard Motors Australia will send your goods via courier to your nearest pick up point within 7-10 working days. Your regional manager will provide you a tracking number so that you can see the status of where your engine is in the delievry process. If the engine is not ex stock, we will advise you how long before the next shipment.</p>' +
				'<br/>' +
				'<p>Our commitment to Service means personal service as we commit to deliver a high quality product as well as post sales service excellence under the management of Mark Glachan, Technical Director.</p>' +
			
			'</div>'
			
		);
		
	}
	
});

$('#ffcRefunds').on({

	click:function() {
	
		$('#modalContent').html(
		
			'<div class="tiny">' +
			
				'<p>Please select carefully the model to suit your application. Outboard Motors Australia do not accept return of goods because of incorrect selection. Each selection menu provides the information on each engine includung features, specifications, applications, resources and what each option is to assit the correct selection. If in doubt, contact your regional manager in each Australian state before you place order.</p>' +
				'<br/>' +
				'<p>Outboard Motors Australia reserves the right to assess the eligibility of goods for return before accepting them as returned in the unlikely event of a warranty issue. All transport costs to return goods are at the expense of the customer once goods have been assessed. We will always attempt to cover warranty issues locally once goods have been assessed. If this is not possible they will be required to return to our service workshop at Wyong, NSW. All parts and labour are covered for two years (Pleasure) and one year (Work) models in accordance with the Outboard Motors Australia warranty policy.</p>' +
			
			'</div>'
		
		);
	
	}
	
});
// } Footer links (each)

// } Handlers
// ==============

// ===============
// { Functions

// { Size of Object
Object.size = function(obj) {
	
	var size = 0;
	
	for (var key in obj) { if (obj.hasOwnProperty(key)) {
		
		size++;
		
	}}
	
	return size;
	
};
// } Size of Object

// { For In (per)
function per(obj, act) {
	
	for(var i in obj) { if(obj.hasOwnProperty(i)) {
		
		var x = obj[i];
		
		act(i, x);
		
	}}
	
}
// } For In (per)

// } Functions
// ===============