<?php
// $dadosRecebidos = json_decode(file_get_contents("php://input"), true);

// $email = $dadosRecebidos["email"] ?? '';
// $senha = $dadosRecebidos["senha"] ?? '';

// // Processa os dados (exemplo simples)
// $resposta = [
//     "mensagem" => "Olá, " . htmlspecialchars($email) . "sua senha e:" .  htmlspecialchars($senha)
// ];

// // Retorna a resposta como JSON
// header('Content-Type: application/json');
// echo json_encode($resposta);

include_once('api/conexao.php');

header('Content-Type: application/json');

$email = $_POST['email'] ?? '';
$senha = $_POST['senha'] ?? '';

// Aqui você faria a verificação com o banco de dados
// Exemplo simples (substitua com verificação real):
if ($email === 'teste@teste.com' && $senha === '1234') {
    echo json_encode(['status' => 'success', 'mensagem' => 'Login bem-sucedido']);
} else {
    echo json_encode(['status' => 'error', 'mensagem' => 'Email ou senha inválidos']);
}
?>