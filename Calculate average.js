<script>

function findAverage(array) {
    var s = 0;
   for (let i = 0; i < array.length; i++) {
      s += array[i];
   }

   let conclusion = s / array.length;
   if (s > 0) {
    return conclusion;
   } else {
    return 0;
   }     
}

</script>