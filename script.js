// Abrir e fechar o modal de curiosidades
function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Lógica do botão secreto
document.getElementById("botaoSecreto").addEventListener("click", () => {
  const input = document.getElementById("codigoInput");
  input.style.display = "inline-block";
  input.focus();
});

// Verificação do código secreto
document.getElementById("codigoInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (this.value.trim().toUpperCase() === "K-9") {
      ativarSequencia();
    } else {
      alert("Código incorreto...");
    }
  }
});

// Sequência visual após digitar o código correto
function ativarSequencia() {
  const tela = document.getElementById("preTela");
  const mensagem = document.getElementById("mensagemEspecial");
  const sha = document.getElementById("sha");

  tela.style.display = "flex";

  setTimeout(() => {
    mensagem.style.display = "block";
  }, 1000);

  setTimeout(() => {
    mensagem.style.display = "none";
    sha.style.display = "block";
  }, 3000);

  setTimeout(() => {
    window.location.href = "https://youtu.be/XkDGvcD_Nm8?si=KRoVhi_rlv7lmR68";
  }, 6000);
}
