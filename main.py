# Crie o arquivo HTML
html_code = """
<!DOCTYPE html>
<html>
<head>
    <title>Construtora Martins Oliveira</title>
</head>
<body>
    <h1>Bem-vindo à Construtora Martins Oliveira</h1>
    
    <h2>Projetos Prontos</h2>
    <p>Aqui você encontrará ideias de plantas de casas prontas:</p>
    <!-- Insira as imagens e informações dos projetos prontos aqui -->

    <h2>Criador de Planta</h2>
    <p>Crie sua própria planta de casa:</p>
    <!-- Insira uma ferramenta interativa de criação de planta aqui -->

    <h2>Contato</h2>
    <p>Entre em contato conosco:</p>
    <form action="mailto:martinsoliveiramiguel2@gmail.com" method="post">
        Nome: <input type="text" name="nome"><br>
        Email: <input type="text" name="email"><br>
        Mensagem: <textarea name="mensagem" rows="4" cols="50"></textarea><br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
"""

# Salve o código HTML em um arquivo
with open("construtora.html", "w") as file:
    file.write(html_code)

print("Página HTML criada com sucesso!")
