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
                        // Evento para mostrar animación Matrix al hacer clic en el h3 de Proyectos en Desarrollo
                        const matrixTitle = document.getElementById('matrix-title');
                        const matrixAnimationContainer = document.getElementById('matrix-animation-container');
                        if (matrixTitle && matrixAnimationContainer) {
                                matrixTitle.addEventListener('click', function() {
                                        if (!matrixAnimationContainer.querySelector('.ai-matrix-loader')) {
                                                matrixAnimationContainer.innerHTML = `
                                                    <div class="ai-matrix-loader">
                                                        <div class="digit">A</div>
                                                        <div class="digit">P</div>
                                                        <div class="digit">A</div>
                                                        <div class="digit">F</div>
                                                        <div class="digit">A</div>
                                                        <div class="digit">M</div>
                                                        <div class="digit">S</div>
                                                        <div class="digit">T</div>
                                                        <div class="glow"></div>
                                                    </div>
                                                `;
                                        }
                                });
                        }
            createStars();
            // Evento para mostrar imagen al hacer clic en el h2 de actividades
            const activitiesBtn = document.getElementById('activities-show-image');
            const activitiesImageContainer = document.getElementById('activities-image-container');
            if (activitiesBtn && activitiesImageContainer) {
                activitiesBtn.addEventListener('click', function() {
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
            const matlabBtn = document.getElementById('matlab-show-image');
            const matlabImageContainer = document.getElementById('matlab-image-container');
            if (matlabBtn && matlabImageContainer) {
                matlabBtn.addEventListener('click', function() {
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
            const dashboardBtn = document.getElementById('dashboard-show-image');
            const dashboardImageContainer = document.getElementById('dashboard-image-container');
            if (dashboardBtn && dashboardImageContainer) {
                dashboardBtn.addEventListener('click', function() {
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
