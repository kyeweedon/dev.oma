<?php

	date_default_timezone_set('Australia/NSW');
	
	// { MD5 Hash
	$hashKey = "3CB6C2B1230073DF13FB0EFE3122E7A8";
	// } MD5 Hash
	
	// { Payment URL
	$vpcURL = 'https://migs.mastercard.com.au/vpcpay?';
	// } Payment URL
	
	// { Data
	$hashData = $hashKey;
	
	$access = 'A50ECBA2';
	$amount = $_POST['amount'];
	$commnd = 'pay';
	$locale = 'en';
	$refID  = date('yzHis');
	$merch  = 'OUTMOTCOM01';
	$order  = $_POST['product'] . '@' . $_POST['pickup'];
	$return = 'http://outboardmotorsaustralia.com.au/src/php/vpcReply.php' .
	//$return = 'http://kyeweedon.com/src/php/vpcReply.php' .
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
	header("Location:".$vpcURL);
	// } Send
	
?>