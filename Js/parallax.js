window.onscroll = () => {
    /*parallax hero*/
    
   document.querySelector(".camilo_flying").style.marginTop = -scrollY +"px";
    document.querySelector(".cloud1").style.marginTop = -scrollY +"px";
    document.querySelector(".planet").style.marginTop = scrollY +"px";
    document.querySelector(".hero h1").style.marginBottom = scrollY + "px";
    document.querySelector(".hero h1").style.opacity = ( 100 - scrollY) / 50;
    document.querySelector(".cLogo").style.opacity = ( 100 - scrollY) / 50;

    /*Parallax */
    document.querySelector(".pp").style.opacity = scrollY / 100;


} 
