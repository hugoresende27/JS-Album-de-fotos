const pan = document.querySelectorAll('.painel')        /*querySelectorAll vai selecionar todos os objetos com classe painel (ALL) */

//console.log(pan[0]);

pan.forEach((pan)=>
{
    pan.addEventListener('click', () => 
    {
        removerClasses();
        pan.classList.add('ativo');
    })
})

function removerClasses()
{
    pan.forEach((pan) =>
    {
        pan.classList.remove('ativo');
    })
}