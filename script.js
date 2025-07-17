function gerar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('txttab')

    if (num.value.length == 0) {
        alert(`Por favor digite um número!`)
    } else {
        let n = Number(num.value)
        tab.innerHTML = ``
        for (let c = 1; c <= 100; c++) {
            let item = document.createElement(`option`)
           
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
          
        }
    }

}
function gerard() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('txttab')

    if (num.value.length == 0) {
        alert(`Por favor digite um número!`)
    } else {
        let n = Number(num.value)
        tab.innerHTML = ``
        for (let c = 1; c <= 100; c++) {
           
            let div = document.createElement(`option`)

        
            div.text = `${n} : ${c} = ${n / c}`
            tab.appendChild(div)
        }
    }

}