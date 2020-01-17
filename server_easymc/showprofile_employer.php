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
  

    if($postjson['aksi']=='getdata'){
    $data = array();
    $query = mysqli_query($mysqli, "SELECT * FROM employer ORDER BY employer_id DESC LIMIT $postjson[start],$postjson[limit]");


    while($row = mysqli_fetch_array($query)){

      $data[] = array(
        'employer_id' => $row['employer_id'],
        'employ_id' => $row['employ_id'],
        'fname' => $row['fname'],
        'lname' => $row['lname'],
        'location' => $row['location'],
        'info' => $row['info'],  
        'img_profile' => $row['img_profile'],
        'created_at' => $row['created_at'],

      );
    }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));

    echo $result;

  }

  
  ?>