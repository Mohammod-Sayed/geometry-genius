function calculateRhombusArea(){
    document.getElementById('rhombus_button').addEventListener('click', ()=>{
        const diagonal1 = inputValueByID('diagonal_1')
        const diagonal2 = inputValueByID('diagonal_2')
        const rhombusArea = 0.5 * diagonal1 * diagonal2
        console.log(rhombusArea)
    })
}