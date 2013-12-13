<?php 
//mock
var mockLoginResponse = (object)array(
		"MockLoginResponse" => (object)array(
			"Message" => "You have successfully logged in.",
			"MethodStatus" => "0",
			"UserName" => "Gongli"
		)
	)




echo json_encode(mockLoginResponse);
?>