// 1. Importar os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');

// 2. Criar uma instância do Express
const app = express();

// 3. Configurar o Body-Parser para lidar com dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));

// 4. Configurar o diretório público para arquivos estáticos
app.use(express.static('public'));

// 5. Rota para o formulário de estudo
app.post('/generate-plan', (req, res) => {
    const { interest1, 'exp-programming': expProgramming, 'fav-language': favLanguage,
            'exp-cybersecurity': expCybersecurity, 'interest-crypto': interestCrypto,
            'exp-networks': expNetworks, 'interest-cloud': interestCloud,
            'exp-ai': expAI, 'interest-ml': interestML } = req.body;

    let studyPlan = "Seu roteiro de estudos:\n\n";

    // Gerar conteúdo baseado na área de interesse e nas perguntas
    if (interest1 === 'Desenvolvimento de Software') {
        studyPlan += "Desenvolvimento de Software:\n";
        studyPlan += expProgramming === 'Sim' ? " - Aprimorar habilidades em algoritmos avançados.\n" : " - Iniciar com lógica de programação básica.\n";
        if (favLanguage) {
            studyPlan += ` - Estude mais sobre sua linguagem favorita: ${favLanguage}.\n`;
        }
    }

    if (interest1 === 'Segurança da Informação') {
        studyPlan += "Segurança da Informação:\n";
        studyPlan += expCybersecurity === 'Sim' ? " - Avançar em técnicas de proteção.\n" : " - Começar com fundamentos de segurança.\n";
        if (interestCrypto === 'Sim') {
            studyPlan += " - Estude criptografia e segurança de dados.\n";
        }
    }

    if (interest1 === 'Redes de Computadores') {
        studyPlan += "Redes de Computadores:\n";
        studyPlan += expNetworks === 'Sim' ? " - Focar em redes avançadas e protocolos.\n" : " - Introdução aos conceitos de redes.\n";
        if (interestCloud === 'Sim') {
            studyPlan += " - Explore computação em nuvem.\n";
        }
    }

    if (interest1 === 'Inteligência Artificial') {
        studyPlan += "Inteligência Artificial:\n";
        studyPlan += expAI === 'Sim' ? " - Estude tópicos avançados em IA.\n" : " - Comece com fundamentos de IA.\n";
        if (interestML === 'Sim') {
            studyPlan += " - Explore Machine Learning e aprendizado supervisionado.\n";
        }
    }

    res.send(`<pre>${studyPlan}</pre>`);
});

// 6. Definir a porta em que o servidor irá rodar
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
