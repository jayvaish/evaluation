var arr = JSON.parse(localStorage.getItem("products")) || []
display(arr)

function display(data) {
    data.forEach(function (elem, index) {
        var box = document.createElement("div")
        var image = document.createElement("img")
        image.src = elem.image
        var type = document.createElement("p")
        type.innerText = elem.type
        var desc = document.createElement("p")
        desc.innerText = elem.desc
        var price = document.createElement("p")
        price.innerText = elem.price

        var btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.setAttribute("id", "remove_product")
        btn.style.color = "white"
        btn.style.backgroundColor = "grey"
        btn.style.cursor = "pointer"
        btn.addEventListener("click", function () {
            rem(index);
        })

        box.append(image, type, desc, price, btn)

        document.querySelector("#all_products").append(box)

    })

}


function rem(index) {
    arr.splice(index, 1)
    window.location.reload()
    localStorage.setItem("products", JSON.stringify(arr))
}