
	// Kye Weedon
	// kyeweedon.com
	// June 2012

// { jsHint rules
/*jshint multistr:true */
// } jsHint rules

// =============
// { Globals

// { Define States
var states = {
    
	'ACT':{
		short:'ACT',
		repName:'Hilary Osborn',
		repImage:'hilaryO.jpg',
		repInfo:'About me.',
		repMobile:'0409 153 657',
		repEmail:'hilary@outboardmotorsaustralia.com.au'
	},
	'NSW':{
		short:'NSW',
		repName:'Kye Weedon',
		repImage:'kyeW.jpg',
		repInfo:'About me.',
		repMobile:'0438 453 566',
		repEmail:'kye@outboardmotorsaustralia.com.au'
	},
	'NT':{
		short:'NT',
		repName:'Hilary Osborn',
		repImage:'hilaryO.jpg',
		repInfo:'About me.',
		repMobile:'0409 153 657',
		repEmail:'hilary@outboardmotorsaustralia.com.au'
	},
	'QLD':{
		short:'QLD',
		repName:'Peter Osborn',
		repImage:'peterO.jpg',
		repInfo:'About me.',
		repMobile:'0408 853 994',
		repEmail:'peter@outboardmotorsaustralia.com.au'
	},
	'SA':{
		short:'SA',
		repName:'Mark Glachan',
		repImage:'markG.jpg',
		repInfo:'About me.',
		repMobile:'',
		repEmail:'mark@outboardmotorsaustralia.com.au'
	},
	'TAS':{
		short:'TAS',
		repName:'Annette Charlton',
		repImage:'annetteC.jpg',
		repInfo:'About me.',
		repMobile:'',
		repEmail:'annette@outboardmotorsaustralia.com.au'
	},
	'VIC':{
		short:'VIC',
		repName:'Peter Osborn',
		repImage:'peterO.jpg',
		repInfo:'About me.',
		repMobile:'0408 853 994',
		repEmail:'peter@outboardmotorsaustralia.com.au'
	},
	'WA':{
		short:'WA',
		repName:'Paul Charlton',
		repImage:'paulC.jpg',
		repInfo:'About me.',
		repMobile:'0457 445 396',
		repEmail:'paul@outboardmotorsaustralia.com.au'
	}
	
};
// } Define States

