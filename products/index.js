
	// Kye Weedon
	// kyeweedon.com
	// June 2012

// { jsHint rules
/*jshint multistr:true */
// } jsHint rules

// ===========
// { Start

// { Define Products
var products = {
	
	'TP3AMHS':{
		
		model:'TP3AMHS',
		variant:'Pleasure',
		powerCategory:3,
		displacement:'70cc',
		boreStroke:'46 x 42',
		gearRatio:'2.08 (27/13)',
		rpmRange:'4,500 - 5,000',
		shaftOutput:'2.2kW (3hp) @ 5,000rpm',
		altOutput:'-',
		transomHeight:'442mm (17.4")',
		dryWeight:'16.5 - 17.5kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Short',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$692',
		imageMain:'3hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 3HP Manual.pdf',
		buyLink:''
		
	},
	'TP4.8AMHS':{
		
		model:'TP4.8AMHS',
		variant:'Pleasure',
		powerCategory:4.8,
		displacement:'103cc',
		boreStroke:'54 x 45',
		gearRatio:'2.08 (27/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'4.1kW (5.5hp) @ 5,250rpm',
		altOutput:'12V',
		transomHeight:'444mm (17.5")',
		dryWeight:'21.0kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Short',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$1,056',
		imageMain:'5.5hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 4.8HP Manual.pdf'
		
	},
	'TP10AMHS':{
		
		model:'TP10AMHS',
		variant:'Pleasure',
		powerCategory:10,
		displacement:'246cc',
		boreStroke:'56 x 50',
		gearRatio:'2.08 (27/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'7.3kW (9.9hp) @ 5,000rpm',
		altOutput:'12V 80W',
		transomHeight:'440mm (17.3")',
		dryWeight:'36kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Short',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$1,604',
		imageMain:'10hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 10HP Manual.pdf'
		
	},
	'TP10AMHL':{
		
		model:'TP10AMHL',
		variant:'Pleasure',
		powerCategory:10,
		displacement:'246cc',
		boreStroke:'56 x 50',
		gearRatio:'2.08 (27/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'7.3kW (9.9hp) @ 5,000rpm',
		altOutput:'12V 80W',
		transomHeight:'567mm (22.3")',
		dryWeight:'37.5kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Long',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$1,627',
		imageMain:'10hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 10HP Manual.pdf'
		
	},
	'TP18AMHS':{
		
		model:'TP18AMHS',
		variant:'Pleasure',
		powerCategory:18,
		displacement:'246cc',
		boreStroke:'56 x 50',
		gearRatio:'2.08 (27/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'11kW (15hp) @ 5,000rpm',
		altOutput:'12V 40/80W',
		transomHeight:'440mm (17.3")',
		dryWeight:'36kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Short',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$1,714',
		imageMain:'18hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 18HP Manual.pdf'
		
	},
	'TP18AMHL':{
		
		model:'TP18AMHL',
		variant:'Pleasure',
		powerCategory:18,
		displacement:'246cc',
		boreStroke:'56 x 50',
		gearRatio:'2.08 (27/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'11kW (15hp) @ 5,000rpm',
		altOutput:'12V 40/80W',
		transomHeight:'567mm (17.3")',
		dryWeight:'37.5kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Long',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$1,738',
		imageMain:'18hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 18HP Manual.pdf'
		
	},
	'TW18AMHL':{
		
		model:'TW18AMHS',
		variant:'Work',
		powerCategory:18,
		displacement:'246cc',
		boreStroke:'56 x 50',
		gearRatio:'2.08 (27/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'11kW (15hp) @ 5,000rpm',
		altOutput:'12V 40/80W',
		transomHeight:'567mm (17.3")',
		dryWeight:'37.5kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Long',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$1,738',
		imageMain:'18hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 18HP Manual.pdf'
		
	},
	'TS18AMHX':{
		
		model:'TS18AMHX',
		variant:'Sail',
		powerCategory:18,
		displacement:'246cc',
		boreStroke:'56 x 50',
		gearRatio:'2.08 (27/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'11kW (15hp) @ 5,000rpm',
		altOutput:'12V 40/80W',
		transomHeight:'-mm (-")',
		dryWeight:'37.5kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Extra Long',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$1,738',
		imageMain:'18hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 18HP Manual.pdf'
		
	},
	'TP28AMHS':{
		
		model:'TP28AMHS',
		variant:'Pleasure',
		powerCategory:28,
		displacement:'395cc',
		boreStroke:'67 x 56',
		gearRatio:'2.08 (27/13)',
		rpmRange:'5,000 - 6,000',
		shaftOutput:'18.4kW (25hp) @ 5,500rpm',
		altOutput:'12V 80W',
		transomHeight:'419mm (16.5")',
		dryWeight:'48kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Short',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$2,422',
		imageMain:'28hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 28HP Manual.pdf'
		
	},
	'TP40AMHS':{
		
		model:'TP40AMHS',
		variant:'Pleasure',
		powerCategory:40,
		displacement:'703cc',
		boreStroke:'80 x 70',
		gearRatio:'2.00 (26/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'29.4kW (40hp) @ 5,000rpm',
		altOutput:'12V 80W',
		transomHeight:'424mm (16.7")',
		dryWeight:'74.6kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Short',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$3,169',
		imageMain:'40hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 40HP Manual.pdf'
		
	},
	'TP40AMHL':{
		
		model:'TP40AMHL',
		variant:'Pleasure',
		powerCategory:40,
		displacement:'703cc',
		boreStroke:'80 x 70',
		gearRatio:'2.00 (26/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'29.4kW (40hp) @ 5,000rpm',
		altOutput:'12V 80W',
		transomHeight:'550mm (21.7")',
		dryWeight:'84kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Long',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$3,217',
		imageMain:'40hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 40HP Manual.pdf'
		
	},
	'TP40AWHL':{
		
		model:'TP40AWHL',
		variant:'Pleasure',
		powerCategory:40,
		displacement:'703cc',
		boreStroke:'80 x 70',
		gearRatio:'2.00 (26/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'29.4kW (40hp) @ 5,000rpm',
		altOutput:'12V 80W',
		transomHeight:'550mm (21.7")',
		dryWeight:'84kg',
		typeStart:'Electric & Manual',
		typeSteering:'Manual',
		typeTransom:'Long',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$3,471',
		imageMain:'40hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 40HP Manual.pdf'
		
	},
	'TP40AWRS':{
		
		model:'TP40AWRS',
		variant:'Pleasure',
		powerCategory:40,
		displacement:'703cc',
		boreStroke:'80 x 70',
		gearRatio:'2.00 (26/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'29.4kW (40hp) @ 5,000rpm',
		altOutput:'12V 80W',
		transomHeight:'424mm (16.7")',
		dryWeight:'74.6kg',
		typeStart:'Electric & Manual',
		typeSteering:'Remote',
		typeTransom:'Short',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$3,484',
		imageMain:'40hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 40HP Manual.pdf'
		
	},
//	'TP40AWRL':{
//		
//		model:'TP40AWRL',
//		variant:'Pleasure',
//		powerCategory:40,
//		displacement:'703cc',
//		boreStroke:'80 x 70',
//		gearRatio:'2.00 (26/13)',
//		rpmRange:'4,500 - 5,500',
//		shaftOutput:'29.4kW (40hp) @ 5,000rpm',
//		altOutput:'12V 80W',
//		transomHeight:'550mm (21.7")',
//		dryWeight:'84kg',
//		typeStart:'Electric',
//		typeSteering:'Remote',
//		typeTransom:'Long',
//		typeTrim:'Electric',
//		blurb:'',
//		listPrice:'$3,707',
//		imageMain:'40hp.jpg',
//		imageDims:'2.jpg',
//		images:[
//			
//			'1.jpg',
//			'2.jpb',
//			'3.jpg'
//		],
//		manual:'Titan 40HP Manual.pdf'
//		
//	},
	'TW40AMHL':{
		
		model:'TW40AMHL',
		variant:'Work',
		powerCategory:40,
		displacement:'703cc',
		boreStroke:'80 x 70',
		gearRatio:'2.00 (26/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'29.4kW (40hp) @ 5,000rpm',
		altOutput:'12V 80W',
		transomHeight:'550mm (21.7")',
		dryWeight:'84kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Long',
		typeTrim:'Manual',
		blurb:'',
		listPrice:'$3,217',
		imageMain:'40hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 40HP Manual.pdf'
		
	},
	'TP40AERTS':{
		
		model:'TP40AERTS',
		variant:'Pleasure',
		powerCategory:40,
		displacement:'703cc',
		boreStroke:'80 x 70',
		gearRatio:'2.00 (26/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'29.4kW (40hp) @ 5,000rpm',
		altOutput:'12V 80W',
		transomHeight:'424mm (16.7")',
		dryWeight:'74.6kg',
		typeStart:'Electric',
		typeSteering:'Remote',
		typeTransom:'Short',
		typeTrim:'Electric',
		blurb:'',
		listPrice:'$4,039',
		imageMain:'40hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 40HP Manual.pdf'
		
	},
	'TP40AERTL':{
		
		model:'TP40AERTL',
		variant:'Pleasure',
		powerCategory:40,
		displacement:'703cc',
		boreStroke:'80 x 70',
		gearRatio:'2.00 (26/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'29.4kW (40hp) @ 5,000rpm',
		altOutput:'12V 80W',
		transomHeight:'550mm (21.7")',
		dryWeight:'84kg',
		typeStart:'Electric',
		typeSteering:'Remote',
		typeTransom:'Long',
		typeTrim:'Electric',
		blurb:'',
		listPrice:'$4,104',
		imageMain:'40hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 40HP Manual.pdf'
		
	},
	'TP55AMHDL':{
		
		model:'TP55AMHDL',
		variant:'Pleasure',
		powerCategory:55,
		displacement:'698cc',
		boreStroke:'67 x 66',
		gearRatio:'1.85 (24/13)',
		rpmRange:'4,500 - 5,500',
		shaftOutput:'36.8kW (50hp) @ 5,000rpm',
		altOutput:'12V 80W',
		transomHeight:'533mm (21")',
		dryWeight:'90kg',
		typeStart:'Manual',
		typeSteering:'Manual',
		typeTransom:'Long',
		typeTrim:'Hydro',
		blurb:'',
		listPrice:'$4,531',
		imageMain:'55hp.jpg',
		imageDims:'2.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 55HP Manual.pdf'
		
	},
	'TP65AERTOL':{
		
		model:'TP65AERTOL',
		variant:'Pleasure',
		powerCategory:65,
		displacement:'-cc',
		boreStroke:'- x -',
		gearRatio:'- (-/-)',
		rpmRange:'-',
		shaftOutput:'- (-) @ -rpm',
		altOutput:'-V -W',
		transomHeight:'-mm (-")',
		dryWeight:'-kg',
		typeStart:'Electric',
		typeSteering:'Remote',
		typeTransom:'Long',
		typeTrim:'Electric',
		blurb:'',
		listPrice:'$-',
		imageMain:'-hp.jpg',
		imageDims:'-.jpg',
		images:[
			
			'1.jpg',
			'2.jpb',
			'3.jpg'
		],
		manual:'Titan 65HP Manual.pdf'
		
	},
	
};
// } Define Products

