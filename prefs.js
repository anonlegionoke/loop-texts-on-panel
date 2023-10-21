const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;

function init () {}

function buildPrefsWidget () {
  let widget = new MyPrefsWidget();
 
  return widget;
}

const MyPrefsWidget = GObject.registerClass(
class MyPrefsWidget extends Gtk.Box {

_init (params) {
      super._init(params);
      
      this.margin = 20;
      this.set_spacing(15);
      this.set_orientation(Gtk.Orientation.VERTICAL);
      
         
      let spinButton = new Gtk.SpinButton();
      spinButton.set_sensitive(true);
      spinButton.set_range(-60,60);
      spinButton.set_value(0);
      
      spinButton.connect("value-changed", function (w) {
        log(w.get_value_as_int());
        });
        
      let hBox = new Gtk.Box();
      hBox.set_orientation(Gtk.Orientation.HORIZONTAL);
}
});
