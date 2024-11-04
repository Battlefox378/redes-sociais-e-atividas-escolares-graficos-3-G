const getCSSVariable = (variable) => getComputedStyle(document.body).getPropertyValue(variable);

const tickConfig = {
    color: getCSSVariable('--primary-color'),
    size: 16,
    family: getCSSVariable('--font-family')
};

function criarGrafico(data, layout) {
    const grafico = document.createElement('div');
    grafico.classList.add('grafico');
    document.getElementById('graficos-container').appendChild(grafico);
    const config = {
        responsive: true,
        displayModeBar: false
    };
    Plotly.newPlot(grafico, data, layout, config);
}

function incluirTexto(texto) {
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('texto-informativo');
    paragrafo.innerHTML = texto;
    document.getElementById('graficos-container').appendChild(paragrafo);
}

export { getCSSVariable, tickConfig, criarGrafico, incluirTexto };
