function solve(input) {
    let n = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < n) {
        let currentNumber = Number(input[index]);
        sum = sum + currentNumber;
        index++;
    }
    console.log(sum);
}

solve([
"20",
"1",
"2",
"3",
"4",
"5",
"6"]);
