
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

membersIDs = []
for (var i=0; i< clientList.length; i++) {
  membersIDs.push(clientList[i].ID)
}
console.log(membersIDs)

/* for
var verifyID;
 */
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
  $("#scanQRBox").css("display","none");
  //html5QrcodeScanner.clear();
});


$("#clientSearch").click(function() {
  console.log( "i was clicked" );
  $("#clientSearchBox").css("display", "block");
  $("#manualInputBox").css("display", "none");
  $("#scanQRBox").css("display","none");
  //html5QrcodeScanner.clear();
});

$("#searchMemberID").click(function() {
  $("#IDFoundConfirm").css("display","none")
  $("#ManualNameConfirm").css("display","none")
  $("#ManualDoBConfirm").css("display","none")


  verifyID = $("#searchValue").val();
  console.log(verifyID)
  if(isNaN(verifyID)){
    $("#memberIDSearchResult").css("display","block")
    $("#IDmatchManualConfirm").addClass("text-danger")
    $("#IDmatchManualConfirm").text("You inputted other characters other than numbers! Enter a valid ten digit memberID").
    return;
  } 
  else if (!(verifyID >= 0)) {
    $("#memberIDSearchResult").css("display","block")
    $("#IDmatchManualConfirm").addClass("text-danger")
    $("#IDmatchManualConfirm").text("You inputted a negative number. This ID is invalid. Insert a valid ten digit ID number").
    return;
  }
  else if (verifyID.length !== 10) {
    $("#memberIDSearchResult").css("display","block")
    $("#IDmatchManualConfirm").addClass("text-danger")
    $("#IDmatchManualConfirm").text("This is only has " + verifyID.length + " digit(s). This ID is invalid. Insert a valid ten digit ID number").
    return;
  } else {
    $("#memberIDSearchResult").css("display","block")
    if (membersIDs.indexOf(Number(verifyID)) < 0){
      $("#IDmatchManualConfirm").addClass("text-danger")
      $("#IDmatchManualConfirm").text("No matching ID found.")
    } else {
      $("#IDmatchManualConfirm").removeClass("text-danger")
      $("#IDmatchManualConfirm").addClass("text-success")
      $("#IDmatchManualConfirm").text("ID found. Confirm Data Below")
      $("#ManualNameConfirm").css("display","block")
      $("#ManualNameConfirm").text(clientList[membersIDs.indexOf(Number(verifyID))].Name)
      $("#ManualDoBConfirm").css("display","block")
      $("#ManualDoBConfirm").text(clientList[membersIDs.indexOf(Number(verifyID))].DoB)
  
    }
  }
});




