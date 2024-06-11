<!DOCTYPE html>
<html>
<head>
    <title>Imobiliária Láuderes</title>
    <link rel="stylesheet" type="text/css" href="../CSS/style.css">
</head>
<body>
</body>
</html>

<?php
// Configurações do banco de dados
$servername = "xxxxxx"; // Host do banco de dados (normalmente é "localhost")
$username = "xxxxxx"; // Nome de usuário do banco de dados
$password = "xxxxxx"; // Senha do banco de dados
$dbname = "xxxxxx"; // Nome do banco de dados
$table = "xxxxxx"; // Nome da tabela no banco de dados

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se há erros na conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Prepara a declaração SQL para inserção dos dados no banco de dados
    $stmt = $conn->prepare("INSERT INTO $table (nome, telefone, email, mensagem) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nome, $telefone, $email, $mensagem);

    // Executa a declaração SQL
    if ($stmt->execute() === TRUE) {
        echo "<span class='message'>Dados enviados com sucesso! $nome</span>";
    } else {
        echo "<span class='message'> $nome, Houve um erro ao enviar os dados: " . $conn->error . "</span>";
    }


    // Fecha a declaração SQL e a conexão com o banco de dados
    $stmt->close();
    $conn->close();
}
?>
