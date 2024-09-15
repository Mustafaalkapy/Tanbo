// إظهار شاشة الترحيب أو الشاشة الرئيسية
const welcomeScreen = document.getElementById('welcomeScreen');
const mainScreen = document.getElementById('mainScreen');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('d-none');
    mainScreen.classList.remove('d-none');
});

// مولد المعلومات العشوائية
const randomDataGenerator = (name) => {
    const mothers = ["فاطمة", "زينب", "عائشة", "مريم", "خديجة"];
    const brothers = ["علي", "حسين", "محمد", "عباس", "يوسف"];
    const sisters = ["سارة", "ليلى", "شهد", "نور", "ريم"];
    const phoneNumbers = ["0771XXXXXXX", "0780XXXXXXX", "0750XXXXXXX"];
    const districts = ["الكرادة", "الجادرية", "المنصور", "الشعلة", "زيونة"];
    const streets = ["الزقاق 1", "الزقاق 2", "الزقاق 3", "الزقاق 4"];
    const locations = ["قرب السوق", "قرب المسجد", "قرب المدرسة", "قرب الحديقة"];

    const randomMother = mothers[Math.floor(Math.random() * mothers.length)];
    const randomBrother = brothers[Math.floor(Math.random() * brothers.length)];
    const randomSister = sisters[Math.floor(Math.random() * sisters.length)];
    const randomPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
    const randomDistrict = districts[Math.floor(Math.random() * districts.length)];
    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];

    return `
        <p><strong>الاسم الثلاثي:</strong> ${name}</p>
        <p><strong>اسم الأم:</strong> ${randomMother}</p>
        <p><strong>اسماء الإخوان:</strong> ${randomBrother}, ${randomSister}</p>
        <p><strong>رقم هاتف العائلة:</strong> ${randomPhone}</p>
        <p><strong>المحلة:</strong> ${randomDistrict}</p>
        <p><strong>الزقاق:</strong> ${randomStreet}</p>
        <p><strong>الموقع:</strong> ${randomLocation}</p>
    `;
};

// التعامل مع زر البحث
const searchBtn = document.getElementById('searchBtn');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', () => {
    const name = document.getElementById('fullName').value.trim();
    const age = document.getElementById('age').value.trim();
    const province = document.getElementById('province').value;

    if (name && age && province) {
        // توليد معلومات عشوائية حتى إذا كان الاسم غير موجود
        const randomData = randomDataGenerator(name);
        resultDiv.innerHTML = randomData;
    } else {
        resultDiv.innerHTML = "<p class='text-danger'>يرجى ملء جميع الحقول!</p>";
    }
});
