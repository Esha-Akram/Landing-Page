import './Header.css';

function Header() {
    const MenuClick = () => {
        const menu = document.querySelector(".menu");
        menu.classList.toggle("show");
      };    
    return (
        <div id="header">
            <div class="nav-bar">
                <a class="logo" href="#">Cyber Nexis Tech</a>
                <div class="menu-icon" onClick={MenuClick}>&#9776;</div>
                <ul class="menu">
                    <li><a href="#feature">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#testimonial">Testimonials</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="banner">
                <div class="content">
                    <h1>WELCOME TO <span>CYBER NEXIS TECH</span></h1>
                    <p>We provide innovative software solutions to help businesses thrive in the digital age.</p>
                    <a href="#feature">Learn More</a>
                </div>
            </div>
        </div>
   
      
    )
}

export default Header;