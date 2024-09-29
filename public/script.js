document.getElementById('interest1').addEventListener('change', function() {
    const interest = this.value;
    const questionsDiv = document.getElementById('additional-questions');

    // Limpar perguntas anteriores
    questionsDiv.innerHTML = '';

    // Exibir perguntas com base na área de interesse
    if (interest === 'Desenvolvimento de Software') {
        questionsDiv.innerHTML = `
            <div class="mb-3">
                <label for="exp-programming" class="form-label">Você tem experiência em programação?</label>
                <select name="exp-programming" id="exp-programming" class="form-select">
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="fav-language" class="form-label">Qual é sua linguagem de programação favorita?</label>
                <input type="text" id="fav-language" name="fav-language" class="form-control" placeholder="Ex: JavaScript, Python">
            </div>
        `;
    } else if (interest === 'Segurança da Informação') {
        questionsDiv.innerHTML = `
            <div class="mb-3">
                <label for="exp-cybersecurity" class="form-label">Você já trabalhou com segurança da informação?</label>
                <select name="exp-cybersecurity" id="exp-cybersecurity" class="form-select">
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="interest-crypto" class="form-label">Você tem interesse em criptografia?</label>
                <select name="interest-crypto" id="interest-crypto" class="form-select">
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
        `;
    } else if (interest === 'Redes de Computadores') {
        questionsDiv.innerHTML = `
            <div class="mb-3">
                <label for="exp-networks" class="form-label">Você tem conhecimento sobre redes?</label>
                <select name="exp-networks" id="exp-networks" class="form-select">
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="interest-cloud" class="form-label">Você tem interesse em computação em nuvem?</label>
                <select name="interest-cloud" id="interest-cloud" class="form-select">
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
        `;
    } else if (interest === 'Inteligência Artificial') {
        questionsDiv.innerHTML = `
            <div class="mb-3">
                <label for="exp-ai" class="form-label">Você tem experiência com IA?</label>
                <select name="exp-ai" id="exp-ai" class="form-select">
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="interest-ml" class="form-label">Você tem interesse em Machine Learning?</label>
                <select name="interest-ml" id="interest-ml" class="form-select">
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
        `;
    }
});
