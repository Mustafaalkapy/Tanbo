function generateFakeInfo() {
    const fullname = document.getElementById('fullname').value;
    const age = document.getElementById('age').value;
    const province = document.getElementById('province').value;

    if (fullname === '' || age === '') {
        alert('يرجى إدخال الاسم الثلاثي والعمر.');
        return;
    }

    // معلومات عشوائية
    const fakeMotherNames = ["فاطمة", "خديجة", "زينب", "عائشة", "مريم"];
    const fakeSiblings = ["علي", "حسين", "عباس", "زينب", "أم كلثوم"];
    const fakePhones = ["07712345678", "07898765432", "07543210987"];
    
    // مناطق المحافظات
    const provinceAreas = {
        "بغداد": ["الحارثية", "المنصور", "الشعلة", "الكرادة", "الزعفرانية"],
        "البصرة": ["الزبير", "القرنة", "أم قصر", "شط العرب", "أبو الخصيب"],
        "نينوى": ["الموصل", "تلعفر", "البعاج", "الحمدانية", "سنجار"],
        "الأنبار": ["الرمادي", "الفلوجة", "القائم", "حديثة", "هيت"],
        "كربلاء": ["المركز", "الهندية", "الحر", "عين التمر", "الحسينية"],
        "النجف": ["الكوفة", "المشخاب", "المناذرة", "العباسية", "الحرية"],
        "ذي قار": ["الناصرية", "سوق الشيوخ", "الشطرة", "الرفاعي", "الغراف"],
        "القادسية": ["الديوانية", "عفك", "الشامية", "الحمزة", "السنية"],
        "المثنى": ["السماوة", "الرميثة", "الخضر", "الوركاء", "السوير"],
        "ميسان": ["العمارة", "المجر", "علي الغربي", "الكحلاء", "الميمونة"],
        "واسط": ["الكوت", "النعمانية", "الحي", "الصويرة", "الزبيدية"],
        "بابل": ["الحلة", "المسيب", "المحاويل", "الإسكندرية", "القاسم"],
        "ديالى": ["بعقوبة", "المقدادية", "الخالص", "بلدروز", "المنصورية"],
        "صلاح الدين": ["تكريت", "سامراء", "الشرقاط", "الدور", "الضلوعية"],
        "كركوك": ["كركوك", "الدبس", "الحويجة", "الرياض", "التون كوبري"],
        "أربيل": ["أربيل", "شقلاوة", "مخمور", "كويسنجق", "حرير"],
        "دهوك": ["دهوك", "زاخو", "العمادية", "سيميل", "عقرة"],
        "السليمانية": ["السليمانية", "جمجمال", "رانية", "كلار", "دربندخان"],
        "حلبجة": ["حلبجة", "خورمال", "بيارة", "سيروان", "شاربزار"]
    };

    // مناطق المحافظة المختارة
    const neighborhoods = provinceAreas[province] || ["منطقة عشوائية"];

    // توليد بيانات عشوائية
    const motherName = fakeMotherNames[Math.floor(Math.random() * fakeMotherNames.length)];
    const siblingNames = fakeSiblings[Math.floor(Math.random() * fakeSiblings.length)];
    const phoneNumber = fakePhones[Math.floor(Math.random() * fakePhones.length)];
    const neighborhood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
    const street = "شارع عشوائي";
    const workplace = "مكان عمل عشوائي";
    const job = "وظيفة عشوائية";

    // عرض النتائج
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>الاسم الثلاثي: ${fullname}</p>
        <p>اسم الأم: ${motherName}</p>
        <p>اسماء الإخوة والأخوات: ${siblingNames}</p>
        <p>رقم هاتف العائلة: ${phoneNumber}</p>
        <p>المحلة: ${neighborhood}</p>
        <p>الزقاق: ${street}</p>
        <p>المكان بالتحديد: ${province}</p>
        <p>مكان العمل: ${workplace}</p>
        <p>الوظيفة: ${job}</p>
    `;
}
