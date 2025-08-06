window.onscroll = () => {
    /*parallax hero*/
    document.querySelector(".cloud3").style.marginTop = -scrollY +"px";
    document.querySelector(".cloudL").style.marginRight = scrollY +.5 + "px";
    document.querySelector(".cloudR").style.marginLeft = scrollY +.9 + "px";
    document.querySelector(".cloud2").style.marginTop = -scrollY +"px";
    document.querySelector(".cloud1").style.marginTop = -scrollY +"px";
    document.querySelector(".main").style.marginTop = -scrollY + .8 + "px";
    /*document.querySelector(".hero h1").style.marginTop = scrollY + "px";
    document.querySelector(".hero h1").style.opacity = ( 100 - scrollY) / 100;*/

    /*Parallax */
    document.querySelector(".pp").style.opacity = scrollY / 100;
} 
