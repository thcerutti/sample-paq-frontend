function mostrarMensagem() {
    const mensagem = "Olá, mundo!";
    alert(mensagem);
}

function buscarEspecies(idResultado) {
    fetch('https://sample-python-api-eta.vercel.app/api/especies')
        .then(response => response.json())
        .then(data => {
            let resultado = document.getElementById(idResultado);
            data.especies.forEach(element => {
              let item = document.createElement("li");
              item.textContent = element.nome_cientifico + " - " + element.nome_popular;
              resultado.appendChild(item);
            });
        });
}
