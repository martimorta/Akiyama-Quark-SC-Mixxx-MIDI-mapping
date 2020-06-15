//QUARK = new Controller();

var QUARK = {};

QUARK.leds={
    cue: 0x35,
}

QUARK.offAllLEDS = function ()
{
    for (var i = 1; i <= 300; i++) {
        midi.sendShortMsg(0x90, i, 0x00);
    }
}

QUARK.init = function (id, debugging) 
{
    script.debug("INIT QUARK");
    // turn on all LEDs
    for (var i = 1; i <= 300; i++)
    {        
        midi.sendShortMsg(0x90, i, 0x7f);
        SleepForMilliseconds(100);
    }
    // midi.sendShortMsg(0x90, 0x35, 0x00);
    // midi.sendShortMsg(0x91, 0x35, 0x7f);
    // midi.sendShortMsg(0x90, 0x17, 0x7f);
    // midi.sendShortMsg(0x90, 0x1A, 0x7f);
    // midi.sendShortMsg(0x90, 0x1D, 0x7f);
    // QUARK.offAllLEDS();
    // var i=0;
    // engine.beginTimer(1000, function() {
    //         midi.sendShortMsg(0x90, i++, 0x7f);
    //         if (i>=20)
    //             QUARK.offAllLEDS();
    // })
    
    // engine.beginTimer(3000, function() {
    //     for (var i = 1; i <= 300; i++) {
    //         midi.sendShortMsg(0x90, i, 0x00);
    //     }
    // }, true)

}
 
QUARK.shutdown = function() {
   // turn off all LEDs
   for (var i = 1; i <= 40; i++) {
        midi.sendShortMsg(0x90, i, 0x00);
    }
}
 

 QUARK.killEq = function (channel, control, value) {



   // midi.sendShortMsg(0x90, 0x34, 0x00); 
  
    midi.sendShortMsg(0x90, 0x4A, 0x7f);
   


    //[EqualizerRack1_[Channel1]_Effect1],button_parameter3 - xml group - [EqualizerRack1_[Channel1]_Effect1]
};

// The wheel that actually controls the scratching quickly with shift
QUARK.shiftWheelTurn1 = function (channel, control, value) {
    // B: For a control that centers on 0x40 (64):
    var newValue = value - 64;

    midi.sendShortMsg(0x90, 0x37, 0x7f);
    midi.sendShortMsg(0x90, 0x37, 0x00);

    // In either case, register the movement
    if (engine.isScratching(1)) {
        engine.scratchTick(1, newValue);
        engine.scratchDisable(1);
    } else {
        engine.setValue('[Channel'+1+']', 'jog', newValue*8);
        engine.scratchDisable(1);
    }
};

// The wheel that actually controls the scratching normal
QUARK.wheelTurn1 = function (channel, control, value) {
 
    midi.sendShortMsg(0x90, 0x37, 0x7f);
    midi.sendShortMsg(0x90, 0x37, 0x00);

    var newValue = value - 64;

    if (engine.isScratching(1)) {
        engine.scratchTick(1, newValue);
        engine.scratchDisable(1);
    } else {
        engine.setValue('[Channel'+1+']', 'jog', newValue);
        engine.scratchDisable(1);
    }
};

// .and for dack 2 etc...
QUARK.shiftWheelTurn2 = function (channel, control, value) {
    var newValue = value - 64;

    midi.sendShortMsg(0x91, 0x37, 0x7f);
    midi.sendShortMsg(0x91, 0x37, 0x00);

    if (engine.isScratching(2)) {
        engine.scratchTick(2, newValue);
        engine.scratchDisable(2);
    } else {
        engine.setValue('[Channel'+2+']', 'jog', newValue*8);
        engine.scratchDisable(2);
    }
};

QUARK.wheelTurn2 = function (channel, control, value) {
    var newValue = value - 64;

     midi.sendShortMsg(0x91, 0x37, 0x7f);
    midi.sendShortMsg(0x91, 0x37, 0x00);

    if (engine.isScratching(2)) {
        engine.scratchTick(2, newValue);
        engine.scratchDisable(2);
    } else {
        engine.setValue('[Channel'+2+']', 'jog', newValue);
        engine.scratchDisable(2);
    }
};

QUARK.shiftWheelTurn3 = function (channel, control, value) {
    var newValue = value - 64;

      midi.sendShortMsg(0x92, 0x37, 0x7f);
    midi.sendShortMsg(0x92, 0x37, 0x00);


    if (engine.isScratching(3)) {
        engine.scratchTick(3, newValue);
        engine.scratchDisable(3);
    } else {
        engine.setValue('[Channel'+3+']', 'jog', newValue*9);
        engine.scratchDisable(3);
    }
};

QUARK.wheelTurn3 = function (channel, control, value) {
    var newValue = value - 64;

      midi.sendShortMsg(0x92, 0x37, 0x7f);
    midi.sendShortMsg(0x92, 0x37, 0x00);


    if (engine.isScratching(3)) {
        engine.scratchTick(3, newValue);
        engine.scratchDisable(3);
    } else {
        engine.setValue('[Channel'+3+']', 'jog', newValue);
        engine.scratchDisable(3);
    }
};

QUARK.shiftWheelTurn4 = function (channel, control, value) {
    var newValue = value - 64;

     midi.sendShortMsg(0x93, 0x37, 0x7f);
    midi.sendShortMsg(0x93, 0x37, 0x00);

    if (engine.isScratching(4)) {
        engine.scratchTick(4, newValue);
        engine.scratchDisable(4);
    } else {
        engine.setValue('[Channel'+4+']', 'jog', newValue*9);
        engine.scratchDisable(4);
    }
};

QUARK.wheelTurn4 = function (channel, control, value) {
    var newValue = value - 64;

    midi.sendShortMsg(0x93, 0x37, 0x7f);
    midi.sendShortMsg(0x93, 0x37, 0x00);

    if (engine.isScratching(4)) {
        engine.scratchTick(4, newValue);
        engine.scratchDisable(4);
    } else {
        engine.setValue('[Channel'+4+']', 'jog', newValue);
        engine.scratchDisable(4);
    }
};