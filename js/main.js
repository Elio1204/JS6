
let cad2 = `
        
        <nav class="nav">
            <div class="logo">COFFEE</div>
            <ul class="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="nosotros.html">About Us</a></li>
            </ul>
        </nav>
`
document.getElementById("header").innerHTML=cad2;


let cad1 = `
            <div class="footer-container">
            <h3>COFFEE</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est optio amet repellat unde eaque repellendus fuga eos? Reprehenderit non beatae blanditiis ratione deserunt tenetur, aliquam officia nihil aperiam dicta!
            </p>
            <ul class="socials">
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyrigth &copy;2023 COFFEE. designed by <span>elio</span>
            </p>
        </div>
`
document.querySelector('footer').innerHTML=cad1;
