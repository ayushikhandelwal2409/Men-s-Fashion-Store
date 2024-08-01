
// Add event listeners to each heart icon
const imgs = document.querySelectorAll(".addtowishlist");
imgs.forEach(img => {
    img.addEventListener("click", function() {
        if (this.src.endsWith("heart_3916585.png")) {
          this.src = "heart.png";
          alert("Item added to wishlist.");
        } else if (this.src.endsWith("heart.png")) {
          this.src = "heart_3916585.png";
          alert("Item removed from wishlist.");
        }
      });
});
function open_nav(){
    document.getElementsByClassName("bar")[0].style.width="auto";
}
function close_nav(){
    document.getElementsByClassName("bar")[0].style.width="0px";
}
if (document.getElementById("cart-item").childNodes.length>='1'){
    document.getElementById('cartemptyid').style.display='none';
}