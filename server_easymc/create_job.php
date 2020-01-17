<?php
 
 include "db/connect_db.php";

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");


  mysqli_set_charset($mysqli, "utf8");
  header('Content-Type: application/json; charset=utf-8');

  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');



  if($postjson['aksi']=='add'){

  	$target_path = "uploads/";
	$target_path = $target_path . basename( $_FILES['file']['name']);
if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
    $query = mysqli_query($mysqli, "INSERT INTO jobs SET
       employ_id = '$postjson[employ_id]',
        fname = '$postjson[fname]',
         iname = '$postjson[iname]',
      jobname = '$postjson[jobname]',
      location = '$postjson[location]',
      budget_start = '$postjson[budget_start]',
       budget_end = '$postjson[budget_end]',
      img_profile = '$postjson[target_path]',


      created_at    = '$today' 
      updated_at    = '$today' 
    ");
     

    if($query) $result = json_encode(array('success'=>true, 'customerid'=>$idcust));
    else $result = json_encode(array('success'=>false));

    echo $result;
}

  }


  ?>

  