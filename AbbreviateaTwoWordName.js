<script>

function abbrevName(name){

let first = name.slice(0,1).toUpperCase();
let probel = name.indexOf(" ");
let second = name[probel + 1].toUpperCase();

return first + "." + second;

}

</script>