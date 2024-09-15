// التنبؤات بناءً على اسم وعمر المستخدم
const predictions = [
    "ستكون لديك مفاجأة جميلة قريباً!",
    "النجاح ينتظرك في المستقبل القريب.",
    "قد تواجه تحديًا كبيرًا الأسبوع القادم.",
    "احذر من اتخاذ قرارات متهورة قريبًا.",
    "ستحصل على فرصة رائعة اليوم.",
    "الصبر هو مفتاح النجاح في المرحلة القادمة."
];

// تحديد العناصر
const userNameInput = document.getElementById('userName');
const userAgeInput = document.getElementById('userAge');
const submitBtn = document.getElementById('submitBtn');
const predictionText = document.getElementById('prediction');
const questionText = document.getElementById('question');

// وظيفة تقديم التنبؤ
submitBtn.addEventListener('click', function() {
    const userName = userNameInput.value.trim();
    const userAge = userAgeInput.value.trim();
    
    if (userName && userAge) {
        const randomIndex = Math.floor(Math.random() * predictions.length);
        const prediction = predictions[randomIndex];

        // التنبؤ الشخصي بناءً على اسم المستخدم
        predictionText.textContent = `${userName}، ${prediction}`;
        predictionText.classList.add("animate__animated", "animate__fadeIn");
        questionText.textContent = "شكراً على الإجابة! هذا هو التنبؤ الخاص بك:";
    } else {
        predictionText.textContent = "يرجى إدخال جميع البيانات.";
        predictionText.classList.add("animate__animated", "animate__shakeX");
    }
});
