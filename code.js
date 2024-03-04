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