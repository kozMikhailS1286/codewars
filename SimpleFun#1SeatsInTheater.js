<script>

function seatsInTheater(nCols, nRows, col, row) {
  
  let iRows = nRows - row;
  let iCols = nCols - (col - 1);
  
  return iRows * iCols;
}

</script>