controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.createProjectileFromSprite(assets.image`war22k`, mySprite, 50, 50)
    mySprite.startEffect(effects.fire)
})
let mySprite: Sprite = null
effects.blizzard.startScreenEffect()
mySprite = sprites.create(assets.image`HowPanda`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