// { Define Locations
var locations = [
	
	// { SA
	{
		id:1,
		name:'APD',
		address:'62 Chapel Street',
		suburb:'Thebarton',
		postcode:'5031',
		state:'SA',
		lat:-34.918107,
		lng:138.574380,
		marker:{}
	},
	// } SA
	
	// { NT
	{
		id:2,
		name:'M & H Couriers',
		address:'16 Elder Street',
		suburb:'Ciccone',
		postcode:'0870',
		state:'NT',
		lat:-23.697653,
		lng:133.871149,
		marker:{}
	},
	{
		id:3,
		name:'Northline Transport',
		address:'2896 Reichardt Road',
		suburb:'Winnellie',
		postcode:'0820',
		state:'NT',
		lat:-12.428483,
		lng:130.866474,
		marker:{}
	},
	// } NT
	
	// { TAS
	{
		id:4,
		name:'Road Runners',
		address:'19 Mornington Road',
		suburb:'Mornington',
		postcode:'7018',
		state:'TAS',
		lat:-42.858457,
		lng:147.396379,
		marker:{}
	},
	{
		id:5,
		name:'Road Runners',
		address:'4 Richards Street',
		suburb:'Breadalbane',
		postcode:'7258',
		state:'TAS',
		lat:-41.536455,
		lng:147.197426,
		marker:{}
	},
	// } TAS
	
	// { WA
	{
		id:6,
		name:'Jetstyle Express',
		address:'841 Abernethy Road',
		suburb:'Forrestfield',
		postcode:'6058',
		state:'WA',
		lat:-31.962203,
		lng:115.985858,
		marker:{}
	},
	// } WA
	
	// { QLD
	{
		id:7,
		name:'Beuadesert Couriers',
		address:'164 Brisbane Street',
		suburb:'Beaudesert',
		postcode:'4285',
		state:'QLD',
		lat:-27.973401,
		lng:152.994812,
		marker:{}
	},
	{
		id:8,
		name:'Hunter Express',
		address:'103 Bancroft Road',
		suburb:'Pinkenba',
		postcode:'4008',
		state:'QLD',
		lat:-27.395092,
		lng:153.135225,
		marker:{}
	},
	{
		id:9,
		name:'Just Freight',
		address:'25/27 Charlie Triggs Crescent',
		suburb:'Thabeban',
		postcode:'4670',
		state:'QLD',
		lat:-24.903471,
		lng:152.349524,
		marker:{}
	},
	{
		id:10,
		name:'Express City Couriers',
		address:'305 Hartley Street',
		suburb:'Bungalow',
		postcode:'4870',
		state:'QLD',
		lat:-16.945311,
		lng:145.754112,
		marker:{}
	},
	{
		id:11,
		name:'Gladrock (Gladstone)',
		address:'20 Gladstone Benaraby Road',
		suburb:'Toolooa',
		postcode:'4680',
		state:'QLD',
		lat:-23.877462,
		lng:151.273758,
		marker:{}
	},
	{
		id:12,
		name:'Heritage Gold',
		address:'64 Violet Street',
		suburb:'Gympie',
		postcode:'4570',
		state:'QLD',
		lat:-26.180962,
		lng:152.650979,
		marker:{}
	},
	{
		id:13,
		name:'Action Express',
		address:'709 Captain Cook Drive',
		suburb:'Arundel',
		postcode:'4214',
		state:'QLD',
		lat:-27.932594,
		lng:153.374882,
		marker:{}
	},
	{
		id:14,
		name:'10.30 Couriers',
		address:'3 Pound Street',
		suburb:'West Ipswich',
		postcode:'4305',
		state:'QLD',
		lat:-27.622303,
		lng:152.750027,
		marker:{}
	},
	{
		id:15,
		name:'Kingaroy Couriers',
		address:'20 Lear Jet Drive',
		suburb:'Caboolture',
		postcode:'4510',
		state:'QLD',
		lat:-27.080409,
		lng:152.978468,
		marker:{}
	},
	{
		id:16,
		name:'DeCa Freight',
		address:'75 Bosso Street',
		suburb:'Paget',
		postcode:'4740',
		state:'QLD',
		lat:-21.182043,
		lng:149.153891,
		marker:{}
	},
	{
		id:17,
		name:'W & T Parcel & Freight',
		address:'Shed 7 & 8 Kingston Drive',
		suburb:'Maryborough West',
		postcode:'4650',
		state:'QLD',
		lat:-25.51651,
		lng:152.67628,
		marker:{}
	},
	{
		id:18,
		name:'Followmont Transport',
		address:'7 Richardson Road',
		suburb:'Ryan',
		postcode:'4825',
		state:'QLD',
		lat:-20.699655,
		lng:139.496931,
		marker:{}
	},
	{
		id:19,
		name:'Mt Tambo Couriers',
		address:'2373 Ipswich Road',
		suburb:'Oxley',
		postcode:'4075',
		state:'QLD',
		lat:-27.567271,
		lng:152.973220,
		marker:{}
	},
	{
		id:20,
		name:'Gladrock (Rockhampton)',
		address:'9 Waurn Street',
		suburb:'Kawana',
		postcode:'4701',
		state:'QLD',
		lat:-23.332684,
		lng:150.504473,
		marker:{}
	},
	{
		id:21,
		name:'Allfreight Carrying',
		address:'5/19 Avian Street',
		suburb:'Kunda Park',
		postcode:'4556',
		state:'QLD',
		lat:-26.664313,
		lng:153.039370,
		marker:{}
	},
	{
		id:22,
		name:'Darling Downs Express',
		address:'41-45 Industrial Avenue',
		suburb:'Wilsonton',
		postcode:'4350',
		state:'QLD',
		lat:-27.543938,
		lng:151.906634,
		marker:{}
	},
	{
		id:23,
		name:'Campbells Freight Services',
		address:'28 Camuglia Street',
		suburb:'Garbutt',
		postcode:'4814',
		state:'QLD',
		lat:-19.269789,
		lng:146.750473,
		marker:{}
	},
	// } QLD
	
	// { NSW
	{
		id:24,
		name:'Classic Couriers',
		address:'1 Bass Street',
		suburb:'Queanbeyan East',
		postcode:'2620',
		state:'NSW',
		lat:-35.334843,
		lng:149.244878,
		marker:{}
	},
	{
		id:25,
		name:'Sureas Transport',
		address:'38 Doyle Avenue',
		suburb:'Unanderra',
		postcode:'2526',
		state:'NSW',
		lat:-34.466555,
		lng:150.837788,
		marker:{}
	},
	{
		id:26,
		name:'Albury Freight Distribution',
		address:'102 Bennu Circuit',
		suburb:'Thurgoona',
		postcode:'2640',
		state:'NSW',
		lat:-36.069290,
		lng:146.963802,
		marker:{}
	},
	{
		id:27,
		name:'Johnson & Kennedy',
		address:'295 Mann Street',
		suburb:'West Armidale',
		postcode:'2350',
		state:'NSW',
		lat:-30.513953,
		lng:151.642254,
		marker:{}
	},
	{
		id:28,
		name:'Wizz Couriers',
		address:'2/39 Southern Cross Drive',
		suburb:'Ballina',
		postcode:'2478',
		state:'NSW',
		lat:-28.848210,
		lng:153.554824,
		marker:{}
	},
	{
		id:29,
		name:'Tattams Transport',
		address:'111 Bega Street',
		suburb:'Bega',
		postcode:'2550',
		state:'NSW',
		lat:-36.671461,
		lng:149.840700,
		marker:{}
	},
	{
		id:30,
		name:'Larkin Bros',
		address:'6/45 Upfold Street',
		suburb:'Gormans Hill',
		postcode:'2795',
		state:'NSW',
		lat:-33.424880,
		lng:149.589779,
		marker:{}
	},
	{
		id:31,
		name:'Shoreline Freighters',
		address:'36 High-Tech Drive',
		suburb:'Toormina',
		postcode:'2452',
		state:'NSW',
		lat:-30.343980,
		lng:153.089584,
		marker:{}
	},
	{
		id:32,
		name:'Cobar Farm & Garden Supplies',
		address:'8 Brickworks Road',
		suburb:'Cobar',
		postcode:'2835',
		state:'NSW',
		lat:-31.499463,
		lng:145.854111,
		marker:{}
	},
	{
		id:33,
		name:'Nagles',
		address:'11/55 Wheelers Lane',
		suburb:'Dubbo',
		postcode:'2830',
		state:'NSW',
		lat:-32.245976,
		lng:148.630120,
		marker:{}
	},
	{
		id:34,
		name:'Grangers Freight Lines',
		address:'12-16 Oxley Street',
		suburb:'Goulburn',
		postcode:'2580',
		state:'NSW',
		lat:-34.764584,
		lng:149.697153,
		marker:{}
	},
	{
		id:35,
		name:'Daniel & Son',
		address:'24 Lilypool Road',
		suburb:'South Grafton',
		postcode:'2460',
		state:'NSW',
		lat:-29.733156,
		lng:152.942876,
		marker:{}
	},
	{
		id:36,
		name:'Fullwood Transport',
		address:'1 Railway Avenue',
		suburb:'Gunnedah',
		postcode:'2380',
		state:'NSW',
		lat:-30.977039,
		lng:150.243836,
		marker:{}
	},
	{
		id:37,
		name:'Parsons Carriers',
		address:'22 Healeys Lane',
		suburb:'Glen Innes',
		postcode:'2370',
		state:'NSW',
		lat:-29.738688,
		lng:151.728621,
		marker:{}
	},
	{
		id:38,
		name:'Towers Transport',
		address:'23 Glenwood Drive',
		suburb:'Thornton',
		postcode:'2322',
		state:'NSW',
		lat:-32.788800,
		lng:151.633258,
		marker:{}
	},
	{
		id:39,
		name:'Combined Freight',
		address:'164 Ashford Road',
		suburb:'Inverell',
		postcode:'2360',
		state:'NSW',
		lat:-29.758372,
		lng:151.124233,
		marker:{}
	},
	{
		id:40,
		name:'Kyogle Taxi Trucks',
		address:'13 Summerland Way',
		suburb:'Kyogle',
		postcode:'2474',
		state:'NSW',
		lat:-28.618267,
		lng:153.003464,
		marker:{}
	},
	{
		id:41,
		name:'Wilson River Freight',
		address:'128 Wilson Street',
		suburb:'South Lismore',
		postcode:'2480',
		state:'NSW',
		lat:-28.811534,
		lng:153.261353,
		marker:{}
	},
	{
		id:42,
		name:'TNT',
		address:'64 James Street',
		suburb:'Moree',
		postcode:'2400',
		state:'NSW',
		lat:-29.482697,
		lng:149.855033,
		marker:{}
	},
	{
		id:43,
		name:'Savoy Transport',
		address:'48 Sydney Road',
		suburb:'Mudgee',
		postcode:'2850',
		state:'NSW',
		lat:-32.610109,
		lng:149.601157,
		marker:{}
	},
	{
		id:44,
		name:'O\'Gradys Courriers',
		address:'2/58 Quarry Road',
		suburb:'Murwillumbah',
		postcode:'2484',
		state:'NSW',
		lat:-28.334512,
		lng:153.414703,
		marker:{}
	},
	{
		id:45,
		name:'Northwest Logistics',
		address:'211 Kelvin Vickery Avenue',
		suburb:'Narrabri',
		postcode:'2390',
		state:'NSW',
		lat:-30.345591,
		lng:149.754523,
		marker:{}
	},
	{
		id:46,
		name:'Nagles',
		address:'3a Stephen Place',
		suburb:'Warrendine',
		postcode:'2800',
		state:'NSW',
		lat:-33.303999,
		lng:149.101719,
		marker:{}
	},
	{
		id:47,
		name:'Independence Carriers',
		address:'28 Janola Circuit',
		suburb:'Port Macquarie',
		postcode:'2444',
		state:'NSW',
		lat:-31.452140,
		lng:152.882480,
		marker:{}
	},
	{
		id:48,
		name:'Towers Transport',
		address:'24 Hume Street',
		suburb:'Taminda',
		postcode:'2340',
		state:'NSW',
		lat:-31.094309,
		lng:150.895264,
		marker:{}
	},
	{
		id:49,
		name:'Martin & Brown Courier Services',
		address:'10 Railway Parade',
		suburb:'Taree',
		postcode:'2430',
		state:'NSW',
		lat:-31.902745,
		lng:152.472982,
		marker:{}
	},
	{
		id:50,
		name:'Collins Courier Service',
		address:'2 Dangar Street',
		suburb:'East Wagga Wagga',
		postcode:'2650',
		state:'NSW',
		lat:-35.140211,
		lng:147.421680,
		marker:{}
	},
	{
		id:51,
		name:'Northern Rivers',
		address:'135 Electra Crescent',
		suburb:'South Grafton',
		postcode:'2460',
		state:'NSW',
		lat:-29.722901,
		lng:152.943710,
		marker:{}
	},
	{
		id:52,
		name:'Pace Overnight',
		address:'18 Ralph Black Drive',
		suburb:'North Woolongong',
		postcode:'2500',
		state:'NSW',
		lat:-34.407728,
		lng:150.893110,
		marker:{}
	},
	{
		id:53,
		name:'All Star Express',
		address:'28 Geebung Drive',
		suburb:'Port Macquarie',
		postcode:'2444',
		state:'NSW',
		lat:-31.456538,
		lng:152.883237,
		marker:{}
	},
	{
		id:54,
		name:'Hills Transport',
		address:'11 Enterprise Crescent',
		suburb:'McDougalls Hill',
		postcode:'2330',
		state:'NSW',
		lat:-32.548210,
		lng:151.143068,
		marker:{}
	},
	{
		id:55,
		name:'Hunter Express',
		address:'3a Monier Square',
		suburb:'Villawood',
		postcode:'2163',
		state:'NSW',
		lat:-33.883925,
		lng:150.987462,
		marker:{}
	},
	{
		id:56,
		name:'Roblom Transport',
		address:'2 Coolabah Drive',
		suburb:'Taree',
		postcode:'2430',
		state:'NSW',
		lat:-31.897947,
		lng:152.455671,
		marker:{}
	},
	// } NSW
	
	// { VIC
	/*
	{
		id:57,
		name:'Albury Freight Distribution',
		address:'102 Bennu Circuit',
		suburb:'Thurgoona',
		postcode:'2640',
		state:'VIC',
		lat:-36.069175,
		lng:146.963808,
		marker:{}
	},
	*/
	{
		id:58,
		name:'Caledonian Transport',
		address:'5 Trewin Street',
		suburb:'Wendouree',
		postcode:'3355',
		state:'VIC',
		lat:-37.528785,
		lng:143.806657,
		marker:{}
	},
	{
		id:59,
		name:'Power\'s Country Express',
		address:'104 Harpin Street',
		suburb:'East Bendigo',
		postcode:'3550',
		state:'VIC',
		lat:-36.748805,
		lng:144.305918,
		marker:{}
	},
	{
		id:60,
		name:'Devlin Bros Transport',
		address:'58 Separation Street',
		suburb:'North Geelong',
		postcode:'3215',
		state:'VIC',
		lat:-38.110802,
		lng:144.345972,
		marker:{}
	},
	{
		id:61,
		name:'GFE',
		address:'37 Standing Drive',
		suburb:'Traralgon',
		postcode:'3844',
		state:'VIC',
		lat:-38.190356,
		lng:146.567616,
		marker:{}
	},
	{
		id:62,
		name:'Hunter Express',
		address:'64 Pound Road',
		suburb:'Dandenong',
		postcode:'3175',
		state:'VIC',
		lat:-38.027606,
		lng:145.236570,
		marker:{}
	},
	{
		id:63,
		name:'Mountain Blue Transport',
		address:'20 Burgess Road',
		suburb:'Bayswater North',
		postcode:'3152',
		state:'VIC',
		lat:-37.821280,
		lng:145.291510,
		marker:{}
	},
	{
		id:64,
		name:'Silver City Express',
		address:'4 Luke Court',
		suburb:'Mildura',
		postcode:'3500',
		state:'VIC',
		lat:-34.194777,
		lng:142.174927,
		marker:{}
	},
	// } VIC
	
	// { More
	{
		id:65,
		name:'Mitchell Marine',
		address:'303-305 Draper Street',
		suburb:'Cairns',
		postcode:'4870',
		state:'QLD',
		lat:-16.924411,
		lng:145.766516,
		marker:{}
	},
	{
		id:66,
		name:'Devonport Boat \'n\' Tackle',
		address:'13a Forbes Street',
		suburb:'Devonport',
		postcode:'7310',
		state:'TAS',
		lat:-41.182665,
		lng:146.355628,
		marker:{}
	},
	{
		id:67,
		name:'BT Performance',
		address:'114 Curlewis Street',
		suburb:'Swan Hill',
		postcode:'3595',
		state:'VIC',
		lat:-35.337343,
		lng:143.560326,
		marker:{}
	},
	{
		id:68,
		name:'Snowy River Marine',
		address:'3-11 Browning Street',
		suburb:'Orbost',
		postcode:'3888',
		state:'VIC',
		lat:-37.709878,
		lng:148.455443,
		marker:{}
	},
	{
		id:69,
		name:'Get Wet Marine',
		address:'353 Kororoit Creek Road',
		suburb:'Altona',
		postcode:'3018',
		state:'VIC',
		lat:-37.851215,
		lng:144.835057,
		marker:{}
	},
	{
		id:70,
		name:'The Boatshed at Woronora',
		address:'131 Prince Edward Park Road',
		suburb:'Woronora',
		postcode:'2232',
		state:'NSW',
		lat:-34.029727,
		lng:151.040547,
		marker:{}
	},
	{
		id:71,
		name:'Transtate Marine',
		address:'2 Egan Court',
		suburb:'Belconnen',
		postcode:'2617',
		state:'ACT',
		lat:-35.241104,
		lng:149.058618,
		marker:{}
	},
	{
		id:72,
		name:'Dolphin Marine',
		address:'3/11 Kelly Court',
		suburb:'Buderim',
		postcode:'4556',
		state:'QLD',
		lat:-26.669345,
		lng:153.087618,
		marker:{}
	},
	{
		id:73,
		name:'Seapower Marine Gold Coast',
		address:'5/247 Bayview Street',
		suburb:'Runaway Bay',
		postcode:'4216',
		state:'QLD',
		lat:-27.901244,
		lng:153.401536,
		marker:{}
	}
	// } More
	
];

// { Sort Ascending
locations.sort(function(a, b) {
	
	if(a.suburb < b.suburb) {
		
		return -1;
		
	}
	else {
		
		return 1;
		
	}
	
});

//console.log(locations);
// } Sort Ascending

// } Define Locations

// } Globals
// =============

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
			
			fontSize:'20px'
			
		}, 250);
		
	},
	mouseleave:function() {
		
		$(this).animate({
			
			fontSize:'16px'
			
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
			'<p>17 Pavitt Crescent, Wyong, NSW 2259</p>' +
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
				'<p>Outboard Motors Australia will send your goods via courier to your nearest pick up point within 7-10 working days. Your regional manager will provide you a tracking number so that you can see the status of where your engine is in the delivery process. If the engine is not ex stock, we will advise you how long before the next shipment.</p>' +
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
			
				'<p>Please select carefully the model to suit your application. Outboard Motors Australia do not accept return of goods because of incorrect selection. Each selection menu provides the information on each engine including features, specifications, applications, resources and what each option is to assist the correct selection. If in doubt, contact your regional manager in each Australian state before you place order.</p>' +
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