function calculateTriangleArea(){
    document.getElementById('triangle_button').addEventListener('click', ()=>{
        const triangleBaseInputValue = inputValueByID('triangle_base') 
        const triangleHeightInputValue = inputValueByID('triangle_height')
        const triangleArea = 0.5 * triangleBaseInputValue * triangleHeightInputValue
    })
    const showButton = document.createElement('button')
    const showText = document.createTextNode('Convert to m2')
    showButton.appendChild(showText)
    const showArea = document.getElementById('show_area')
    showArea.appendChild(showButton)
}