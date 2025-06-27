document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        const dados = `Informações enviadas:\n\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
        alert(dados);

        form.reset();
    });

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});