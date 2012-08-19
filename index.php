<!DOCTYPE html>

<html>

	<head>
		
		<!-- Info -->
		<title>Outboard Motors Australia</title>
		
		<!-- Styles -->
		<link rel="stylesheet" type="text/css" href="index.css"/>

		
	</head>
	
	<body>
		
		<!-- Modal-->
		<aside id="modalBackground">
		
			<div id="modalFrame">
			
				<div id="modalHeader"></div>
				
				<div id="modalContent"></div>
				
				<div id="modalFooter">
				
					<a id="mfClose">Go Back</a>
				
				</div>
			
			</div>
			
		</aside>
		
		<!-- Page Scaffold -->
		<div class="page1">
		
			<!-- Main Frame -->
			<div class="mainFrame">
				
				<!-- Main Title -->
				<a id="mfTitle" href="">Outboard Motors Australia</a>
				
				<!-- Main Header -->
				<div id="mfHeader">
				
					<!-- Logo -->
					<img id="mfhLogo" src="src/images/logo.jpg"/>
					
					<!-- Nav Bar -->
					<nav id="mfhNav">
						
						<a class="mfhnLink" id="mfhnLinks" href="links">Links</a>
						<a class="mfhnLink" id="mfhnService" href="service">Service</a>						
						<a class="mfhnLink" id="mfhnLocations" href="locations">Locations</a>
						<a class="mfhnLink" id="mfhnProducts" href="products">Products</a>
						<a class="mfhnLink" id="mfhnAbout" href="about">About Us</a>
						<a class="mfhnLink mfhnHere" id="mfhnHome">Home</a>
						
					</nav>
				
				</div>
				
				<!-- Main Content -->
				<div id="mfContent">
					
					<!-- Flow -->
					<div id="mfcFlow">
						
						<!-- Start Tag -->
						<div id="flowTag">
						
							<img src="src/images/icons/arrowLeftGreen.png"/>
							<p>Start Here!</p>
						
						</div>
						
						<!-- Info -->
						<div id="flowMainOuter">
						
							<div id="flowMainInner">
							
								<div id="flowMainInfo">
									
									<div id="flowMainInfoStar">
									
										<img id="fmisImage" src="src/images/starSmall.png"/>
									
									</div>
									<div id="flowMainInfoText"></div>
								
								</div>
							
							</div>
						
						</div>
						
						<!-- Steps -->
						<a class="flowStep" id="flowStep1" href="products" text="Buy your new Titan Outboard right now! Easy, secure, & fast ordering system.">
							<img class="flowStepImage" src="src/images/icons/shoppingCart.png"/>
							<div class="flowStepText">Step 1</div>
						</a>
						<div class="flowStep" id="flowStep2" text="Our trained staff will fully test your motor to ensure you get exactly what you paid for.">
							<img class="flowStepImage" src="src/images/icons/checklist.png"/>
							<div class="flowStepText">Step 2</div>
						</div>
						<div class="flowStep" id="flowStep3" text="Free delivery from our Wyong warehouse to a pickup point of your selection.">
							<img class="flowStepImage" src="src/images/icons/truck.png"/>
							<div class="flowStepText">Step 3</div>
						</div>
						<div class="flowStep" id="flowStep4" text="Your regional manager will contact you when your new motor has arrived.">
							<img class="flowStepImage" src="src/images/icons/businessWomanComment.png"/>
							<div class="flowStepText">Step 4</div>
						</div>
						<div class="flowStep" id="flowStep5" text="Your regional manager will help you with servicing & warranty.">
							<img class="flowStepImage" src="src/images/icons/spanner.png"/>
							<div class="flowStepText">Step 5</div>
						</div>
						
					</div>
					
					<!-- Intro -->
					<div id="mfcIntro">
					
						<div id="mfciNew">
							<img src="src/images/icons/stickerNew.png"/>
						</div>
						<p id="mfciText">
							
							Outboard Motors Australia is delivering an interruption strategy to the Australian outboard motor market, to benefit you!
							Quality product delivered directly to you with free freight!
							
						</p>
						<a id="mfciProducts" href="products">
						
							Buy Now!
						
						</a>
					
					</div>
						
				</div>
				
			</div>
		
		</div>
		<div class="page2">
		
			<!-- Footer Frame -->
			<footer class="footerFrame">
			
				<div id="ffCentre">
				
					<a class="footLink" id="ffcContact">Contact</a>
					
					<a class="footLink" id="ffcShipping">Shipping</a>
					
					<a class="footLink" id="ffcRefunds">Refunds</a>
					
				</div>
			
			</footer>
		
		</div>
		
		<!-- Scripts -->
		<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery-1.8.0.min.js"></script>
		<script src="src/js/all.min.js"></script>
		<script src="index.min.js"></script>
		
		<?php
		
			// { On failed transaction
			if(isset($_GET['code'])) {
		
				echo '<script>' .
				
					'alert("There was an error processing your payment!\nPlease try again.\n\nError: ' . $_GET['note'] . '");' .
				
				'</script>';
		
			}
			// } On failed transaction
			
		?>
		
	</body>

</html>