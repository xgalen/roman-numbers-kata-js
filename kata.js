var test1 = 'MMMCMXCIX';
var test2 = 'MM';
var test3 = 'MCMXCIX';
var test4 = 'MCMLXXXIV';
var test5 = 'MCMLXXXI';

function romanNumbers(test) {
  var values = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  var i,j,acc,temp, val, numI, numJ, compare;
  acc = 0;
  temp = 0;
  for(i=0, j=1; j<test.length; i++, j++) {
    numI = values[test.charAt(i)];
    numJ = values[test.charAt(j)];
    temp += numI;
    compare = numI - numJ;
    if(compare > 0) { // numI > numJ
      acc += temp;
      temp = 0;
    }
    else if(compare < 0) { // numI < numJ
      temp *= -1;
    }
  }
  // the last value
  temp += values[test.charAt(i)];
  acc += temp;
  console.log(acc);
}

romanNumbers(test1);
romanNumbers(test2);
romanNumbers(test3);
romanNumbers(test4);
romanNumbers(test5);
