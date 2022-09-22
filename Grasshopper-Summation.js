<script>

var summation = function (num) {
  let arr = [];
  while (num > 0) {
    arr.push(num);
    num--;
  }

  let newArr = 0
  for (let i = 0; i < arr.length; i++) {
  newArr += arr[i];
  }

  return newArr;
}

</script>