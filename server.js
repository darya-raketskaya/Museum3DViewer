const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Настройка раздачи статических файлов
app.use(express.static(path.join(__dirname, 'pages')));
app.use('/models', express.static(path.join(__dirname, 'models')));
app.use(express.static(__dirname));

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});