// /delivery

$(document).ready(function() {

	//$('body').append('<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBB_KyNPZr7BQJ4alsTFofBLPJwavw5uD4&sensor=false"></script>');
	
});

// ================
// { Globals

// { Map
var map;
// } Map

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
	
	{
		id:1,
		name:'Aussiefast',
		address:'244 Findon Road',
		suburb:'Kidman Park',
		postcode:'5023',
		state:'SA',
		lat:-34.899395,
		lng:138.531997,
		marker:{}
	},
	{
		id:2,
		name:'Alice Springs Couriers',
		address:'18 Kidman Street',
		suburb:'Alice Springs',
		postcode:'0870',
		state:'NT',
		lat:-23.696820,
		lng: 133.871002,
		marker:{}	
	},	
	{
		id:3,
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
		id:4,
		name:'Hills Carrying',
		address:'2/43 Enterprise Street',
		suburb:'Svensson Heights',
		postcode:'4670',
		state:'QLD',
		lat:-24.889010,
		lng:152.329291,
		marker:{}
	},	
	{
		id:5,
		name:'Coast & Regional Express',
		address:'15 Wingara Drive',
		suburb:'Coffs Harbour',
		postcode:'2450',
		state:'NSW',
		lat:-30.314573,
		lng:153.100641,
		marker:{}	
	},	
	{
		id:6,
		name:'Gin Gin Carrying Company',
		address:'17 Elliot Street',
		suburb:'Gin Gin',
		postcode:'4671',
		state:'QLD',
		lat:-24.989411,
		lng:151.955775,
		marker:{}	
	},	
	{
		id:7,
		name:'Gladstone Couriers',
		address:'23 Gretel Drive',
		suburb:'Clinton',
		postcode:'4680',
		state:'QLD',
		lat:-23.876962,
		lng:151.214978,
		marker:{}	
	},	
	{
		id:8,
		name:'Coastwide Freight Transport',
		address:'239 Brisbane Road',
		suburb:'Labrador',
		postcode:'4216',
		state:'QLD',
		lat:-27.930301,
		lng:153.376321,
		marker:{}	
	},	
	{
		id:9,
		name:'10.30 Couriers',
		address:'3/224 Brisbane Street',
		suburb:'West Ipswich',
		postcode:'4305',
		state:'QLD',
		lat:-27.616563,
		lng:152.751020,
		marker:{}
	},	
	{
		id:10,
		name:'Kingaroy Couriers',
		address:'48 Drapers Road',
		suburb:'Eatons Hill',
		postcode:'4037',
		state:'QLD',
		lat:-27.345818,
		lng:152.944472,
		marker:{}	
	},
	{
		id:11,
		name:'Central Coast Transport',
		address:'35 Southgate Drive',
		suburb:'Paget',
		postcode:'4740',
		state:'QLD',
		lat:-21.182806,
		lng:149.156788,
		marker:{}	
	},
	{
		id:12,
		name:'Power Couriers',
		address:'18 Thompson Street',
		suburb:'Bowen Hills',
		postcode:'4006',
		state:'QLD',
		lat:-27.441165,
		lng:153.040220,
		marker:{}	
	},
	{
		id:13,
		name:'ABS Couriers',
		address:'19-21 Birubi Street',
		suburb:'Cooparoo',
		postcode:'4151',
		state:'QLD',
		lat:-27.485984,
		lng:153.054982,
		marker:{}
	},
	{
		id:14,
		name:'All Purpose Transport',
		address:'58 Reginald Street',
		suburb:'Rocklea',
		postcode:'4106',
		state:'QLD',
		lat:-27.564341,
		lng:152.997126,
		marker:{}	
	},
	{
		id:15,
		name:'Executive Transport',
		address:'18 Miles Road',
		suburb:'Kewdale',
		postcode:'6105',
		state:'WA',
		lat:-31.982502,
		lng:115.949553,
		marker:{}	
	},
	{
		id:16,
		name:'Central Coast Transport',
		address:'5 Nicol Street',
		suburb:'Proserpine',
		postcode:'4800',
		state:'QLD',
		lat:-20.405010,
		lng:148.573917,
		marker:{}	
	},
	{
		id:17,
		name:'Central QLD Express',
		address:'204 East Street',
		suburb:'Rockhampton',
		postcode:'4700',
		state:'QLD',
		lat:-23.383197,
		lng:150.516800,
		marker:{}	
	},
	{
		id:18,
		name:'Hunter Express Depot',
		address:'7/26-32 Cosgrove Road',
		suburb:'Strathfield',
		postcode:'2136',
		state:'NSW',
		lat:-33.891480,
		lng:151.074182,
		marker:{}	
	},
	{
		id:19,
		name:'Hunter Express Office',
		address:'13/46-48 Urunga Parade',
		suburb:'Miranda',
		postcode:'2228',
		state:'NSW',
		lat:-34.035917,
		lng:151.102997,
		marker:{}	
	},
	{
		id:20,
		name:'Toowoomba Express Couriers',
		address:'26 Mansell Street',
		suburb:'Toowoomba',
		postcode:'4350',
		state:'QLD',
		lat:-27.549272,
		lng:151.910708,
		marker:{}	
	},
	{
		id:21,
		name:'Speedy Couriers',
		address:'161 Ireland Street',
		suburb:'Oonoonba',
		postcode:'4811',
		state:'QLD',
		lat:-19.301801,
		lng:146.819847,
		marker:{}	
	},
	
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

