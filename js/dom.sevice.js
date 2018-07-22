
 const productstList =[
    { name: 'CEM II/B-LL 42.5 N', description: 'שקים אדומים 25 קג 2 ט', price: '365.63', qty : '32'},
    { name: 'CEM II 42.5N AM-SVL', description: 'צ.פ. 250 תפזורת', price :'312.53', qty: '36'},
    { name: 'CEM III  /B 42.5N-SR', description: 'מלט סיגים B תפזור', price: '358.24', qty: '38'},
    { name: 'CEM I 52.5 N', description: 'צ.פ. 300 תפזורת', price: '324.61', qty :'40'}
]

function populateFields(selectedItem) {
    $("#description").val(selectedItem[0].description);
    $("#price").val(selectedItem[0].price);
    $("#order-qt").val(selectedItem[0].qty);
    let gal = $("#descriptionA").val()
    $("#descriptionA").val(selectedItem[0].description);
    $("#priceA").val(selectedItem[0].price);
    $("#order-qtA").val(selectedItem[0].qty);
} 

$( "#itemSelectA" )
  .change(function () {
    var str = "";
    $( "#itemSelectA option:selected" ).each(function() {
      str = $( this ).text();
    });
    let selectedItem = productstList.filter((item) => {
      return item.name == str
    })
    populateFields(selectedItem)
  })
  .change();



$( "#itemSelect" )
  .change(function () {
    var str = "";
    $( "#itemSelect option:selected" ).each(function() {
      str = $( this ).text();
    });
    let selectedItem = productstList.filter((item) => {
      return item.name == str
    })
    populateFields(selectedItem)
  })
  .change();

function hideBanner() {
  $(".success").toggleClass("success-left");
}

function loginSucces() {
  $(".form-customer").toggleClass("form-customer-left");
  $(".frame").toggleClass("frame-long");
  $(".customer-inactive").toggleClass("customer-active");
  $(".customer-active .btn.hidden").toggleClass("active");
  $(".btn").toggleClass("hidden");
  $(".signin-active").toggleClass("signin-inactive");
  // $(".forgot").toggleClass("forgot-left");
  $(this)
    .removeClass("idle")
    .addClass("active");
  $(".line-tittle.mobile.product").text("פרטי אספקה והובלה");
}

$(function() {
  $(".btn-customer").click(function() {
    $(".nav").toggleClass("nav-up");
    $(".form-customer-left").toggleClass("form-customer-down");

    $(".frame").toggleClass("frame-short");
  });
});

$(function() {
  $(".btn-signin").click(function() {
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
  $("input").each(function() {
    $(this).val("");
  });
  $("select").each(function() {
    $(this).val("");
  });
}

function sendOrder() {
  let html =
    "<div class='confirm'><a href='login.html'><label>הזמנה התקבלה בהצלחה</label></a></div>";
  $("#sendOrder-container").html(html);
}
