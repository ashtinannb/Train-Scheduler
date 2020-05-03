// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCPrgpKbaGJYqB1RGBmayg5iHkbpMWV27Q",
    authDomain: "train-schedule-1a0bf.firebaseapp.com",
    databaseURL: "https://train-schedule-1a0bf.firebaseio.com",
    projectId: "train-schedule-1a0bf",
    storageBucket: "train-schedule-1a0bf.appspot.com",
    messagingSenderId: "594714138763",
    appId: "1:594714138763:web:cf2d9a9e72c790212d1c8e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
$("#add-train").on("click", function (event) {
    event.preventDefault()
    console.log(event)
    firebase.database().ref().push({
        username: "john",
        email: "john@outlook.com",
    });

})

// firebase.database().ref().push({
//     username: "john",
//     email: "john@outlook.com",
// });

firebase.database().ref().on('value', function (paulo) {
    console.log(paulo.val())
});
