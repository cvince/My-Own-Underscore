
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



/*

My own underscore functions

*/

_.union([1, 2, 3], [4, 1, 3], [5, 7, 1]);

function each(input, predicate){
  for(var i = 0; i<input.length; i++){
    predicate(input, i);
  }
}

function contains(input, target){
  each(input, )
}

function uniq(input){

  var seen = [];
  var outputArr = [];

  each(input, function(input, index){

    outputArr.push(input[index]);

    each(outputArr, function(outputArr, index2){

    })

    console.log(outputArr);
  });

}

function union(input){

  var outputArr = [];

  for(var i = 0; i<input.length; i++){
    for(var j = 0; j<input[i].length; j++){
      if(input[i][j] != input[i+1][j]){

      }
    }
  }
}


/*

Underscore All

*/

function all(input, predicate){

  for(var i = 0; i< input.length; i++){
    if (predicate(input[i])){
      return true;
    }else{
      return false;
    }
  }
}


