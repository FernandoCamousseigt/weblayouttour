
function resetForm() {
    document.getElementById("myForm").reset();
}

/* smooth scroll */
$(function (){
    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

         $("html, body").animate({
            scrollTop: $(gato).offset().top -50,
        }, 800);
        }
    });
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
