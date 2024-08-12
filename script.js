// Função para criptografar o texto
function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Função para verificar se o texto contém apenas letras minúsculas e sem espaços
function isValidText(text) {
    return /^[a-z\s]+$/.test(text.trim());
}

// Função para lidar com a criptografia
document.getElementById('encriptar-button').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const defaultMessage = document.querySelector('.padrao-message');
    const outputMessage = document.querySelector('.output-message');

    if (inputText) {
        if (isValidText(inputText)) {
            const encryptedText = encryptText(inputText);
            defaultMessage.style.display = 'none';
            outputMessage.style.display = 'block';
            outputMessage.textContent = encryptedText;
        } else {
            alert('O texto deve conter apenas letras minúsculas sem acentos e sem caracteres especiais.');
        }
    } else {
        defaultMessage.style.display = 'block';
        outputMessage.style.display = 'none';
    }
});

// Função para lidar com a descriptografia
document.getElementById('descriptar-button').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const defaultMessage = document.querySelector('.padrao-message');
    const outputMessage = document.querySelector('.output-message');

    if (inputText) {
        // Remove caracteres inválidos antes da descriptografia
        if (isValidText(inputText.replace(/enter|imes|ai|ober|ufat/g, ''))) {
            const decryptedText = decryptText(inputText);
            defaultMessage.style.display = 'none';
            outputMessage.style.display = 'block';
            outputMessage.textContent = decryptedText;
        } else {
            alert('Texto inválido para descriptografia.');
        }
    } else {
        defaultMessage.style.display = 'block';
        outputMessage.style.display = 'none';
    }
});

// Atualiza o contador de caracteres
document.getElementById('input-text').addEventListener('input', () => {
    const inputText = document.getElementById('input-text').value;
    const charCounter = document.querySelector('.char-counter'); // Atualize aqui
    const maxLength = 100; // Atualize o valor máximo conforme necessário

    charCounter.textContent = `${inputText.length}/${maxLength} caracteres`;

    // Exibe ou oculta as mensagens dependendo se há texto no campo
    const defaultMessage = document.querySelector('.padrao-message');
    const outputMessage = document.querySelector('.output-message');
    
    if (inputText === '') {
        defaultMessage.style.display = 'block';
        outputMessage.style.display = 'none';
    } else {
        defaultMessage.style.display = 'none';
        outputMessage.style.display = 'block';
    }
});


// Função para resetar os campos
document.getElementById('resetar-button').addEventListener('click', () => {
    const defaultMessage = document.querySelector('.padrao-message');
    const outputMessage = document.querySelector('.output-message');
    document.getElementById('input-text').value = '';
    defaultMessage.style.display = 'block';
    outputMessage.style.display = 'none';
    outputMessage.textContent = 'Escreva aqui um texto para criptografar ou descriptografar.';
});
