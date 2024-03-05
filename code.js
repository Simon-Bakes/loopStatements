function primeNum(){
    let maxRange = document.getElementById("input1").value;
    let counterPrime = 0;
    let isPrime;
    for(let i=2; i<=maxRange; i++){
            isPrime = true;
            for (let j=2; j<i; j++){
                if(i%j==0){
                    isPrime = false;
                }
            }
            if(isPrime){
                counterPrime++;
            }
        }
        document.getElementById("output1").innerHTML = "Primes numbers are: "+counterPrime;
}

function evenNum(){
    let empty = "";
    let i = -2;
    do {
        i+=2;
        empty += i + " "; 
    }while(i<=98);
    document.getElementById("output2").innerHTML = empty;
}