/**
 * @author Peter Mwambi
 * @time Thu Jun 04 2020 13:13:05 GMT+0300 (East Africa Time)
 * @content Javascript validator
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
  var username = $("#username");
  var password = $("#password");

  //Small devices
  var username_small_device = $("#username-sm-device");
  var password_small_device = $("#password-sm-device");
  /////////////////////////////////
  //Patterns
  ////////////////////////////////
  var username_regExp = /^[a-zA-Z0-9@ ]{5,30}$/;
  var password_regExp = /^[0-9A-Za-z$@#%!*?_,]{6,100}$/;

  ////////////////////////////////////
  //Register validator
  //////////////////////////////////
  //Validator on submit for large devices
  $("#form-lg-device").submit(function () {
    //Username  validation
    if ($("#username").val() == "") {
      $("#usernameErr").html("Enter your username !");
      return false;
    }
    if (username_regExp.test($("#username").val())) {
      $("#usernameErr").html(null);
      button.removeAttr("disabled");
    } else {
      $("#usernameErr").html("Invalid username");
      return false;
    }
    if ($("#username").val().length < 5) {
      $("#usernameErr").html("Invalid username");
      return false;
    }
    if ($("#username").val().length > 30) {
      $("#usernameErr").html("Invalid username");
      return false;
    }

    //Password  validation
    if ($("#password").val() == "") {
      $("#passwordErr").html("Your password is required !");
      return false;
    }
    if (password_regExp.test($("#password").val())) {
      $("#passwordErr").html(null);
    } else {
      $("#passwordErr").html("Enter a valid password ");
      return false;
    }
    if ($("#password").val().length < 6) {
      $("#passwordErr").html("Invalid password");
      return false;
    }
  });
  $("#form-sm-device").submit(function () {
    //Username  validation
    if ($("#username-sm-device").val() == "") {
      $("#usernameErr-sm-device").html("Enter your username !");
      return false;
    }
    if (username_regExp.test($("#username-sm-device").val())) {
      $("#usernameErr-sm-device").html(null);
    } else {
      $("#usernameErr-sm-device").html("Invalid username");
      return false;
    }
    if ($("#username-sm-device").val().length < 5) {
      $("#usernameErr-sm-device").html("Invalid username");
      return false;
    }
    if ($("#username-sm-device").val().length > 30) {
      $("#usernameErr-sm-device").html("Invalid username");
      return false;
    }

    //Password  validation
    if ($("#password-sm-device").val() == "") {
      $("#passwordErr-sm-device").html("Your password is required !");
      return false;
    }
    if (password_regExp.test($("#password-sm-device").val())) {
      $("#passwordErr-sm-device").html(null);
    } else {
      $("#passwordErr-sm-device").html("Enter a valid password ");
      return false;
    }
    if ($("#password-sm-device").val().length < 6) {
      $("#passwordErr-sm-device").html("Invalid password");
      return false;
    }
  });

  //Username large devices validation
  username.focus(function () {
    if ($("#username").val() == "") {
      $("#usernameErr").html("Enter your username");
    } else {
      $("#usernameErr").html(null);
    }
    username.keyup(function () {
      if (username_regExp.test($("#username").val())) {
        $("#usernameErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#usernameErr").html("Enter a valid username");
        button.attr("disabled", "disabled");
      }
    });
  });

  username.blur(function () {
    if ($("#username").val() == "") {
      $("#usernameErr").html("Your username is required !");
      button.attr("disabled", "disabled");
    } else {
      $("#usernameErr").html(null);
      button.removeAttr("disabled");

      if (username_regExp.test($("#username").val())) {
        $("#usernameErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#usernameErr").html("Enter a valid username !");
        button.attr("disabled", "disabled");
      }
    }
  });

  //Username small devices validation
  username_small_device.focus(function () {
    if ($("#username-sm-device").val() == "") {
      $("#usernameErr-sm-device").html("Enter your username");
    } else {
      $("#usernameErr-sm-device").html(null);
    }
    username_small_device.keyup(function () {
      if (username_regExp.test($("#username-sm-device").val())) {
        $("#usernameErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#usernameErr-sm-device").html("Enter a valid username");
        button_small_device.attr("disabled", "disabled");
      }
    });
  });

  username_small_device.blur(function () {
    if ($("#username-sm-device").val() == "") {
      $("#usernameErr-sm-device").html("Your username is required !");
      button_small_device.attr("disabled", "disabled");
    } else {
      $("#usernameErr-sm-device").html(null);
      button_small_device.removeAttr("disabled");

      if (username_regExp.test($("#username-sm-device").val())) {
        $("#usernameErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#usernameErr-sm-device").html("Enter a valid username !");
        button_small_device.attr("disabled", "disabled");
      }
    }
  });
  password.focus(function () {
    if ($("#password").val() == "") {
      $("#passwordErr").html("Enter your password");
    } else {
      $("#passwordErr").html(null);
    }
    password.keyup(function () {
      if (password_regExp.test($("#password").val())) {
        $("#passwordErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#passwordErr").html("Enter a valid password");
        button.attr("disabled", "disabled");
      }
    });
  });

  password.blur(function () {
    if ($("#password").val() == "") {
      $("#passwordErr").html("Your password is required !");
      button.attr("disabled", "disabled");
    } else {
      $("#passwordErr").html(null);
      button.removeAttr("disabled");

      if (password_regExp.test($("#password").val())) {
        $("#passwordErr").html(null);
        button.removeAttr("disabled");
      } else {
        $("#passwordErr").html("Enter a vaid password");
        button.attr("disabled", "disabled");
      }
    }
  });

  password_small_device.focus(function () {
    if ($("#password-sm-device").val() == "") {
      $("#passwordErr-sm-device").html("Enter your passsword");
    } else {
      $("#passwordErr-sm-device").html(null);
    }
    password_small_device.keyup(function () {
      if (password_regExp.test($("#password-sm-device").val())) {
        $("#passwordErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#passwordErr-sm-device").html("Enter a valid password");
        button_small_device.attr("disabled", "disabled");
      }
    });
  });

  password_small_device.blur(function () {
    if ($("#password-sm-device").val() == "") {
      $("#passwordErr-sm-device").html("Your password is required !");
      button_small_device.attr("disabled", "disabled");
    } else {
      $("#passwordErr-sm-device").html(null);
      button_small_device.removeAttr("disabled");

      if (password_regExp.test($("#password-sm-device").val())) {
        $("#passwordErr-sm-device").html(null);
        button_small_device.removeAttr("disabled");
      } else {
        $("#passwordErr-sm-device").html("Enter a valid password.");
        button_small_device.attr("disabled", "disabled");
      }
    }
  });
});
