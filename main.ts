radio.onReceivedString(function (receivedString) {
    if (receivedString == "pare") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        if (value > 255) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        }
        if (value < -255) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        }
    }
    if (name == "y") {
        if (value < -255) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        }
        if (value > 255) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        }
    }
})
let B = 0
let G = 0
let R = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    R = 0
    G = 0
    B = 255
    for (let index = 0; index < 255; index++) {
        R += 1
        B += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        G += 1
        R += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        B += 1
        G += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(1)
    }
})
