function saludar() {
    const name = document.getElementById('name').value;
    const greetingElement = document.getElementById('greeting');
    
    if (name) {
        greetingElement.textContent = `Hola, ${name}!`;
    } else {
        greetingElement.textContent = "Hola";
    }
}
