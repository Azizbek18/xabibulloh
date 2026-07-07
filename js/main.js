// 1. Ma'lumotlar bazasi
    const branchData = {
        yashnobod: {
            title: "PDP JUNIOR – YASHNOBOD FILIALI",
            desc: "Eng zamonaviy o'quv xonalari va professional mentorlar jamoasi.",
            image: "./images/yashnobod.png",
            address: "Yashnobod tumani, Amir Temur ko'chasi, 108-uy",
            placeholderPath: "./images/yashnobod.png",
            students: "500+",
            mentors: "25+"
        },
        xadra: {
            title: "PDP JUNIOR – XADRA FILIALI",
            desc: "Innovatsion ta'lim muhiti va ilg'or dasturlash kurslari.",
            image: "./images/xadra.png",
            address: "Mirzo-Ulug'bek tumani, Xadra ko'chasi, 45-uy",
            placeholderPath: "./images/xadra.png",
            students: "350+",
            mentors: "18+"
        },
        chilonzor: {
            title: "PDP JUNIOR – CHILONZOR FILIALI",
            desc: "Kelajak texnologiyalarini biz bilan o'rganing.",
            image: "./images/chilonzor.png",
            address: "Chilonzor tumani, Bunyodkor shoh ko'chasi, 12-uy",
            placeholderPath: "./images/chilonzor.png",
            students: "400+",
            mentors: "20+"
        },
        algoritm: {
            title: "PDP JUNIOR – ALGORITM FILIALI",
            desc: "Zamonaviy texnologiyalar va innovatsion yondashuv.",
            image: "./images/algoritmda.png",
            address: "Chilonzor tumani, Algoritm dahasi, 1-uy",
            placeholderPath: "./images/algoritmda.png",
            students: "300+",
            mentors: "15+"
        },
        "m-ulugbek": {
            title: "PDP JUNIOR – M.ULUG'BEK FILIALI",
            desc: "Ilm-fan va texnologiyalar markazidagi filial.",
            image: "./images/mirza-ulugbek.png",
            address: "Mirzo Ulug'bek tumani, Mustaqillik ko'chasi, 88-uy",
            placeholderPath: "./images/mirza-ulugbek.png",
            students: "450+",
            mentors: "22+"
        },
        beruniy: {
            title: "PDP JUNIOR – BERUNIY FILIALI",
            desc: "Yosh dasturchilar uchun eng qulay sharoitlar.",
            image: "./images/beruniy.png",
            address: "Almazor tumani, Beruniy ko'chasi, 33-uy",
            placeholderPath: "./images/beruniy.png",
            students: "250+",
            mentors: "12+"
        }
    };

    // 2. Tugmalar bosilganda filialni almashtirish
    document.querySelectorAll('.branch-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.branch-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const branchName = this.getAttribute('data-branch');
            const data = branchData[branchName];

            if (data) {
                const color = this.getAttribute('data-color');
                document.getElementById('branchTitle').style.color = color;
                document.getElementById('imageLabel').style.borderColor = color;
                document.getElementById('imageLabel').style.color = color;

                document.getElementById('branchTitle').innerText = data.title;
                document.getElementById('branchDesc').innerText = data.desc;
                document.getElementById('address').innerText = data.address;
                document.getElementById('imageLabel').innerText = branchName.toUpperCase() + " FILIALI";
                document.getElementById('studentsCount').innerText = data.students;
                document.getElementById('mentorsCount').innerText = data.mentors;
                
                const imgElement = document.getElementById('branchImage');
                const placeholderDiv = document.getElementById('placeholderDiv');
                const placeholderPath = document.getElementById('placeholderPath');

                imgElement.style.display = 'none';
                placeholderDiv.style.display = 'flex';
                placeholderPath.innerText = data.placeholderPath;

                imgElement.src = data.image; 
                
                // Filial o'zgarganda yozuvlar qayta ko'rinishi uchun animatsiyani yangilash
                checkReveal();
            }
        });
    });

    // 3. Sahifalarni almashtirish funksiyasi
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.querySelectorAll('.side-nav-links a').forEach(link => link.classList.remove('active'));

        const targetPage = document.getElementById('page-' + pageId);
        if (targetPage) targetPage.classList.add('active');

        const activeLink = Array.from(document.querySelectorAll('.side-nav-links a'))
                               .find(link => link.getAttribute('onclick').includes(pageId));
        if (activeLink) activeLink.classList.add('active');

        closeSideMenu();
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Yangi sahifaga o'tganda ham elementlar ko'rinishi uchun
        setTimeout(checkReveal, 100);
    }

    // 3D YON MENYU (SIDE MENU) BOSHQARUVI
    function toggleSideMenu() {
        const menu = document.getElementById('sideMenu');
        const overlay = document.getElementById('sideMenuOverlay');
        const toggle = document.getElementById('menuToggle');
        const isActive = menu.classList.toggle('active');
        overlay.classList.toggle('active', isActive);
        toggle.classList.toggle('active', isActive);
        toggle.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    function closeSideMenu() {
        const menu = document.getElementById('sideMenu');
        if (!menu.classList.contains('active')) return;
        menu.classList.remove('active');
        document.getElementById('sideMenuOverlay').classList.remove('active');
        document.getElementById('menuToggle').classList.remove('active');
        document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    // 4. YO'QOLIB QOLGAN ANIMATSIYALARNI QAYTA TIKLASH (Scroll Reveal)
    function checkReveal() {
        const reveals = document.querySelectorAll('.scroll-reveal');
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 50; // Element ekranga 50px kirganda ochiladi

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('revealed');
            }
        });
    }

    // Skroll bo'lganda animatsiyani ishlatish
    window.addEventListener('scroll', checkReveal);

    // 5. Loader yopilishi va ilk yuklanish
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        if(loader) loader.classList.add('hidden');
        
        // Sahifa ilk bor ochilganda elementlarni ko'rsatish
        checkReveal();
    });



   // ==================== DAXSHAT NEON MODAL LOGIKASI ====================