// { Define Power Categories

// { Descriptions
var powerInfo = {
	
	3:'The 3hp is the smallest Titan outboard in our range, single cylinder with tiller mounted throttle control. Ideal for small yacht or powerboat tenders up to 2.4m in length.',
	4.8:'The 4.8hp is a single cylinder with tiller mounted throttle control. Ideal for yacht or powerboat tenders up 2.4m in length and also small tinnies. As it is rated below the NSW Maritime requirements for boat registration and licensing it is great for owners of small fishing boats who just want to enjoy their favourate fishing spot.',
	10:'The 10hp is the first twin cylinder outboard in the Titan range with tiller mounted throttle control, available in short and long shaft for inflatables and tinnies 3.0m to 3.6m in length. Also available is the extra long shaft ideal for trailer sailers as a sail drive. All shaft configurations come with a rectifier and charging circuit.',
	18:'The 18hp is also a twin cylinder outboard with tiller mounted throttle control, available in short and long shaft for inflatables and tinnies 3.6m to 4.0m in length. Also available is the extra long shaft ideal for trailer sailers as a sail drive. All shaft configurations come with a rectifier and charging circuit.',
	28:'The 28hp is also a twin cylinder outboard with both tiller mounted throttle control and also remote control with electric start. Available in short and long shaft for inflatables and tinnies 3.6m to 4.0m in length. The short shaft version with tiller control is suitable for inflatables used by Surf Clubs. All shaft configurations come with a rectifier and charging circuit.',
	40:'The 40hp is also a twin cylinder outboard with both tiller mounted throttle control and also remote control with electric start and power trim/tilt. Available in short and long shaft for inflatables and runabouts 4.0m to 5.0m in length. A great option for repowering an existing runabout.',
	55:'The 55hp is the first three cylinder in the Titan range with both tiller mounted throttle control and also remote control with electric start and power trim/tilt. Available in short and long shaft for inflatables and runabouts 4.5m to 5.5m in length. A great option for repowering an existing runabout.',
	65:'The 65hp is also three cylinder outboard and first in the in Titan range with oil injection. Available with both tiller mounted throttle control and also remote control with electric start and power trim/tilt. Available in short and long shaft for inflatables and runabouts 5.0m to 6.0m in length. A great option for repowering an existing runabout.'
	
};
// } Descriptions

