function calculateRectangleArea(){
    document.getElementById('rectangle_button').addEventListener('click', ()=>{
        const rectangleWidthInput = inputValueByID('rectangle_width')
        const rectangleLengthInput = inputValueByID('rectangle_length')
        const rectangleArea = rectangleWidthInput * rectangleLengthInput
        console.log(rectangleArea)
    })
}