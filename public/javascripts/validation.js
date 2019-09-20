
$(document).ready(function() {
    // validate sign-up form on keyup and submit
    $("#signup-form").validate({
        errorClass: 'errors',
        rules: {
            firstname: {
                required: true,
                minlength: 4,
                maxlength: 100
            },
            lastname: {
                required: true,
                minlength: 4,
                maxlength: 100
            },
            Password: {
                required: true,
                minlength: 8,
                maxlength: 20
            },
            confirmpassword: {
                required: true,
                minlength: 8,
                equalTo: "#password",
                maxlength: 20
            },
            email: {
                required: true,
                email: true,

                remote: {
                    url: '/validation/email',
                    type: 'post',
                    data: {
                        email:function() {
                            return $('#email').val()
                        }
                    }
                }
            },
            mobnum: {
                required: true,
                minlength: 10,
                maxlength: 12,
                remote:{
                    url:'/validation/mobilenumb',
                    type:'post',
                    data: {
                        mobilenumb:function() {
                            return $('#mob').val()
                        }
                    }

                }
            },
            games: {
                required: true
            },
            username: {
                required: true,
                minlength: 4,
                maxlength: 100
            },
            Select1: {
                required: true
            },
        },
        messages: {
            firstname: {
                required: "Firstname required ",
                minlength: "atleast 4 character",
                maxlength: "Max length is 100"
            },
            lastname: {
                required: "Firstname required",
                minlength: "Atleast 4 character",
                maxlength: "Max length is 100"
            },
            Password: {
                required: "Please provide a password",
                minlength: "Minimum 8 Character required",
            },
            confirmpassword: {
                required: "Password required",
                minlength: "Minimum 8 Character required",
            },
            email: {
                required: 'please fill the field',
                email: 'please ente the valid email',
                remote: 'Already exist'

            },
            mobnum: {
                required: "Enter the mobile number",
                minlength: "Minimum 10 Character required",
                maxlength:"Please check the Number ",
                remote:'try another number'
            },
            Select1: {
                required: "Please select the county"
            },
            games:{
                required:"Pleas Slect any one of this"
            },
            username: {
                required:"Username Required",
                minlength: "Minimum 4 Character Required",
            }
        }
    });
});