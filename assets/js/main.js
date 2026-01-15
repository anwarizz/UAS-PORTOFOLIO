document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop submit

    const name = document.getElementById("username").value;

    alert("Thank you, " + name + "!\n\nIni adalah website static, anggap saja pesannya sudah terkirim.");
});

function viewProject(path) {
    const confirmRedirect = confirm(
        "You will be redirected to my online Github.\n\nDo you want to continue?"
    );

    if (confirmRedirect) {
        window.location.href = `${path}`;
    }
}
