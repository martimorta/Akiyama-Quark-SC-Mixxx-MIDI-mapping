//QUARK = new Controller();

var QUARK = {};

// The wheel that actually controls the scratching quickly with shift
QUARK.shiftWheelTurn1 = function (channel, control, value) {
    // B: For a control that centers on 0x40 (64):
    var newValue = value - 64;

    // In either case, register the movement
    if (engine.isScratching(1)) {
        engine.scratchTick(1, newValue);
        engine.scratchDisable(1);
    } else {
        engine.setValue('[Channel'+1+']', 'jog', newValue*6);
        engine.scratchDisable(1);
    }
};

// The wheel that actually controls the scratching normal
QUARK.wheelTurn1 = function (channel, control, value) {
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
 
    if (engine.isScratching(2)) {
        engine.scratchTick(2, newValue);
        engine.scratchDisable(2);
    } else {
        engine.setValue('[Channel'+2+']', 'jog', newValue*6);
        engine.scratchDisable(2);
    }
};

QUARK.wheelTurn2 = function (channel, control, value) {
    var newValue = value - 64;

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

    if (engine.isScratching(3)) {
        engine.scratchTick(3, newValue);
        engine.scratchDisable(3);
    } else {
        engine.setValue('[Channel'+3+']', 'jog', newValue*6);
        engine.scratchDisable(3);
    }
};

QUARK.wheelTurn3 = function (channel, control, value) {
    var newValue = value - 64;

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

    if (engine.isScratching(4)) {
        engine.scratchTick(4, newValue);
        engine.scratchDisable(4);
    } else {
        engine.setValue('[Channel'+4+']', 'jog', newValue*6);
        engine.scratchDisable(4);
    }
};

QUARK.wheelTurn4 = function (channel, control, value) {
    var newValue = value - 64;

    if (engine.isScratching(4)) {
        engine.scratchTick(4, newValue);
        engine.scratchDisable(4);
    } else {
        engine.setValue('[Channel'+4+']', 'jog', newValue);
        engine.scratchDisable(4);
    }
};