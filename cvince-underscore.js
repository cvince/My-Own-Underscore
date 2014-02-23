
/*

Underscore Map

*/

_.map(list, iterator, [context]);

//Map takes an input list, and applies a transformation to the input list based on a callback function, and produces a single new array.
_.map([2, 3, 4], function(num){ return num*3 });

//underscore does this:
//[2*3, 3*3, 4*3];

//Result is [6, 9, 12]

//If the input list is an object, the iterator's arguments will be vaue, key, list.
_.map({hello:2, my:3, name:4}, function(value, key){ return value*3 });
//result [6, 9, 12]

//Map also takes input strings!
_.map(['hello', 'my', 'name'], function(num){ return num + num });
// result ['hellohello', 'mymy', 'namename']

/*

Underscore Reduce

*/

_.reduce(list, iterator, memo, [context]);

//Reduce boils down a list into a single value based on an iterator function in the second argument.
_.reduce([2, 3, 4], function(memo, num){ return memo + num });
//result is
//  2
//  2 + 3 = 5
//  5 + 4 = 9

// returned number is 9

//With strings
_.reduce(['hello', 'my', 'name'], function(memo, num) { return memo + num });
//  result is
//  'hello'
//  'hello'+'my'
//  'hellomy'+'name'

//  returned value is 'hellomyname'

//With a memo
_.reduce([1, 2, 3], function(memo, num) { return memo*num }, 10);
//  result is
//  10
//  10 + 1
//  11 + 2
//  13 + 3

//  returned number is 16

/*

Underscore Union

*/
_.union([1, 2, 3], [4, 1, 3], [5, 7, 1]);



/*-------------------------------------

      By: Vincent Chan
      My own underscore functions
      --Only works with arrays.

-------------------------------------*/

var _vc = {};

/*

      EACH

*/


_vc.each = function (input, predicate){
  for(var i = 0; i<input.length; i++){
    predicate(input, i);
  }
}

/*

      FILTER

*/

_vc.filter = function (list, predicate){
  var outputArr = [];
  each(list, function(list, index){
    if(predicate(list[index])){
      outputArr.push(list[index]);
    }
  })
  return outputArr;
}

/*

      CONTAINS

*/

_vc.contains = function(input, target){
  if(input.indexOf(target)!=-1){
    return true;
  }else{
    return false;
  }
}



/*

      UNIQ
      Sample Data: [1, 3, 2, 1, 5, 1, 3, 2, 11]

*/

_vc.uniq = function(input){
  each(input, function(input, i){
    for(var j = i+1; j<input.length; j++){
      //console.log(input[i]+' and '+input[j]);
      if(input[i] == input[j]){
        //console.log('erase' + input[j] + ' at index ' + j);
        input.splice(j,1);
      }
      console.log(input);
    }
  })
  return input;
}



/*

      FLATTEN
      Sample Data: [[1, 3, 2], [1, 5, 1, 3], [2, 11]]
      Sammple Data: [[1, 3, 2], [[1, 5, 1, 3], [2, 11]]]

*/

var flattenRecurse = function(input, output) {

  if(Array.isArray(input)){
    for(var i = 0; i<input.length; i++){
      flattenRecurse(input[i], output)
    }
  }else{
    output.push(input);
  }

};

_vc.flatten = function(input, shallow) {
    var flatArr = [];
    if(!shallow){
      flattenRecurse(input, flatArr);
    }else{
      _vc.each(input, function(input, index){
        flatArr = flatArr.concat(input[index]);
      })
    }

    return flatArr;
};

/*

      UNION
      direct dependencies: flatten, each, uniq
      Sample Data: [[1, 3, 2], [1, 5, 1, 3], [2, 11]]
      Sammple Data: [[1, 3, 2], [[1, 5, 1, 3], [2, 11]]]

*/

_vc.union = function(input){
  _vc.flatten(input)
}


/*

      ALL

*/

_vc.all = function(input, predicate){

  for(var i = 0; i< input.length; i++){
    if (predicate(input[i])){
      return true;
    }else{
      return false;
    }
  }
}


