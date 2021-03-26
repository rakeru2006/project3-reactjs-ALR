
var clientList = [
  {
    ID: 2145380930,
    Name: "Arturo Rodriguez",
    DoB: "12/15/1988",
    Street: "Marsalis",
    "Street Number": 1910,
    City: "Dallas",
    State: "TX",
    "ZIP Code": 75215,
    Phone: 2145380930
  }, {
    ID: 5620231112,
    Name: "Arturo Rodriguez",
    DoB: "12/15/1988",
    Street: "Marsalis",
    "Street Number": 1910,
    City: "Dallas",
    State: "TX",
    "ZIP Code": 75215,
    Phone: 5620231112
  }
]

console.log(clientList.length);
console.log(clientList[0].ID);
for
var verifyID;

$("#scanQR").click(function() {
  //$("#checkInCard").css("width","14rem");
  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 }, /* verbose= */ true);
  function onScanSuccess(scannedMembership) { 
    // handle the scanned code as you like
    console.log(`MembershipID = ${scannedMembership}`);
    html5QrcodeScanner.clear();
    $("#clientSearchBox").css("display", "none");
    $("#manualInputBox").css("display", "none");
    $("#scanQRBox").css("display","block");    
    return verifyID = scannedMembership;
  }
  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning
    console.warn(`QR error = ${error}`);
  }
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  $("#scanQRBox").css("display","block");
  // This method will trigger user permissions
  Html5Qrcode.getCameras().then(devices => {
    if (devices && devices.length) {
      var cameraId = devices[0].id;
    }
  }).catch(err => {
    // handle err
  });
});

$("#manualInput").click(function() {
  console.log( "i was clicked" );
  $("#clientSearchBox").css("display", "none");
  $("#manualInputBox").css("display", "block");
  $("#scanQRBox").css("display","none");});

$("#clientSearch").click(function() {
  console.log( "i was clicked" );
  $("#clientSearchBox").css("display", "block");
  $("#manualInputBox").css("display", "none");
  $("#scanQRBox").css("display","none");
});

$("#searchMemberID").click(function() {
  verifyID = $("#searchValue").val();
  $("#memberIDSearchResult").css("display","block");
//  if (verifyID !== )

});




