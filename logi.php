<?php
    include "connect.php"; // Using include instead of @include to handle errors gracefully
        $email = $_POST["email"];
        $password = $_POST["password"];

       

        // Use prepared statement to prevent SQL injection
        $query = "INSERT INTO `info`(`Email`, `Password`) VALUES ('$email','$password')";
        // $query = "INSERT INTO info (Email, Password) VALUES ($email,$password)";
        $stmt = mysqli_query($conn, $query);
        // mysqli_stmt_bind_param($stmt, "ss", $username, $hashed_password);
        // $result = mysqli_stmt_execute($stmt);

        if($stmt){
            echo '<script> 
                    window.location.href="#";  
                    alert("Welcome!!!");
                </script>';
        }else{
            // echo '<script>
            //         window.location.href="user_login.php";
            //         alert("Login failed. Invalid username or password!!!");
            //     </script>';
        }
?>

