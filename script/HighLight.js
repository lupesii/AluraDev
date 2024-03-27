const linguagem = document.getElementById("editorLanguage");
const btnHljs = document.querySelector(".editor_button");
const areaCodigo = document.querySelector(".editorContainer");

function aplicarHighLight()
{
    const codigo = areaCodigo.innerText;
    areaCodigo.innerHTML = "<code class=\"code_editor hljs ${linguagem.value}\" contenteditable=\"true\" aria-label=\"editor\"></code> <div class=\"dots\"><span class=\"dot dot--red\"></span><span class=\"dot dot--yellow\"></span><span class=\"dot dot--green\"></span></div>"
    areaCodigo.querySelector("code").textContent = codigo;
    hljs.highlightElement(areaCodigo.querySelector("code"));
}

btnHljs.addEventListener('click', () => {
    aplicarHighLight();
});