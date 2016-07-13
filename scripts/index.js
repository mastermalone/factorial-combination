(function () {
    'use strict';
    
    var Combine = {
        factorial: [],
        factorial2: [],
        factorialResult: 0,
        factorialResult2: 0,
        init: function () {
            var submit = document.getElementById('submit');
            console.log('Value of submit', submit);
            if (window.addEventListener) {
                submit.addEventListener('click', this.invokeCalulations, true);
            }
        },
        invokeCalulations: function (num1, num2) {            
            var base = document.getElementById('base');
            var digits = document.getElementById('digits');
            var result = document.getElementById('result');
            num1 = parseInt(base.value);
            num2 = parseInt(digits.value);
            
            if (isNaN(num1) || isNaN(num2)) {
                result.innerHTML = 'The values you provided are not numeric at all, dummy';
                return;
            }
            
            Combine.clearCalculations();
            var first = Combine.calculateN({
                    num1: num1,
                    num2: num2,
                    factorial: Combine.factorial,
                    factorialResult: Combine.factorialResult
                });
            var second = Combine.calculateN({
                    num2: num2,
                    factorial: Combine.factorial2,
                    factorialResult: Combine.factorialResult2
                });
                
            result.innerHTML = Combine.revealPossibleCombinations(first, second);
        },
        calculateN: function (config) {
            var val = 0;
            var decrementor = typeof config.num1 !== 'undefined' ? config.num1 : config.num2;
            var iterator = typeof config.num2 !== 'undefined' ? config.num2 : config.num1;
            
            for (var i = 0; i < iterator; i++) {
                //Get the value of the decrementor and subtract 1 from it during each iteration of the loop
                decrementor = decrementor-=1;
                val = (decrementor);
                //Insert these values into an Array for later referencing
                config.factorial.push(val+1);
                console.log('decrementor:', config.factorial);
            }
            
            for (var k = 0; k < config.factorial.length; k++) {
                if (k === 1) {
                    //First, get the first result of the first two numbers multiplied
                    config.factorialResult = parseInt((config.factorial[k-1] * config.factorial[k]));
                }else if(k > 1) {
                    //Next, multiply the first result by the next number in the array sequence to get the value
                    config.factorialResult = config.factorialResult * config.factorial[k];
                    console.log('Multiply', config.factorialResult, 'Array', config.factorial[k], 'result', parseInt((config.factorial[k-1] * config.factorial[k])));
                }
            }
            console.log('Factorial N Value:', config.factorialResult);
            return config.factorialResult;
        },
        revealPossibleCombinations: function (val1, val2) {
            var result = val1 / val2;
            console.log('Divide:', val1, 'by', val2);
            console.log('Possible combinations', result);
            return result;
        },
        clearCalculations: function () {
            this.factorial = [];
            this.factorial2 = [];
            this.factorialResult = 0;
            this.factorialResult2 = 0;
        }
    };
    
    //Combine.init(20, 6);
    Combine.init();
}());