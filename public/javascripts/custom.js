$(document).ready(function(){
    $('.editEvent').on('click', editEvent);

});

function editEvent(){
    let a=$(this);
    $.ajax({
        type:'POST',
        url: '/update/delete',
        data: {id:$(this).data('id')}

    }).done(function(res){
        console.log(res);
        if (res===true){
            a.closest("tr").remove();
            toastr.success('Deleted Successfully')
            toastr.options.timeOut = 60;
        }else {
            toastr.error('Failed');
            toastr.options.timeOut = 60;
        }

    }).fail(function(res){
        console.log("Oops not working");
        toastr.error('Oops!')

    });

}
$(document).ajaxStart(function(){
    $.LoadingOverlay("show");
});
$(document).ajaxStop(function(){
    $.LoadingOverlay("hide");
});

//=========Login===========//

$(document).ready(function(){
    $('.loginEvent').on('click', ()=>{

        var username=$("#_username").val();
        var password=$("#_password").val();
        $.ajax({
            type:'POST',
            url: '/login',
            data: {username:username,password:password}
        }).done(function(res){
            console.log(res);
            if (res===true){

                toastr.success('Login Successfully')
                toastr.options.timeOut = 60;
                window.location = "/feedback";

            }else {
                toastr.error('Please Check The username & Password');
                toastr.options.timeOut = 60;
            }

        }).fail(function(res){
            console.log("Oops not working");
            toastr.error('Oops!')

        });
    });
});

$(document).ajaxStart(function(){
    $.LoadingOverlay("show");
});
$(document).ajaxStop(function(){
    $.LoadingOverlay("hide");
});
