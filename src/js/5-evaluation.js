const evalArray = [2, 5, 9];

function countGreater() {
  for (const num in evalArray) {
    console.log(evalArray[num]);
    if (browsedMovies.length > evalArray[num]) {
      console.log("en el if");
      console.log(`El número de series es mayor que ${evalArray[num]}.`);
    } else {
      console.log(`El número de series es menor que ${evalArray[num]}.`);
    }
  }
}
