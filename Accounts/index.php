<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="../Tools/icons/icons/apple-touch-icon-iphone-60x60.png">
  <link rel="icon" sizes="60x60" href="../Tools/icons/icons/apple-touch-icon-ipad-76x76.png">
  <link rel="icon" sizes="114x114" href="../Tools/icons/icons/apple-touch-icon-iphone-retina-120x120.png">
  <link rel="icon" sizes="144x144" href="../Tools/icons/icons/apple-touch-icon-ipad-retina-152x152.png">
  <link rel="stylesheet" href="../Tools/css/bootstrap.min.css">
  <link rel="stylesheet" href="../Tools/FontAwesome/css/all.css">
  <link rel="stylesheet" href="../Tools/css/uniform.css">
  <link rel="stylesheet" href="../Tools/css/responsive.css">
  <title>Register</title>
  <script src="../Tools/js/jquery.js"></script>
</head>

<body>
  <!-- Navigation -->
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" class="mr-5" href="#">
      <img src="../Tools/icons/icon.png" class="img-fluid icon" alt="">
      <img src="../Tools/icons/title.png" class="img-fluid title" alt=""></a>
    <div class="d-flex justify-content-end">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-5">
          <a class="nav-link" href="../index.php">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item mr-5">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item mr-5">
          <a class="nav-link" href="#">Contacts</a>
        </li>
        <li class="nav-item dropdown mr-5">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Products</a>
            <a class="dropdown-item" href="#">Services</a>
          </div>
        </li>
        <li class="nav-item dropdown mr-5 active">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Accounts
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="login.php">Login</a>
            <a class="dropdown-item" href="index.php">Register</a>
          </div>
        </li>
      </ul>
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-lg bg-light sticky-top bg-light navbar-light shadow mainnav p-1">
    <img src="../Tools/icons/title.png" class="img-fluid company-title title ml-3" alt="">
    <div class="d-flex justify-content-end">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-5 active">
          <a class="nav-link" href="../index.php">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item mr-5">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item mr-5">
          <a class="nav-link" href="#">Contacts</a>
        </li>
        <li class="nav-item dropdown mr-5">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Products</a>
            <a class="dropdown-item" href="#">Services</a>
          </div>
        </li>
        <li class="nav-item dropdown mr-5">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-users"></i> Account
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="Accounts/login.php"><i class="fas fa-sign-in-alt"></i> Login</a>
            <a class=" dropdown-item" href="index.php"><i class="fas fa-user-plus"></i> Register</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>



  <!-- Content for large width devices -->
  <div class="container-fluid no-gutters form-large-width-devices">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="shadow col-12 mt-5 p-3 bg-warning form-body">
          <div class="row">
            <div class="col-5 mr-3">
              <img class="img-fluid page-icon" src="../Tools/icons/icon.png">
            </div>
            <form method="POST" action="" class="col-6" id="form-lg-device">
              <div class="d-flex justify-content-lg-center col-12">
                <img src="../Tools/icons/title.png" class="img-fluid title">
              </div>
              <div class="form-group mb-3 mt-3">
                <label for="fullname"> Fullname:</label>
                <input type="text" name="fullname" id="fullname">
                <span id="fullnameErr" class="text-warning"></span>
              </div>
              <div class="form-group mb-3 mt-3">
                <label for="Username"> Username:</label>
                <input type="text" name="username" id="username">
                <span id="usernameErr" class="text-warning"></span>
              </div>
              <div class="form-group mb-3 mt-3">
                <label for="Email"> Email:</label>
                <input type="text" name="email" id="email">
                <span id="emailErr" class="text-warning"></span>
              </div>
              <div class="form-group mb-3 mt-3">
                <label for="Password"> Password:</label>
                <input type="password" name="password" id="password">
                <span id="passwordErr" class="text-warning"></span>
              </div>
              <div class="form-group mb-3 mt-3">
                <label for="password"> Re-enter password:</label>
                <input type="password" id="conpwd" name="password">
                <span id="conpwdErr" class="text-warning"></span>
              </div>
              <div class="form-group mb-3 mt-3">
                <div class="d-flex justify justify-content-lg-left">
                  <input type="submit" id="submit" class="btn btn-warning w-100 btn-lg" value="Register">
                </div>
              </div>
              <div class="d-flex justify-content-center mt-3">
                <p> Already have an account <a class="btn btn-outline-warning" href="login.php">Log in</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Subscribe to our News Letter</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form method="POST" action="">
            <div class="alert alert-success subscribe-alert">
              <span class="text-center text-success" id="con-message-auth"></span>
            </div>
            <div class="d-flex justify-content-center">
              <div class="spinner-grow text-warning spinner" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-warning spinner" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-warning spinner" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div class="form-group">
              <label for="email">Enter your Email address</label>
              <input type="email" class="mt-3 mb-2" id="mail-auth-placeholder">
              <span id="mail-auth-placeholderErr" class="text-warning mb-2"></span>
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-warning btn-lg shadow" id="auth-user-subscribe" value="Subscribe" name="submit_sm_device">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>















  <!-- Content for small width devices mobilephones -->
  <div class="container-fluid no-gutters form-small-width-devices">
    <div class="col-12">
      <img class="img-fluid position-fixed h-100 w-100 form-background" src="../Tools/icons/store-1338629_1920.jpg">
    </div>
    <div class="container">
      <div class="d-flex justify-content-center mt-5 form-body">
        <form method="POST" action="" class="col-12 w-100" id="form-sm-device" autocomplete="off">
          <div class="d-flex justify-content-lg-center mb-5 mt-3 ml-4">
            <img src="../Tools/icons/title.png" class="img-fluid title ml-5">
          </div>
          <div class="form-group mb-3 mt-3">
            <label for="fullname"> Fullname:</label>
            <input type="text" name="fullname" id="fullname-sm-device">
            <span id="fullnameErr-sm-device" class="text-warning"></span>
          </div>
          <div class="form-group mb-3 mt-3">
            <label for="Username"> Username:</label>
            <input type="text" name="username" id="username-sm-device">
            <span id="usernameErr-sm-device" class="text-warning"></span>
          </div>
          <div class="form-group mb-3 mt-3">
            <label for="Email"> Email:</label>
            <input type="text" name="email" id="email-sm-device">
            <span id="emailErr-sm-device" class="text-warning"></span>
          </div>
          <div class="form-group mb-3 mt-3">
            <label for="Password"> Password:</label>
            <input type="password" name="password" id="password-sm-device">
            <span id="passwordErr-sm-device" class="text-warning"></span>
          </div>
          <div class="form-group mb-3 mt-3">
            <label for="password"> Re-enter password:</label>
            <input type="password" id="conpwd-sm-device" name="password">
            <span id="conpwdErr-sm-device" class="text-warning"></span>
          </div>
          <div class="form-group mb-3 mt-3">
            <div class="d-flex justify justify-content-lg-left">
              <input type="submit" id="submit-sm-device" class="shadow btn btn-warning w-100 btn-lg " value="Register">
            </div>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <small>
              <p> Already have an account <a class="btn btn-outline-warning shadow" href="login.php">Log in</a></p>
            </small>
          </div>
        </form>
      </div>
    </div>
  </div>














  <!-- footer content for large width devices -->
  <!-- <footer class="large-width-devices mt-5">
    <section class="mt-5">
      <div class="jumbotron-fluid bg-light mt-5">
        <div class="container">
          <div class="row grid-divider">
            <div class="col-4 my-5 border-right">
              <div class="text-left">
                <h6 class="text-center font-weight-bolder lead">What we offer</h6>
                <div class="text-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="javascript:void(0)">Products</a></li>
                    <li class="list-group-item"><a href="javascript:void(0)">Services</a></li>
                    <li class="list-group-item"><a href="javascript:void(0)">Advertise</a></li>
                    <li class="list-group-item"><a href="javascript:void(0)">Partner with us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-4 my-5 border-right">
              <div class="text-left">
                <h6 class="text-center font-weight-bolder lead">Get Intouch</h6>
                <div class="text-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="javascript:void(0)">Contacts</a></li>
                    <li class="list-group-item"><a href="javascript:void(0)">Location</a></li>
                    <li class="list-group-item"><a href="javascript:void(0)">Social Media</a></li>
                    <li class="list-group-item"><a href="javascript:void(0)">Comment</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-4 my-5">
              <div class="text-left">
                <h6 class="text-center font-weight-bolder lead">About Us</h6>
                <div class="text-body">
                  <ul class="list-group">
                    <li class="list-group-item"><a href="javascript:void(0)">Who we are</a></li>
                    <li class="list-group-item"><a href="javascript:void(0)">What we do</a></li>
                    <li class="list-group-item"><a href="javascript:void(0)" href="Terms & Conditions">T&Cs</a></li>
                    <li class="list-group-item"><a href="javascript:void(0)">Get Involved</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-lg-center col-6">
              <img src="../Tools/icons/title.png" class="img-fluid title mt-5">
            </div>
            <div class="col-6">
              <p class="text-center lead">Subscribe to our newsletter</p>
              <div class="alert alert-success text-center">
                <span class="text-success" id="server_message_lg_devices"></span>
              </div>
              <div class="d-flex justify-content-center">
                <div class="spinner-grow text-warning spinner" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-warning spinner" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-warning spinner" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <form method="post" class="form-inline">
                  <div class="form-group">
                    <input type="email" id="sender_email_lg_devices" class="ml-3 mr-2" placeholder="Enter your Email address">
                    <span id="email_Err_lg_devices" class="text-warning"></span>
                  </div>
                  <div class="form-group">
                    <input type="submit" value="Subscribe" id="subscribe_lg_devices" class="btn btn-warning btn-lg shadow ml-2">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="col-6 mt-5">
            <div class="text-center">
              <i class="fas fa-quote-left"></i>
            </div>
            <div class="blockquote text-bold text-center">
              Style is a way of saying who you are without having to speak
            </div>
          </div>
        </div>
        <ul class="col-12 d-flex justify-content-lg-center large">
          <a a href="javascript:void(0)"> <i class="fab fa-facebook mr-3"></i></a>
          <a a href="javascript:void(0)"> <i class="fab fa-instagram mr-3"></i></a>
          <a a href="javascript:void(0)"> <i class="fas fa-envelope mr-3"></i></a>
          <a a href="javascript:void(0)"> <i class="fab fa-twitter mr-3"></i></a>
          <a a href="javascript:void(0)"> <i class="fab fa-linkedin mr-3"></i></a>
          <a a href="javascript:void(0)"> <i class="fab fa-snapchat mr-3"></i></a>
        </ul>
        <div class="d-flex justify-content-center mx-auto bg-light  pb-5">
          <p class="text-muted">&copy; 2020</p>
        </div>
      </div>
    </section>
  </footer> -->
  <section class="content-for-large-width-screens">
    <footer class="content-for-large-width-screen mt-5 position-absolute w-100">
      <div class="container-fluid p-0 no gutters">
        <div class="jumbotron mb-0 mt-5 w-100">
          <div class="d-flex justify-content-start">
            <img class="img-fluid title pr-3 border-right border-dark ml-3" src="../Tools/icons/title.png">
            <nav class="navbar-expand-lg w-100 navbar-light">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Account</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="d-flex justify-content-end mt-n3">
            <div class="col-5 mt-n5">
              <h6 class="text-center">Subscribe to our newsletter</h6>
              <p class="text-body text-center">Receive the latest news on fashion and trends directly to your
                email address
              </p>
              <div class="d-flex justify-content-center">
                <button class="btn btn-warning p-3 shadow" data-toggle="modal" data-target="#Modal">Subscribe</button>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <ul class="d-inline-block">
              <a a href="javascript:void(0)"> <i class="fab fa-facebook mr-3"></i></a>
              <a a href="javascript:void(0)"> <i class="fab fa-instagram mr-3"></i></a>
              <a a href="javascript:void(0)"> <i class="fas fa-envelope mr-3"></i></a>
              <a a href="javascript:void(0)"> <i class="fab fa-twitter mr-3"></i></a>
              <a a href="javascript:void(0)"> <i class="fab fa-linkedin mr-3"></i></a>
              <a a href="javascript:void(0)"> <i class="fab fa-snapchat mr-3"></i></a>
            </ul>
          </div>
          <div class="d-flex justify-content-center">
            <p class="lead"> &copy; 2020 </p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  </section>











  <!-- Footer content for small width devices -->
  <footer class="small-width-devices mt-5 h-100 bg-light">
    <section>

      <nav class="navbar navbar-horizontal navbar-light bg-light d-block">
        <div class="d-flex justify-content-center pt-5">
          <button class="navbar-toggler mb-3" type="button" data-toggle="collapse" data-target="#Dropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="Dropdown">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <button type="button" class="btn btn-light" data-toggle="modal" data-target="#Modal">
                Newsletter Subscription
              </button>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="Dropdown">
          <ul class="nav justify-content-center">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                What we offer
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Products</a>
                <a class="dropdown-item" href="#">Services</a>
                <a class="dropdown-item" href="#">Advertise</a>
                <a class="dropdown-item" href="#">Partner with us</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="Dropdown">
          <ul class="nav justify-content-center">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About us
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Who we are</a>
                <a class="dropdown-item" href="#">What we do</a>
                <a class="dropdown-item" href="#">Terms & conditions</a>
                <a class="dropdown-item" href="#">Get Involved</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="Dropdown">
          <ul class="nav justify-content-center">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Reach us
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Our location</a>
                <a class="dropdown-item" href="#">Our contacts</a>
                <a class="dropdown-item" href="#">Social Media</a>
                <a class="dropdown-item" href="#">Comment</a>

              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div class="d-flex justify-content-center bg-light ml-n4">
        <ul class="d-inline-block">
          <a a href="javascript:void(0)"> <i class="fab fa-facebook mr-3"></i></a>
          <a a href="javascript:void(0)"> <i class="fab fa-instagram mr-3"></i></a>
          <a a href="javascript:void(0)"> <i class="fas fa-envelope mr-3"></i></a>
          <a a href="javascript:void(0)"> <i class="fab fa-twitter mr-3"></i></a>
          <a a href="javascript:void(0)"> <i class="fab fa-linkedin mr-3"></i></a>
        </ul>
      </div>

      <div class="d-flex justify-content-center mx-auto bg-light">
        <img src="../Tools/icons/title.png" class="img-fluid title">
      </div>

      <div class="d-flex justify-content-center mx-auto bg-light  pb-5">
        <p class="text-muted">&copy; 2020</p>
      </div>
      </div>
    </section>
  </footer>
  <script src="../Tools/js/bootstrap.min.js"></script>
  <script src="../Tools/js/uniform.js"></script>
  <script src="js/authenticator.js"></script>
  <script src="../Tools/js/validator/register.js"></script>

</body>

</html>