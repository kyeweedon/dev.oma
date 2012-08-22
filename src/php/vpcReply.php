<?php
	
	//error_reporting(E_ALL); //!DEV
	//ini_set('display_errors', '1'); //!DEV
	
	require('class.phpmailer.php');
	require('class.smtp.php');
	//ini_set("include_path", ".:/path/to/phpmailer/dir");
	
	// ===============
	// { Functions
	
	function getResponseDescription($responseCode) {
	
	    switch ($responseCode) {
	        case "0" : $result = "Transaction Successful"; break;
	        case "?" : $result = "Transaction status is unknown"; break;
	        case "1" : $result = "Unknown Error"; break;
	        case "2" : $result = "Bank Declined Transaction"; break;
	        case "3" : $result = "No Reply from Bank"; break;
	        case "4" : $result = "Expired Card"; break;
	        case "5" : $result = "Insufficient funds"; break;
	        case "6" : $result = "Error Communicating with Bank"; break;
	        case "7" : $result = "Payment Server System Error"; break;
	        case "8" : $result = "Transaction Type Not Supported"; break;
	        case "9" : $result = "Bank declined transaction (Do not contact Bank)"; break;
	        case "A" : $result = "Transaction Aborted"; break;
	        case "C" : $result = "Transaction Cancelled"; break;
	        case "D" : $result = "Deferred transaction has been received and is awaiting processing"; break;
	        case "F" : $result = "3D Secure Authentication failed"; break;
	        case "I" : $result = "Card Security Code verification failed"; break;
	        case "L" : $result = "Shopping Transaction Locked (Please try the transaction again later)"; break;
	        case "N" : $result = "Cardholder is not enrolled in Authentication scheme"; break;
	        case "P" : $result = "Transaction has been received by the Payment Adaptor and is being processed"; break;
	        case "R" : $result = "Transaction was not processed - Reached limit of retry attempts allowed"; break;
	        case "S" : $result = "Duplicate SessionID (OrderInfo)"; break;
	        case "T" : $result = "Address Verification Failed"; break;
	        case "U" : $result = "Card Security Code Failed"; break;
	        case "V" : $result = "Address Verification and Card Security Code Failed"; break;
	        default  : $result = "Unable to be determined"; 
	    }
	    return $result;
	}
	
	//  ----------------------------------------------------------------------------
	
	// This function uses the QSI AVS Result Code retrieved from the Digital
	// Receipt and returns an appropriate description for this code.
	
	// @param vAVSResultCode String containing the QSI AVS Result Code
	// @return description String containing the appropriate description
	
	function displayAVSResponse($avsResultCode) {
	    
	    if ($avsResultCode != "") { 
	        switch ($avsResultCode) {
	            case "Unsupported" : $result = "AVS not supported or there was no AVS data provided"; break;
	            case "X"  : $result = "Exact match - address and 9 digit ZIP/postal code"; break;
	            case "Y"  : $result = "Exact match - address and 5 digit ZIP/postal code"; break;
	            case "S"  : $result = "Service not supported or address not verified (international transaction)"; break;
	            case "G"  : $result = "Issuer does not participate in AVS (international transaction)"; break;
	            case "A"  : $result = "Address match only"; break;
	            case "W"  : $result = "9 digit ZIP/postal code matched, Address not Matched"; break;
	            case "Z"  : $result = "5 digit ZIP/postal code matched, Address not Matched"; break;
	            case "R"  : $result = "Issuer system is unavailable"; break;
	            case "U"  : $result = "Address unavailable or not verified"; break;
	            case "E"  : $result = "Address and ZIP/postal code not provided"; break;
	            case "N"  : $result = "Address and ZIP/postal code not matched"; break;
	            case "0"  : $result = "AVS not requested"; break;
	            default   : $result = "Unable to be determined"; 
	        }
	    } else {
	        $result = "null response";
	    }
	    return $result;
	}
	
	//  ----------------------------------------------------------------------------
	
	// This function uses the QSI CSC Result Code retrieved from the Digital
	// Receipt and returns an appropriate description for this code.
	
	// @param vCSCResultCode String containing the QSI CSC Result Code
	// @return description String containing the appropriate description
	
	function displayCSCResponse($cscResultCode) {
	    
	    if ($cscResultCode != "") {
	        switch ($cscResultCode) {
	            case "Unsupported" : $result = "CSC not supported or there was no CSC data provided"; break;
	            case "M"  : $result = "Exact code match"; break;
	            case "S"  : $result = "Merchant has indicated that CSC is not present on the card (MOTO situation)"; break;
	            case "P"  : $result = "Code not processed"; break;
	            case "U"  : $result = "Card issuer is not registered and/or certified"; break;
	            case "N"  : $result = "Code invalid or not matched"; break;
	            default   : $result = "Unable to be determined"; break;
	        }
	    } else {
	        $result = "null response";
	    }
	    return $result;
	}
	
	//  -----------------------------------------------------------------------------
	
	// This method uses the verRes status code retrieved from the Digital
	// Receipt and returns an appropriate description for the QSI Response Code
	
	// @param statusResponse String containing the 3DS Authentication Status Code
	// @return String containing the appropriate description
	
	function getStatusDescription($statusResponse) {
	    if ($statusResponse == "" || $statusResponse == "No Value Returned") {
	        $result = "3DS not supported or there was no 3DS data provided";
	    } else {
	        switch ($statusResponse) {
	            case "Y"  : $result = "The cardholder was successfully authenticated."; break;
	            case "E"  : $result = "The cardholder is not enrolled."; break;
	            case "N"  : $result = "The cardholder was not verified."; break;
	            case "U"  : $result = "The cardholder's Issuer was unable to authenticate due to some system error at the Issuer."; break;
	            case "F"  : $result = "There was an error in the format of the request from the merchant."; break;
	            case "A"  : $result = "Authentication of your Merchant ID and Password to the ACS Directory Failed."; break;
	            case "D"  : $result = "Error communicating with the Directory Server."; break;
	            case "C"  : $result = "The card type is not supported for authentication."; break;
	            case "S"  : $result = "The signature on the response received from the Issuer could not be validated."; break;
	            case "P"  : $result = "Error parsing input from Issuer."; break;
	            case "I"  : $result = "Internal Payment Server system error."; break;
	            default   : $result = "Unable to be determined"; break;
	        }
	    }
	    return $result;
	}
	
	//  -----------------------------------------------------------------------------
	   
	// If input is null, returns string "No Value Returned", else returns input
	function null2unknown($data) {
	    if ($data == "") {
	        return "No Value Returned";
	    } else {
	        return $data;
	    }
	} 
	    
	// } Functions
	// ===============

	$hashKey = "3CB6C2B1230073DF13FB0EFE3122E7A8";
	
	// If there has been a merchant secret set then sort and loop through all the
	// data in the Virtual Payment Client response. While we have the data, we can
	// append all the fields that contain values (except the secure hash) so that
	// we can create a hash and validate it against the secure hash in the Virtual
	// Payment Client response.
	
	// NOTE: If the vpc_TxnResponseCode in not a single character then
	// there was a Virtual Payment Client error and we cannot accurately validate
	// the incoming data from the secure hash. */
	
	// get and remove the vpc_TxnResponseCode code from the response fields as we
	// do not want to include this field in the hash calculation
	$vpc_Txn_Secure_Hash = $_GET["vpc_SecureHash"];
	unset($_GET["vpc_SecureHash"]); 
	
	// set a flag to indicate if hash has been validated
	$errorExists = false;
	
	if (
		$_GET["vpc_TxnResponseCode"] != "7"                 &&
		$_GET["vpc_TxnResponseCode"] != "No Value Returned" ){
	
	    $hashData = $hashKey;
	
	    // sort all the incoming vpc response fields and leave out any with no value
	    foreach($_GET as $key => $value) {
	    	
	        if ($key != "vpc_Secure_Hash" or strlen($value) > 0) {
	        	
	            $hashData .= $value;
	            
	        }
	        
	    }
	    
	    // Validate the Secure Hash (remember MD5 hashes are not case sensitive)
		// This is just one way of displaying the result of checking the hash.
		// In production, you would work out your own way of presenting the result.
		// The hash check is all about detecting if the data has changed in transit.
	    if (strtoupper($vpc_Txn_Secure_Hash) == strtoupper(md5($hashData))) {
	        
	        $hashValidated = "<FONT color='#00AA00'><strong>CORRECT</strong></FONT>";
	        
	    }
	    else {
	        
	        $hashValidated = "<FONT color='#FF0066'><strong>INVALID HASH</strong></FONT>";
	        $errorExists = true;
	        
	    }
	    
	}
	else {
	    
	    $hashValidated = "<FONT color='orange'><strong>Not Calculated - No 'SECURE_SECRET' present.</strong></FONT>";
	    
	}
	
	// Define Variables
	// ----------------
	// Extract the available receipt fields from the VPC Response
	// If not present then let the value be equal to 'No Value Returned'
	
	// Standard Receipt Data
	$amount          = null2unknown($_GET["vpc_Amount"]);
	$locale          = null2unknown($_GET["vpc_Locale"]);
	$command         = null2unknown($_GET["vpc_Command"]);
	$message         = null2unknown($_GET["vpc_Message"]);
	$version         = null2unknown($_GET["vpc_Version"]);
	$orderInfo       = null2unknown($_GET["vpc_OrderInfo"]);
	$merchantID      = null2unknown($_GET["vpc_Merchant"]);
	$txnResponseCode = null2unknown($_GET["vpc_TxnResponseCode"]);
	
	$batchNo         = array_key_exists("vpc_BatchNo", $_GET)          ? $_GET["vpc_BatchNo"]          : "No Value Returned";
	$cardType        = array_key_exists("vpc_Card", $_GET)             ? $_GET["vpc_Card"]             : "No Value Returned";
	$receiptNo       = array_key_exists("vpc_ReceiptNo", $_GET)        ? $_GET["vpc_ReceiptNo"]        : "No Value Returned";
	$authorizeID     = array_key_exists("vpc_AuthorizeId", $_GET)      ? $_GET["vpc_AuthorizeId"]      : "No Value Returned";
	$merchTxnRef     = array_key_exists("vpc_MerchTxnRef", $_GET)      ? $_GET["vpc_MerchTxnRef"]      : "No Value Returned";
	$transactionNo   = array_key_exists("vpc_TransactionNo", $_GET)    ? $_GET["vpc_TransactionNo"]    : "No Value Returned";
	$acqResponseCode = array_key_exists("vpc_AcqResponseCode", $_GET)  ? $_GET["vpc_AcqResponseCode"]  : "No Value Returned";
	
	// CSC Receipt Data
	$cscResultCode   = array_key_exists("vpc_CSCResultCode", $_GET)    ? $_GET["vpc_CSCResultCode"]    : "No Value Returned";
	$cscACQRespCode  = array_key_exists("vpc_AcqCSCRespCode", $_GET)   ? $_GET["vpc_AcqCSCRespCode"]   : "No Value Returned";
	
	// AVS Receipt Data
	$avs_City        = array_key_exists("vpc_AVS_City", $_GET)         ? $_GET["vpc_AVS_City"]         : "No Value Returned";
	$avs_Country     = array_key_exists("vpc_AVS_Country", $_GET)      ? $_GET["vpc_AVS_Country"]      : "No Value Returned";
	$avs_Street01    = array_key_exists("vpc_AVS_Street01", $_GET)     ? $_GET["vpc_AVS_Street01"]     : "No Value Returned";
	$avs_PostCode    = array_key_exists("vpc_AVS_PostCode", $_GET)     ? $_GET["vpc_AVS_PostCode"]     : "No Value Returned";
	$avs_StateProv   = array_key_exists("vpc_AVS_StateProv", $_GET)    ? $_GET["vpc_AVS_StateProv"]    : "No Value Returned";
	$avsRequestCode  = array_key_exists("vpc_AVSRequestCode", $_GET)   ? $_GET["vpc_AVSRequestCode"]   : "No Value Returned";
	$avsResultCode   = array_key_exists("vpc_AVSResultCode", $_GET)    ? $_GET["vpc_AVSResultCode"]    : "No Value Returned";
	$vACQAVSRespCode = array_key_exists("vpc_AcqAVSRespCode", $_GET)   ? $_GET["vpc_AcqAVSRespCode"]   : "No Value Returned";
	
	// 3-D Secure Data
	$verType         = array_key_exists("vpc_VerType", $_GET)          ? $_GET["vpc_VerType"]          : "No Value Returned";
	$verStatus       = array_key_exists("vpc_VerStatus", $_GET)        ? $_GET["vpc_VerStatus"]        : "No Value Returned";
	$token           = array_key_exists("vpc_VerToken", $_GET)         ? $_GET["vpc_VerToken"]         : "No Value Returned";
	$verSecurLevel   = array_key_exists("vpc_VerSecurityLevel", $_GET) ? $_GET["vpc_VerSecurityLevel"] : "No Value Returned";
	$enrolled        = array_key_exists("vpc_3DSenrolled", $_GET)      ? $_GET["vpc_3DSenrolled"]      : "No Value Returned";
	$xid             = array_key_exists("vpc_3DSXID", $_GET)           ? $_GET["vpc_3DSXID"]           : "No Value Returned";
	$acqECI          = array_key_exists("vpc_3DSECI", $_GET)           ? $_GET["vpc_3DSECI"]           : "No Value Returned";
	$authStatus      = array_key_exists("vpc_3DSstatus", $_GET)        ? $_GET["vpc_3DSstatus"]        : "No Value Returned";
	
	// *******************
	// END OF MAIN PROGRAM
	// *******************
	
	// FINISH TRANSACTION - Process the VPC Response Data
	// =====================================================
	// For the purposes of demonstration, we simply display the Result fields on a
	// web page.
	
	// Show 'Error' in title if an error condition
	$errorTxt = "";
	
	// Show this page as an error page if vpc_TxnResponseCode equals '7'
	if ($txnResponseCode == "7" || $txnResponseCode == "No Value Returned" || $errorExists) {
		
	    $errorTxt = "Error ";
	    
	}
	
	// End Processing
	
	// This method uses the QSI Response code retrieved from the Digital
	// Receipt and returns an appropriate description for the QSI Response Code
	//
	// @param $responseCode String containing the QSI Response Code
	//
	// @return String containing the appropriate description
	//
	
	/* // Incoming
	[vpc_AVSRequestCode] => Z
	[vpc_AVSResultCode] => Unsupported
	[vpc_AcqAVSRespCode] => Unsupported
	[vpc_AcqCSCRespCode] => Unsupported
	[vpc_AcqResponseCode] => 00
	[vpc_Amount] => 79900
	[vpc_AuthorizeId] => 342952
	[vpc_BatchNo] => 20120816
	[vpc_CSCResultCode] => Unsupported
	[vpc_Card] => MC
	[vpc_Command] => pay
	[vpc_Locale] => en
	[vpc_MerchTxnRef] => 12228045651
	[vpc_Merchant] => TESTOUTMOTCOM01
	[vpc_Message] => Approved
	[vpc_OrderInfo] => TP3AMHS@NSW: Moree
	[vpc_ReceiptNo] => 222912342952
	[vpc_SecureHash] => 679B25BD9A4870A8FAEDD5ABEC3AE233
	[vpc_TransactionNo] => 2000000005
	[vpc_TxnResponseCode] => 0
	[vpc_Version] => 1
	*/ // Incoming
	
	// { Build Post
	$postData['code'] = $txnResponseCode;
	$postData['note'] = $message;
	// } Build Post
	
	// { Post
	
	// { Success
	if($txnResponseCode == 0 && $txnResponseCode != 'E') {
		/*
		// { Email Sales
		
		// { Setup Mailer
		$mail = new PHPMailer();
		
		$mail->IsSMTP();
		$mail->SMTPDebug = 1; //!DEV
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = 'ssl';
		
		$mail->Host = 'smtp.gmail.com';
		$mail->Port = 465;
		$mail->Username = 'noreply@outboardmotorsaustralia.com.au';
		$mail->Password = 'omaauto12';
		// } Setup Mailer
		
		// { Mail
		$mail->SetFrom('noreply@outboardmotorsaustralia.com.au', 'PURCHASE ORDER');
		$mail->AddAddress('sales@outboardmotorsaustralia.com.au');
		$mail->AddAddress('kye@outboardmotorsaustralia.com.au');
		
		$mail->Subject = $_GET['product'] . ' to ' . $_GET['pickup'];
		$mail->Body = 'Purchase reciept: ' . $receiptNo . "\n\nName: " . $_GET['name'] . "\r\nPhone: " . $_GET['phone'] . "\r\nEmail: " . $_GET['email'] . "\r\nProduct: " . $_GET['product'] . "\r\nPickup: " . $_GET['pickup'];
		
		$mail->Send() or die('Error: ' . $mail->ErrorInfo);
		// } Mail
		
		// } Email Sales
		
		// { Email Customer
		
		// { Setup Mailer
		$mail = new PHPMailer();
		
		$mail->IsSMTP();
		$mail->SMTPDebug = 1; //!DEV
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = 'ssl';
		
		$mail->Host = 'smtp.gmail.com';
		//$mail->Host = 'ssl://smtp.googlemail.com';
		$mail->Port = 465;
		$mail->Username = 'noreply@outboardmotorsaustralia.com.au';
		$mail->Password = 'omaauto12';
		// } Setup Mailer
		
		// { Mail
		$mail->SetFrom('noreply@outboardmotorsaustralia.com.au', 'Outboard Motors Australia');
		$mail->AddAddress($_GET['email']);
		
		$mail->Subject = 'Purchase reciept: ' . $receiptNo;
		$mail->Body = 'Hi ' . $_GET['name'] . ',' .
			"\r\n" .
			'Thank you for your order! Please keep this email as a record of your purchase.' .
			"\r\n" .
			"\r\n" .
			'Product: ' . $_GET['product'] . 
			"\r\n" .
			'Purchase price: $' . substr($amount, 0, -2) .
			"\r\n" .
			'Pickup location: ' . $_GET['pickup'] .
			"\r\n\r\n" .
			'Once your order has arrived, we will call you to let you know.' .
			"\r\n" .
			'Thanks again, & don\'t hesitate to contact us if we can help you further.';
		
		$mail->Send() or die('Error: ' . $mail->ErrorInfo);
		// } Mail
		
		// } Email Customer
		*/
		header('location:../../service/index.php?code=' . $txnResponseCode . '&note=' . $message . '&email=' . $_GET['email'] . '&pickup=' . $_GET['pickup']);
		
	}
	// } Success
	// { Failure
	else {
		
		header('location:../../index.php?code=' . $txnResponseCode . '&note=' . $message);
		
	}
	// } Failure
	
	// } Post
	
?>