radio.onReceivedNumber(function (receivedNumber) {
    Signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (Signal < -95) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Signal > -80) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Diamond)
    }
})
let Signal = 0
radio.setGroup(1)
basic.forever(function () {
	
})
