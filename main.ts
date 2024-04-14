input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 2011, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        music.play(music.stringPlayable("B A B A B A B A ", 120), music.PlaybackMode.LoopingInBackground)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
    }
    music.stopAllSounds()
    basic.clearScreen()
})
