import St from 'gi://St';
import Clutter from 'gi://Clutter';
import Gio from 'gi://Gio';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension, gettext as _} from 'resource:///org/gnome/shell/extensions/extension.js';

const Mainloop = imports.mainloop;



let panelButton;
let myArray = ["ROLEX SIR!", "LEO", "DILLI", "RESUME", "VIKRAM"];

function init() {
    panelButton = new St.Bin({
        style_class: "panel-button",
    });

    let panelButtonText = new St.Label({
        text: myArray[0],
        y_align: Clutter.ActorAlign.CENTER,
    });
    panelButton.set_child(panelButtonText);

    let currentIndex = 2;

    function toggle() {
        currentIndex = (currentIndex + 1) % myArray.length;
        panelButtonText.set_text(myArray[currentIndex]);
        Mainloop.timeout_add_seconds(3, toggle);
    }

    toggle();
}

export default class looptextsonpanel extends Extension{
constructor(metadata) {
super (metadata);
}

  enable() {
    
    init();
    
    Main.panel._leftBox.insert_child_at_index(panelButton, -1);

}

  disable() {
    Main.panel._leftBox.remove_child(panelButton);
}
}
