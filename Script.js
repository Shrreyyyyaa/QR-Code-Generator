document.addEventListener("DOMContentLoaded", () => {
    const qrInput = document.getElementById("qr-input");
    const generateBtn = document.getElementById("generate-btn");

    generateBtn.addEventListener("click", () => {
        const text = qrInput.value.trim();

        if (!text) {
            alert("Please enter some text or URL!");
            return;
        }

        localStorage.setItem("qrData", text);
        window.location.href = "Result.html";
    });
});