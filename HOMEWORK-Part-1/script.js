class Animal {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
    }

    speak(message) {
        console.log(`${this.name} says: ${message}`);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("animalForm");
    const output = document.getElementById("output");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const kind = document.getElementById("kind").value;
        const message = document.getElementById("message").value;

        if (name && kind && message) {
            const animal = new Animal(name, kind);
            const logMessage = `${animal.name} says: ${message}`;
            output.textContent = logMessage;
            console.log(logMessage);
        } else {
            alert("Please fill in all fields.");
        }
    });
});