<script>

    function monkeyCount(n) {
        let newArrNum = []
        for (let i = 0; i < n; i++) {
            newArrNum.push(n-i)
        }
        return newArrNum.reverse();
    }

    console.log(monkeyCount(10))

</script>