window.onscroll = () => {
    /*parallax hero*/
    
    document.querySelector(".cloudL").style.marginRight = scrollY +.5 + "px";
    document.querySelector(".cloudR").style.marginLeft = scrollY +.9 + "px";
    document.querySelector(".cloud2").style.marginTop = -scrollY +"px";
    document.querySelector(".cloud1").style.marginTop = -scrollY +"px";
    document.querySelector(".crayons").style.marginBottom = -scrollY +"px";
    document.querySelector(".main").style.marginTop = -scrollY + .8 + "px";
    document.querySelector(".hero h1").style.marginBottom = scrollY + "px";
    document.querySelector(".hero h1").style.opacity = ( 100 - scrollY) / 50;
    document.querySelector(".cLogo").style.opacity = ( 100 - scrollY) / 50;
    document.querySelector(".camilacrayon").style.marginRight = scrollY + "px";

    /*Parallax */
    document.querySelector(".pp").style.opacity = scrollY / 100;
} 
