// JavScript = makes it interactive



// ============= Start here [ Zakah Calculator  ] =============
function ZakahColcalate() {

  const nisaab = parseFloat(document.getElementById('nisaab').value);

  const miqdarka = 0.025 * nisaab;

 
document.getElementById('miqdarka').value = miqdarka  + '' + '$' ;

}
// =============End here [ Zakah Calculator ] =============