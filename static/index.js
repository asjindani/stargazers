$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainnavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
var qsIds = [];
function mcqgenerator() {
    if (qsIds.length == 4) {
        $("#question").text("Thankyou for taking the quiz! Your Score is " + points + "/4");
        $(".choice").prop("hidden", "hidden");
        $("#next").prop("hidden", "hidden");
        $("#replay").removeAttr("hidden");
    } else {
        var mcqnum = Math.round(Math.random() * (mcqs.length - 1));
        console.log(mcqnum)
        while (qsIds.includes(mcqnum)) {
            var mcqnum = Math.round(Math.random() * (mcqs.length - 1)); console.log(mcqnum)
        }
        var mcq = mcqs[mcqnum];
        $("#question").text(mcq.Question);
        $(".choice").eq(0).text(mcq.OptionA);
        $(".choice").eq(1).text(mcq.OptionB);
        $(".choice").eq(2).text(mcq.OptionC);
        $("#mcq").attr("mcqnum", mcq.Id);
        qsIds.push(mcq.Id);
    }
}
var mcqs = [
    { Id: 0, Question: "Which is the first planet in the solar system?", OptionA: "Mercury", OptionB: "Neptune", OptionC: "Saturn", Correct: "Mercury" },
    { Id: 1, Question: "Which is the sixth planet in the solar system?", OptionA: "Neptune", OptionB: "Venus", OptionC: "Saturn", Correct: "Saturn" },
    { Id: 2, Question: "What is the main fuel of the Sun?", OptionA: "Hydrocarbons", OptionB: "Uranium", OptionC: "Hydrogen", Correct: "Hydrogen" },
    { Id: 3, Question: "How many moons does Saturn have?", OptionA: "130", OptionB: "102", OptionC: "146", Correct: "146" },
    { Id: 4, Question: "Where is the asteroid belt located?", OptionA: "Between Jupiter and Mars", OptionB: "Between Mercury and Earth", OptionC: "Between Venus and Saturn", Correct: "Between Jupiter and Mars" },
    { Id: 5, Question: "Which planet is known as the Red Planet?", OptionA: "Jupiter", OptionB: "Mars", OptionC: "Mercury", Correct: "Mars" },
    { Id: 6, Question: "Which is the largest Moon of Saturn", OptionA: "Rhea", OptionB: "Tethys", OptionC: "Titan", Correct: "Titan" },
    { Id: 7, Question: "How many divisions is Saturn's Ring divided into?", OptionA: "7", OptionB: "10", OptionC: "14", Correct: "7" },
    { Id: 8, Question: "Olympus Mons is located on ___ ?", OptionA: "Mars", OptionB: "Jupiter", OptionC: "Venus", Correct: "Mars" },
    { Id: 9, Question: "How many moons does Uranus have?", OptionA: "27", OptionB: "32", OptionC: "22", Correct: "27" },
    { Id: 10, Question: "Which planet has the Great Dark Spot (GDS)", OptionA: "Jupiter", OptionB: "Mars", OptionC: "Neptune", Correct: "Neptune" },
    { Id: 11, Question: "The bluish color of Neptune is due to the presense of ___ ?", OptionA: "Hydrogen", OptionB: "Ice", OptionC: "Methane", Correct: "Methane" },
    { Id: 12, Question: "Which of the following planet has a unique sideways rotation?", OptionA: "Saturn", OptionB: "Venus", OptionC: "Uranus", Correct: "Uranus" },
    { Id: 13, Question: "Which is the largest star in our Solar System?", OptionA: "Sun", OptionB: "Sirius", OptionC: "Betelgiuse", Correct: "Sun" },
    { Id: 14, Question: "Which one is the biggest moon of the Solar System?", OptionA: "Titan", OptionB: "Io", OptionC: "Ganymede", Correct: "Ganymede" },
    { Id: 15, Question: "What is the main constituent of Mar's atmosphere", OptionA: "Nitrogen", OptionB: "Carbondioxide", OptionC: "Argon", Correct: "Carbondioxide" }
];
var points = 0;
var attempted = false;
$(".choice").on("click", function () {
    correctans = mcqs[$(this).parent().parent().attr("mcqnum")].Correct;
    selectedans = $(this).text();
    if (selectedans === correctans) {
        new Audio('bell.mp3').play();
        if (!attempted) {
            points++;
        }
        $(this).css("background-color", "darkgreen");
    } else {
        new Audio('buzzer.mp3').play();
        $(this).css("background-color", "maroon");
    }
    $("#next").removeAttr("disabled");
    attempted = true;
});
mcqgenerator(points);
$("#next").on("click", function () {
    attempted = false;
    mcqgenerator();
    $("#next").prop("disabled", "disabled");
    $(".choice").css("background-color", "black");
})
$("#replay").on("click", function () {
    $("#replay").prop("hidden", "hidden");
    $("#next").removeAttr("hidden");
    $(".choice").removeAttr("hidden")
    qsIds = [];
    mcqgenerator();
    points = 0;
});
$("#planet-filter").on("click", function () {
    filter = $(this).val().replace(' ', '-');
    if (filter !== "") {
        $("#packages").children(".package").add(".about").prop("hidden", "hidden");
        $("." + filter).removeAttr("hidden")
    } else {
        $(".about").prop("hidden", "hidden")
        $("#packages").children(".package").add(".about").removeAttr("hidden");
    }
})