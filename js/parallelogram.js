function calculateParallelogramArea(){
    document.getElementById('parallelogram_button').addEventListener('click', ()=>{
        const parallelogramBase = inputValueByID('parallelogram_base')
        const parallelogramHeight = inputValueByID('parallelogram_height')
        const parallelogramArea = parallelogramBase * parallelogramHeight
        console.log(parallelogramArea)
    })
}