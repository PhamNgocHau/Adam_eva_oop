let Apple = function (weight) {
    this.weight = weight;

    this.getWeight = function () {
        return this.weight;
    }
    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    }
    this.isEmpty = function () {
        return false;
    }
}

let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.getName = function () {
        return this.name;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setName = function () {
        this.name = name;
    };
    this.setGender = function () {
        this.gender = gender;
    };
    this.setWeight = function () {
        this.weight = weight;
    };
    this.speaking = function () {
        alert('My name: ' + this.name + ' - My gender: ' + this.gender + ' - My Weight: ' + this.weight);
    };
    this.checkApple = function () {
        alert(apple.weight);
    };
    this.checkWeight = function () {
        alert(this.weight);
    };
    this.eatApple = function () {
        if (apple.weight > 0) {
            apple.decrease();
            this.weight++;
        }else {
            alert('No more apple to eat');
        }
    }
};

let apple = new Apple(20);
let adam = new Human('Adam' , 'Male' , 65);
let eva = new Human('Eva' ,'Female' , 50);

function speaking(human) {
    human.speaking();
}
function eatApple(human) {
    human.eatApple();
}

function checkApple(human) {
    human.checkApple();
}
function checkWeight(human) {
    human.checkWeight();
}
function check(name) {
    name.getWeight();
    alert(name.getWeight());
}

