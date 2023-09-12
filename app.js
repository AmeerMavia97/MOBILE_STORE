const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },

]

const div = document.querySelector(".main-diver")
const img = document.querySelector("img")



for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `<div class="div2">
    <img src="./iphone2.jpg" alt="">
    <p class="div-p"><span class="items">Brand:</span>${phones[i].brand}</p>
    <p class="div-p"><span class="items">Model:</span>${phones[i].model}</p>
    <p class="div-p"><span class="items">ram:</span> ${phones[i].ram}</p>
    <p class="div-p"><span class="items">rom:</span> ${phones[i].rom}</p>
    <p class="div-p"><span class="items">camera:</span${phones[i].camera}</p>
    <p class="div-p"><span class="items">price:</span> ${phones[i].price }</p>
    <br>
    <button class="btn">ORDER NOW</button>
    <br> <br>
    </div>`

}
// img.src = "./iphone2.jpg"
// div.innerHTML = img