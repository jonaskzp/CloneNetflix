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

//scroll ga
//sessao1
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".section1" ); // Seção que contém as imagens
    const btnLeft = document.getElementById("scroll-left1");
    const btnRight = document.getElementById("scroll-right1");

    const scrollAmount = 300; // Define a quantidade de rolagem por clique

    btnLeft.addEventListener("click", function () {
        gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    btnRight.addEventListener("click", function () {
        gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

//sessao2
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".section2" ); // Seção que contém as imagens
    const btnLeft = document.getElementById("scroll-left2");
    const btnRight = document.getElementById("scroll-right2");

    const scrollAmount = 300; // Define a quantidade de rolagem por clique

    btnLeft.addEventListener("click", function () {
        gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    btnRight.addEventListener("click", function () {
        gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

//sessao3
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".section3" ); // Seção que contém as imagens
    const btnLeft = document.getElementById("scroll-left3");
    const btnRight = document.getElementById("scroll-right3");

    const scrollAmount = 300; // Define a quantidade de rolagem por clique

    btnLeft.addEventListener("click", function () {
        gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    btnRight.addEventListener("click", function () {
        gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

