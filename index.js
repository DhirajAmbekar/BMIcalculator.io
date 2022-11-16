function check1(){
    var w = document.getElementById("wei").value;
    var h = document.getElementById("hei").value;

    m = h * 30.48

     var bmi = w/(m*m);
     var bmi1= bmi*1000
    console.log(bmi1)
    if(bmi1<=2.006174069959414){
        document.getElementById("under").style.width = "15%"
        document.getElementById("under").style.backgroundColor = "blue"
    }
    else if( bmi1>=2.006174069959414 && bmi1<=2.5000015333340393){
        document.getElementById("under").style.width = "50%"
        document.getElementById("under").style.backgroundColor = "yellow"

    }
    else{
        document.getElementById("under").style.width = "100%"
        document.getElementById("under").style.backgroundColor = "red"
    }

}