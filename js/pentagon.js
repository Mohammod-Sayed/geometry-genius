function calculatePentagonArea(){
    document.getElementById('pentagon_button').addEventListener('click', ()=>{
        const pentagonPerimeter = inputValueByID('pentagon_perimeter')
        const pentagonApothem = inputValueByID('pentagon_apothem')
        const pentagonArea = 0.5 * pentagonPerimeter * pentagonApothem
        console.log(pentagonArea)
    })
}