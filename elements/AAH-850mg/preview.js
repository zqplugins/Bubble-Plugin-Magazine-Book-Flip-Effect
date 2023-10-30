function(instance, properties) {
let box = $(`<div></div>`);    
    box.innerHTML += `<img src="https://dd7tel2830j4w.cloudfront.net/f1634930346991x176381166705550820/Original%20plugins%20logo.png" width="25px" height="25px">`
    instance.canvas.append(box);
    box.css("height", properties.bubble.height)
    box.css("width", properties.bubble.width)
    box.css("background-image", "url(https://dd7tel2830j4w.cloudfront.net/f1642876967232x999923699292537600/Original%20plugins%20logo.png)")
    box.css("background-repeat", "repeat")
    box.css("background-position", "center")
    box.css("opacity", 0.6)

}