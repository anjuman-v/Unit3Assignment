

async function getData(url){
    let res = await fetch(url)

    let data = await res.json();
    return data
}

function appendData(data, container){
console.log(data)
    data.forEach(({title,image}) =>{

        let Div = document.createElement("div");
        let p = document.createElement("p");

        p.innerText =  title

        let img = document.createElement("img");
        img.src = image
        
        Div.append(img,p)

        container.append(Div);


    })
}

export {getData, appendData}