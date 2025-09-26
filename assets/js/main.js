

// Theme toggle functionality
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    updateThemeIcon(currentTheme, themeIcon);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
    });
}

function updateThemeIcon(theme, iconElement) {
    iconElement.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function meuEscopo() {

    const form = document.querySelector('.form');
    
    function recebeForm(event) {
        event.preventDefault();

        const peso = Number(form.querySelector('.Peso').value);
        const altura = Number(form.querySelector('.Altura').value);
        const imc = getImc(peso, altura);
        const resultadoIMC = getImcResults(imc);
        const msg = `Seu IMC é de ${imc} e você está ${resultadoIMC}`;
        setResultado(msg, true);
        
        if (!peso || !altura) {
            setResultado('Preencha os campos corretamente!', false);
            return;
        }

        if (peso < 0 || altura < 1){
            setResultado('Preencha os campos corretamente!', false);
            return;
        }

        if (peso > 500 || altura > 3) {
            setResultado('Preencha os campos corretamente!', false);
            return;
        }

    }

    function getImcResults (imc) {
        const nivel = ['Abaixo do peso', 'no peso normal', 'com sobrepeso', 'com Obesidade grau 1', 'com Obesidade grau 2', 'com Obesidade grau 3'];
        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];            
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }
    
    function getImc(peso, altura) {
        return (peso / (altura * altura)).toFixed(2);
    }

    function criaParagrafo () {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = criaParagrafo();    
        resultado.appendChild(p);
        p.innerHTML = msg;

        if (isValid) p.classList.add('paragrafo-resultado');
        else p.classList.add('bad');
    }
    
    form.addEventListener('submit', recebeForm);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    meuEscopo();
});

