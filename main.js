var resposta = displayRGB();
const contSquares = document.querySelector('#cont-colors')
var numQuadrados = 6;
let rendenizaSquares = [];
let arr = [];
Quadrados();

//Gerando RGB que será usando como referencia no começo da 
function geraCores()
{
    const NumerosRandom = Math.floor(Math.random() * 255);
    return NumerosRandom;
}

function geraRGB()
{
    const RGB1 = geraCores();
    const RGB2 = geraCores();
    const RGB3 = geraCores();

    return `rgb(${RGB1}, ${RGB2}, ${RGB3})`;
}

function displayRGB()
{
    let resRGB = geraRGB();
    const rgb = document.querySelector('#code-rgb');
    rgb.innerText = resRGB;
    return resRGB;
}

function Quadrados()
{

    for (let i = 1; i <= numQuadrados; i++)
    {
        arr.push({cor: geraRGB(), certa: false})
    }
    const numAleatorio = Math.floor(Math.random() * numQuadrados);
    arr[numAleatorio].cor = resposta;
    arr[numAleatorio].certa = true;
    mostraQuadrados();
};

function mostraQuadrados()
{
    rendenizaSquares = [];
    for(let i = 0; i < arr.length; i++)
    {
        rendenizaSquares.push(`
        <div class="square-color" onclick="verificaQuadrados({dado: ${arr[i].certa}, index: ${i}})" style='background: ${arr[i].cor}'></div>
        `)
    }
    
    contSquares.innerHTML = rendenizaSquares.join('');
}

function verificaQuadrados(dados)
{
    let rendenizacaoFinal = [];
    if(dados.dado)
    {
        for(let index = 0; index < numQuadrados; index++)
        {
            rendenizacaoFinal.push(`
                <div class="square-color" style='background: ${arr[dados.index].cor}'></div>
            `);
        }
        contSquares.innerHTML = rendenizacaoFinal.join('');
    }
    
    if(!dados.dado)
    {
        arr.splice(dados.index, 1);
        mostraQuadrados();
    }
}