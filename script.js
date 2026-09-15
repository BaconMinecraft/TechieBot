const output = document.getElementById("output");
const buttons = document.getElementById("buttons");


function printMessage(message) {
    const line = document.createElement("p");
    line.textContent = "> " + message;
    output.appendChild(line);
}


function clearButtons() {
    buttons.innerHTML = "";
}


function createButton(text, action) {
    const button = document.createElement("button");

    button.textContent = text;

    button.addEventListener("click", action);

    buttons.appendChild(button);
}


function startTechieBot() {

    printMessage("TECHIEBOT: READY FOR INPUT.");
    printMessage("What appears to be broken?");

    createButton("Internet", diagnoseInternet);
    createButton("Computer is slow", diagnoseSlowComputer);
    createButton("Software won't open", diagnoseSoftware);
    createButton("Printer", diagnosePrinter);
    createButton("Something else", otherProblem);
}


function diagnoseInternet() {

    clearButtons();

    printMessage("INTERNET DIAGNOSTIC STARTING...");
    printMessage("Are other websites working?");

    createButton("Yes", internetOtherSitesWorking);
    createButton("No", internetNotWorking);
}


function internetOtherSitesWorking() {

    clearButtons();

    printMessage("Good. Your internet connection appears to be functioning.");
    printMessage("Is the problem happening on only one website?");

    createButton("Yes", oneWebsite);
    createButton("No", multipleWebsites);
}


function internetNotWorking() {

    clearButtons();

    printMessage("Check whether Wi-Fi is enabled.");
    printMessage("If Wi-Fi is enabled, check whether the computer shows a connection.");

    createButton("That fixed it", solved);
    createButton("Still broken", routerCheck);
}


function routerCheck() {

    clearButtons();

    printMessage("Check whether other devices can connect to the same network.");
    printMessage("Do other devices have internet?");

    createButton("Yes", deviceOnly);
    createButton("No", networkProblem);
}


function deviceOnly() {

    clearButtons();

    printMessage("The problem may be specific to this computer.");
    printMessage("Try disconnecting and reconnecting to the Wi-Fi network.");

    createButton("Fixed", solved);
    createButton("Still broken", escalate);
}


function networkProblem() {

    clearButtons();

    printMessage("Multiple devices appear to be affected.");
    printMessage("Check the network equipment or contact the network administrator.");

    createButton("Fixed", solved);
    createButton("Still broken", escalate);
}


function oneWebsite() {

    clearButtons();

    printMessage("The internet connection appears to be working.");
    printMessage("The problem may be specific to that website.");
    printMessage("Try refreshing the page.");

    createButton("Fixed", solved);
    createButton("Still broken", escalate);
}


function multipleWebsites() {

    clearButtons();

    printMessage("Try refreshing the browser.");
    printMessage("If that does not work, restart the browser.");

    createButton("Fixed", solved);
    createButton("Still broken", escalate);
}


function diagnoseSlowComputer() {

    clearButtons();

    printMessage("PERFORMANCE DIAGNOSTIC STARTING...");
    printMessage("Are multiple programs running at once?");

    createButton("Yes", tooManyPrograms);
    createButton("No", slowComputerRestart);
}


function tooManyPrograms() {

    clearButtons();

    printMessage("Close programs you are not currently using.");
    printMessage("Has the computer become faster?");

    createButton("Yes", solved);
    createButton("No", slowComputerRestart);
}


function slowComputerRestart() {

    clearButtons();

    printMessage("Try restarting the computer.");
    printMessage("A restart can clear temporary problems.");

    createButton("Fixed", solved);
    createButton("Still slow", escalate);
}


function diagnoseSoftware() {

    clearButtons();

    printMessage("SOFTWARE DIAGNOSTIC STARTING...");
    printMessage("Does the program show an error message?");

    createButton("Yes", softwareError);
    createButton("No", softwareRestart);
}


function softwareError() {

    clearButtons();

    printMessage("Write down the exact error message.");
    printMessage("Check whether the program needs an update.");

    createButton("Fixed", solved);
    createButton("Still broken", escalate);
}


function softwareRestart() {

    clearButtons();

    printMessage("Close the program completely.");
    printMessage("Then try opening it again.");

    createButton("Fixed", solved);
    createButton("Still broken", escalate);
}


function diagnosePrinter() {

    clearButtons();

    printMessage("PRINTER DIAGNOSTIC STARTING...");
    printMessage("Is the printer powered on?");

    createButton("Yes", printerOn);
    createButton("No", printerOff);
}


function printerOff() {

    clearButtons();

    printMessage("Turn on the printer.");
    printMessage("Check whether the printer starts normally.");

    createButton("Fixed", solved);
    createButton("Still broken", escalate);
}


function printerOn() {

    clearButtons();

    printMessage("Is the computer showing the printer as available?");

    createButton("Yes", printerAvailable);
    createButton("No", printerUnavailable);
}


function printerAvailable() {

    clearButtons();

    printMessage("Check that the correct printer is selected.");
    printMessage("Then try printing again.");

    createButton("Fixed", solved);
    createButton("Still broken", escalate);
}


function printerUnavailable() {

    clearButtons();

    printMessage("Check the printer's network or USB connection.");
    printMessage("Then try again.");

    createButton("Fixed", solved);
    createButton("Still broken", escalate);
}


function otherProblem() {

    clearButtons();

    printMessage("TechieBot does not recognize this problem yet.");
    printMessage("Congratulations. You have discovered a new bug.");

    createButton("Try again", startTechieBot);
    createButton("Contact human tech support", escalate);
}


function solved() {

    clearButtons();

    printMessage("DIAGNOSTIC COMPLETE.");
    printMessage("PROBLEM APPEARS TO BE RESOLVED.");
    printMessage("TechieBot is pleased with this development.");

    createButton("Start another diagnostic", startTechieBot);
}


function escalate() {

    clearButtons();

    printMessage("AUTOMATED DIAGNOSTIC COMPLETE.");
    printMessage("A human technician should investigate this problem.");
    printMessage("Please provide the technician with a description of what happened.");

    createButton("Start another diagnostic", startTechieBot);
}


startTechieBot();
