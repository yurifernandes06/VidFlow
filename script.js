const containerVideos = document.querySelector(".videos__container");


async function buscarEMostrarVideos() {
        try {
                const busca = await fetch("http://localhost:3000/videos");
                const videos = await busca.json();

                videos.forEach((video) => {
                        containerVideos.innerHTML += `
                <li class="videos__item">
                        <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                        <div class="descricao-video">
                                <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
                                <h3 class="titulo-video">${video.titulo}</h3>
                                <p class="titulo-canal">${video.descricao}</p>
                                <p class="categoria" hidden>${video.categoria}</p>
                        </div>
                </li>
                `;
                })
        } catch (error) {
                containerVideos.innerHTML = `
                <p>Houve um erro ao carregar os vídeos: ${error} </p>
                `
        }
}

buscarEMostrarVideos();

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
        const videos = document.querySelectorAll(".videos__item");
        if (barraDePesquisa.value != "") {
                for (let video of videos) {
                        let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
                        let valorFiltro = barraDePesquisa.value.toLowerCase();

                        if (!titulo.includes(valorFiltro)) {
                                video.style.display = "none";
                        } else {
                                video.style.display = "block";
                        }
                }
        } else {
             video.style.display = "block";
        }
}

const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
        let nomeCategoria = botao.getAttribute("name")
        botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria))
})

function filtrarPorCategoria(filtro) {
        const videos = document.querySelectorAll(".videos__item");
        for (let video of videos) {
                let categoria = video.querySelector(".categoria").textContent.toLowerCase();
                let valorFiltro = filtro.toLowerCase();

                if(!categoria.includes(valorFiltro) && valorFiltro != "tudo"){
                        video.style.display = "none";
                } else {
                        video.style.display = "block";
                }
        }
}


// const api = fetch("http://localhost:3000/videos") => essa linha de código está iniciando uma requisição à API localizada em "http://localhost:3000/videos" e armazenando o resultado (a Promise) na constante api, que poderá ser utilizada para processar a resposta da API.

// .then(res => (res.json())) => converter a resposta da API em um objeto JavaScript é importante, pois muitas vezes a resposta vem em um formato de texto (como JSON) e precisa ser transformada em um objeto para que você possa acessar e manipular os dados. Então, essa linha de código está preparando a resposta da API para que você possa trabalhar com os dados posteriormente em seu código.
//  .then((videos) =>
//     videos.forEach((video)=> { =>  o método fetch para buscar os dados da API, e então percorre cada vídeo retornado, criando um elemento <li> com a classe videos__item para cada um deles.
//         containerVideos.innerHTML += `
//         <li class="videos__item">
//             <iframe src="${video.url}" title"${video.titulo}" frameborder="0" allowfullscreen></iframe>
//                 <div class="descricao-video">
//                  	<img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
//                  	<h3 class="titulo-video">${video.titulo}</h3>
//                          <p class="titulo-canal">${video.descricao}</p> => Dentro de cada <li>, é adicionado um <iframe> para exibir o vídeo, utilizando a propriedade src com a URL do vídeo. Também são adicionados elementos <div>, <img>, <h3> e <p> para exibir a imagem do canal, o título do vídeo e a descrição do vídeo.
//                  </div>
//         </li>
//         `;
//     })
// )

// .catch((error)=>{
//     containerVideos.innerHTML = `
//     <p>Houve um erro ao carregar os vídeos: ${error} </p>
//     `;
// }) => se houver algum erro ao carregar os vídeos vai aparecer na tela essa mensagem no paragráfo.

// async function buscarEMostrarVideos(){ => Permite o uso da palavra-chave await para aguardar o resultado de Promises. Simplifica o tratamento de erros em operações assíncronas, permitindo o uso de try/catch.
//     const busca = await fetch("http://localhost:3000/videos"); => substitui o .then, o await é usado para aguardar a resolução das Promises retornadas pelo fetch() e pelo response.json(). Isso permite que o código seja escrito de forma síncrona, facilitando o entendimento e o tratamento de erros.
//     const videos = await busca.json();

//         videos.forEach((video)=> {
//                 containerVideos.innerHTML += `
//                 <li class="videos__item">
//                         <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
//                         <div class="descricao-video">
//                                 <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
//                                 <h3 class="titulo-video">${video.titulo}</h3>
//                                 <p class="titulo-canal">${video.descricao}</p>
//                         </div>
//                 </li>
//                 `;
//         })
// }

// async function buscarEMostrarVideos() {
//         try { => acontece se não houver erro, tipo um if;
//                 const busca = await fetch("http://localhost:3000/videos");
//                 const videos = await busca.json();

//                 videos.forEach((video) => {
//                         containerVideos.innerHTML += `
//                 <li class="videos__item">
//                         <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
//                         <div class="descricao-video">
//                                 <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
//                                 <h3 class="titulo-video">${video.titulo}</h3>
//                                 <p class="titulo-canal">${video.descricao}</p>
//                         </div>
//                 </li>
//                 `;
//                 })
//         } catch (error) { => acontece se houver erro, tipo um else;
//                 containerVideos.innerHTML = `
//                 <p>Houve um erro ao carregar os vídeos: ${error} </p>
//                 `
//         } finally {
//                 alert("Isso sempre acontece") => com ou sem erro isso vai acontecer, tipo outro if;
//         }
// }


// const barraDePesquisa = document.querySelector(".pesquisar__input");=> resgata o input do html
// barraDePesquisa.addEventListener("input", filtrarPesquisa); => adiciona um evento do valor do INPUT e realiza a function filtrarPesquisa
// function filtrarPesquisa() {
//         const videos = document.querySelectorAll(".videos__item"); => armazena todos os videos nessa constante
//         if (barraDePesquisa.value != "") { => verifica se a barra de pesquisa não está vazia.=> se não tiver vazia entra nesse if.
//                 for (let video of videos) { => percorre todos os elementos que tem a class videos__item.
//                         let titulo = video.querySelector(".titulo-video").textContent.toLowerCase(); =>  é capturado o texto do título de cada vídeo e convertido para letras minúsculas
//                         let valorFiltro = barraDePesquisa.value.toLowerCase(); => O texto digitado na barra de pesquisa também é convertido para letras minúsculas.
//                         if (!titulo.includes(valorFiltro)) {
//                                 video.style.display = "none"; => se não tiver incluido as letras do titulo pesquisado, vai sumir o video, utilizando "none"
//                         } else {
//                                 video.style.display = "block"; => se tiver, o video permanece com "block".
//                         }
//                 }
//         } else {
//                 video.style.display = "block"; => se a barra de pesquisa estiver vazia, todos os videos ficam na tela.
//         }
// }