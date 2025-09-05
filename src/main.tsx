import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'; // 引入 Tailwind CSS 样式
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
