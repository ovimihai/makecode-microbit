let Deg = 0
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    Deg = input.compassHeading()
    if (Deg < 45) {
        basic.showString("N")
    } else if (Deg < 135) {
        basic.showString("E")
    } else if (Deg < 225) {
        basic.showString("S")
    } else if (Deg < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
