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

    $query = mysqli_query($mysqli, "INSERT INTO mc_profile SET
      frist_name = '$postjson[frist_name]',
      last_name = '$postjson[last_name]',
      age = '$postjson[age]',
      desc_customer = '$postjson[desc_customer]',

      created_at    = '$today' 
    ");

    $idcust = mysqli_insert_id($mysqli);

    if($query) $result = json_encode(array('success'=>true, 'customerid'=>$idcust));
    else $result = json_encode(array('success'=>false));

    echo $result;

  }

  elseif($postjson['aksi']=='getdata'){
    $data = array();
    $query = mysqli_query($mysqli, "SELECT * FROM mc_profile ORDER BY user_id DESC LIMIT $postjson[start],$postjson[limit]");

    while($row = mysqli_fetch_array($query)){

      $data[] = array(
        'user_id' => $row['user_id'],
        'frist_name' => $row['frist_name'],
        'last_name' => $row['last_name'],
        'age' => $row['age'],
        'desc_customer' => $row['desc_customer'],
        'created_at' => $row['created_at'],

      );
    }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));

    echo $result;

  }
   

?>