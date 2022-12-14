//adicionar projeto dinâmico

// img - title - descrição

function createProject(img, title, description,link){
return `
   <a target="_blank" href="${link}">
    <div class= "project">
                    
    <h3><img src="./assets/${img}" alt="pasta">${title}</h3>
    <p>${description}</p>
    </div>
    </a>
`
}

//adicionar post dinâmico 
//img,title,data,description

let tag = function createTag(tag){
    return `
    <span class="tag">#${tag}</span>
    `
}

function createPost(img,title,data,description,myTag,link){
    return `
    
    <div class="post">
        <a target="_blank" href="${link}">
            <img src="./assets/${img}" alt="">
        
            <div class="infoPost">
                <h3>${title} <span>${data}</span></h3></a>
                <p>${description}</p>
                ${tag(myTag)}                
            </div>
    </div>
    
    `
}

//CONTEUDOS DE PROJETOS

document.querySelector("#projetos").innerHTML = 
//PROJETO 1
createProject("folder.svg","Calendario da Copa","Projeto desenvolvido no evento NLW da <b>Rocketseat</b>. Criamos um layout resposivo baseado em um prototipo no figma, amei a experiência e clique no card para conferir como ficou.","https://atila-henrique.github.io/NLW-copa/") + 

//PROJETO 2
createProject("folder.svg","Menu Hover","Projeto desenvolvido nos meus estudos sobre css e html. Aqui nos desenvolvemos um menu super legal e interativo usando css hover effects.","https://atila-henrique.github.io/menuHoverProject-/") + 

//PROJETO 3
createProject("folder.svg","Liquid Login","Projeto desenvolvido nos meus estudos sobre css e UI. Aqui nos desenvolvemos um login com um tema liquid, ficou muito lindo e não utilizamos nenhuma imagem.","https://atila-henrique.github.io/menuHoverProject-/");  

//POST 1
document.querySelector("#posts").innerHTML = createPost("orientação-objeto.png",
"Certificação Object-Oriented Developer!",
"10/2022",
"Gostaria de compartilhar que recebi uma nova certificação: Object-Oriented Developer da empresa <a target='_blank' href='https://uniamerica.br/'>Uniamérica!</a>","CERTIFICAÇÃO","https://drive.google.com/file/d/1Geoer2GxWmmcD1HQGsxn4cZYGDsspsIY/view")+ 

//POST 2
createPost("programming-basics.png",
"Certificação Programming Basics!",
"07/2022",
"Gostaria de compartilhar que recebi uma nova certificação: Programming Basics da empresa <a target='_blank' href='https://uniamerica.br/'>Uniamérica!</a>","CERTIFICAÇÃO","https://drive.google.com/file/d/1qooE_AmR6S8KG19lJ9LR08XmgvA257VH/view") +

//POST 3
createPost("arquitetura.png",
"Certificação Arquitetura e Organização de Computadores!",
"07/2022",
"Gostaria de compartilhar que recebi uma nova certificação: Programming Basics da empresa <a target='_blank' href='https://uniamerica.br/'>Uniamérica!</a>","CERTIFICAÇÃO","https://drive.google.com/file/d/18YDOg4BOcae82CS1g8xV5Q8vfKpNcSnB/view")