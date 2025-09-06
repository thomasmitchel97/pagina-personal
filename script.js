// Generar estrellas aleatorias
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const numberOfStars = 100;
            
            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 1 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 2 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Función para mostrar secciones
        function showSection(sectionName) {
            // Ocultar todas las secciones
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Remover clase active de todos los botones
            const buttons = document.querySelectorAll('.rocket-btn');
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Mostrar la sección seleccionada
            document.getElementById(sectionName).classList.add('active');
            
            // Activar el botón correspondiente
            event.target.classList.add('active');
        }

        // Inicializar la página
        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            // Evento para mostrar imagen al hacer clic en el h2 de actividades
            const activitiesTitle = document.getElementById('activities-title');
            const activitiesImageContainer = document.getElementById('activities-image-container');
            if (activitiesTitle && activitiesImageContainer) {
                activitiesTitle.addEventListener('click', function() {
                    // Si la imagen ya está, no la agregues de nuevo
                    if (!activitiesImageContainer.querySelector('img')) {
                        const img = document.createElement('img');
                        img.src = 'caos.jpg';
                        img.alt = 'Imagen de caos';
                        img.style.maxWidth = '100%';
                        img.style.display = 'block';
                        img.style.margin = '0 auto';
                        activitiesImageContainer.appendChild(img);
                    }
                });
            }

            // Evento para mostrar imagen al hacer clic en el h3 de proyectos MATLAB
            const matlabTitle = document.getElementById('matlab-title');
            const matlabImageContainer = document.getElementById('matlab-image-container');
            if (matlabTitle && matlabImageContainer) {
                matlabTitle.addEventListener('click', function() {
                    if (!matlabImageContainer.querySelector('img')) {
                        const img = document.createElement('img');
                        img.src = 'caos.jpg';
                        img.alt = 'Imagen de caos';
                        img.style.maxWidth = '400px';
                        img.style.width = '100%';
                        img.style.height = 'auto';
                        img.style.display = 'block';
                        img.style.margin = '1rem auto';
                        img.style.background = 'transparent';
                        img.style.boxShadow = '0 0 20px #b8860b55';
                        matlabImageContainer.appendChild(img);
                    }
                });
            }

            // Evento para mostrar imagen al hacer clic en el h3 de Dashboard Financiero
            const dashboardTitle = document.getElementById('dashboard-title');
            const dashboardImageContainer = document.getElementById('dashboard-image-container');
            if (dashboardTitle && dashboardImageContainer) {
                dashboardTitle.addEventListener('click', function() {
                    if (!dashboardImageContainer.querySelector('img')) {
                        const img = document.createElement('img');
                        img.src = 'kpis.jpg';
                        img.alt = 'Imagen de dashboard financiero';
                        img.style.maxWidth = '400px';
                        img.style.width = '100%';
                        img.style.height = 'auto';
                        img.style.display = 'block';
                        img.style.margin = '1rem auto';
                        img.style.background = 'transparent';
                        img.style.boxShadow = '0 0 20px #b8860b55';
                        dashboardImageContainer.appendChild(img);
                    }
                });
            }
        });

        // Efectos de hover adicionales
        document.querySelectorAll('.tech-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });
