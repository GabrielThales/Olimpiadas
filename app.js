function pesquisar() {

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)

    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado, voce precisa digitar o nome do atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item (atleta) nos dados
    for (let dado of dados) {

        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Concatena o HTML de cada resultado à string 'resultados'
            resultados += `<div class="item-resultado">
            <h2>
            <a href="https://pt.wikipedia.org/wiki/Rebeca_Andrade" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>`;
        }
      
    }

    if(!resultados){
        // Atribui o conteúdo HTML gerado à seção de resultados
        resultados = "Atleta ou esporte não encontrado"
    }

    section.innerHTML = resultados;
  

  }