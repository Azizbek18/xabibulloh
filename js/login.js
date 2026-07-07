const cube = document.getElementById('cyberCube');
        const container = document.getElementById('authContainer');
        const statusText = document.getElementById('sysStatus');
        const switchModeBtn = document.getElementById('switchMode');
        
        let isLoginMode = true;
        let targetX = -20, targetY = 45;
        let currentX = -20, currentY = 45;

        // 1. SICHQONChA ORQALI 3D KUBIKNI BOSHQARISH (Daxshat interaktiv)
        window.addEventListener('mousemove', (e) => {
            // Sichqonchaning ekrandagi o'rniga qarab burchaklarni hisoblash
            const x = (window.innerHeight / 2 - e.clientY) / 5;
            const y = (e.clientX - window.innerWidth / 2) / 5;
            
            targetX = x - 20;
            targetY = y + 45;
        });

        // Mayin aylanish va joyiga qaytish silliqligi (Lerp effekti)
        function animateCube() {
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;
            cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
            requestAnimationFrame(animateCube);
        }
        animateCube();

        // 2. REGISTRATION / LOGIN REJIMINI ALMASHTIRISH
        function toggleMode() {
            isLoginMode = !isLoginMode;
            if (!isLoginMode) {
                statusText.innerText = "// REGISTRATION_INITIALIZED...";
                switchModeBtn.innerText = "[ ALLAQACHON RO'YXATDAN O'TGANMISIZ? LOGIN ]";
                statusText.style.color = "#ffe66d";
            } else {
                statusText.innerText = "// SECURE_GATEWAY_v3.0";
                switchModeBtn.innerText = "[ SIZDA AKKAUNT YO'QMI? REGISTRATION ]";
                statusText.style.color = "#556080";
            }
        }

        // 3. SAYTGA KIRISH VA ASOSIY SAHIFAGA SAKRASH (BOMBA ANIMATSIYA)
        function triggerSystemAccess() {
            const user = document.getElementById('username').value.trim();
            const pass = document.getElementById('password').value.trim();

            if(user === "" || pass === "") {
                statusText.innerText = "!! ERROR: MA'LUMOTLARNI TO'LIQ KIRITING !!";
                statusText.style.color = "#ff4a4a";
                return;
            }

            statusText.innerText = "// ACCESS_GRANTED! LOADING MATRIX TIZIMI...";
            statusText.style.color = "#00ffcc";
            container.style.borderColor = "#ffe66d";

            // Kiber portlash effekti: Modal g'oyib bo'lib asosiy sahifaga otiladi
            setTimeout(() => {
                container.classList.add('system-boomed');
                setTimeout(() => {
                    localStorage.setItem('pdpjunior_auth', 'true');
                    window.location.href = '../index.html';
                }, 500);
            }, 1200);
        }
