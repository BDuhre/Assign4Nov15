// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDj_IfleMTEcVDcZ2e9NahmyLxKignT5Vk",
    authDomain: "subscribe-9959f.firebaseapp.com",
    databaseURL: "https://subscribe-9959f.firebaseio.com",
    projectId: "subscribe-9959f",
    storageBucket: "subscribe-9959f.appspot.com",
    messagingSenderId: "343138995594",
    appId: "1:343138995594:web:1f49a4b14ae8c96c5e4c73",
    measurementId: "G-GQM7RBG05D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference email collection
var emailRef = firebase.database().ref("emails");

// Listen for form submit
document.getElementById("subscription_form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    //Get value
    var email = getInputVal("user_email");
    console.log(email);
    // Save message
    saveMessage(email);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("subscription_form").reset();
}

// Function to get form value
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email) {
    console.log(email);
    var newEmailRef = emailRef.push();
    newEmailRef.set({
        email: email,
    });
}