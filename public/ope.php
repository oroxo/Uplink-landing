<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
error_reporting(E_WARNING);

//require( 'checksession.php' );
//$do=new checksession();
//$do->is_enable();
//require( 'bd.php' );
session_start();
header("Content-Type: text/html;charset=utf-8");
class ope{
	public $con;
	public $fecha;
	
	function GetClientsDetails($cedula){
		//echo $cedula;
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "http://uplinkfibra.net/api/v1/GetClientsDetails");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_HEADER, FALSE);

		curl_setopt($ch, CURLOPT_POST, TRUE);

		curl_setopt($ch, CURLOPT_POSTFIELDS, "
		{ \"token\": \"Nmw4dEt6R3VlSVVxUzNDSnVCbENDQT09\",
		  \"cedula\": \"".$cedula."\"}
		");

		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		"Content-Type: text/plain"
		));

		$response = curl_exec($ch);
		curl_close($ch);
		// vardump($response);
		//header("Content-Type: application/json");
		//header("Access-Control-Allow-Origin: https://uplinkdevenezuela.com.ve");
		//echo $cedula;
		echo $response;
		//vardump($response);
		//return $response;
	}
	
	function GetInvoices($idcliente){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "http://uplinkfibra.net/api/v1/GetInvoices");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_HEADER, FALSE);

		curl_setopt($ch, CURLOPT_POST, TRUE);

		curl_setopt($ch, CURLOPT_POSTFIELDS, "
		{ \"token\": \"Nmw4dEt6R3VlSVVxUzNDSnVCbENDQT09\",
		  \"idcliente\": \"".$idcliente."\",
		  \"limit\": \"4\"}
		");

		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		"Content-Type: text/plain"
		));

		$response = curl_exec($ch);
		curl_close($ch);
		// vardump($response);
		//header("Content-Type: application/json");
		//header("Access-Control-Allow-Origin: https://uplinkdevenezuela.com.ve");
		//echo $cedula;
		echo $response;
		//vardump($response);
		//return $response;
	}
	function cors() {
    
		// Allow from any origin
		if (isset($_SERVER['HTTP_ORIGIN'])) {
			// Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
			// you want to allow, and if so:
			header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
			header('Access-Control-Allow-Credentials: true');
			header('Access-Control-Max-Age: 86400');    // cache for 1 day
		}
		
		// Access-Control headers are received during OPTIONS requests
		if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
			
			if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
				// may also be using PUT, PATCH, HEAD etc
				header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
			
			if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
				header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
		
			exit(0);
		}
		
		//echo "You have CORS!";
	}
	
}


$conexion = array(
			'user' => 'smartlinkteluser',
			'pass' => 'sbxZPP6AUMPwjB7',
			'db'   => 'smartlinktelecom',
			'host' => 'localhost'
		);

$opcion='';
$_POST = json_decode(file_get_contents("php://input"),true);
//echo $_POST["opcion"];
if (!empty($_POST["opcion"])) $opcion=$_POST['opcion'];

$ope=new ope();
$ope->cors();


if($opcion=='GetClientsDetails'){
	//echo "test2";
	$cedula=$_POST['cedula'];
	$ope->GetClientsDetails($cedula);
}
else if($opcion=='GetInvoices'){
	$idcliente=$_POST['idcliente'];
	$ope->GetInvoices($idcliente);
}

?>
