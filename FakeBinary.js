<script>

function fakeBin(x){
  let numStr = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < "5")numStr += "0";
    else if (x[i] >= "5")numStr += "1"
    }
    return numStr
}

</script>