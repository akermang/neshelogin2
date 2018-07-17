$(function () {
    $(".btn").click(function () {
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-customer").toggleClass("form-customer-left");
        $(".frame").toggleClass("frame-long");
        $(".customer-inactive").toggleClass("customer-active");
        $(".customer-active .btn.hidden").toggleClass("active");
        $(".btn").toggleClass("hidden");
        $(".signin-active").toggleClass("signin-inactive");
        // $(".forgot").toggleClass("forgot-left");
        $(this).removeClass("idle").addClass("active");
        $(".line-tittle.mobile.product").text("פרטי אספקה");
    });
});

$(function () {
    $(".btn-customer").click(function () {
        $(".nav").toggleClass("nav-up");
        $(".form-customer-left").toggleClass("form-customer-down");
        $(".success").toggleClass("success-left");
        $(".frame").toggleClass("frame-short");
    });
});

$(function () {
    $(".btn-signin").click(function () {
        $(".btn-animate").toggleClass("btn-animate-grow");
        $(".welcome").toggleClass("welcome-left");
        $(".cover-photo").toggleClass("cover-photo-down");
        $(".frame").toggleClass("frame-short");
        $(".profile-photo").toggleClass("profile-photo-down");
        $(".btn-goback").toggleClass("btn-goback-up");
        // $(".forgot").toggleClass("forgot-fade");
    });
});

function clearFields() {
    $("input").each(function(){
        $(this).val("")
    });
    $("select").each(function(){
        $(this).val("")
    })
}

function sendOrder() {
   
    let html = "<div class='confirm'><a href='login.html'><label>הזמנה התקבלה בהצלחה</label></a></div>"
    $("#sendOrder-container").html(html);
}