var powerList = [];

// { Per Product (find power categories)
for(var i in products) { if(products.hasOwnProperty(i)) {
	
	var product = products[i];
	
	// { If Novel Power Category
	if(powerList.indexOf(product.powerCategory) === -1) {
		
		// Add Power Category to list
		powerList.push(product.powerCategory);
		
	}
	// } If Novel Power Category
	
}}

// } Per Product (find power categories)

// { Sort Descending
powerList.sort(function(a, b) {
	
	if(a > b) {
		
		return -1;
		
	}
	else {
		
		return 1;
		
	}
	
});
// console.log(powerList);
// } Sort Ascending

// } Define Power Categories

// { Initialise
var currentPower;
var currentPowerProducts;
var currentVariant;
var currentTransom;
var currentSteering;
var currentStarter;
var currentTrim;
var currentProduct;
// } Initialise

// } Start
// ===========

// ===========
// { Ready
$(document).ready(function() {
	
	// { Per Prower Category (inject into nav)
	powerList.forEach(function(power) {
		
		$('#mfcPowerNav').prepend('<li class="pnPower" power="' + power + '">' + power + ' HP</li>');
		
	});
	$('.pnPower').fadeIn();
	// } Per Prower Category (inject into nav)
	
	// { Initialise Galleria
	Galleria.loadTheme('../src/images/galleria/themes/classic/galleria.classic.min.js');
	Galleria.run('#productGallery', {
		
		width:'100%'
		
	});
	$('#pnImageGallery').click();
	// } Initialise Galleria
	
	// { Initialise Dropkick
	//$('.fListItemPicker').dropkick();
	// } Initialise Dropkick
	
	// { Preload Images
	$('#preloader').append(
		
		'<img src="../src/images/products/main/3hp.jpg"/>'   +
		'<img src="../src/images/products/main/4.8hp.jpg"/>' +
		'<img src="../src/images/products/main/10hp.jpg"/>'  +
		'<img src="../src/images/products/main/18hp.jpg"/>'  +
		'<img src="../src/images/products/main/28hp.jpg"/>'  +
		'<img src="../src/images/products/main/40hp.jpg"/>'  +
		'<img src="../src/images/products/main/55hp.jpg"/>'
		
	);
	// } Preload Images
	
});
// } Ready
// ===========