document.addEventListener('DOMContentLoaded', () => {
    const cyberModal = document.getElementById('cyberMentorModal');
    const closeBtn = document.querySelector('.cyber-close-btn');
    const mentorCards = document.querySelectorAll('.mentor-card');

    // Oynadagi dinamik o'zgaruvchi kontentlar
    const mImg = document.getElementById('modalImg');
    const mName = document.getElementById('modalName');
    const mRole = document.getElementById('modalRole');
    const mExp = document.getElementById('modalExp');
    const mCompany = document.getElementById('modalCompany');
    const mBio = document.getElementById('modalBio');
    const mTechTags = document.getElementById('modalTechTags');

    // Har bir mentor kartasiga bosish funksiyasi
    mentorCards.forEach(card => {
        card.addEventListener('click', () => {
            // Atributlardan ma'lumotlarni o'qish
            const name = card.getAttribute('data-name');
            const role = card.getAttribute('data-role');
            const exp = card.getAttribute('data-exp');
            const tech = card.getAttribute('data-tech');
            const company = card.getAttribute('data-company');
            const bio = card.getAttribute('data-bio');
            const imgSrc = card.querySelector('.mentor-real-img').src;

            // Ma'lumotlarni modalga yozish
            mImg.src = imgSrc;
            mName.textContent = name;
            mRole.textContent = role;
            mExp.textContent = exp;
            mCompany.textContent = company;
            mBio.textContent = bio;

            // Texnologiyalarni tag-lar shakliga keltirish
            mTechTags.innerHTML = '';
            if (tech) {
                tech.split(',').forEach(t => {
                    const tagSpan = document.createElement('span');
                    tagSpan.className = 'tag';
                    tagSpan.style.borderColor = 'rgba(0, 212, 170, 0.2)';
                    tagSpan.textContent = t.trim();
                    mTechTags.appendChild(tagSpan);
                });
            }

            // Aktivlashtirish classini qo'shish
            cyberModal.classList.add('active');
        });
    });

    // Modalni yopish funktsiyalari
    const closeModal = () => {
        cyberModal.classList.remove('active');
    };

    closeBtn.addEventListener('click', closeModal);
    
    // Tashqarisiga bosganda yopilish
    window.addEventListener('click', (e) => {
        if (e.target === cyberModal) {
            closeModal();
        }
    });

    // Escape tugmasini bosganda yopilish
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cyberModal.classList.contains('active')) {
            closeModal();
        }
    });
}); 





let hasScrolledToBottom = false;

