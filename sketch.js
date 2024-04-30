var position
var rotation
var count = 0
var inputCount = 0
const stratagems = [
   eagle = [ order1 = [1, 2, 3, 3, 3], order2 = [1, 2, 3, 3, 2], order3 = [1, 2, 3, 2], order4 = [1, 2, 2], order5 = [1, 1, 4, 1, 2], order6 = [1, 2, 3, 1], order7 = [1, 2, 1, 3], order8 = [1, 2, 1, 4] ],
   orbital = [ order1 = [2, 2, 1], order2 = [2, 2, 2], order3 = [2, 2, 3, 4, 2, 3], order4 = [2, 3, 1, 1, 4, 3, 3], order5 = [2, 3, 2, 3, 2, 3], order6 = [2, 3, 1, 2, 3], order7 = [2, 1, 3, 3, 2], order8 = [2, 2, 3, 2], order9 = [2, 2, 3, 1], order10 = [2, 3, 4, 1, 1] ],
   support = [ order1 = [1, 3, 2, 4, 1], order2 = [1, 3, 4, 2], order3 = [3, 3, 1, 2], order4 = [2, 1, 1, 3], order5 = [3, 1, 4, 3, 1, 2, 3, 1], order6 = [3, 3, 3, 1, 1], order7= [4, 2, 1, 1, 1], order8 = [1, 1, 4, 2, 3, 3], order9 = [3, 3, 4, 2, 3, 3], order10 = [3, 1, 3, 1], order11 = [2, 2, 4, 4] ],
   backpack = [ order1 = [3, 1, 4, 1, 2, 2], order2 = [3, 1, 4, 1, 2, 3], order3 = [3, 1, 1, 3, 1], order4 = [3, 1, 3, 3, 2], order5 = [3, 1, 4, 2, 4, 2], order6 = [3, 4, 3, 3, 1, 4] ],
   weapon = [ order1 = [3, 4, 3, 1, 1, 2], order2 = [3, 3, 4, 1, 2], order3 = [3, 4, 3, 2, 4], order4 = [3, 4, 3, 1, 4], order5 = [3, 4, 3, 1, 1, 4], order6 = [3, 4, 3, 1, 2], order7= [3, 2, 3, 1, 4, 4], order8 = [3, 4, 1, 4, 3], order9 = [3, 4, 2, 1, 3], order10 = [3, 2, 3, 1, 4, 2], order11 = [3, 4, 2, 2, 4], order12 = [3, 3, 1, 3, 3], order13 = [3, 3, 1, 4, 2], order14 = [3, 4, 1, 3, 3] ],
   sentry = [ order1 = [3, 1, 4, 2, 2, 4], order2 = [3, 3, 4, 2, 4, 2], order3 = [3, 1, 2, 1, 4, 2], order4 = [3, 4, 3, 2], order5 = [3, 4, 4, 3], order6 = [3, 1, 2, 2, 1], order7= [3, 1, 2, 4], order8 = [3, 1, 2, 2, 3], order9 = [3, 1, 2, 1, 4, 1], order10 = [3, 1, 2, 2, 4], order11 = [3, 1, 2, 3, 2 ] ],
   vehicle = [ order1 = [4, 3, 2, 1, 4, 3, 3] ]
   ]

   
var orderselect, setSelect
var canvas
let arrow, arrowFrame
var arrowEmpty_img
var arrowFilled_img
var arrowFrame_img
var arrowGroup
var arrowFrameGroup
var input
var drawing = true
var correctValue = 0

function preload(){
    arrowEmpty_img = loadAnimation("Arrow_empty.png","Arrow_filled.png")
    arrowFrame_img = loadAnimation("Arrow_cover_eagle.png","Arrow_cover_orbital.png","Arrow_cover_support.png","Arrow_cover_backpack.png","Arrow_cover_weapon.png","Arrow_cover_sentry.png","Arrow_cover_vehicle.png")
}

function setup(){
    canvas = createCanvas(600, 600)
    frameRate(80) 
    background(rgb(69, 69, 69))
    arrowGroup=new Group()
    arrowFrameGroup=new Group()
    comboSelect()
    //arrow.debug = false
}