// ================
// { Handlers

// { Power Nav
$('#mfcPowerNav').on({
	
	click:function() {
		
		// { Close others
		$('.pnPower').removeClass('pnPowerOpen');
		// } Close others
		
		// { Open this
		$(this).addClass('pnPowerOpen');
		
		// { If Image Gallery (show)
		if($(this).attr('id') === 'pnImageGallery') {
			
			// { Show Gallery
			$('#mfcpInfo').hide();
			$('#mfcpLegend').hide();
			$('#mfcpGallery').show();
			// } Show Gallery
			
		}
		// } If Image Gallery (show)
		// { Else (populate power)
		else {
			
			// { Hide Gallery
			$('#mfcpGallery').hide(250);
			// } Hide Gallery
			
			// { Determine Display
			
			// { Features
			currentPower = parseFloat($(this).attr('power'));
			currentPowerProducts = populateCurrentPowerProducts(currentPower);
			populatePower(currentPowerProducts);
			// } Features
			
			// { Applications
			$('#appsInfo').html('<p>' + powerInfo[currentPower] + '</p>');
			// } Applications
			
			// { Images
			$('#mfcpicImage').attr('src', '../src/images/products/main/' + currentPower + 'hp.jpg');
			// } Images
			
			// } Determine Display
			
			// { Show
			$('#mfcpInfo').show();
			$('#mfcpLegend').fadeIn(999);
			// } Show
			
			// { Force Features
			$('#productFeatures').click();
			// } Force Features
			
		}
		// } Else (populate power)
		
		// } Open this
		
		//console.log('Click: Power Category');
		
	}
	
}, '.pnPower');