window.addEventListener('scroll', () => {
    // Foydalanuvchi sahifaning eng oxiriga yetganini tekshirish
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 5) {
        
        // Agar bir marta oxiriga yetgan bo'lsa va taymer hali chalishni boshlamagan bo'lsa
        if (!hasScrolledToBottom) {
            hasScrolledToBottom = true; // Qayta-qayta ishga tushib ketmasligi uchun
            
            console.log("Sahifa oxiriga yetib kelindi. 30 soniyalik taymer boshlandi...");
            
            // 30 soniyadan keyin (30000 millisekund) robot oynasini chiqarish
            setTimeout(() => {
                const robotPopup = document.getElementById('robot-popup');
                if(robotPopup) {
                    robotPopup.classList.add('show');
                }
            }, 30000); 
        }
    }
});

// Robotni yopish funksiyasi
function closeRobot() {
    const robotPopup = document.getElementById('robot-popup');
    if(robotPopup) {
        robotPopup.classList.remove('show');
    }
}

// ALOQA FORMASINI YUBORISH
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    alert("Xabaringiz qabul qilindi! Tez orada siz bilan bog'lanamiz.");
    form.reset();
}



    // ==================== NATIJALAR PAGE JAVASCRIPT ====================

    // Robot data for modals
    const robotData = {
        robo1: {
            name: "AlphaBot X1",
            type: "Avtonom Navigatsiya Robot",
            icon: "🤖",
            achievement: "O'zbekiston Robot Olimpiadasi - 1-o'rin",
            description: "AlphaBot X1 - bu avtonom navigatsiya roboti bo'lib, u lidar sensorlari va AI algoritmlari yordamida murakkab labirintlarni mustaqil ravishda yengib o'ta oladi. Robot Arduino Mega va Raspberry Pi 4 asosida qurilgan.",
            specs: {
                "Platforma": "Arduino Mega + RPi 4",
                "Sensorlar": "LiDAR, Ultrasonic, IMU",
                "Tezlik": "2 m/s",
                "Batareya": "4 soat",
                "Og'irlik": "3.5 kg",
                "Dasturlash": "Python, C++"
            },
            tags: ["Arduino", "AI", "IoT", "LiDAR", "Autonomous"],
            team: "Jasurbek A., Diyorbek S., Nodira Y."
        },
        robo2: {
            name: "MechaArm Pro",
            type: "Robot Qo'l - Manipulyator",
            icon: "🦾",
            achievement: "Central Asia Tech Fest - 2-o'rin",
            description: "MechaArm Pro - 6 darajali erkinlikka ega robot qo'l bo'lib, computer vision yordamida ob'ektlarni aniqlab, ularni aniqlik bilan ushlab o'tkazishi mumkin.",
            specs: {
                "Platforma": "Raspberry Pi 4",
                "Sensorlar": "Camera, Force Sensor",
                "Qo'llar": "6 DOF",
                "Yuk ko'tarish": "2 kg",
                "Aniqlik": "±0.5 mm",
                "Dasturlash": "Python, OpenCV"
            },
            tags: ["Raspberry Pi", "Python", "CV", "Robotics"],
            team: "Azizbek R., Habibulloh M."
        },
        robo3: {
            name: "SkyDrone AI",
            type: "Avtonom Drone",
            icon: "🚁",
            achievement: "Toshkent AeroHack - 1-o'rin",
            description: "SkyDrone AI - avtonom parvoz qiluvchi dron bo'lib, AI yordamida yo'l topish, ob'ektlarni aniqlash va xarita yaratish imkoniyatiga ega.",
            specs: {
                "Platforma": "Pixhawk 4 + Jetson Nano",
                "Sensorlar": "Camera, GPS, LiDAR",
                "Uzoqlik": "5 km",
                "Parvoz vaqti": "25 daqiqa",
                "Tezlik": "15 m/s",
                "Dasturlash": "Python, ROS"
            },
            tags: ["AI", "AutoPilot", "LiDAR", "Drone"],
            team: "Javohir K., Sardorbek T."
        },
        robo4: {
            name: "AutoRacer V2",
            type: "Avtonom Mashina",
            icon: "🚗",
            achievement: "RoboRace Uzbekistan - 3-o'rin",
            description: "AutoRacer V2 - 1:10 masshtabdagi avtonom poyga mashinasi. Deep Learning yordamida yo'l chiziqlarini kuzatadi va eng tez vaqtda finishga yetib boradi.",
            specs: {
                "Platforma": "NVIDIA Jetson Nano",
                "Sensorlar": "Camera, IMU, Encoder",
                "Tezlik": "8 m/s",
                "Masshtab": "1:10",
                "Batareya": "Li-Po 3S",
                "Dasturlash": "Python, TensorFlow"
            },
            tags: ["ROS", "ML", "Sensors", "Racing"],
            team: "Madina K., Jasurbek A."
        },
        robo5: {
            name: "SmartHome Hub",
            type: "Aqlli Uy Tizimi",
            icon: "🏠",
            achievement: "Innovation Week - Eng Yaxshi Loyiha",
            description: "SmartHome Hub - to'liq avtomatlashtirilgan uy tizimi. IoT qurilmalarini boshqarish, energiya tejash va xavfsizlikni ta'minlash imkoniyatiga ega.",
            specs: {
                "Platforma": "ESP32 + Cloud",
                "Sensorlar": "Temp, Humidity, Motion",
                "Qurilmalar": "20+",
                "Protocol": "MQTT, HTTP",
                "Mobil App": "Flutter",
                "Dasturlash": "C++, Dart, Node.js"
            },
            tags: ["IoT", "ESP32", "Cloud", "Smart Home"],
            team: "Diyorbek S., Nodira Y."
        },
        robo6: {
            name: "BattleBot Z",
            type: "Jangovar Robot",
            icon: "🎮",
            achievement: "RoboWars Tashkent - Chempion",
            description: "BattleBot Z - 15 kg vazn toifasidagi jangovar robot. Mustahkam armor va kuchli qurollanishga ega. Musobaqada 8 ta raqibni mag'lub etib chempion bo'ldi.",
            specs: {
                "Platforma": "Arduino Mega",
                "Qurol": "Spinner Blade",
                "Tezlik": "5 m/s",
                "Vazn": "15 kg",
                "Armor": "Hardened Steel",
                "Dasturlash": "C++, RC"
            },
            tags: ["C++", "Mechanics", "RC", "Combat"],
            team: "Javohir K., Azizbek R."
        }
    };

    // Programming results data
    const resultData = {
        result1: {
            title: "ICPC Asia Regional",
            icon: "🏆",
            subtitle: "Xalqaro Dasturlash Olimpiadasi",
            description: "PDP Junior jamoasi ICPC (International Collegiate Programming Contest) dasturlash olimpiadasining Osiyo mintaqaviy bosqichida Bronza medal qo'lga kiritdi. 12 soatlik musobaqada 10 ta algoritmik masalani yechishdi.",
            stats: {
                "Ishtirokchilar": "150+ jamoa",
                "Masalalar": "10 ta",
                "Vaqt": "12 soat",
                "Natija": "Bronza",
                "O'rin": "Top 30"
            },
            tags: ["C++", "Algoritm", "TeamWork", "ICPC", "Asia"]
        },
        result2: {
            title: "Google Code Jam",
            icon: "🔍",
            subtitle: "Google Tashkiloti Musobaqasi",
            description: "3 nafar o'quvchimiz Google Code Jam musobaqasining ikkinchi bosqichiga chiqdi. 15 yoshli o'quvchimiz 5000+ ishtirokchi orasidan Top 200 ga kirdi.",
            stats: {
                "Ishtirokchilar": "5000+",
                "Bosqich": "Round 2",
                "Yosh": "15 yosh",
                "Natija": "Top 200",
                "Davlat": "O'zbekiston"
            },
            tags: ["Python", "Math", "Google", "Code Jam", "Algorithm"]
        },
        result3: {
            title: "O'zbekiston IT Olimpiadasi",
            icon: "🇺🇿",
            subtitle: "Respublika IT Olimpiadasi",
            description: "Respublika IT olimpiadasida PDP Junior o'quvchilari 5 ta oltin, 8 ta kumush medal qo'lga kiritdi. Dasturlash, robototexnika va web-dizayn yo'nalishlarida g'alaba qozondi.",
            stats: {
                "Oltin": "5 ta",
                "Kumush": "8 ta",
                "Bronza": "12 ta",
                "Ishtirokchilar": "50+",
                "Viloyatlar": "12 ta"
            },
            tags: ["Java", "Olympiad", "National", "Programming", "Robotics"]
        },
        result4: {
            title: "Hackathon Tashkent",
            icon: "⚡",
            subtitle: "48 Soatlik Hackathon",
            description: "48 soatlik hackatonda 'EcoTrack' loyihasi bilan 1-o'rinni qo'lga kiritdik. Bu aqlli ekologik monitoring tizimi havo va suv sifatini real vaqtda kuzatadi.",
            stats: {
                "Jamoa": "4 kishi",
                "Vaqt": "48 soat",
                "Loyiha": "EcoTrack",
                "Natija": "1-o'rin",
                "Mukofot": "$5000"
            },
            tags: ["React", "Node.js", "IoT", "Hackathon", "Eco"]
        },
        result5: {
            title: "Informatics Olympiad (IOI)",
            icon: "🌍",
            subtitle: "Xalqaro Informatika Olimpiadasi",
            description: "Xalqaro informatika olimpiadasida (IOI) PDP Junior vakili Honorable Mention mukofotini qo'lga kiritdi. 90+ davlat vakillari orasida O'zbekiston nomini munosib himoya qildi.",
            stats: {
                "Davlatlar": "90+",
                "Ishtirokchilar": "400+",
                "Masalalar": "6 ta",
                "Natija": "Honorable Mention",
                "Yosh": "16 yosh"
            },
            tags: ["C++", "IOI", "International", "Olympiad", "Algorithm"]
        }
    };

    // Success stories data
    const storyData = {
        story1: {
            name: "Sardorbek T.",
            role: "Google Software Engineer",
            avatar: "👨‍💻",
            quote: "PDP Junior'da 2 yil o'qib, Python va algoritmlarni o'rgandim. Hozir Google'da ishlayman. Eng yaxshi qarorim! Mentorlarimning qo'llab-quvvatlashi va doimiy mashg'ulotlar menga katta yordam berdi.",
            stats: {
                "Bitirgan yili": "2023",
                "Maosh": "$150k+",
                "Joylashgan": "Google (Switzerland)",
                "Kurs": "Python + Algoritm"
            },
            tags: ["Python", "Google", "Software Engineer", "Algorithm"]
        },
        story2: {
            name: "Madina K.",
            role: "Yandex Frontend Developer",
            avatar: "👩‍💻",
            quote: "Web dizayn kursi menga ko'p eshiklar ochdi. Yandex'da ishlayman va o'z startapimni ham boshladim. PDP Junior'da o'rgangan narsalarim hozir ham katta yordam beradi.",
            stats: {
                "Bitirgan yili": "2024",
                "Joylashgan": "Yandex (Moscow)",
                "Startap": "EduTech Platform",
                "Kurs": "Web Dizayn"
            },
            tags: ["React", "Yandex", "Frontend", "Startap"]
        },
        story3: {
            name: "Jasurbek A.",
            role: "Robotics Engineer - Tesla",
            avatar: "🤖",
            quote: "Robototexnika kursi orqali Arduino va ROS o'rgandim. Hozir Tesla'da avtonom mashinalar ustida ishlayman. PDP Junior'da qo'lga kiritgan tajribam menga dunyoning eng yaxshi kompaniyasida ishlash imkonini berdi.",
            stats: {
                "Bitirgan yili": "2022",
                "Joylashgan": "Tesla (USA)",
                "Lavozim": "Senior Robotics Engineer",
                "Kurs": "Robototexnika"
            },
            tags: ["ROS", "Tesla", "Robotics", "AI"]
        },
        story4: {
            name: "Diyorbek S.",
            role: "Game Developer - Ubisoft",
            avatar: "🎮",
            quote: "Unity va Unreal Engine o'rgandim. Hozir Ubisoft'da AAA o'yinlar ustida ishlayman. Orzuyim ro'yobga chiqdi! PDP Junior'da o'rgangan game dev asoslari menga professional karyeramni boshlashda katta yordam berdi.",
            stats: {
                "Bitirgan yili": "2023",
                "Joylashgan": "Ubisoft (Montreal)",
                "Loyiha": "Assassin's Creed Series",
                "Kurs": "O'yin Yaratish"
            },
            tags: ["Unity", "Ubisoft", "Game Dev", "C++"]
        }
    };

    // Open Robot Modal
    function openRobotModal(robotId) {
        const data = robotData[robotId];
        if (!data) return;

        let specsHTML = '';
        for (const [key, value] of Object.entries(data.specs)) {
            specsHTML += `
                <div class="robot-spec-item">
                    <span class="spec-icon">⚙️</span>
                    <div>
                        <span class="spec-label">${key}</span>
                        <span class="spec-value">${value}</span>
                    </div>
                </div>
            `;
        }

        let tagsHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');

        const modalHTML = `
            <div class="result-modal-overlay active" id="robotModal" onclick="closeResultModal(event)">
                <div class="result-modal-box robot-detail-modal" onclick="event.stopPropagation()">
                    <span class="result-modal-close" onclick="closeResultModal()">&times;</span>
                    <div class="result-modal-header">
                        <span class="result-modal-icon">${data.icon}</span>
                        <h2 class="result-modal-title">${data.name}</h2>
                        <p class="result-modal-subtitle">${data.type}</p>
                    </div>
                    <div class="result-modal-body">
                        <div class="robot-achievement" style="margin-bottom: 20px;">
                            <span class="trophy">🏆</span>
                            <span>${data.achievement}</span>
                        </div>
                        <p class="result-modal-desc">${data.description}</p>
                        <div class="robot-specs">
                            ${specsHTML}
                        </div>
                        <div class="result-modal-tags">
                            ${tagsHTML}
                        </div>
                        <div style="text-align: center; margin-top: 15px; color: var(--text-muted); font-size: 13px;">
                            👥 Jamoa: ${data.team}
                        </div>
                        <button class="result-modal-btn" onclick="showPage('aloqa'); closeResultModal();">
                            Kursga Yozilish ⚡
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';
    }

    // Open Result Modal
    function openResultModal(resultId) {
        const data = resultData[resultId];
        if (!data) return;

        let statsHTML = '';
        for (const [key, value] of Object.entries(data.stats)) {
            statsHTML += `
                <div class="result-info-item">
                    <span>${key}</span>
                    <strong>${value}</strong>
                </div>
            `;
        }

        let tagsHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');

        const modalHTML = `
            <div class="result-modal-overlay active" id="resultModal" onclick="closeResultModal(event)">
                <div class="result-modal-box" onclick="event.stopPropagation()">
                    <span class="result-modal-close" onclick="closeResultModal()">&times;</span>
                    <div class="result-modal-header">
                        <span class="result-modal-icon">${data.icon}</span>
                        <h2 class="result-modal-title">${data.title}</h2>
                        <p class="result-modal-subtitle">${data.subtitle}</p>
                    </div>
                    <div class="result-modal-body">
                        <div class="result-info-grid">
                            ${statsHTML}
                        </div>
                        <p class="result-modal-desc">${data.description}</p>
                        <div class="result-modal-tags">
                            ${tagsHTML}
                        </div>
                        <button class="result-modal-btn" onclick="showPage('aloqa'); closeResultModal();">
                            Siz Ham Qo'shiling 🚀
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';
    }

    // Open Story Modal
    function openStoryModal(storyId) {
        const data = storyData[storyId];
        if (!data) return;

        let statsHTML = '';
        for (const [key, value] of Object.entries(data.stats)) {
            statsHTML += `
                <div class="result-info-item">
                    <span>${key}</span>
                    <strong>${value}</strong>
                </div>
            `;
        }

        let tagsHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');

        const modalHTML = `
            <div class="result-modal-overlay active" id="storyModal" onclick="closeResultModal(event)">
                <div class="result-modal-box story-detail-modal" onclick="event.stopPropagation()">
                    <span class="result-modal-close" onclick="closeResultModal()">&times;</span>
                    <div class="result-modal-body">
                        <div class="story-detail-avatar">${data.avatar}</div>
                        <h2 class="result-modal-title">${data.name}</h2>
                        <p class="result-modal-subtitle">${data.role}</p>
                        <div class="story-quote">${data.quote}</div>
                        <div class="result-info-grid" style="margin-top: 20px;">
                            ${statsHTML}
                        </div>
                        <div class="result-modal-tags" style="margin-top: 15px;">
                            ${tagsHTML}
                        </div>
                        <button class="result-modal-btn" onclick="showPage('aloqa'); closeResultModal();">
                            Siz Ham Muvaffaqiyatli Bo'ling ⭐
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';
    }

    // Close Result Modal
    function closeResultModal(event) {
        if (event && event.target !== event.currentTarget) return;

        const modals = document.querySelectorAll('.result-modal-overlay');
        modals.forEach(modal => {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        });
        document.body.style.overflow = '';
    }

    // Counter Animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-3d-number');
        counters.forEach(counter => {
            const card = counter.closest('.stat-3d-card');
            const target = parseInt(card.dataset.count);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current) + (target > 100 ? '+' : '%');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + (target > 100 ? '+' : '%');
                }
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(card);
        });
    }

    // Initialize when page loads
    document.addEventListener('DOMContentLoaded', () => {
        animateCounters();

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeResultModal();
            }
        });
    });



    // ==================== DAHSHAT BOMBA KURS MODAL JAVASCRIPT ====================

    const kursData = {
        programming: {
            icon: '💻',
            title: "Dasturlash Asoslari",
            subtitle: "Zamonaviy Dasturlash Kursi",
            duration: "6 oy",
            lessons: "72 ta",
            group: "8-12 kishi",
            desc: "Bu kursda siz Python, JavaScript va C++ tillarini o'rganasiz. Real loyihalar ustida ishlash, algoritmlar, ma'lumotlar tuzilmasi va dasturlash paradigmalari bilan tanishasiz.",
            skills: ["Python asoslari", "JavaScript ES6+", "C++ OOP", "Algoritmlar", "Ma'lumotlar tuzilmasi", "Git & GitHub"],
            progress: [
                { label: "Python Asoslari", pct: 30 },
                { label: "JavaScript", pct: 25 },
                { label: "C++ & OOP", pct: 25 },
                { label: "Loyiha & Amaliyot", pct: 20 }
            ],
            projects: [
                { icon: "🤖", title: "Telegram Bot", desc: "Python bilan bot" },
                { icon: "🌐", title: "Veb Sayt", desc: "HTML/CSS/JS" },
                { icon: "🎮", title: "Konsol O'yini", desc: "C++ bilan" }
            ]
        },
        design: {
            icon: '🎨',
            title: "Web Dizayn",
            subtitle: "UI/UX & Kreativ Dizayn",
            duration: "4 oy",
            lessons: "48 ta",
            group: "6-10 kishi",
            desc: "Figma, Adobe XD va zamonaviy veb-dizayn uslublarini o'rganing. Responsive dizayn, animatsiyalar, ranglar nazariyasi va foydalanuvchi tajribasi (UX) asoslarini egallang.",
            skills: ["Figma Master", "Adobe XD", "HTML/CSS", "Responsive Dizayn", "Animatsiyalar", "UX Research"],
            progress: [
                { label: "Dizayn Asoslari", pct: 25 },
                { label: "Figma & Prototip", pct: 30 },
                { label: "HTML/CSS Koding", pct: 25 },
                { label: "Portfolio Loyiha", pct: 20 }
            ],
            projects: [
                { icon: "🎨", title: "Landing Page", desc: "Figma maketi" },
                { icon: "📱", title: "Mobil App UI", desc: "iOS/Android" },
                { icon: "🌐", title: "Veb Sayt", desc: "To'liq dizayn" }
            ]
        },
        robotics: {
            icon: '🤖',
            title: "Robototexnika",
            subtitle: "Arduino & IoT Kursi",
            duration: "5 oy",
            lessons: "60 ta",
            group: "6-8 kishi",
            desc: "Arduino, sensorlar, motorlar va IoT qurilmalari bilan ishlashni o'rganing. O'z robotlaringizni yasang va musobaqalarda qatnashing!",
            skills: ["Arduino C++", "Sensorlar", "Motor boshqaruvi", "IoT Protocols", "3D Modeling", "Robot kinematikasi"],
            progress: [
                { label: "Elektronika Asoslari", pct: 25 },
                { label: "Arduino Dasturlash", pct: 30 },
                { label: "Sensor & Motor", pct: 25 },
                { label: "Loyiha Robot", pct: 20 }
            ],
            projects: [
                { icon: "🚗", title: "Line Follower", desc: "Chiziqqa ergashuvchi" },
                { icon: "🏠", title: "Smart Home", desc: "IoT tizimi" },
                { icon: "🦾", title: "Robot Qo'l", desc: "Manipulyator" }
            ]
        },
        gamedev: {
            icon: '🎮',
            title: "O'yin Yaratish",
            subtitle: "Unity & Game Dev",
            duration: "6 oy",
            lessons: "72 ta",
            group: "8-10 kishi",
            desc: "Unity 3D, C# va o'yin dizaynini o'rganing. 2D va 3D o'yinlar yaratish, fizika, animatsiyalar va o'yin mexanikalari ustida ishlash.",
            skills: ["Unity 3D", "C# Scripting", "2D/3D Graphics", "Fizika & Collision", "Animatsiyalar", "Game Design"],
            progress: [
                { label: "Unity Asoslari", pct: 25 },
                { label: "C# Dasturlash", pct: 30 },
                { label: "Grafika & Animatsiya", pct: 25 },
                { label: "O'yin Loyihasi", pct: 20 }
            ],
            projects: [
                { icon: "🏃", title: "Platformer", desc: "2D o'yin" },
                { icon: "🎯", title: "Shooter", desc: "3D o'yin" },
                { icon: "🧩", title: "Puzzle", desc: "Mantiqiy o'yin" }
            ]
        },
        mobile: {
            icon: '📱',
            title: "Mobil Dasturlash",
            subtitle: "Flutter & React Native",
            duration: "5 oy",
            lessons: "60 ta",
            group: "8-12 kishi",
            desc: "Flutter va React Native bilan iOS va Android ilovalari yaratishni o'rganing. State management, API integratsiyasi va mobil dizayn patternlari.",
            skills: ["Flutter & Dart", "React Native", "State Management", "REST API", "Firebase", "App Store Deploy"],
            progress: [
                { label: "Flutter Asoslari", pct: 30 },
                { label: "UI & Animatsiyalar", pct: 25 },
                { label: "API & Backend", pct: 25 },
                { label: "Ilova Loyihasi", pct: 20 }
            ],
            projects: [
                { icon: "💬", title: "Chat Ilova", desc: "Real-time chat" },
                { icon: "🛒", title: "E-Commerce", desc: "Online do'kon" },
                { icon: "📰", title: "News App", desc: "Yangiliklar ilovasi" }
            ]
        },
        ai: {
            icon: '🧠',
            title: "Sun'iy Intellekt",
            subtitle: "ML & Deep Learning",
            duration: "7 oy",
            lessons: "84 ta",
            group: "6-10 kishi",
            desc: "Machine Learning, Deep Learning va Neural Networks asoslarini o'rganing. Python, TensorFlow va PyTorch bilan AI modellari yaratish.",
            skills: ["Python & NumPy", "TensorFlow", "PyTorch", "Neural Networks", "Computer Vision", "NLP"],
            progress: [
                { label: "ML Asoslari", pct: 25 },
                { label: "Deep Learning", pct: 30 },
                { label: "CNN & RNN", pct: 25 },
                { label: "AI Loyihasi", pct: 20 }
            ],
            projects: [
                { icon: "👁️", title: "Yuz Tanish", desc: "Face detection" },
                { icon: "💬", title: "Chatbot", desc: "NLP asosida" },
                { icon: "📊", title: "Data Analysis", desc: "Bashorat modeli" }
            ]
        }
    };

    // OPEN MODAL
    function openKursModal(key) {
        const data = kursData[key];
        if (!data) return;

        document.getElementById('kursIcon').textContent = data.icon;
        document.getElementById('kursTitle').textContent = data.title;
        document.getElementById('kursTitle').setAttribute('data-text', data.title);
        document.getElementById('kursSubtitle').textContent = data.subtitle;
        document.getElementById('kursDuration').textContent = data.duration;
        document.getElementById('kursLessons').textContent = data.lessons;
        document.getElementById('kursGroup').textContent = data.group;
        document.getElementById('kursDesc').textContent = data.desc;

        const skillsContainer = document.getElementById('kursSkills');
        skillsContainer.innerHTML = data.skills.map(s => 
            `<div class="skill-item"><div class="skill-dot"></div><span>${s}</span></div>`
        ).join('');

        const progressContainer = document.getElementById('kursProgress');
        progressContainer.innerHTML = data.progress.map(p => `
            <div class="progress-item">
                <div class="progress-label"><span>${p.label}</span><span class="progress-pct">${p.pct}%</span></div>
                <div class="progress-bar"><div class="progress-fill" data-width="${p.pct}"></div></div>
            </div>
        `).join('');

        const projectsContainer = document.getElementById('kursProjects');
        projectsContainer.innerHTML = data.projects.map(p => `
            <div class="project-card">
                <div class="proj-icon">${p.icon}</div>
                <h5>${p.title}</h5>
                <p>${p.desc}</p>
            </div>
        `).join('');

        const overlay = document.getElementById('kursOverlay');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            document.querySelectorAll('.progress-fill').forEach(bar => {
                bar.style.width = bar.dataset.width + '%';
            });
        }, 400);
    }

    // CLOSE MODAL
    function closeKursModal(event) {
        if (event && event.target !== event.currentTarget) return;
        const overlay = document.getElementById('kursOverlay');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        document.querySelectorAll('.progress-fill').forEach(bar => {
            bar.style.width = '0%';
        });
    }

    // Escape to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeKursModal();
            // Also close other modals if open
            const cyberModal = document.getElementById('cyberMentorModal');
            if (cyberModal && cyberModal.classList.contains('active')) {
                cyberModal.classList.remove('active');
            }
            closeResultModal();
            closeSideMenu();
        }
    });
