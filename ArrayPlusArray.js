<script>

function arrayPlusArray(arr1, arr2) {
var sum1 = arr1.reduce(function(a, b){
    return a + b;
}, 0)
var sum2 = arr2.reduce(function(a, b){
    return a + b;
}, 0)
return sum1 + sum2
}


</script>