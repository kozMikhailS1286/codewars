<script>

function solution(str){
let arr = [];
  for (let i = str.length; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join('');;
}

</script>