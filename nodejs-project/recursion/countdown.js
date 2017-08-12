let countdown = (num) => {
    if (num === 0) { // base case
        console.log("BOOM");
    }
    else {
        console.log(num);
        countdown(num-1); // recursive call on a reduced problem: num-1
    }
}

countdown(5);
