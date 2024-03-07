<script>

    function sumArray(array) {
        if (array == null) {
            return 0
        } else if (array.length === 0) {
            return 0
        } else if (array.length === 1) {
            return 0
        } else {
            let withoutMaxNum = Math.max(...array)
            let withoutMinNum = Math.min(...array)

            let newArray = array.reduce((partialSum, a) => partialSum + a, 0)
            return newArray - withoutMaxNum - withoutMinNum
        }
    }


</script>