<?php

include "db/connect_db.php";

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

	mysqli_set_charset($mysqli, "utf8");
	header('Content-Type: application/json; charset=utf-8');
  session_start();
  $postjson = json_decode(file_get_contents('php://input'), true);

   if($postjson['aksi']=="login"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM users WHERE email='$postjson[email]' AND password='$password'");
    
    $check = mysqli_num_rows($query);

    if($check > 0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'id' => $data['id'],
        'email' => $data['email'],
        'password' => $data['password'],
        'status' => $data['status'],
      );

      if($data['status'] == 'y'){
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      }elseif($data['status'] == 'n'){
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      }
      else{
        $result = json_encode(array('success'=>false, 'msg'=>'Account Inactive')); 
      }

    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
    }

    echo $result;
  }


  

  elseif($postjson['aksi']=="register"){
    $password = md5($postjson['password']);

    $confirm_password = md5($postjson['confirm_password']);
    $query = mysqli_query($mysqli, "INSERT INTO users SET
      email = '$postjson[email]',
      password = '$password',
      confirm_password = '$confirm_password',
      status   = '$postjson[status]'
    ");

    if($query) { 
      $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM users WHERE email='$postjson[email]' AND password='$password'");
    $check = mysqli_num_rows($query);

    if($check > 0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'id' => $data['id'],
        'email' => $data['email'],
        'password' => $data['password'],
        'status' => $data['status'],
      );

      if($data['status'] == 'y' ){
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      }elseif($data['status'] == 'n' ){
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      }
      else{
        $result = json_encode(array('success'=>false, 'msg'=>'Account Inactive')); 
      }

    }
    }
    else {
      $result = json_encode(array('success'=>true, 'msg'=>'register ok'));
    }

    echo $result;
  }
  ?>



