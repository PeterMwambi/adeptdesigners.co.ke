/**
 * @author Peter Mwambi
 * @time Thu Jun 04 2020 13:13:05 GMT+0300 (East Africa Time)
 * @content Javascript validator
 */

/**
 * Registration form
 * Fullname
 * -Required
 * -Min 5 Max 20
 *
 * Username
 * -Required
 * -Min 5 max 20
 * -Unique
 *
 * Email
 * -Required
 * -Correct email address
 *
 * Password
 * -Required
 * -Min 6 no specified maximum
 * -Contain only letters numbers white spaces and identifiers such as $ @ # % ! *?_ ,
 *
 * Conpwd
 * -Required
 * -Equal to password
 *
 * Login Form
 * Username
 * - Reqired
 * - Min 5 Max 20
 *
 * Password
 * -Required
 * -Min 6
 */

$(document).ready(function () {
  ///////////////////////////////
  //buttons
  //////////////////////////////
  var button = $("#submit");

  var button_small_device = $("#submit-sm-device");

  ///////////////////////////////
  //Form varables
  ///////////////////////////////

  //Large devices
  var fullname = $("#fullname");
  var username = $("#username");
  var email = $("#email");
  var password = $("#password");
  var conpwd = $("#conpwd");

  //Small devices
  var fullname_small_device = $("#fullname-sm-device");
  var username_small_device = $("#username-sm-device");
  var email_small_device = $("#email-sm-device");
  var password_small_device = $("#password-sm-device");
  var conpwd_small_device = $("#conpwd-sm-device");

  /////////////////////////////////
  //Patterns
  ////////////////////////////////
  var fullname_regExp = /^[a-zA-Z ]{5,100}$/;
  var username_regExp = /^[a-zA-Z0-9@ ]{5,30}$/;
  var email_regExp = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
  //var number_regExp = /^[0-9]$/;
  var password_regExp = /^[0-9A-Za-z$@#%!*?_,]{6,100}$/;

  ////////////////////////////////////
  //Register validator
  //////////////////////////////////
  //Validator on submit for large devices
  $("#form-lg-device").submit(function () {
    //Fullname validation
    if ($("#fullname").val() == "") {
      $("#fullnameErr").html("Enter your full names");
      return false;
    }
    if (fullname_regExp.test($("#fullname").val())) {
      $("#fullnameErr").html(null);
    } else {
      $("#fullnameErr").html("Your fullname contains invalid characters.");
      return false;
    }
    if ($("#fullname").val().length < 5) {
      $("#fullnameErr").html("Your fullname is too short");
      return false;
    }

    //Username  validation
    if ($("#username").val() == "") {
      $("#usernameErr").html("You have not yet chosen a username !");
      return false;
    }
    if (username_regExp.test($("#username").val())) {
      $("#usernameErr").html(null);
    } else {
      $("#usernameErr").html(
        "Invalid characters or length of input field supplied for your useraname. Only letters, numbers \
         @ and whitespaces are allowed"
      );
      return false;
    }
    if ($("#username").val().length < 5) {
      $("#usernameErr").html(
        "Username is too short pick on a name with atleast 5 characters in length"
      );
      return false;
    }
    if ($("#username").val().length > 30) {
      $("#usernameErr").html(
        "Username is long short pick on a name with atmost 20 characters"
      );
      return false;
    }

    //Email  validation
    if ($("#email").val() == "") {
      $("#emailErr").html("Your email is required !");
      return false;
    }
    if (email_regExp.test($("#email").val())) {
      $("#emailErr").html(null);
    } else {
      $("#emailErr").html("Invalid email address !");
      return false;
    }

    //Password  validation
    if ($("#password").val() == "") {
      $("#passwordErr").html("You have not yet chosen a password !");
      return false;
    }
    if (password_regExp.test($("#password").val())) {
      $("#passwordErr").html(null);
    } else {
      $("#passwordErr").html(
        "Invalid characters supplied for your password. Only letters, numbers \
         $ @ # % ! *? _ are allowed "
      );
      return false;
    }
    if ($("#password").val().length < 6) {
      $("#passwordErr").html(
        "Choose a stronger password with atleast 6 characters in length"
      );
      return false;
    }

    //Conpwd validaton
    if ($("#conpwd").val() == "") {
      $("#conpwdErr").html("Re-enter your password");
      return false;
    }
    if ($("#password").val() != $("#conpwd").val()) {
      $("#conpwdErr").html("Your passwords are not matching");
      return false;
    }
  });

  //Validator on submit for small devices
  $("#form-sm-device").submit(function () {
    //Fullname validation
    if ($("#fullname-sm-device").val() == "") {
      $("#fullnameErr-sm-device").html("Enter your full names");
      return false;
    }
    if (fullname_regExp.test($("#fullname-sm-device").val())) {
      $("#fullnameErr-sm-device").html(null);
    } else {
      $("#fullnameErr-sm-device").html(
        "Your fullname contains invalid characters."
      );
      return false;
    }
    if ($("#fullname-sm-device").val().length < 5) {
      $("#fullnameErr-sm-device").html("Your fullname is too short");
      return false;
    }

    //Username  validation
    if ($("#username-sm-device").val() == "") {
      $("#usernameErr-sm-device").html("You have not yet chosen a username !");
      return false;
    }
    if (username_regExp.test($("#username-sm-device").val())) {
      $("#usernameErr-sm-device").html(null);
    } else {
      $("#usernameErr-sm-device").html(
        "Invalid characters or length of input field supplied for your useraname. Only letters, numbers \
         @ and whitespaces are allowed"
      );
      return false;
    }
    if ($("#username-sm-device").val().length < 5) {
      $("#usernameErr-sm-device").html(
        "Username is too short choose a unique username name with atleast 5 characters in length"
      );
      return false;
    }
    if ($("#username-sm-device").val().length > 30) {
      $("#usernameErr-sm-device").html(
        "Username is too long choose on a name with atmost 30 characters"
      );
      return false;
    }

    //Email  validation
    if ($("#email-sm-device").val() == "") {
      $("#emailErr-sm-device").html("Your email is required !");
      return false;
    }
    if (email_regExp.test($("#email-sm-device").val())) {
      $("#emailErr-sm-device").html(null);
    } else {
      $("#emailErr-sm-device").html("Invalid email address !");
      return false;
    }

    //Password  validation
    if ($("#password-sm-device").val() == "") {
      $("#passwordErr-sm-device").html("You have not yet chosen a password !");
      return false;
    }
    if (password_regExp.test($("#password-sm-device").val())) {
      $("#passwordErr-sm-device").html(null);
    } else {
      $("#passwordErr-sm-device").html(
        "Invalid characters supplied for your password. Only letters, numbers \
         $ @ # % ! *? _ are allowed "
      );
      return false;
    }
    if ($("#password-sm-device").val().length < 6) {
      $("#passwordErr-sm-device").html(
        "Choose a stronger password with atleast 6 characters in length"
      );
      return false;
    }
    //Conpwd validaton
    if ($("#conpwd-sm-device").val() == "") {
      $("#conpwdErr-sm-device").html("Re-enter your password");
      return false;
    }
    if ($("#password-sm-device").val() != $("#conpwd-sm-device").val()) {
      $("#conpwdErr-sm-device").html("Your passwords are not matching");
      return false;
    }
  });

  //Validator on edit

  //Fullname large devices validation
  fullname.focus(function () {
    if ($("#fullname").val() == "") {
      $("#fullnameErr").html("Enter your fullnames");
    } else {
      $("#fullnameErr").html(null);
    }
    fullname.keyup(function () {
      if (fullname_regExp.test($("#fullname").val())) {
        $("#fullnameErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#fullnameErr").html(
          "Error ! Invalid characters or input field length supplied for your fullname.\
        Only letters and whitespaces with a minimum of 5 characters characters\
        are allowed"
        );
        button.attr("disabled", "disabled");
      }
    });
  });

  fullname.blur(function () {
    if ($("#fullname").val() == "") {
      $("#fullnameErr").html("Your fullnames are required !");
      button.attr("disabled", "disabled");
    } else {
      $("#fullnameErr").html(null);
      button.removeAttr("disabled");

      if (fullname_regExp.test($("#fullname").val())) {
        $("#fullnameErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#fullnameErr").html(
          "Error ! Your fullname contains invalid characters or has invalid length."
        );
        button.attr("disabled", "disabled");
      }
    }
  });

  //Fullname small devices validation
  fullname_small_device.focus(function () {
    if ($("#fullname-sm-device").val() == "") {
      $("#fullnameErr-sm-device").html("Enter your fullnames");
    } else {
      $("#fullnameErr-sm-device").html(null);
    }
    fullname_small_device.keyup(function () {
      if (fullname_regExp.test($("#fullname-sm-device").val())) {
        $("#fullnameErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#fullnameErr-sm-device").html(
          "Only letters and whitespaces with a minimum of 5 characters characters\
        are allowed"
        );
        button_small_device.attr("disabled", "disabled");
      }
    });
  });

  fullname_small_device.blur(function () {
    if ($("#fullname-sm-device").val() == "") {
      $("#fullnameErr-sm-device").html("Your fullnames are required !");
      button_small_device.attr("disabled", "disabled");
    } else {
      $("#fullnameErr-sm-device").html(null);
      button_small_device.removeAttr("disabled");

      if (fullname_regExp.test($("#fullname-sm-device").val())) {
        $("#fullnameErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#fullnameErr-sm-device").html(
          "Error ! Your fullname contains invalid characters or has invalid length."
        );
        button_small_device.attr("disabled", "disabled");
      }
    }
  });

  //Username large devices validation
  username.focus(function () {
    if ($("#username").val() == "") {
      $("#usernameErr").html("Choose a username");
    } else {
      $("#usernameErr").html(null);
    }
    username.keyup(function () {
      if (username_regExp.test($("#username").val())) {
        $("#usernameErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#usernameErr").html(
          "Only letters @ , numbers and whitespaces and with a minimum of 5 characters characters\
        are allowed"
        );
        button.attr("disabled", "disabled");
      }
    });
  });

  username.blur(function () {
    if ($("#username").val() == "") {
      $("#usernameErr").html("Choose a username !");
      button.attr("disabled", "disabled");
    } else {
      $("#usernameErr").html(null);
      button.removeAttr("disabled");

      if (username_regExp.test($("#username").val())) {
        $("#usernameErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#usernameErr").html(
          "Error ! Your username contains invalid characters or has invalid length."
        );
        button.attr("disabled", "disabled");
      }
    }
  });

  //Username small devices validation
  username_small_device.focus(function () {
    if ($("#username-sm-device").val() == "") {
      $("#usernameErr-sm-device").html("Choose a username");
    } else {
      $("#usernameErr-sm-device").html(null);
    }
    username_small_device.keyup(function () {
      if (username_regExp.test($("#username-sm-device").val())) {
        $("#usernameErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#usernameErr-sm-device").html(
          "Only letters @ , numbers and whitespaces and with a minimum of 5 characters characters\
        are allowed"
        );
        button_small_device.attr("disabled", "disabled");
      }
    });
  });

  username_small_device.blur(function () {
    if ($("#username-sm-device").val() == "") {
      $("#usernameErr-sm-device").html("You haven't chosen a username !");
      button_small_device.attr("disabled", "disabled");
    } else {
      $("#usernameErr-sm-device").html(null);
      button_small_device.removeAttr("disabled");

      if (username_regExp.test($("#username-sm-device").val())) {
        $("#usernameErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#usernameErr-sm-device").html(
          "Error ! Your username contains invalid characters or has invalid length."
        );
        button_small_device.attr("disabled", "disabled");
      }
    }
  });

  //Username large devices validation
  email.focus(function () {
    if ($("#email").val() == "") {
      $("#emailErr").html("Enter your email address");
    } else {
      $("#emailErr").html(null);
    }
    email.keyup(function () {
      if (email_regExp.test($("#email").val())) {
        $("#emailErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#emailErr").html(
          "Enter a valid email address e.g janedoe@gmail.com"
        );
        button.attr("disabled", "disabled");
      }
    });
  });

  email.blur(function () {
    if ($("#email").val() == "") {
      $("#emailErr").html("Your email address is required !");
      button.attr("disabled", "disabled");
    } else {
      $("#emailErr").html(null);
      button.removeAttr("disabled");

      if (email_regExp.test($("#email").val())) {
        $("#emailErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#emailErr").html("Error ! Invalid email address.");
        button.attr("disabled", "disabled");
      }
    }
  });

  //Username small devices validation
  email_small_device.focus(function () {
    if ($("#email-sm-device").val() == "") {
      $("#emailErr-sm-device").html("Enter your email address");
    } else {
      $("#emailErr-sm-device").html(null);
    }
    email_small_device.keyup(function () {
      if (email_regExp.test($("#email-sm-device").val())) {
        $("#emailErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#emailErr-sm-device").html(
          "Enter a valid email address e.g janedoe@gmail.com"
        );
        button_small_device.attr("disabled", "disabled");
      }
    });
  });

  email_small_device.blur(function () {
    if ($("#email-sm-device").val() == "") {
      $("#emailErr-sm-device").html("Your email address is required !");
      button_small_device.attr("disabled", "disabled");
    } else {
      $("#emailErr-sm-device").html(null);
      button_small_device.removeAttr("disabled");

      if (email_regExp.test($("#email-sm-device").val())) {
        $("#emailErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#emailErr-sm-device").html("Error ! Invalid email address.");
        button_small_device.attr("disabled", "disabled");
      }
    }
  });
  password.focus(function () {
    if ($("#password").val() == "") {
      $("#passwordErr").html("Choose a password");
    } else {
      $("#passwordErr").html(null);
    }
    password.keyup(function () {
      if (password_regExp.test($("#password").val())) {
        $("#passwordErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#passwordErr").html(
          "Create a strong password with Letters, numbers,  \
          whitespaces $ @ # % ! *? _ and a minimum length of 6 characters"
        );
        button.attr("disabled", "disabled");
      }
    });
  });

  password.blur(function () {
    if ($("#password").val() == "") {
      $("#passwordErr").html("Create a password !");
      button.attr("disabled", "disabled");
    } else {
      $("#passwordErr").html(null);
      button.removeAttr("disabled");

      if (password_regExp.test($("#password").val())) {
        $("#passwordErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#passwordErr").html(
          "Error ! Your password contains invalid characters or length is invalid."
        );
        button.attr("disabled", "disabled");
      }
    }
  });

  password_small_device.focus(function () {
    if ($("#password-sm-device").val() == "") {
      $("#passwordErr-sm-device").html("Choose a password");
    } else {
      $("#passwordErr-sm-device").html(null);
    }
    password_small_device.keyup(function () {
      if (password_regExp.test($("#password-sm-device").val())) {
        $("#passwordErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#passwordErr-sm-device").html(
          "Create a strong password with Letters, numbers,  \
          whitespaces $ @ # % ! *? _ and a minimum length of 6 characters"
        );
        button_small_device.attr("disabled", "disabled");
      }
    });
  });

  password_small_device.blur(function () {
    if ($("#password-sm-device").val() == "") {
      $("#passwordErr-sm-device").html("Create a password !");
      button_small_device.attr("disabled", "disabled");
    } else {
      $("#passwordErr-sm-device").html(null);
      button_small_device.removeAttr("disabled");

      if (password_regExp.test($("#password-sm-device").val())) {
        $("#passwordErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#passwordErr-sm-device").html(
          "Error ! Your password contains invalid characters or length is invalid."
        );
        button_small_device.attr("disabled", "disabled");
      }
    }
  });

  conpwd.focus(function () {
    if ($("#conpwd").val() == "") {
      $("#conpwd").html("Confirm your password");
    } else {
      $("#conpwd").html(null);
    }
    conpwd.keyup(function () {
      if ($("#password").val() != $("#conpwd").val()) {
        $("#conpwdErr").html("Ensure that your passwords are matching");
        button.removeAttr("disabled");
      }
    });
  });

  conpwd.blur(function () {
    if ($("#conowd").val() == "") {
      $("#conpwdErr").html("Password verification is required !");
      button.attr("disabled", "disabled");
    } else {
      if ($("#password").val() != $("#conpwd").val()) {
        $("#conpwdErr").html("Your passwords are not matching !");
        button.removeAttr("disabled");
      }
    }
  });

  conpwd_small_device.focus(function () {
    if ($("#conpwd-sm-device").val() == "") {
      $("#conpwdErr-sm-device").html("Confirm your password");
    } else {
      $("#conpwdErr-sm-device").html(null);
    }
    conpwd_small_device.keyup(function () {
      if ($("#password-sm-device").val() != $("#conpwd-sm-device").val()) {
        $("#conpwdErr-sm-device").html(
          "Ensure that your passwords are matching"
        );
        button_small_device.removeAttr("disabled");
      }
    });
  });

  conpwd_small_device.blur(function () {
    if ($("#conpwd-sm-device").val() == "") {
      $("#conpwdErr-sm-device").html("Password verification is required !");
      button_small_device.attr("disabled", "disabled");
    } else {
      if ($("#password-sm-device").val() != $("#conpwd-sm-device").val()) {
        $("#conpwdErr-sm-device").html("Your passwords are not matching !");
        button_small_device.removeAttr("disabled");
      }
    }
  });
});