// } Power Nav

// { Product Nav

// { All
$('.mfcpinItem').on({
	
	click:function() {
			
		// Selected
		if(!$(this).hasClass('mfcpinSelected')) {
			
			$(this).siblings().removeClass('mfcpinSelected');
			$(this).addClass('mfcpinSelected');
			
		}
		
	}
	
});
// } All

// { Product Features
$('#productFeatures').on({
	
	click:function() {
		
		// { Display
		$('#featuresList').show();
		$('#specsList').hide();
		$('#appsInfo').hide();
		$('#resourcesList').hide();
		// } Display
		
	}
	
});
// } Product Features

// { Product Specs
$('#productSpecs').on({
	
	click:function() {
		
		// Populate Image
		//$('#mfcpicImage').attr('src', '../src/images/products/dims/' + currentProduct.imageDims);
		
		// { Display
		$('#featuresList').hide();
		$('#specsList').show();
		$('#appsInfo').hide();
		$('#resourcesList').hide();
		// } Display
		
	}
	
});
// } Product Specs

// { Product Apps
$('#productApps').on({
	
	click:function() {
		
		// Populate Image
		//$('#mfcpicImage').attr('src', currentProduct.imageDims);
		
		// { Display
		$('#featuresList').hide();
		$('#specsList').hide();
		$('#appsInfo').show();
		$('#resourcesList').hide();
		// } Display
		
	}
	
});
// } Product Apps

// { Product Resources
$('#productResources').on({
	
	click:function() {
		
		// Populate Image
		//$('#mfcpicImage').attr('src', currentProduct.imageDims);
		
		// { Display
		$('#featuresList').hide();
		$('#specsList').hide();
		$('#appsInfo').hide();
		$('#resourcesList').show();
		// } Display
		
	}
	
});
// } Product Resources

// } Product Nav

// { Features Pickers

// { Variant
$('#variantPicker').on({
	
	change:function() {
		
		currentVariant = $(this).val();
		var tmpTransomList = [];
		
		// { Find valid Transoms
		
		// { Per Product
		per(currentPowerProducts, function(i, product) {
			
			// { If this Variant (add transom)
			if(
				product.variant === currentVariant &&
				tmpTransomList.indexOf(product.typeTransom) === -1
			) {
				
				// { Push
				tmpTransomList.push(product.typeTransom);
				// } Push
				
			}
			// } If this Variant (add transom)
			
		});
		// } Per Product
		
		//console.log(tmpTransomList);
		// } Find valid Transoms
		
		// { Populate Transom Picker
		populatePicker($('#transomPicker'), tmpTransomList, false);
		// } Populate Transom Picker
		
	}
	
});
// } Variant

