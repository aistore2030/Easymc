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


    elseif($postjson['aksi']=='getdata'){ 

    $id = $postjson["id"];
    $data = array();
   
     $query = mysqli_query($mysqli, "  SELECT employer.* , users.id FROM employer LEFT JOIN users ON employer.employ_id = users.id WHERE users.id  =" .$id);
             
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

      // $query = mysqli_query($mysqli, "SELECT * FROM employer ORDER BY id DESC LIMIT $postjson[start],$postjson[limit]");

    // $query = mysqli_query($mysqli, "  SELECT * FROM users INNER JOIN employer ON users.id = employer.employ_id 
    //   WHERE employer.employ_id ") ;
           // $target_path = "uploads/";
 
          // $target_path = $target_path . basename( $_FILES['file']['name']);
           
          // if (move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
          //     echo "Upload and move success";
          // } else {
          // echo $target_path;
          //     echo "There was an error uploading the file, please try again!";
          // }
  ?>

