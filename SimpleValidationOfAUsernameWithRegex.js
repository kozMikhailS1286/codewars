<script>

function validateUsr(username) {
  let res = /^[a-z\d_]{4,16}$/.test(username);
  return res
}

</script>