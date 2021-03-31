
var clientList = [
  {
    ID: 2145380930,
    FirstName: "Arturo",
    LastName: "Rodriguez",
    Name: "Arturo Rodriguez",
    DoB: "12/15/1988",
    Street: "Marsalis",
    "Street Number": 1910,
    City: "Dallas",
    State: "TX",
    "ZIP Code": 75215,
    Phone: 2145380930,
    Subscription: true
  }, {
    ID: 5620231112,
    FirstName: "Arturo",
    LastName: "Rodriguez",
    Name: "Arturo Rodriguez",
    DoB: "12/15/1988",
    Street: "Maestro Antonio Caso",
    "Street Number": 169,
    City: "Cuauhtemoc",
    State: "DF",
    "ZIP Code": 06500,
    Phone: 5620231112,
    Subscription: false
  }, {
    ID: 8333463863,
    FirstName: "Victor",
    LastName: "Lepe",
    Name: "Victor Lepe",
    DoB: "5/3/1999",
    Street: "Maestro Antonio Caso",
    "Street Number": 169,
    City: "Cuauhtemoc",
    State: "DF",
    "ZIP Code": 06500,
    Phone: 8333463863,
    Subscription: true
  }
]

console.log(clientList.length);
console.log(clientList[0].ID);

membersIDs = []
for (var i=0; i< clientList.length; i++) {
  membersIDs.push(clientList[i].ID)
}

fNames = []
for (var i=0; i< clientList.length; i++) {
  fNames.push(clientList[i].FirstName)
}
console.log(fNames)


lNames = []
for (var i=0; i< clientList.length; i++) {
  lNames.push(clientList[i].LastName)
}
console.log(lNames)


doBList = []
for (var i=0; i< clientList.length; i++) {
  doBList.push(clientList[i].DoB)
}
console.log(doBList)



var verifyID;
var checkedIn= [];
var checkTimes= [];

if(checkedIn = []) {
  $("#noGuests").css("display", "block");
  $("#noGuests").text("We currently have no guests at this time.")
} else {
  currentClientsIn()
}

$("#scanQR").click(function() {
  $("#scanMatchConfirm").removeClass("text-danger")
  $("#scanMatchConfirm").removeClass("text-success")
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
    verifyID = scannedMembership;
    if (membersIDs.indexOf(Number(verifyID)) < 0){
      $("#scanMatchConfirm").addClass("text-danger")
      $("#scanMatchConfirm").text("No matching ID found.")
    } else {
    $("#scanMatchConfirm").addClass("text-success")
    $("#scanMatchConfirm").text("ID found. See client info below.")
    processID();
    }
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
});
$("#manualCustomerSearch").click(function(){
  searchFName = $("#manualSearchFirstName").val();
  searchLName = $("#manualSearchLastName").val();
  searchDoB = $("#manualSearchDoB").val();
  if((fNames.indexOf(searchFName) >= 0) &&(fNames.indexOf(searchFName) === lNames.indexOf(searchLName)) && (fNames.indexOf(searchFName) === doBList.indexOf(searchDoB))) {
    console.log("there is a match somewhere");
    var clientIndex = fNames.indexOf(searchFName);
    verifyID = clientList[clientIndex].ID
    console.log(verifyID);
    $("#clientLookUpResult").css("display", "block").removeClass("text-danger").addClass("text-success").text("Confirm Address: " + clientList[clientIndex].Street + " " + clientList[clientIndex]["Street Number"] + " " + clientList[clientIndex].City + ", " + clientList[clientIndex].State + ", " + clientList[clientIndex]["ZIP Code"]);
    $("#confirmCustomerSearch").css("display", "block")
  } else {
    $("#clientLookUpResult").css("display", "block").addClass("text-danger").text("No match, go into client database to find more information.")
    console.log("no match")
  }
})
$("#confirmCustomerSearch").click(function(){
  processID();
})

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

$("#manualFinalConfirm").click(function() {
  console.log("This click is working fine")
  $("#ManualDoBConfirm").css("display", "none");
  $("#ManualNameConfirm").css("display", "none");
  $("#seeBelow").css("display", "block");
  $("#IDmatchManualConfirm").css("display", "none");
  $("#seeBelow").text("Review client information below.")
  processID();
});

function processID(){
  console.log(verifyID);
  clientLink = clientList[membersIDs.indexOf(Number(verifyID))]
  $("#loadClientInfo").css("display", "block");
  $("#subsValid").css("display", "block");
  $("#hold-on").css("display", "none");
  $("#come-in").css("display", "none");
  clientInfoLoad();
  if (clientLink.Subscription) {
    $("#come-in").css("display", "block");
    var checkInTime = Date .now();
    checkedIn.push(clientLink.ID);
    checkTimes.push(checkInTime);
    console.log("This customer " + clientLink.Name + " was checked in"); 
    console.log("The following memberships are checked in: " + checkedIn)
    currentClientsIn()
  } else {
    $("#hold-on").css("display", "block");
  }


}
function clientInfoLoad() {
  $("#client-info-name").text(clientLink.Name);
  $("#client-info-address").text(clientLink.Street + " " + clientLink["Street Number"] + " " + clientLink.City + ", " + clientLink.State + ", " + clientLink["ZIP Code"]);
  $("#client-info-phone").text(clientLink.Phone);
}

function currentClientsIn() {
  $("#someGuests").css("display", "block");
  $("#noGuests").css("display", "none");    
  $("#newRowCurrentClients").empty()
  console.log(clientList[0])
  for (var i=0; i<checkedIn.length; i++) {
    var clientsCheckedInInfo = clientList[membersIDs.indexOf(Number(checkedIn[i]))]
    console.log(clientsCheckedInInfo)
    var newRow = $("#newRowCurrentClients")
    var makeTR = $("<tr>").css("id", "attachCLientInfo");
    var makeTH = $("<th>").text(clientsCheckedInInfo.Name);
    var makeTD1 = $("<td>").text(new Date(Number(checkTimes[i])).toLocaleTimeString());
    var passedTimeRaw = (Math.floor(((Date .now())-checkTimes[i])/1000));
    var passedHours = Math.floor(passedTimeRaw/(60*60)); 
    var passedMins = Math.floor((passedTimeRaw-(passedHours*60*60))/60);
    var passedSecs = Math.floor(passedTimeRaw-(passedHours*60*60)-(passedMins*60));
    var makeTD2 = $("<td>").text(passedHours + " Hours " + passedMins + " Mins " + passedSecs + " Secs ");
    var makeTD3 = $("<td>").html("<html>&#x274C</html>");
    makeTR.append(makeTH)
    makeTR.append(makeTD1)
    makeTR.append(makeTD2)
    makeTR.append(makeTD3)
    newRow.append(makeTR)
  }
}

