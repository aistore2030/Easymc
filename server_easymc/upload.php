
<?php
include "db/connect_db.php";
header('Access-Control-Allow-Origin: *');
// $target_path = "uploads/";

$targetDir = "uploads/";
$fileName = basename($_FILES["file"]["name"]);
$targetFilePath = $targetDir . $fileName;
// $target_path = $target_path . basename( $_FILES['file']['name']);

 $target_path=$_POST["img_profile"];
if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
	 $query = mysqli_query($mysqli, "INSERT employer SET img_profile ='.$targetFilePath.' WHERE employer_id='$postjson[employer_id]'");



    header('Content-type: application/json');
    $data = ['success' => true, 'message' => 'Upload and move success'];
    echo json_encode( $data );
} else{
    header('Content-type: application/json');
    $data = ['success' => false, 'message' => 'There was an error uploading the file, please try again!'];
    echo json_encode( $data );
}
 
?>
