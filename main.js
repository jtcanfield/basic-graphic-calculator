var currentQueArray = [];
function onClick(object, value){
  console.log(object, value);
}

function print( num ){
  console.log( 'The sum is: ' + num );
}
function calculate( nameOfCallbackFunction ){
  let result = 4 * ( 35 / 7 );
  nameOfCallbackFunction( result );
}
calculate( print );
