/*STEP 1 */

// Get the clickable link
const verificationLink = document.getElementById("verificationLink");

// Get User screens
const userScreen1 = document.querySelector(".UserScreen1");
const userScreen2 = document.querySelector(".UserScreen2");
//select screen 3 user
const userScreen3 = document.querySelector(".UserScreen3");
const userScreen4= document.querySelector(".UserScreen4");
const userScreen5= document.querySelector(".UserScreen5");
const userScreen6= document.querySelector(".UserScreen6");


// Get Attacker screens
const attackerScreen1 = document.querySelector(".attackerScreen1");
const attackerScreen2 = document.querySelector(".attackerScreen2");
//select screen 3 attacker
const attackerScreen3= document.querySelector(".attackerScreen3");
//select screen 3 attacker
const attackerScreen4=document.querySelector(".attackerScreen4");
const attackerScreen6=document.querySelector(".attackerScreen6");

//select user screen button and input box
const passwordInputUser= document.getElementById("passwordInputUser");
const passwordNextButton= document.getElementById("passwordNextButton");
// OTP countdown display
const timer = document.getElementById("timer");
// Email display box on Attacker Screen 4
const attackerEmailInput4 = document.querySelector(".attackerScreen4 .attackerbody4email");

// Phone number display box on Attacker Screen 4
const attackerPhoneInput4 = document.querySelector(".attackerScreen4 .attackerbody4phoneno");

//to get the footer on attacker's screen
const attackerSharedFooter = document.getElementById(
  "attackersharedFooter"
);
// Step labels
const userStepLabel= document.querySelector(".step-label");
const attackerStepLabel= document.querySelector(".step-label-attacker");

// Stores the email for later screens
let capturedEmail = "";

// When the user clicks the suspicious link
verificationLink.addEventListener("click", function (event) {

  // Prevent the browser from actually opening the link
  event.preventDefault();

  // Hide User Screen 1
  userScreen1.style.display = "none";

  // Show User Screen 2
  userScreen2.style.display = "flex";

    // Change user step label
  userStepLabel.textContent = "2. Enter Email";


  // Hide Attacker Screen 1
  attackerScreen1.style.display = "none";

  // Show Attacker Screen 2
  attackerScreen2.style.display = "flex";

  // Change user step label
  attackerStepLabel.textContent="2. Capturing Email ID"

});


/*Screen 2*/


//user's email input 
const emailInput= document.getElementById("emailInputUser");

//user next button
const emailNextButton= document.getElementById("emailNextButton");

// Email box on Attacker Screen 2
const attackerEmailInput2 = document.querySelector(
  ".attackerScreen2 .emailInput"
);

// IP address box on Attacker Screen 2
const attackerIPInput2= document.querySelector(".attackerScreen2 .ipInput");

// Time box on Attacker Screen 2
const attackerTimeInput2 = document.querySelector(".attackerScreen2 .timeInput");

// Email box on Attacker Screen 3
const attackerEmailInput3 = document.querySelector(
  ".attackerScreen3 .emailInput"
);
// IP address box on Attacker Screen 3
const attackerIPInput3 = document.querySelector(
  ".attackerScreen3 .ipInput"
);

// Time box on Attacker Screen 3
const attackerTimeInput3 = document.querySelector(
  ".attackerScreen3 .timeInput"
);

function generateDemoIP() {
  const lastNumber = Math.floor(Math.random() * 200) + 1;

  return "203.0.113." + lastNumber;
}

emailNextButton.addEventListener("click", function(){
  //get the email typed by user
  const enteredEmail= emailInput.value;

  // Save the email so later screens can use it
capturedEmail = enteredEmail;

// Show email on Attacker Screen 2
attackerEmailInput2.textContent = enteredEmail;

// Carry the same email to Attacker Screen 3
attackerEmailInput3.textContent = enteredEmail;

//time display in attacker screen
const currentTime = new Date().toLocaleTimeString(); // new Date()-> gets the current date and time from the user's browser. and .toLocaleTimeString()-> formats it into a readable time.

attackerEmailInput4.textContent = capturedEmail;

// Create a simulated IP address
const demoIP = generateDemoIP();

  // Update IP and time on Attacker Screen 2
  attackerIPInput2.textContent = demoIP;
  attackerTimeInput2.textContent = currentTime;
  // Carry the same IP address to Attacker Screen 3
attackerIPInput3.textContent = demoIP;

// Carry the same time to Attacker Screen 3
attackerTimeInput3.textContent = currentTime;

const demoPhoneNumber = "+91 98765 41234";
attackerPhoneInput4.textContent = demoPhoneNumber;


  // Hide User Screen 2
  userScreen2.style.display = "none";

  // Show User Screen 3
  userScreen3.style.display = "block";

    // Hide Attacker Screen 2
    attackerScreen2.style.display="none";
    
    // Show Attacker Screen 3
    attackerScreen3.style.display="flex";

  // CHANGE THE STEP LABELS
  userStepLabel.textContent = "3. Enter Password";

  attackerStepLabel.textContent = "3. Capturing Password";
})

