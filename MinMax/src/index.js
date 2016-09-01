var minAndMax = function(stringOfNumbers){
    var arrayOfNumbers = stringOfNumbers.split(" "),
        min = '',
        max = '';
    arrayOfNumbers.forEach(function(n){
        if(min == ''){
            min = n;
        };
        if(max == ''){
            max = n;
        }
        if(parseInt(min) > parseInt(n)){
            min = n;
        }
        if(parseInt(max) < parseInt(n)){
            max = n;
        }
    })
    var minValueAndMaxValue = min + " " + max;
    return minValueAndMaxValue;
}


module.exports = minAndMax;