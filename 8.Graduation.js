function solve(input) {
    let index = 0;
    let name = input[index];
    index++
    let year = 1;
    let sumGrade = 0;
    let examFailed = 0;
    let excluded = false;

    while (year <= 12) {
        let currentGrade = Number(input[index]);
        index++;
        if (currentGrade < 4) {
            examFailed++;
            if (examFailed == 2) {
                excluded = true;
                break;
            }
            continue;
        }
        sumGrade = sumGrade + currentGrade;
        year++
    }
    if (excluded == false) {
        let avarageGrade = sumGrade / 12
        console.log(`${name} graduated. Average grade: ${avarageGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${year} grade`);
    }
    
}

solve([
"Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);