// { Misc
var currentState = '000';
var currentLocation = '000';
var mapOpen = false;
// } Misc

// } Globals
// ================

// ================
// { Handlers

// { State buttons
$('.stateNavItem').on({
	
	click:function() {
		
		// { Close others
		$(this).siblings().removeClass('stateNavItemOpen');
		$('#locationInitial').fadeOut();
		// } Close others
		
		// { Open this
		
		// { Set current State
		currentState = states[$(this).attr('state')];
		// } Set current State
		
		// { Style
		$(this).addClass('stateNavItemOpen');
		// } Style
		
		// { Build Location list
		$('#locationNav').animate({
			
			width:'0'
			
		}, 100, function() {
			
			// { Reset
			$('#locationNav').html('');
			// } Reset
			
			// { Per Location (build Location list)
			per(locations, function(i, location) {
				
				location.popup.close();
				
				// { If State match (add to list)
				if(location.state === currentState.short) {
					
					// { Draw
					$('#locationNav').append('<li class="locationNavItem" id="location' + location.id + '" loc="' + location.id + '">' + location.suburb + '</li>');
					// } Draw
					
				}
				// } If State match  (add to list)
				
			});
			// } Per Location (build Location list)
			
			// { Slide out locations
			$('#locationNav').animate({
				
				width:'160px'
				
			}, 100);
			// } Slide out locations
			
		});
		// } Build Location list
		
		// { Build Map
		drawMapState(currentState);
		// } Build Map
		
		// { Build Info
		
		// { Manager Info
		$('#repImage').attr('src', '../src/images/reps/' + currentState.repImage);
		$('#repName').html(currentState.repName);
		$('#repMobile').html(currentState.repMobile);
		$('#repEmail').html(currentState.repEmail).attr('href', 'mailto:' + currentState.repEmail);
		// } Manager Info
		
		// { Open
		$('#locationInfo').fadeIn();
		// } Open
		
		// } Build Info
		
		// } Open this
	
	}
	
});
// } State buttons

// { Location buttons
$('#locationNav').on({
	
	click:function() {
		
		var clicked = $(this);
		// { Close others
		$(this).siblings().removeClass('locationNavItemOpen');
		// } Close others
		
		// { Open this
		
		// { Set current Location
		per(locations, function(i, location) {
			
			location.popup.close();
			
			if(parseInt(clicked.attr('loc'), 10) === location.id) {
				
				currentLocation = location;
				
				// { Draw Map
				location.popup.open(map, location.marker);
				map.setZoom(12);
				// } Draw Map
				
			}
			
		});
		// } Set current Location
		
		// { Style
		$(this).addClass('locationNavItemOpen');
		// } Style
		
		// } Open this
	
	}
	
}, '.locationNavItem');
// } Location buttons

// } Handlers
// ================

// ================
// { Functions

function initialiseMap(then) {
	
	// { Options
	var mapOptions = {
		center:new google.maps.LatLng(-34.397, 150.644),
		zoom:8,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	// } Options
	
	// { Initialise Map
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	mapOpen = true;
	// } Initialise Map
	
	// { Initialise Locations
	per(locations, function(i, location) {
		
		// { Build Locator
		location.loc = new google.maps.LatLng(location.lat, location.lng);
		// } Build Locator
		
		// { Build Marker
		location.marker = new google.maps.Marker({
			
			map:map,
			position:location.loc,
			title:location.name
			
		});
		// } Build Marker
		
		// { Build Popup
		var popupContent =
			'<div>' +
			
				'<h3>' + location.name + '</h3>' +
				'<p>' + location.address + '</p>' +
				'<p>' + location.suburb + ' ' + location.postcode + ' ' + location.state + '</p>' +
			
			'</div>'
		;
		
		location.popup = new google.maps.InfoWindow({
			
			content:popupContent
			
		});
		
		// { Attach click listener to Marker
		google.maps.event.addListener(location.marker, 'click', function() {
			
			per(locations, function(i, loc) {
				
				loc.popup.close();
				
			});
			
			location.popup.open(map, location.marker);
			
		});
		
		// } Attach click listener to Marker
		
		// } Build Popup
	
	});
	// } Initialise Locations
	
	// { Initialise States
	per(states, function(i1, state) {
		
		// { Get Locations in this State
		state.bounds = new google.maps.LatLngBounds();
		
		per(locations, function(i2, location) {
			
			// { If this State
			if(location.state === i1) {
				
				// { Extend
				state.bounds.extend(location.loc);
				// } Extend
				
			}
			// } If this State
			
		});
		// } Get Locations in this State
		
	});
	// } Initialise States
	
	// { Callback
	then();
	// } Callback
	
}

function drawMapState(xState) {
	
	if(mapOpen) {
		
		map.fitBounds(xState.bounds);
		
	}
	else {
		
		initialiseMap(function() {
			
			map.fitBounds(xState.bounds);
			
		});
	
	}

}

// } Functions
// ================