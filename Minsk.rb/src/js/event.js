var tab = {
  init : function () {
    tab.nav = document.getElementsByClassName("medialink-source");
    tab.txt = document.getElementsByClassName("medialink-target");
  
      for (var i=0; i<tab.nav.length; i++) {
        tab.nav[i].dataset.pos = i;
        tab.nav[i].addEventListener("click", tab.switch);
      }
      
      tab.nav[0].classList.add("show");
      tab.txt[0].classList.add("show");
  },

  switch : function () {
    for (var t of tab.nav) {
      t.classList.remove("show");
    }
    for (var t of tab.txt) {
      t.classList.remove("show");
    }
    
    tab.nav[this.dataset.pos].classList.add("show");
    tab.txt[this.dataset.pos].classList.add("show");
  }
};

(function() {
  Galleria.loadTheme('../node_modules/galleria/dist/themes/classic/galleria.classic.min.js');
  Galleria.run('.gallery');
    }());

window.addEventListener("load", tab.init);
