import { getCSSVariable, tickConfig, criarGrafico } from "./common.js";

async function quantidadeUsuariosPorRede() {
    const res = await fetch('https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json');
    const dados = await res.json();
    const redes = Object.keys(dados);
    const usuarios = Object.values(dados);

    const data = [{
        x: redes,
        y: usuarios,
        type: 'bar',
        marker: { color: getCSSVariable('--accent-color') }
    }];

    const layout = {
        title: { text: 'Número de Usuários por Rede Social', font: { color: getCSSVariable('--primary-color') }},
        xaxis: { title: 'Redes Sociais', tickfont: tickConfig },
        yaxis: { title: 'Número de Usuários (bilhões)', tickfont: tickConfig },
        plot_bgcolor: getCSSVariable('--bg-color'),
        paper_bgcolor: getCSSVariable('--bg-color')
    };

    criarGrafico(data, layout);
}

quantidadeUsuariosPorRede();
