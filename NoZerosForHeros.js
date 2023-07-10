<script>


    function noBoringZeros(n) {
        let answer = n.toString();
        let lastNum = answer.length - 1;
        if(n === 0) {
            return 0;
        }

        const innerFunc = () => {
            answer = answer.slice(0, lastNum);
            lastNum = answer.length - 1;
            if(answer[lastNum] === '0') {
                innerFunc();
            }
        }

        if(answer[lastNum] === '0') {
            innerFunc();
        }

        return parseInt(answer);
    }

</script>