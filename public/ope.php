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
	function requestBDV() {
		require_once ('ipg2-bdv.php');
		if( isset($_POST) )
		{		
			//Creación de solicitud de pago
			$Payment = new IpgBdvPaymentRequest();
			$Payment->idLetter= $_POST['idLetter']; //Letra de la cédula - V, E o P
			$Payment->idNumber= $_POST['idNumber']; //Número de cédula
			$Payment->amount= $_POST['amount']; //Monto a combrar, DECIMAL
			$Payment->currency= '1'; //Moneda del pago, 0 - Bolivar Fuerte, 1 - Dolar
			$Payment->reference= $_POST['reference']; //Código de referecia o factura
			$Payment->title= 'Servicio de Internet - Uplink'; //Titulo para el pago, Ej: Servicio de Cable
			$Payment->description= $_POST['description']; //Descripción del pago, Ej: Abono mes de marzo 2017
			$Payment->email= $_POST['email'];
			$Payment->cellphone= $_POST['cellphone'];
			$Payment->urlToReturn= $_SERVER['REQUEST_SCHEME']."://".$_SERVER['HTTP_HOST'].'/ipg2-bdv-demo/success.php?token={ID}'; //URL de retrono al finalizar el pago
			$Payment->rifLetter= $_POST['rifLetter'] ?? ''; //Letra de la cédula - V, E o P
			$Payment->rifNumber= $_POST['rifNumber'] ?? ''; //Número de cédula

			$PaymentProcess = new IpgBdv2 ("72914309","EwV6py4q");//Instanciación de la API de pago con usuario y clave
			$response = $PaymentProcess->createPayment($Payment);
			
			if ($response->success == true) // Se procesó correctamente y es necesario redirigir a la página de pago
			{
				if (strtolower(filter_input(INPUT_SERVER, 'HTTP_X_REQUESTED_WITH')) === 'xmlhttprequest') { //si es ajax
					header('Content-type: application/json');
					echo json_encode($response);			
				}
				else{ //si no es ajax
					echo json_encode($response);			

					// header("Location: ".$response->urlPayment); //W
					// die();
				}		
			}
			else
			{
				header('Content-type: application/json');
				echo json_encode($response);
			}

		}
		else{
			echo 'Not a post';
		}

	}
	
}


$conexion = array(
			'user' => '',
			'pass' => '',
			'db'   => '',
			'host' => ''
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
else if($opcion=='GetBDV'){
	$ope->requestBDV();
}

?>
