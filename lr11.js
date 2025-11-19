function shuffle(a, b) {
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
        [b[i], b[j]] = [b[j], b[i]];
    }
}

let terms = ["Memory", "Journey", "Harmony", "Courage", "Victory", "Shadow", "Wisdom", "Bridge", "Energy", "Signal"];
let meanings = ["памʼять", "подорож", "гармонія", "сміливість", "перемога", "тінь", "мудрість", "міст", "енергія", "сигнал"];

let mixWords = terms.slice();
let mixTrans = meanings.slice();

shuffle(mixWords, mixTrans);

let index = 0;
let right = 0;
let wrong = 0;

$("#wordBox").text(mixWords[index]);

$("#checkBtn").click(function () {
    let val = $("#answerInput").val().trim().toLowerCase();

    if (val === "") return;

    if (val === mixTrans[index].toLowerCase()) {
        right++;
        $("#goodCount").text(right);
    } else {
        wrong++;
        $("#badCount").text(wrong);
    }

    index++;
    $("#answerInput").val("");

    if (index < 10) {
        $("#wordBox").text(mixWords[index]);
        $("#step").text((index + 1) + " / 10");
    } else {
        $("#finalScore").text("Ваш рівень: " + (right * 10) + "%"); 
        $("#overlay").fadeIn();
    }
});

$("#prev").click(function () {
    index = index <= 0 ? mixWords.length - 1 : index - 1;
    $("#wordBox").text(mixWords[index]);
});

$("#next").click(function () {
    index = index >= mixWords.length - 1 ? 0 : index + 1;
    $("#wordBox").text(mixWords[index]);
});

$("#closeModal").click(function () {
    $("#overlay").fadeOut();

});

