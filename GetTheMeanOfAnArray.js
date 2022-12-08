<script>

function getAverage(marks){
    let sum = marks.reduce((acc, el)=> acc + el, 0);
    let sr = sum / marks.length;
    let itog = Math.floor(sr)
    return itog
}

</script>