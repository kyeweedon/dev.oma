// /delivery

$(document).ready(function() {

	//$('body').append('<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBB_KyNPZr7BQJ4alsTFofBLPJwavw5uD4&sensor=false"></script>');
	
});

// ================
// { Globals

// { Map
var map;
// } Map

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