<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];
    
    $destinatario = "martinsoliveiramiguel2@gmail.com";
    $assunto = "Mensagem do site Construtora XYZ de $nome";
    $conteudo = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";
    
    if (mail($destinatario, $assunto, $conteudo)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.";
    }
} else {
    echo "Acesso inválido ao arquivo.";
}
?>
