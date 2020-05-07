// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBmTCM_yeRjtPQWfnO_Xl3wR7xEq4sIv4I",
    authDomain: "train-scheduler-a3432.firebaseapp.com",
    databaseURL: "https://train-scheduler-a3432.firebaseio.com",
    projectId: "train-scheduler-a3432",
    storageBucket: "train-scheduler-a3432.appspot.com",
    messagingSenderId: "777928243861",
    appId: "1:777928243861:web:01ab56555bf98c1056f99c",
    measurementId: "G-R9920E7WZW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
$("#add-train").on("click", function (event) {
    event.preventDefault()
    console.log(event)
    firebase.database().ref().push({
        trainName: $('#train-name').val(),
        destination: $('#destination').val(),
        firstTrain: $('#first-train').val(),
        frequency: $('#frequency').val()

    });
})
firebase.database().ref().on('value', function (response) {
   var dbres = response.val()
   console.log(dbres)
   for (let key in dbres) {
    console.log(key)
    console.log(dbres[key])
    console.log(dbres[key].trainName)
    console.log(dbres[key].destination)
    console.log(dbres[key].firstTrain)
    console.log(dbres[key].frequency)
   }

    
});

