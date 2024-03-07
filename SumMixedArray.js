<script>

function sumMix(x){
        let newArr = []
        for (let i = 0; i < x.length; i++) {
            newArr.push(Number(x[i]))
        }
        return newArr.reduce((sum, current) => sum + current)
}

</script>