/*Screen 3 */

function startCountdown() {

  // Countdown starts at 29 seconds
  let timeLeft = 29;


  // Update the timer every 1 second
  const countdown = setInterval(function () {

    // Calculate minutes
    const minutes = Math.floor(timeLeft / 60);

    // Calculate seconds
    const seconds = timeLeft % 60;


    // Display the time
    timer.textContent =
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");


    // Reduce time by 1 second
    timeLeft--;


    // Stop when countdown reaches zero
    if (timeLeft < 0) {
      clearInterval(countdown);

      timer.textContent = "00:00";
    }

  }, 1000);

}

passwordNextButton.addEventListener("click", function () {
    // Read whether something was entered
  const passwordWasEntered = passwordInputUser.value.length > 0;
   const attackerPasswordDisplay = document.querySelector(
    ".attackerScreen4 .attackerbody4password"
  );
 //get the email typed by user
  const enteredPassword=passwordInputUser.value;

  // Show email on Attacker Screen 2
  attackerPasswordDisplay.textContent = enteredPassword;

  userScreen3.style.display="none";
  userScreen4.style.display="block";

  attackerScreen3.style.display="none";
  attackerScreen4.style.display="block";
  // Show the shared attacker footer
attackerSharedFooter.style.display = "flex";

    // Change the labels
  userStepLabel.textContent = "4. OTP Verification";

  attackerStepLabel.textContent = "4. OTP Verification Code Sent";

    // Start the OTP countdown
  startCountdown();
})

/*Screen 4 */

/* OTP INPUT */

const otpInputs = document.querySelectorAll(".inputbox");

const otpNextButton = document.getElementById("otpNextButton");

const attackerScreen5 = document.querySelector(".attackerScreen5");



otpInputs.forEach(function (input, index) {

  input.addEventListener("input", function () {

    if (input.value.length === 1) {

      if (index < otpInputs.length - 1) {

        otpInputs[index + 1].focus();

      }

    }

  });

});


/* OTP NEXT BUTTON */

otpNextButton.addEventListener("click", function () {

  // Change button to verification state
  otpNextButton.textContent = "Verifying... ⟳";


  // Prevent multiple clicks
  otpNextButton.disabled = true;


  // Update footer labels
  userStepLabel.textContent = "5. Verifying OTP";

  attackerStepLabel.textContent = "5. Victim OTP Verifying";


  // Move attacker from Screen 4 to Screen 5
  attackerScreen4.style.display = "none";

  attackerScreen5.style.display = "block";


  // Both sides wait for the same 3 seconds
  setTimeout(function () {

    // USER: Screen 4 → Screen 6
    userScreen4.style.display = "none";

    userScreen6.style.display = "block";


    // ATTACKER: Screen 5 → Screen 6
    attackerScreen5.style.display = "none";

    attackerScreen6.style.display = "block";
      userStepLabel.textContent = "6. Verification Successful";

  attackerStepLabel.textContent = "6. Access Granted";

  }, 3000);

  // Combine all OTP boxes into one OTP
const enteredOTP = Array.from(otpInputs)
  .map(function (input) {
    return input.value;
  })
  .join("");

  
const attackerOtp = document.getElementById("attackerOtp");
// Show the OTP on Attacker Screen 5
attackerOtp.textContent = enteredOTP;

});

const UserScreen6=document.querySelector(".UserScreen6");
const UserScreen7=document.querySelector(".UserScreen7");
const attackerScreen7=document.querySelector(".attackerScreen7");

const userFinishButton=document.getElementById("userFinishButton");
const attackerFinishButton=document.getElementById("attackerFinishButton");

userFinishButton.addEventListener("click",function(){
    UserScreen6.style.display="none";
    UserScreen7.style.display="block";
})
attackerFinishButton.addEventListener("click",function(){
  attackerScreen6.style.display="none";
  attackerScreen7.style.display="block";
})
