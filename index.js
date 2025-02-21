// BOTAO TROCA USUARIO
const selectedUser = document.querySelector("#selectedUser");
const userList = document.querySelector("#userList");

// Exibe/oculta a lista ao clicar na foto do usuário
selectedUser.addEventListener("click", () => {
    userList.style.display = userList.style.display === "block" ? "none" : "block";
});

// Troca o usuário ao clicar em um item da lista
function changeUser(imageSrc) {
    selectedUser.src = imageSrc;
    userList.style.display = "none"; // Fecha a lista após a seleção
}

// Fecha a lista ao clicar fora
window.addEventListener("click", (e) => {
    if (!selectedUser.contains(e.target) && !userList.contains(e.target)) {
        userList.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery section"); // Seção que contém as imagens
    const btnLeft = document.getElementById("scroll-left");
    const btnRight = document.getElementById("scroll-right");

    const scrollAmount = 300; // Define a quantidade de rolagem por clique

    btnLeft.addEventListener("click", function () {
        gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    btnRight.addEventListener("click", function () {
        gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