// { Transom
$('#transomPicker').on({
	
	change:function() {
		
		currentTransom = $(this).val();
		var tmpSteeringList = [];
		
		// { Find valid Steering
		
		// { Per Product
		per(currentPowerProducts, function(i, product) {
			
			// { If this Transom (add steering)
			if(
				product.variant === currentVariant &&
				product.typeTransom === currentTransom &&
				tmpSteeringList.indexOf(product.typeSteering) === -1
			) {
				
				// { Push
				tmpSteeringList.push(product.typeSteering);
				// } Push
				
			}
			// } If this Transom (add steering)
			
		});
		// } Per Product
		
		//console.log(tmpSteeringList);
		// } Find valid Steering
		
		// { Populate Steering Picker
		populatePicker($('#steeringPicker'), tmpSteeringList);
		// } Populate Steering Picker
		
	}
	
});
// } Transom

// { Steering
$('#steeringPicker').on({
	
	change:function() {
		
		currentSteering = $(this).val();
		var tmpStarterList = [];
		
		// { Find valid Starter
		
		// { Per Product
		per(currentPowerProducts, function(i, product) {
			
			// { If this Steering (add Starter)
			if(
				product.variant === currentVariant &&
				product.typeTransom === currentTransom &&
				product.typeSteering === currentSteering &&
				tmpStarterList.indexOf(product.typeStart) === -1
			) {
				
				// { Push
				tmpStarterList.push(product.typeStart);
				// } Push
				
			}
			// } If this Steering (add Starter)
			
		});
		// } Per Product
		
		//console.log(tmpStarterList);
		// } Find valid Starter
		
		// { Populate Starter Picker
		populatePicker($('#starterPicker'), tmpStarterList);
		// } Populate Starter Picker
		
	}
	
});
// } Steering

// { Starter
$('#starterPicker').on({
	
	change:function() {
		
		currentStarter = $(this).val();
		var tmpTrimList = [];
		
		// { Find valid Trim
		
		// { Per Product
		per(currentPowerProducts, function(i, product) {
			
			// { If this Starter (add Trim)
			if(
				product.variant === currentVariant &&
				product.typeTransom === currentTransom &&
				product.typeSteering === currentSteering &&
				product.typeStart === currentStarter &&
				tmpTrimList.indexOf(product.typeTrim) === -1
			) {
				
				// { Push
				tmpTrimList.push(product.typeTrim);
				// } Push
				
			}
			// } If this Starter (add Trim)
			
		});
		// } Per Product
		
		//console.log(tmpTrimList);
		// } Find valid Trim
		
		// { Populate Trim Picker
		populatePicker($('#trimPicker'), tmpTrimList);
		// } Populate Trim Picker
		
		// { Match Model
		showModel();
		// } Match Model
		
	}
	
});
// } Starter

// { Trim
$('#trimPicker').on({
	
	change:function() {
		
		currentTrim = $(this).val();
		
	}
	
});
// } Trim

// } Features Pickers

// { Buy Button
$('#mfcpicBuy').on({
	
	click:function() {
		
		// { Buy form
		$('#modalHeader').html('Buy it now!');
		$('#modalContent').html(
			'You\'re just one step away from purchasing your new Titan outboard motor! Just select your prefered pickup location & click "Buy" to be taken to our secure credit card processing page' +
			
			// { Pay form
			'<form action="https://vault.safepay.com.au/cgi-bin/test_payment.pl" method="post">' +
			
			// { Silent data
			'<input type="hidden" name="' + currentProduct.model + '" value="' + currentProduct.listPrice.slice(1).replace(',', '') + '" />' +
			'<input type="hidden" name="vendor_name" value="oma" />' +
			// } Silent data
			
			// { Pickup selector
			'<select type="" name="pickup" value="">' +
			
			'</select>' +
			// } Pickup selector
			
			// { Buy button
			'<input type="submit" value="Buy" />' +
			// } Buy button
			
			'</form>' +
			// } Pay form
			
			// { Security tag
			'<a href="https://vault.directone.com.au/html/contacts/vendor_link.html"><img border="0" src="https://vault.directone.com.au/general_images/directlogo.gif" alt="Powered by DirectOne Payment Solutions"></a>' +
			// } Security tag
			
			// { Multiples
			'<div>' +
			
				'<p>If you\'d like to purchase multiple motors, please contact <strong>Peter Osborn</strong> for pricing' +
				
					'<a href="mailto:peter@outboardmotorsaustralia.com.au">peter@outboardmotorsaustralia.com.au</a>' +
					'<p>(M) 0408 853 994</p>' +
				
				'</p>' +
			
			'</div>'
			// } Multiples
			
		);
		// } Buy form
		
		/*
		// { Temp Notice
		$('#modalHeader').html('Coming Soon!');
		$('#modalContent').html(
			'We\'re currently in the process of upgrading to a brand new ordering system. In the meantime please email or call us to place your order!' +
			'<h3>Peter Osborn</h3>' +
			'<a href="mailto:peter@outboardmotorsaustralia.com.au">peter@outboardmotorsaustralia.com.au</a>' +
			'<p>(M) 0408 853 994</p>'
		);
		// } Temp Notice
		*/
		
		// { Show modal
		$('#modalBackground').fadeIn();
		// } Show modal
	}
	
});
// } Buy Button

