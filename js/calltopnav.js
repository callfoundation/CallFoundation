function topnavbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function download80g(){
  var link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    //link.setAttribute('download', ' ');
    link.href = "js/recipt.docx";
    //document.body.appendChild(link);
    link.click();
    link.remove();

}
