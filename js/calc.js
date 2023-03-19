function tambahBy()
{
    let form = document.getElementById("calc");
    let angka1 = parseFloat(form.angka1.value);
    let angka2 = parseFloat(form.angka2.value);
    if(isNaN(angka1) || isNaN(angka2)){
        alert("Please enter a valid number");
    }else{
        document.getElementById("result").innerHTML = angka1 + angka2;
    }
}

function kurangBy(){
    let form = document.getElementById("calc");
    let angka1 = parseFloat(form.angka1.value);
    let angka2 = parseFloat(form.angka2.value);
    if(isNaN(angka1) || isNaN(angka2)){
        alert("Please enter a valid number");
    }else{
        document.getElementById("result").innerHTML = angka1 - angka2;
    }
}

function kaliBy(){
    let form = document.getElementById("calc");
    let angka1 = parseFloat(form.angka1.value);
    let angka2 = parseFloat(form.angka2.value);
    if(isNaN(angka1) || isNaN(angka2)){
        alert("Please enter a valid number");
    }else{
        document.getElementById("result").innerHTML = angka1 * angka2;
    }
}

function bagiBy(){
    let form = document.getElementById("calc");
    let angka1 = parseFloat(form.angka1.value);
    let angka2 = parseFloat(form.angka2.value);
    if(isNaN(angka1) || isNaN(angka2)){
        alert("Please enter a valid number");
    }else{
        document.getElementById("result").innerHTML = angka1 / angka2;
    }
}

function pangkatBy(){
    let form = document.getElementById("calc");
    let angka1 = parseFloat(form.angka1.value);
    let angka2 = parseFloat(form.angka2.value);
    if(isNaN(angka1) || isNaN(angka2)){
        alert("Please enter a valid number");
    }else{
        document.getElementById("result").innerHTML = Math.pow(angka1,angka2);
    }
}