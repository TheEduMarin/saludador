function saludar() {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const greetingElement = document.getElementById('greeting');

    const hours = new Date().getHours();
    let greeting = "";

    if (hours >= 6 && hours < 12) {
        greeting = "Buenos días";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }

    if (gender === "masculino") {
        greeting += `, Sr. ${name || ""}`;
    } else if (gender === "femenino") {
        greeting += `, Sra. ${name || ""}`;
    } else {
        greeting += `, ${name || ""}`;
    }

    greetingElement.textContent = greeting;
}
