<script>

function feast(beast, dish) {
    if (beast[0] === dish[0] && beast.substring( beast.length - 1) === dish.substring( dish.length - 1)) {
      return true;
    } else {
      return false;
    }
}

</script>