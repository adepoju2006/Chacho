var initialBalance = 100000;
var cha = initialBalance - ini;
var ini = 500;

var ussd = prompt("Enter your ussd code here");
if (ussd == "*121#") {
  var entry = prompt(
    "1. NIN Capture \n 2. Buy Bundles & Services \n 3. Manage My Account \n 4. Borrow Credit & Other self Services \n 5. Billing & Tariff \n 6. Bank code \n 7. KYC \n * Next"
  );
  // Code for nin
  if (entry == 1) {
    var nin = prompt(
      "Please Enter your Government approved 11 digit NIN number"
    );
    if (nin.length == 11) {
      alert("Thank You for Providing your NIN Details");
    } else {
      alert("Incorrect NIN Number");
    }
  }
} else {
  alert("Invalid ussd code");
}

// code to buy bundle service

if (entry == 2) {
  var bund = prompt(
    "Information \n 1. Data-Only Plans \n 2. Voice-Only Plans \n 3. Combo Plans(Voice + Data)\n 4. International Plans \n 5. SMS Packs \n # Previous Menu \n"
  );
  if (bund == 1) {
    alert("You will be redirected to Data-Only Plans Menu");
    var data = prompt(
      "Information \n 1. My Offer \n 2. Data Bundles \n 3. N1500 / 6GB / 7days \n 4. Social Bundles\n 5. Binge Plan \n 6. Gifting & Sharing \n 7. Streaming Plan \n 8. Video Packs \n * Next"
    );
    if (data == 1) {
      var offer = prompt(
        "1. 2GB/N500/Daily \n 2. 1.5GB/N500/14-Days \n 3. 3GB/N1000/Montly \n 4. 4GB/N1200/Montly \n 5. 6GB/N1500/Montly \n 6. 16GB/N3000/Montly \n # Back \n 0 Menu \n"
      );
      if (offer == 1) {
        alert(
          "Transaction Successful Your New Balance is" +
            " " +
            (initialBalance - 500)
        );
      }
    } else {
      alert("Invalid Selection");
    }
  } else {
    alert("Invalid Selection");
  }
}

if (offer == 2) {
  alert(
    "Transaction Successful Your New Balance is" + " " + (initialBalance - 500)
  );
} else if (offer == 3) {
  alert(
    "Transaction Successful Your New Balance is" + " " + (initialBalance - 1000)
  );
} else if (offer == 4) {
  alert(
    "Transaction Successful Your New Balance is" + " " + (initialBalance - 1200)
  );
} else if (offer == 5) {
  alert(
    "Transaction Successful Your New Balance is" + " " + (initialBalance - 1500)
  );
} else if (offer == 6) {
  alert(
    "Transaction Successful Your New Balance is" + " " + (initialBalance - 3000)
  );
} else if (offer == "#") {
  alert(bund);
}
// else {
//   alert("Invalid Selection");
// }

if (data == 2) {
}
