// ex.1 calculates prime numbers
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

// ex.2 finds even numbers
function evenNum(){
    let finalOutput = "";
    let startRange = -2;
    do {
        startRange+=2;
        finalOutput += startRange + " "; 
    }while(startRange<=98);
    document.getElementById("output2").innerHTML = finalOutput;
}

// ex.3 fibonacci sequence
function fibonacciSeq(){
    let x=1;
    let y=1;
    let z=0;
    let finalOutput="";
    for(let i = 1; i<=17; i++){
        z = x+y;
        finalOutput += z+" ";
        x = y;
        y = z;
    }
    document.getElementById("output3").innerHTML = "0 1 1 " +finalOutput;
}

// ex.4 pyramid of numbers
function numPyramid(){
//     let maxRange = document.getElementById("input4").value;
//     let finalOutput="";
//     let startNum=1;
//     for(let i=1;i<=maxRange;i++){
//         finalOutput += " <br/>";
//         for(let j=1;j<=i;j++){
//             finalOutput += startNum+" ";
//             startNum+=1;
//         }
//     }
//     document.getElementById("output4").innerHTML = finalOutput;
// }
    let maxRange = document.getElementById("input4").value;
    let finalOutput="";
    let numCount=1;
    let rowsCount=-1;
    while(numCount<=maxRange){
           rowsCount+=1;
        for(let i=0;i<=rowsCount;i++){
            if(numCount > maxRange){
                break;
            }
            finalOutput += numCount+" ";
            numCount+=1;
        }
        finalOutput += " <br/>";
    }
    document.getElementById("output4").innerHTML = finalOutput;
}

// ex.5 numbers to the power of 3
function powerof3(){
    let storageNum;
    let finalOutput="";
    for(let i = 0; i<=20; i++){
        storageNum = i**3;
        finalOutput += storageNum+" ";
    }
    document.getElementById("output5").innerHTML = finalOutput;
}

// ex.6 fractions formula?
function sumOf(){
    let placeholder;
    let finalOutput="";
    for(let i = 1; i<=20; i++){
        for(let j = 1; j<=i; j++){
            placeholder = 1/i;
        }
        finalOutput = +placeholder+ +finalOutput;
    }
    document.getElementById("output6").innerHTML = finalOutput;
}

// ex.7 diamond generator
function diamond(){
    let radius = document.getElementById("input7").value;
    let storage = "";
    let storage2 = "<br/>";

        for(let i = 1; i <= radius; i++){
                storage += "<br/>"; 
            for(let j = 1; j <= i; j++){
                storage += "*";
            } 
            for(let k = radius; k > i; k--){
                storage2 += "*";
            }
            storage2 += "<br/>";
            document.getElementById("output7").innerHTML = storage+storage2;
        }
}

// ex.8