        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.body.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.body.setAttribute('data-theme', newTheme);
            themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i> Dark' : '<i class="fas fa-sun"></i> Light';
            
            // Save theme preference
            localStorage.setItem('theme', newTheme);
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
        themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i> Dark' : '<i class="fas fa-sun"></i> Light';
        
        // Language Switcher
        const languageSwitcher = document.getElementById('languageSwitcher');
        const languageModal = document.getElementById('languageModal');
        
        languageSwitcher.addEventListener('click', function() {
            languageModal.classList.add('active');
        });
        
        languageModal.addEventListener('click', function(e) {
            if (e.target === languageModal) {
                languageModal.classList.remove('active');
            }
        });
        
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                alert(`Language changed to ${this.textContent}`);
                languageModal.classList.remove('active');
            });
        });
