fetch('menu.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro ao carregar menu: ${response.statusText}`);
        }
        return response.text();
    })
    .then(data => {
        const menuContainer = document.getElementById('menu-container');
        if (menuContainer) {
            menuContainer.innerHTML = data;

            // Adicionar o evento, se necessário
            const menuButton = document.getElementById('menu-toggle');
            if (menuButton) {
                menuButton.addEventListener('click', () => {
                    menuContainer.classList.toggle('active');
                });
            }
        }
    })
    .catch(error => console.error('Erro ao carregar o menu:', error));
