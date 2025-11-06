window.onscroll = () => {
    /*parallax hero*/

    document.querySelector(".camilo_flying").style.marginTop = -scrollY + "px";
    document.querySelector(".camila_flying").style.marginTop = -scrollY + "px";
    document.querySelector(".cloud_group").style.marginTop = -scrollY + "px";
    document.querySelector(".planet").style.marginTop = scrollY + "px";
    document.querySelector(".Cedam_name").style.opacity = (100 - scrollY) / 50;
    document.querySelector(".cLogo").style.opacity = (100 - scrollY) / 50;
    document.querySelector(".hero h1").style.marginBottom = scrollY + "px";


}
