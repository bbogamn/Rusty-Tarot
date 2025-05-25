# Rusty‑Tarot Starter

Обновлённый скелет сайта Таро для GitHub Pages.  
Использует **Vite** как сборщик и чистый JavaScript.

## Требования
* Node.js ≥ 20  
* Git

## Быстрый старт

```bash
npm install
npm run dev        # локальный сервер http://localhost:5173
```

## Сборка и публикация

```bash
npm run build      # /dist
```

При пуше в GitHub запускается workflow `deploy.yml`,  
который публикует содержимое `dist/` в GitHub Pages.

1. Создайте новый репозиторий, например `rusty‑tarot`.  
2. Скопируйте туда файлы этого шаблона.  
3. Commit → push.  
4. В Settings → Pages убедитесь, что Source = **GitHub Actions**.  
5. Через минуту сайт будет доступен по адресу  
   `https://<ваш‑логин>.github.io/<имя‑репо>/`.
