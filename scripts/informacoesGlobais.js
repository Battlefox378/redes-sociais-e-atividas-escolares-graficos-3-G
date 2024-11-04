import { incluirTexto } from "./common.js";

async function vizualizarInformacoesGlobais() {
    const res = await fetch('https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json');
    const dados = await res.json();
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9).toFixed(1);
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(1);
    const tempoMedio = parseFloat(dados.tempo_medio).toFixed(1);

    incluirTexto(`O mundo tem cerca de <strong>${pessoasNoMundo} bilhões</strong> de pessoas, das quais <strong>${pessoasConectadas} bilhões</strong> estão conectadas a redes sociais. Em média, cada pessoa gasta aproximadamente <strong>${tempoMedio} horas</strong> por dia nas redes.`);
}

vizualizarInformacoesGlobais();
