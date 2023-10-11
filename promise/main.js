let a = Number(prompt("enter a"));
let b = Number(prompt("enter b"));

let addition = (a, b) => {
    return new Promise((resolve, reject) => {
        if(!isNaN(a) && !isNaN(b)) {
            resolve(a + b);
        } else {
            reject('Les arguments doivent être des nombres');
        }
    });
};

addition(a, b)
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});


let soustraction = (a, b) => {
    return new Promise((resolve, reject) => {
        if(!isNaN(a) && !isNaN(b)) {
            resolve(a - b);
        } else {
            reject('Les arguments doivent être des nombres');
        }
    });
};

soustraction(a, b)
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});


let multiplication = (a, b) => {
    return new Promise((resolve, reject) => {
        if(!isNaN(a) && !isNaN(b)) {
            resolve(a * b);
        } else {
            reject('Les arguments doivent être des nombres');
        }
    });
};

multiplication(a, b)
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});

let division = (a, b) => {
    return new Promise((resolve, reject) => {
        if(!isNaN(a) && !isNaN(b) && b!==0) {
            resolve(a / b);
        } else {
            reject('Les arguments doivent être des nombres et b different de 0');
        }
    });
};

division(a, b)
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});


let modulo = (a, b) => {
    return new Promise((resolve, reject) => {
        if(!isNaN(a) && !isNaN(b) && b!==0) {
            resolve(a % b);
        } else {
            reject('Les arguments doivent être des nombres et b different de 0');
        }
    });
};

modulo(a, b)
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});
