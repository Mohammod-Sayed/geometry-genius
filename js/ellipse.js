function calculateEllipseArea(){
    document.getElementById('ellipse_button').addEventListener('click', ()=>{
        const ellipseMajorRadius = inputValueByID('ellipse_major-radius')
        const ellipseMinorRadius = inputValueByID('ellipse_minor-radius')
        const ellipseArea = 3.14 * ellipseMajorRadius * ellipseMinorRadius
        
    })
}