// } Handlers
// ================

// =================
// { Functions

// { Populate Power Category
function populateCurrentPowerProducts(xPower) {
	
	var reply = [];
	
	// { Per Product (check power)
	per(products, function(i, product) {
		
		// { If matching power (push)
		if(product.powerCategory === xPower) {
			
			// { Push
			reply.push(product);
			// } Push
			
		}
		// } If matching power (push)
		
	});
	// } Per Product (check power)
	
	return reply;
	
}
// } Populate Power Category

function populatePower(xProducts) {
	
	// { Determine Variants
	
	var optVariants = [];
	
	// { Per Current Product (get variant)
	per(xProducts, function(i, product) {
		
		// { If novel Variant (add to Variant list)
		if(optVariants.indexOf(product.variant) === -1) {
			
			// { Push
			optVariants.push(product.variant);
			// } Push
			
		}
		// } If novel Variant (add to Variant list)
		
	});
	// } Per Current Product (get variant)
	
	// } Determine Variants
	
	// { Populate variant picker
	populatePicker($('#variantPicker'), optVariants);
	// } Populate variant picker
	
	//console.log(currentPowerProducts);
	
}

// { Populate Picker
function populatePicker(xPicker, xOptions) {
	
	// { Reset
	xPicker.html('');
	// } Reset
	
	// { Per Option (add to picker)
	for(var i in xOptions) { if(xOptions.hasOwnProperty(i)) {
		
		var option = xOptions[i];
		
		// Add Option
		xPicker.append('<option value="' + option + '">' + option + '</option>');
		
		//console.log(option + ' added to ' + xPicker.attr('id'));
		
	}}
	// } Per Option (add to picker)
	
	// { If Single (make default)
	if(xOptions.length === 1) {
		
		xPicker.attr('disabled', 'disabled');
		
	}
	else {
		
		xPicker.removeAttr('disabled');
		
	}
	// } If Single (make default)
	
	// { Trigger change
	xPicker.change();
	// } Trigger change
	
}
// } Populate Picker

// { Determine Matching Models
function showModel() {
	
	// { Per Product (Validate Options)
	per(currentPowerProducts, function(i, product) {
		
		// { If match
		if(
			product.variant      === currentVariant  &&
			product.typeTransom  === currentTransom  &&
			product.typeSteering === currentSteering &&
			product.typeStart    === currentStarter  &&
			product.typeTrim     === currentTrim
		) {
			
			// { Set current
			currentProduct = product;
			// } Set current
			
			// { Draw Model & Price
			$('#mfcpicModelText').html(product.model);
			$('#mfcpicBuy').html('Buy now price: ' + product.listPrice);
			// } Draw Model & Price
			
			// { Draw Specs
			$('#specsPower').html(product.shaftOutput);
			$('#specsDisplacement').html(product.displacement);
			$('#specsBoreStroke').html(product.boreStroke);
			$('#specsGearRatio').html(product.gearRatio);
			$('#specsRpmRange').html(product.rpmRange);
			$('#specsTransomHeight').html(product.transomHeight);
			$('#specsDryWeight').html(product.dryWeight);
			// } Draw Specs
			
			// { Draw Resources
			$('#resourceManual').attr('href', '../src/pdf/' + product.manual);
			// } Draw Resources
			
		}
		// } If match

	});
	// } Per Product (Validate Options)
	
}
// } Determine Matching Models

// } Functions
// =================