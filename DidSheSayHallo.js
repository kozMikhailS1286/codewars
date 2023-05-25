<script>

function validateHello(greetings) {
 res =  /\b(?:hallo|hello|hola|ciao|salut|ahoj|czesc)\b/.test(greetings.toLowerCase()) 
  return res
}

</script>