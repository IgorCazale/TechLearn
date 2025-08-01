
# 🌐 TechLearn

**TechLearn** é um projeto pessoal de aprendizado, onde Igor testa e pratica linguagens e tecnologias web como **HTML**, **CSS**, **JavaScript** e **Node.js**.  
A ideia é simular uma **plataforma de cursos de programação**, como forma de exercitar estruturação de front-end, lógica, servidor básico e organização de arquivos. 🚀

---

## 🧪 Objetivos do projeto

✅ Praticar HTML semântico  
✅ Trabalhar com CSS para layout e responsividade  
✅ Criar scripts com JavaScript puro  
✅ Iniciar com Node.js no backend  
✅ Organizar estrutura de projeto real  
✅ Aprender MongoDB e conexão com banco de dados (futuramente)  
✅ Versionar e publicar com Git + GitHub  

---

## 🧠 Funcionalidades simuladas

🧭 Navegação entre páginas de cursos  
🧾 Área de login (em construção)  
📄 Páginas de conteúdo como se fossem aulas  
📦 Backend com Node para servir páginas (em desenvolvimento)

---

## 💻 Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/IgorCazale/TechLearn.git
cd TechLearn
```

(Opcional) Inicie o backend (se configurado com Node):

```bash
npm install
node server.js
```

Abra `html/index.html` diretamente no navegador para testar o front-end.

---

## 📂 Estrutura do projeto

```text
TechLearn/
├── backend/                   # Código do backend com Node.js
│   ├── controllers/           # Lógica dos controladores
│   │   └── authController.js
│   ├── models/                # Modelos (ex: usuário)
│   │   └── user.js
│   ├── routes/                # Definições de rotas
│   │   └── authRoutes.js
│   └── server.js              # Servidor principal com Node.js
│
├── css/                       # Estilos da interface
│   ├── cadastro.css
│   ├── cursos.css
│   ├── forum.css
│   ├── home.css
│   ├── login.css
│   ├── menu.css
│   ├── planos.css
│   ├── projetos.css
│   └── sobre.css
│
├── html/                      # Páginas HTML do site
│   ├── cadastro.html
│   ├── cursos.html
│   ├── forum.html
│   ├── home.html
│   ├── login.html
│   ├── menu.html
│   ├── planos.html
│   ├── projetos.html
│   └── sobre.html
│
├── imagens/                   # Imagens utilizadas
│
├── js/                        # Scripts JavaScript
│   ├── cadastro.js
│   ├── forum.js
│   ├── home.js
│   ├── menu.js
│   └── planos.js
│
├── package.json               # Dependências do projeto
├── package-lock.json          # Versões exatas das dependências
├── .gitattributes             # Controle de linguagens no GitHub
├── .gitignore                 # Arquivos ignorados pelo Git
└── README.md                  # Documentação do projeto

```

---

## 🚀 Tecnologias usadas

- HTML5
- CSS3
- JavaScript (vanilla)
- Node.js
- MongoDB (previsto)
- Git + GitHub

---

## 🧰 Extensões úteis no VS Code

| Extensão         | Finalidade                           |
|------------------|--------------------------------------|
| Live Server      | Atualização automática no navegador  |
| Prettier         | Formatação de código                 |
| ESLint           | Padrões de código JS                 |
| Auto Rename Tag  | Edição simultânea de tags HTML       |
| GitLens          | Visualização de histórico Git        |

---

## 🔖 Status do projeto

🚧 Em construção | Projeto pessoal para testes e evolução contínua

---

## 📌 Próximos passos (To-do)

- [ ] Melhorar responsividade no mobile  
- [ ] Criar sistema de login fake  
- [ ] Incluir banco de dados com MongoDB  
- [ ] Criar README visual com prints  
- [ ] Publicar versão online (via GitHub Pages ou Render)

---

👨‍💻 Feito com dedicação por [Igor Cazale](https://github.com/IgorCazale)
