<?php
 session_start();

 if(isset($_POST['btn-login']))
 {
          $username = trim($_POST['username']);
          $user_password = trim($_POST['password']);

          if (dlaps_auth($username, $user_password))
          {
                        echo "OK"; // log in
                        $_SESSION['user_session'] = $username;
          } else {
                    echo "Invalid username or password";
          }
 }

 function dlaps_auth($username, $password)
 {
    $adServer = "ldap://ldapprod.ad.txwesleyan.edu";
    $ldap = ldap_connect($adServer, 636);

    $ldaprdn = $username;
    $ldaprdn = 'txwesleyan' . "\\" . $username;

    $bind = @ldap_bind($ldap, $ldaprdn, $password)
            or die("Invalid username or password");
                        //or die("Could not bind: " . ldap_error($ldap));

    if ($bind) {
        return true;
    } else {
        return false;
    }
    @ldap_close($ldap);
 }
?>
