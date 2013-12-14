<?php 
//mock
$mockLoginResponse = (object)array(
		"MockLoginResponse" => (object)array(
			"message" => "You have successfully logged in.",
			"method_status" => "0",
			"firstname" => "Gongli"
		)
	);

echo json_encode($mockLoginResponse);
?>