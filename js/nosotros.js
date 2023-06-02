let cad4 = `
<div class="carddcontainer">`

for(let elemento of data){
    cad4 = cad4+`
            <div class="cardd">
                <img src="${elemento.image}"
                    alt="Card Image">
                <h3>${elemento.name}</h3>
                <p>${elemento.species}</p>
            </div>
        
    `
}
cad4= cad4+'</div>'
console.log(cad4)
document.querySelector('main').innerHTML= cad4