function comboSelect(){
   setSelect = Math.floor(Math.random() * stratagems.length);
   orderselect = Math.floor(Math.random() * stratagems[setSelect].length);
}

function arrows(){
    console.log("arrows called")
    arrow = createSprite(100,100)
    arrowFrame = createSprite(100,100)

    arrow.addAnimation("arrowAnim", arrowEmpty_img)
    arrow.pause()

    arrowFrame.addAnimation("arrowFrameAnim", arrowFrame_img)
    arrowFrame.pause()

    arrow.visible = true
    arrow.scale = 0.12

    arrowFrame.visible = true
    arrowFrame.scale = 0.12
    rectMode(CENTER)

    arrow.x += count * 70
    arrowFrame.x += count * 70

    var arrowRotation = stratagems[setSelect][orderselect][count]
    var arrowFrameColour = setSelect

    switch(arrowRotation){
        case 1:
        arrow.rotation = 0
        arrowFrame.rotation = 0
        break

        case 2:
        arrow.rotation = 90
        arrowFrame.rotation = 90
        break

        case 3:
        arrow.rotation = 180
        arrowFrame.rotation = 180
        break

        case 4:
        arrow.rotation = 270
        arrowFrame.rotation = 270
        break

        case 5:
        arrow.visible = false
        arrowFrame.visible = false

        default:
            break
    }

    switch(arrowFrameColour){
         case 1:
         arrowFrame.setFrame(1)
         break

         case 2:
         arrowFrame.setFrame(2)
         break

         case 3:
         arrowFrame.setFrame(3)
         break

         case 4:
         arrowFrame.setFrame(4)
         break

         case 5:
         arrowFrame.setFrame(5)
         break

         case 6:
         arrowFrame.setFrame(6)
         break

         case 7:
         arrowFrame.setFrame(7)
         break

         default:
            break
   }
    arrowGroup.add(arrow)
    arrowFrameGroup.add(arrowFrame)
}

function arrowCheck(){
   if(input == stratagems[setSelect][orderselect][inputCount] & count >= stratagems[setSelect][orderselect].length){
      arrowGroup.get(inputCount).setFrame(1)
      inputCount ++
      correctValue ++

   } else if(input != stratagems[setSelect][orderselect][inputCount]){
      reset();
      console.log("Incorrect inputs");
   }

}
 
function reset() {
   console.log("reset called")
   canvas.clear()
   arrowGroup.destroyEach(), arrowFrameGroup.destroyEach()
   arrowGroup.clear(), arrowFrameGroup.clear()
   arrowGroup.remove(arrow), arrowFrameGroup.remove(arrowFrame)
   canvas = createCanvas(600, 600)
   background(rgb(69, 69, 69))
   count = 0
   inputCount = 0
   drawing = true
   correctValue = 0
}

function draw(){

   //console.log("input is: ", input)
   //console.log("count is: ", count)
   //console.log("inputCount is: ", inputCount)
   //console.log("drawing is: ", drawing)

     if(count != stratagems[setSelect][orderselect].length){
        arrows()
        drawing = true
        count ++
     }

     if(count == stratagems[setSelect][orderselect]){
      drawing = false
      console.log("drawing is: ", drawing)
     }

     if(keyWentDown(87) || keyWentDown(38)){
        input = 1
        console.log("up")
        arrowCheck()
     }

     if(keyWentDown(83) || keyWentDown(40)){
        input = 3
        console.log("down")
        arrowCheck()
     }

     if(keyWentDown(65) || keyWentDown(37)){
        input = 4
        console.log("right")
        arrowCheck()
     }

     if(keyWentDown(68) || keyWentDown(39)){
        input = 2  
        console.log("left")
        arrowCheck()
     }

     if(correctValue == stratagems[setSelect][orderselect].length ||  stratagems[setSelect][orderselect][inputCount] ==5 ){
      console.log("Correct inputs")
      reset()
      comboSelect()

     }

     drawSprites()

 }






