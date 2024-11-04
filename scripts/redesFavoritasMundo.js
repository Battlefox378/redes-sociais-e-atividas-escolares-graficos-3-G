import { getCSSVariable, criarGrafico, incluirTexto } from "./common.js";

async function redesFavoritasMundo() {
    const res = await fetch('https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json');
    const dados = await res.json();
    const redes = Object.keys(dados);
    const valores = Object.values(dados);

    const data = [{
        values: valores,
        labels: redes,
        type: 'pie',
        textinfo: 'label+percent',
        marker: { colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'] }
    }];

    const layout = {
        title: { text: 'Preferência das Redes Sociais pelo Mundo', font: { color: getCSSVariable('--primary-color') }},
        plot_bgcolor: getCSSVariable('--bg-color'),
        paper_bgcolor: getCSSVariable('--bg-color')
    };

    criarGrafico(data, layout);
    incluirTexto('O Instagram é amplamente preferido, destacando-se acima do Facebook e de outras redes sociais.');
}

redesFavoritasMundo();
