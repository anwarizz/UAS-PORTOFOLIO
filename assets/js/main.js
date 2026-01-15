document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop submit

    const name = document.getElementById("username").value;

    alert("Thank you, " + name + "!\n\nIni adalah website static, anggap saja pesannya sudah terkirim.");
});

function viewProject() {
    const confirmRedirect = confirm(
        "You will be redirected to another my online personal website.\n\nDo you want to continue?"
    );

    if (confirmRedirect) {
        window.location.href = "https://example.com";
    }
}
