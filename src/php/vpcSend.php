<?php

	// { MD5 Hash
	$hashKey = "002FD0D502FC0DC3FB348E43C74E72EE";
	// } MD5 Hash
	
	// { Payment URL
	$vpcURL = 'https://migs.mastercard.com.au/vpcpay?';
	// } Payment URL
	
	// { Data
	$hashData = $hashKey;
	
	$access = 'A1706E8D';
	$amount = $_POST['amount'];
	$commnd = 'pay';
	$locale = 'en';
	$refID  = date(yzHis);
	$merch  = 'TESTOUTMOTCOM01';
	$order  = $_POST['product'] . '@' . $_POST['pickup'];
	$return = 'http://dev.kye.io/oma/src/php/vpcReply.php' .
		'?name='    . $_POST['name']   . 
		'&phone='   . $_POST['phone']  . 
		'&email='   . $_POST['email']  .
		'&pickup='  . $_POST['pickup'] .
		'&product=' . $_POST['product'];
	$versn  = '1';
	// } Data
	
	// { Log
	//echo $access . $amount . $commnd . $locale . $refID . $merch . $order . $return . $versn;
	// } Log 
	
	// { Build URL
	$vpcURL .= 'vpc_AccessCode'  . '=' . urlencode($access) . '&';
	$vpcURL .= 'vpc_Amount'      . '=' . urlencode($amount) . '&';
	$vpcURL .= 'vpc_Command'     . '=' . urlencode($commnd) . '&';
	$vpcURL .= 'vpc_Locale'      . '=' . urlencode($locale) . '&';
	$vpcURL .= 'vpc_MerchTxnRef' . '=' . urlencode($refID)  . '&';
	$vpcURL .= 'vpc_Merchant'    . '=' . urlencode($merch)  . '&';
	$vpcURL .= 'vpc_OrderInfo'   . '=' . urlencode($order)  . '&';
	$vpcURL .= 'vpc_ReturnURL'   . '=' . urlencode($return) . '&';
	$vpcURL .= 'vpc_Version'     . '=' . urlencode($versn)  . '&';
	
	$hashData .= $access . $amount . $commnd . $locale . $refID . $merch . $order . $return . $versn;
	
	$vpcURL .= 'vpc_SecureHash=' . strtoupper(md5($hashData));
	// } Build URL
	
	// { Send
	//echo $vpcURL;
	header("Location: ".$vpcURL);
	// } Send
	
?>