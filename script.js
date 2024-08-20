function toggle(){
    var header = document.getElementById("navbar")
    header.classList.toggle('active')
}

function translate(evt, language) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    langchoise = document.getElementsByClassName("langchoise");
    for (i = 0; i < tablinks.length; i++) {
        langchoise[i].className = langchoise[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();