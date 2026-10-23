
// section
var box = document.getElementById("myBox");
box.addEventListener("click", function () {
    box.style.background = "linear-gradient(110deg, #17130a, #080808)";
});

// sweet alertlinear-gradient(110deg, #17130a, #080808)
window.onload = function () {
  Swal.fire({
    title: "Hina Farwa Mehandi Arts",
    text: "Welcome to our beautiful Mehndi Designs",
    width: 550,
    padding: "3em",
    color: "#D4AF37",
    background: "#000",

    confirmButtonText: "Veiw Designs",
    confirmButtonColor: "#D4AF37",

    backdrop: `
      rgba(0,0,0,0.8)
    `
  });
};
var explordesign=document.getElementById("explordesign")
 function explorDesign(){
    window.location.href = "design.html";
 }
