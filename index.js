const express = require('express');
const app = express();
const port = 8000;

// Указать папку, где находятся шаблоны
app.set('views', './views');
// Указать шаблонизатор
app.set('view engine', 'ejs');

// Определяем маршрут
app.get('/', (req, res) => {
  res.render('index1');
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Пример приложения запущен на http://localhost:${port}`);
});