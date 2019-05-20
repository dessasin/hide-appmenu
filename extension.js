const Main = imports.ui.main;
var showMenu;

function init() {}

function show() {

    showMenu=Main.panel.statusArea.appMenu.actor.connect("show",function () 
    {
        Main.panel.statusArea.appMenu.actor.hide();
    });
    Main.panel.statusArea.appMenu.actor.hide();
}


function hide() {
    Main.panel.statusArea.appMenu.actor.disconnect(showMenu);
    Main.panel.statusArea.appMenu.actor.show();
}


