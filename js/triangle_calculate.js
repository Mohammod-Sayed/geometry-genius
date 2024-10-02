function calculateTriangleArea(){
    document.getElementById('triangle_button').addEventListener('click', ()=>{
        const triangleBaseInputValue = inputValueByID('triangle_base') 
        const triangleHeightInputValue = inputValueByID('triangle_height')
        const triangleArea = 0.5 * triangleBaseInputValue * triangleHeightInputValue
    })
}