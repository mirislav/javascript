function months() {
    var input = parseInt(document.getElementById("input").value);
    var monthName = Switch(input);
    document.getElementById("output1").innerText = monthName;
  }
  
  function Switch(number) {
    var month;
    switch (number) {
      case 1:
        month = "Leden";
        break;
      case 2:
        month = "Únor";
        break;
      case 3:
        month = "Březen";
        break;
      case 4:
        month = "Duben";
        break;
      case 5:
        month = "Květen";
        break;
      case 6:
        month = "Červen";
        break;
      case 7:
        month = "Červenec";
        break;
      case 8:
        month = "Srpen";
        break;
      case 9:
        month = "Září";
        break;
      case 10:
        month = "Říjen";
        break;
      case 11:
        month = "Listopad";
        break;
      case 12:
        month = "Prosinec";
        break;
      default:
        month = "Neplatné číslo měsíce";
    }
    return month;
  }










function While() {
    var output2 = document.getElementById("output2");
    var num = 2;

    while(num <= 20) {
        output2.innerHTML += num + ", ";
        num += 2;
    }
}










function days() {
    var input = parseInt(document.getElementById("input4").value);
    var dayName = Switch(input);
    document.getElementById("output4").innerText = dayName;
}

function Switch(number) {
    var day;
    switch (number) {
        case 1:
            day = "Pondělí";
            break;
        case 2:
            day = "Úterý";
            break;
        case 3:
            day = "Středa";
            break;
        case 4:
            day = "Čtvrtek";
            break;
        case 5:
            day = "Pátek";
            break;
        case 6:
            day = "Sobota";
            break;
        case 7:
            day = "Neděle";
            break;
        default:
            day = "Neplatné číslo dne";
    }
    return day;
}

