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

// + 

//PROJETO 1 - Calculadora Javascript
createProject("folder.svg","Calculadora Javascript","Projeto desenvolvido nos meus estudos sobre <b>classes</b> em javascript, que ficou disponivel no ES6. Trabalhei com manipulação da DOM e operações matemáticas, clique no card para conferir como ficou.","https://atila-henrique.github.io/calculadora/") +

//PROJETO 2 - Landing Page Pepsi
createProject("folder.svg","Landing Page Pepsi","Projeto desenvolvido nos meus estudos sobre css e html e javascript. Desenvolvi uma landing page dinâmica, trocando o conteudo de acordo com a latinha que o usuário clica.","https://atila-henrique.github.io/pagePepsi/#") +

//PROJETO 3 - Page Liquid Login
createProject("folder.svg","Page Liquid Login","Projeto desenvolvido nos meus estudos sobre css e UI. Aqui nos desenvolvemos um login com um tema liquid, ficou muito lindo e não utilizamos nenhuma imagem.","https://atila-henrique.github.io/liquidLogin/") +  

//PROJETO 4 - Calendario da Copa
createProject("folder.svg","Calendario da Copa","Projeto desenvolvido no evento NLW da <b>Rocketseat</b>. Criamos um layout resposivo baseado em um prototipo no figma, amei a experiência e clique no card para conferir como ficou.","https://atila-henrique.github.io/NLW-copa/");


//POST 1
document.querySelector("#posts").innerHTML = createPost("orientação-objeto.png",
"Certificação Object-Oriented Developer!",
"10/2022",
"Nesse curso tivemos 3 materias sendo elas: Design de Software, Empreendedorismo e Criação de Novos Negocios, e Programação Extrema. Pela universidade <a target='_blank' href='https://uniamerica.br/'>Uniamérica!</a>","CERTIFICAÇÃO","https://drive.google.com/file/d/1Geoer2GxWmmcD1HQGsxn4cZYGDsspsIY/view")+ 

//POST 2
createPost("programming-basics.png",
"Certificação Programming Basics!",
"07/2022",
"Nesse curso tivemos 2 materias sendo elas: Análise e Levantamento de Requisitos, Criação de Aplicações e Sistemas. Pela universidade <a target='_blank' href='https://uniamerica.br/'>Uniamérica!</a>","CERTIFICAÇÃO","https://drive.google.com/file/d/1qooE_AmR6S8KG19lJ9LR08XmgvA257VH/view") +

//POST 3
createPost("dbdeveloper.png",
"Certificação DB Developer!",
"07/2022",
"Nesse curso tivemos 2 materias sendo elas: Desenvolvimento de Aplicação de Banco de Dados, Prática Integradora Desenvolvimento de Software. Pela universidade <a target='_blank' href='https://uniamerica.br/'>Uniamérica!</a>","CERTIFICAÇÃO","https://drive.google.com/file/d/1foT2-e1h-M5TZ4rp8WKVo-nINom_QpSJ/view?usp=sharing") +



//POST 4
createPost("arquitetura.png",
"Certificação Arquitetura e Organização de Computadores!",
"07/2022",
"Nesse curso tivemos 3 materias sendo elas: Arquitetura de Computadores do Século XXI, Coaching e Planejamento de Carreira, e Comunicação Empresarial. Pela universidade <a target='_blank' href='https://uniamerica.br/'>Uniamérica!</a>","CERTIFICAÇÃO","https://drive.google.com/file/d/18YDOg4BOcae82CS1g8xV5Q8vfKpNcSnB/view")