<?php
session_start();

//If the user is not logged in, redirect the user to login.html page
if(!isset($_SESSION['user_session']))
{
  header("Location: login.html");
}

?>
<html>
<body>
        <p>
        <strong>Hello <?php echo $_SESSION['user_session']; ?></strong>! Welcome Txwes Carryout .
        </p>
        <p><a href="logout.php">Log out</a>
        </p>
</body>
</html>
