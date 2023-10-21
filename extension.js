const {St, Clutter} = imports.gi;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;
const Mainloop = imports.mainloop;


let panelButton;

function init () {

panelButton = new St.Bin({
    style_class : "panel-button",
});

let myArray = [" ROLEX SIR!", " LEO", " DILLI"];

let panelButtonText = new St.Label({
    text : myArray[0],
    y_align: Clutter.ActorAlign.CENTER,
});
panelButton.set_child(panelButtonText);

let currentIndex = 2;

function toggle (){
    currentIndex = (currentIndex + 1)%3;
    panelButtonText.set_text(myArray[currentIndex]);
    Mainloop.timeout_add_seconds(3, toggle);
    }
toggle();

}

function enable () {
Main.panel._leftBox.insert_child_at_index(panelButton, -1); 
}

function disable (){
Main.panel._leftBox.remove_child(panelButton);
}
