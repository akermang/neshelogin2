$(function() {
  $(".btn").click(function() {
    $(".form-signin").toggleClass("form-signin-left");
    loginSucces();
    // $(".success").toggleClass("success-left");
    // setTimeout(hideBanner, 2200);
  });
});

const productstList = [
  {
    name: "CEM II/B-LL 42.5 N",
    description: "שקים אדומים 25 קג 2 ט",
    price: "365.63",
    qty: "32"
  },
  {
    name: "CEM II 42.5N AM-SVL",
    description: "צ.פ. 250 תפזורת",
    price: "312.53",
    qty: "36"
  },
  {
    name: "CEM III  /B 42.5N-SR",
    description: "מלט סיגים B תפזור",
    price: "358.24",
    qty: "38"
  },
  {
    name: "CEM I 52.5 N",
    description: "צ.פ. 300 תפזורת",
    price: "324.61",
    qty: "40"
  }
];

const costumersList = [
  { name: "א.חיידר ובניו בע'מ", address: "העבודה 13 א.ת הקלה" },
  { name: 'ד.י.מגריזו בע"מ', address: "אזור תעשיה" },
  { name: 'אשטרום בע"מ -הנדסה ובניה', address: "קיבוץ גלויות 31" },
  { name: 'הנסון (ישראל)בע"מ', address: "נחל רבה" },
  { name: "Sanad Trading & Marketing Company", address: "אל עתיד" }
];

function populateFields(selectedItem) {
  $("#description").val(selectedItem.description);
  $("#price").val(selectedItem.price);
  $("#order-qt").val(selectedItem.qty);

  $("#descriptionA").val(selectedItem.description);
  $("#priceA").val(selectedItem.price);
  $("#order-qtA").val(selectedItem.qty);
}

function populateSelectedCostumer(selectedCostumer) {
  $("#shippingAddress").val(selectedCostumer.address);
  $("#shippingAddressA").val(selectedCostumer.address);
}

function selectHandler(selectElementId, optionArray, populateSelected) {
  $(selectElementId).change(function() {
    let str = "";
    $(selectElementId + " option:selected").each(function() {
      str = $(this).text();
    });
    let selectedItem = optionArray.filter(item => {
      return item.name == str;
    });
    populateSelected(selectedItem[0]);
  });
}

selectHandler("#itemSelectA", productstList, populateFields);
selectHandler("#itemSelect", productstList, populateFields);
selectHandler("#shipToCustomerA", costumersList, populateSelectedCostumer);
selectHandler("#shipToCustomer", costumersList, populateSelectedCostumer);

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
