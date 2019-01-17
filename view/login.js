

$(document).ready(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            url: "http://localhost:6969/login",
            type: "post",
            data: {// gửi cho req.body
                username: $("#username").val(),
                password: $("#password").val()
            },
            success: function (data) { // data -> du lieu server gui ve, ko lien quan data tren
                console.log(data);
                // window.location.href = "/question/" + data.question._id;
                window.location.href = "/loginsucess";
            },
            error: function (err) {
                console.log(err)
                if(err && err.responseJson && err.responseJson.message){
                    $("#message").text(err.responseJson.message);
                }else {
                    $("#message").text("Something wrong");
                }
            }
        })
    });
})