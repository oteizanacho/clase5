function noParesDeContarImparesHasta(numero){
    let impares=0;
    for (let i=1; i<=numero; i+=2){
        ++impares;
        //console.log(impares);
    }
    return impares;
}

console.log(noParesDeContarImparesHasta(7));