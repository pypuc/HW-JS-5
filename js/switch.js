// 1

let answer = prompt("Напишіть один із поданих напоїв: кава, чай, сік").toLowerCase();
switch(answer){
    case "кава".toLowerCase():
        alert("Ви вибрали каву")
    break;
    case "чай".toLowerCase():
        alert("Ви вибрали чай")
    break;
    case "сік".toLowerCase():
        alert("Ви вибрали сік")
    break;
    default:
        alert("ви вписали неправильно")
}

// 2

let dayWeek = prompt("Впишіть день тижня").toLowerCase();
switch(dayWeek){
    case "понеділок".toLowerCase():
        alert("день тижня понеділок, робочий день")
    break;
    case "вівторок".toLowerCase():
        alert("день тижня вівторок, робочий день")
    break;
    case "середа".toLowerCase():
        alert("день тижня середа, робочий день")
    break;
    case "четверг".toLowerCase():
        alert("день тижня четверг, робочий день")
    break;
    case "п'ятниця".toLowerCase():
        alert("день тижня п'ятниця, робочий день")
    break;
    case "субота".toLowerCase():
        alert("день тижня субота, робочий день")
    break;
    case "неділя".toLowerCase():
        alert("день тижня неділя, робочий день")
    break;
    default: 
    alert("неправильно")
}

// 3

let mouns = prompt("впишіть місяць").toLowerCase();
switch(mouns){
    case "січень".toLowerCase():
        alert("зима")
    break;
    case "лютий".toLowerCase():
        alert("зима")
    break;
    case "березень".toLowerCase():
        alert("весна")
    break;
    case "квітень".toLowerCase():
        alert("весна")
    break;
    case "травень".toLowerCase():
        alert("весна")
    break;
    case "червень".toLowerCase():
        alert("літо")
    break;
    case  "липень".toLowerCase():
        alert("літо")
    break;
    case  "серпень".toLowerCase():
        alert("літо")
    break;
    case  "вересень".toLowerCase():
        alert("осінь")
    break;
    case  "жовтень".toLowerCase():
        alert("осінь")
    break;
    case "листопад".toLowerCase():
        alert("осінь")
    break;
    case "грудень".toLowerCase():
        alert("зима")
    break;
    default:
        alert("неправильно")
}

// 4

let number = Number(prompt("впишіть номер місяця"));
switch(number){
    case Number("1"):
        alert("31")
    break;
    case Number("2"):
        alert("29")
    break;
    case Number("3"):
        alert("31")
    break;
    case Number("4"):
        alert("30")
    break;
    case Number("5"):
        alert("31")
    break;
    case Number("6"):
        alert("30")
    break;
    case  Number("7"):
        alert("31")
    break;
    case  Number("8"):
        alert("31")
    break;
    case  Number("9"):
        alert("30")
    break;
    case  Number("10"):
        alert("31")
    break;
    case Number("11"):
        alert("30")
    break;
    case Number("12"):
        alert("31")
    break;
    default:
        alert("неправильно")
}

// 5

let color = prompt("впишіть коліір (зелений,  жовтий, красний)").toLowerCase();
switch(color){
    case "зелений".toLowerCase():
        alert("йти")
    break;
    case "жовтий".toLowerCase():
        alert("чекати")
    break;
    case "красний".toLowerCase():
        alert("стоп")
    break;
    default:
        alert("неправильно")
}
