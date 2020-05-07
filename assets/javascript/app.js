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
// adding data to my database
firebase.initializeApp(firebaseConfig);

var dbres = firebase.database();

$("#add-train").on("click", function () {
    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = moment($("#first-train").val().trim(), "HH:mm").subtract(10, "years").format("x");
    frequency = $("#frequency").val().trim();

    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    }

    dbres.ref().push(newTrain);

    alert("train added");

    $('#train-name').val("");
    $("#destination").val("");
    $("#first-train").val("");
    ("#frequency").val("");

    alert("train added");

});





dbres.ref().on("child_added",function(snapshot) {
    var name = snapshot.val().name;
    var destination = snapshot.val().destination;
    var frequency = snapshot.val().frequency;
    var firstTrain = snapshot.val().firstTrain;

    var remainder = moment().diff(moment.unix(firstTrain), "minutes") % frequency;
    var minutes = frequency - remainder;
    var arrival = moment().add(minutes,"m").format("hh:mm A");

    console.log(remainder);
    console.log(minutes);
    console.log(arrival);

    $(".table > tBody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" +frequency+"</td><td>" + arrival + "</td><td>" + minutes + "</td></tr>");
}
)
//