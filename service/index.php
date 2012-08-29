<!DOCTYPE html>

<html>

	<head>
		
		<!-- Info -->
		<title>Customer service & support</title>
		<meta charset="utf-8"/>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<meta name="description" content="Outboard Motors Australia takes customer service & customer support seriously. We aim to have our customers satisfied & happy"/>
		<meta name="keywords" content="Outboard Motors Australia buy online"/>
		
		<!-- Optiions -->
		<!--[if lt IE 9]>
			<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
		<![endif]-->
		<script type="text/javascript"> 
			
			var $buoop = {
				
				vs:{
					
					i:8,
					f:11,
					o:10.6,
					s:4,
					n:9
					
				}
				
			} 
			$buoop.ol = window.onload; 
			window.onload = function(){ 
			
				try {
					
					if ($buoop.ol) {
						
						$buoop.ol();
						
					}
					
				}
				catch (e) {
					
					// Do nothing
					
				}
				var e = document.createElement("script");
				e.setAttribute("type", "text/javascript");
				e.setAttribute("src", "../src/js/BrowserUpdate.js");
				document.body.appendChild(e);
				
			}
			
		</script>
		
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
		
		<!-- Social Bar -->
		<header id="socialBar">
		
		
		
		</header>
		
		<!-- Page Scaffold -->
		<div class="page1">
		
			<!-- Main Frame -->
			<div class="mainFrame">
				
				<!-- Main Title -->
				<img id="mfTitle" src="../src/images/logoLarge.jpg" alt="Outboard Motors Australia"/>
				
				<!-- Main Header -->
				<div id="mfHeader">
				
					<!-- Logo -->
					<img id="mfhLogo" src="../src/images/logo.jpg" alt="Titan Outboard Motors"/>
					
					<!-- Nav Bar -->
					<nav id="mfhNav">
						
						<a class="mfhnLink" id="mfhnLinks" href="../links">Links</a>
						<a class="mfhnLink mfhnHere" id="mfhnService">Service</a>						
						<a class="mfhnLink" id="mfhnLocations" href="../locations">Locations</a>
						<a class="mfhnLink" id="mfhnProducts" href="../products">Products</a>
						<a class="mfhnLink" id="mfhnAbout" href="../about">About Us</a>
						<a class="mfhnLink" id="mfhnHome" href="../">Home</a>
						
					</nav>
				
				</div>
				
				<!-- Main Content -->
				<div id="mfContent">
					
					<div id="serviceText">
						
						<p>Outboard Motors Australia continues to monitor each and every unit sold through our "Book & Record" program.</p>
						<p>Book & Record is our computer data base interactive system for each owner to check the status of their engine in real-time. This means that you the owner can retrieve important information such as the date of your last engine service, the date the next service is due and a range of technical data designed to keep you informed and ahead of possible engine failure, preventative maintenance not just in time repairs.</p>
						<p>Book & Record improves communication all-round as the data is also available to your dealer our distribution chain and engine manufacturer speeding up warranty approval and recommendation of spares and delivery.</p>
						<p>What's the result? Our commitment to Service can only get better as we commit to deliver a high quality product as well as post sales service excellence.</p>

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
		
		<!-- Preloader -->
		<aside id="preloader"></aside>
		
		<!-- Scripts -->
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery-1.8.0.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js"></script>
		<script src="../src/js/all.js"></script>
		<script src="index.js"></script>
		
		<?php
		
			// { On successful transaction
			if(isset($_GET['code'])) {
				
				$pickup = substr($_GET['pickup'], strpos($_GET['pickup'], ':') + 2);
				
				echo '<script>' .
				
					'alert("Purchase complete!\nA recipt has been sent to ' . $_GET['email'] . ' for your records.\nWe will be in touch when your motor arrives in ' . $pickup . '");' .
					//'alert("Purchase complete!\nWe will review your order & be in touch shortly.");' .
				
				'</script>';
		
			}
			// } On successful transaction
			
		?>
		
	</body>

</html>