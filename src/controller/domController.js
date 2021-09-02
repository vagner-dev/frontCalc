const populateOptions = (options, id) => {
    options.map(marca => {
        let option = document.createElement('option')
        option.textContent = marca.name
        document.querySelector(id).appendChild(option)
    })

}

const initAnimation = (event) => {
    event.preventDefault();
    let select1 = document.getElementById("medicine");
    let select2 = document.getElementById("adm");
    let select3 = document.getElementById("brand");
    let select4 = document.getElementById("presentation");
    let value1 = select1.options[select1.selectedIndex].value;
    let value2 = select2.options[select2.selectedIndex].value;
    let value3 = select3.options[select3.selectedIndex].value;
    let value4 = select4.options[select4.selectedIndex].value;
    if (value1 && value2 && value3 && value4 != "") {
        document.getElementById('init').style.marginTop = "0";
        document.getElementById('full').style.display = "flex";
    }

}

const resetAnimation = (event) => {
    event.preventDefault();
    document.getElementById('init').style.marginTop = "-300%";
    document.getElementById('full').style.display = "none";
}



export {populateOptions, initAnimation, resetAnimation}