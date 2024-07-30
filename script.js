const data = new Date();
switch(data.getDay()){
    case 1: {
        if(data.getHours() < 12){
            document.getElementById("segunda-feira-check").checked = true;
        }else{
            document.getElementById("terca-feira-check").checked = true;
        }
        break;
    }
    case 2: {
        if(data.getHours() < 12){
            document.getElementById("terca-feira-check").checked = true;
        }else{
            document.getElementById("quarta-feira-check").checked = true;
        }
        break;
    }
    case 3: {
        if(data.getHours() < 12){
            document.getElementById("quarta-feira-check").checked = true;
        }else{
            document.getElementById("quinta-feira-check").checked = true;
        }
        break;
    }
    case 4: {
        if(data.getHours() < 12){
            document.getElementById("quinta-feira-check").checked = true;
        }else{
            document.getElementById("sexta-feira-check").checked = true;
        }
        break;
    }
    case 5: {
        if(data.getHours() < 12){
            document.getElementById("sexta-feira-check").checked = true;
        }else{
            document.getElementById("segunda-feira-check").checked = true;
        }
        break;
    }
    default:{
        break;
    }
}