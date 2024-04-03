 <?php
 
        $servername = "localhost";
        $username = "your_username";
        $password = "password";
        $dbname = "your_database";

        $conn = new mysqli("$servername", "$username,"password", "$dbname");

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
            echo"connection successful";
        
    ?>