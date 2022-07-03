$(document).ready(function(){
   
    AddDateField();
  });
function AddDateField() {
    var x = document.getElementById("salary");
    for (i = 1; i <= 20; i++) {
        var option = document.createElement("option");
        option.text = (i*10000).toString();
        option.value = i*10000;
        x.add(option);
    }
    
    var d = new Date();
    var n = d.getFullYear();
    var x = document.getElementById("start-date-year");
    var i;
    for(i = n; i>1990; i--){
        var option = document.createElement("option");
        option.text = i.toString();
        option.value = i;
        x.add(option);
    }
    var x = document.getElementById("start-date-month");
    for(i=1; i<= 12; i++){
        var option = document.createElement("option");
        option.text = i.toString();
        option.value = i;
        x.add(option);
    }
     var x = document.getElementById("start-date-day")
    for(i =1 ; i <= 31; i++)
    {
        var option = document.createElement("option");
        option.text = i.toString();
        option.value = i;
        x.add(option);
    }
}


 