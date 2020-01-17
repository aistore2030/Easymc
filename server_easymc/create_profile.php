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
          $query = mysqli_query($mysqli, "INSERT INTO employer SET
             employ_id = '$postjson[employ_id]',
            fname = '$postjson[fname]',
            lname = '$postjson[lname]',
            location = '$postjson[location]',
            info = '$postjson[info]', 
            img_profile = '$postjson[img_profile]', 
          
          
            created_at    = '$today' ,
            updated_at    = '$today' 
          ");
     
    if($query){
     $result = json_encode(array('success'=>true, 'customerid'=>$idcust));
   }else {
      $result = json_encode(array('success'=>false));
    }
    echo $result;

  }


    elseif($postjson['aksi']=='getdata_select_blood'){ 

    $data = array();
      $query = mysqli_query($mysqli, "SELECT * FROM blood_type ORDER BY id DESC LIMIT $postjson[start],$postjson[limit]");

             
    while($row = mysqli_fetch_array($query)){

      $data[] = array(
        'id' => $row['id'],
        'blood_type' => $row['blood_type'],
       
      );
    }

    if($query) {
      $result = json_encode(array('success'=>true, 'result'=>$data));
    }
     
    else $result = json_encode(array('success'=>false));

    echo $result;

  }


    elseif($postjson['aksi']=='getdata_select_work'){ 

    $data = array();
      $query = mysqli_query($mysqli, "SELECT * FROM type_work ORDER BY id DESC LIMIT $postjson[start],$postjson[limit]");

             
    while($row = mysqli_fetch_array($query)){

      $data[] = array(
        'id' => $row['id'],
        'type_works' => $row['type_works'],
       
      );
    }

    if($query) {
      $result = json_encode(array('success'=>true, 'result'=>$data));
    }
     
    else $result = json_encode(array('success'=>false));

    echo $result;

  }

  elseif($postjson['aksi']=='update'){
    
    $query = mysqli_query($mysqli, "UPDATE employer SET 

      employ_id='$postjson[employ_id]',
      fname='$postjson[fname]',
      lname='$postjson[lname]' ,
      location='$postjson[location]' ,
      info='$postjson[info]' ,
       img_profile='$postjson[img_profile]'

  

      WHERE employer_id='$postjson[employer_id]'");

    if($query) { $result = json_encode(array('success'=>true, 'result'=>'success'));}
    else { $result = json_encode(array('success'=>false, 'result'=>'error')); }

    echo $result;

  }

  elseif($postjson['aksi']=='delete'){
    $query = mysqli_query($mysqli, "DELETE FROM employer WHERE employer_id='$postjson[employer_id]'");

    if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
    else $result = json_encode(array('success'=>false, 'result'=>'error'));

    echo $result;

  }

  ?>

