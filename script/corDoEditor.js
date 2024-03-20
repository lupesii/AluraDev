const inputCor = document.getElementById('editorColor')
const editorContainer = document.getElementById('editorContainer')

inputCor.addEventListener('input', () =>{
    let corEscolhida = inputCor.value;
    editorContainer.style.backgroundColor = corEscolhida;
})