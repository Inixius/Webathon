let score = 0;

//const choices = document.querySelectorAll('.option').selected;
//choices.forEach((choice) => {
//    choice.addEventListener(("click"), (event) => {
//        score += event.target.value;
//    });
//});

const choices = document.querySelectorAll('.option');
const submitBtn = document.querySelector('.btn');



const result = () => {
    choices.forEach((choice) => {
        console.log(choice.checked);
        if (choice.checked == true && choice.value == 1) {
            score++;
        };
//    console.log("test");
    });
    console.log(score);
};

submitBtn.addEventListener("click", (event) => {
        result();
});

function changebackground() {
    document.querySelectorAll('.option').style.backgroundColor = "gray";
};