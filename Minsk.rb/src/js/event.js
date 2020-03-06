$(".medialink").on("click",function openLink(act, tabName) {
  var i, tabcontent, medialink;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  medialink = document.getElementsByClassName("medialink");
  for (i = 0; i < medialink.length; i++) {
    medialink[i].className = medialink[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  act.currentTarget.className += " active";
});

$(document).ready(function(){
  $("a.photo").fancybox({
    transitionIn: 'elastic',
    transitionOut: 'elastic',
    speedIn: 200,
    speedOut: 200,
    hideOnOverlayClick: false,
  })
});