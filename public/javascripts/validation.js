$(document).ready(function () {
    $("#signup-form").validate({
        rules:{
            username:{
                required:true,
                    minlength:4
            },
            password:{
            required:true,
            minlength:5
            },
            confirmpassword:{
            required:true,
                minlength:5,
            equalTo:"#password"
            }
        },
        messages: {
            username: {
                required: "Enter a user name",
                minlength: "Enter 4 characters"
            },
            password: {
                required: "Enter password",
                minlength: "Enter 5 characters"
            },
            confirmpassword: {
                required: "Enter a password",
                minlength: "Enter 5 characters",
                equalTo: "password doesn't match"
            }
        }})
    });