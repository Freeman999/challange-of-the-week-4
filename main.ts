function Loading () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . . # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
input.onButtonPressed(Button.A, function () {
    Spielzeit = input.runningTime()
    DruckenB = 0
})
function Neustart () {
    Zeit = input.runningTime()
    DruckenB = 0
    Runde = 0
    Spielrunden = []
}
input.onButtonPressed(Button.B, function () {
    Spielrunde()
})
function Spielrunde () {
    DruckenB += 1
    if (DruckenB == 10) {
        Endespielzeit = input.runningTime()
        basic.showNumber(Endespielzeit - Spielzeit)
        Spielrunden.push(Endespielzeit - Spielzeit)
        DruckenB = 0
        Runde += 1
    }
    if (Runde == 5) {
        Loading()
        basic.clearScreen()
        basic.showNumber((Spielrunden[0] + Spielrunden[1] + (Spielrunden[2] + (Spielrunden[3] + Spielrunden[4]))) / 5)
        basic.pause(1000)
        basic.showNumber(Math.min(Math.min(Math.min(Math.min(Spielrunden[0], Spielrunden[1]), Spielrunden[2]), Spielrunden[3]), Spielrunden[4]))
        basic.pause(1000)
        basic.showIcon(IconNames.Heart)
        basic.pause(400)
        basic.clearScreen()
        Neustart()
    }
}
let Endespielzeit = 0
let Spielrunden: number[] = []
let Runde = 0
let Zeit = 0
let DruckenB = 0
let Spielzeit = 0
Neustart()
