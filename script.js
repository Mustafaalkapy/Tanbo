// مجموعة التنبؤات
const predictions = [
    "ستكون لديك مفاجأة جميلة قريباً!",
    "النجاح ينتظرك في المستقبل القريب.",
    "قد تواجه تحديًا كبيرًا الأسبوع القادم.",
    "احذر من اتخاذ قرارات متهورة قريبًا.",
    "ستحصل على فرصة رائعة اليوم.",
    "الصبر هو مفتاح النجاح في المرحلة القادمة.",
    "أنت قريب من تحقيق حلمك!",
    "فرصة غير متوقعة ستظهر في طريقك.",
    "ركز على تحسين نفسك في الأيام القادمة.",
    "سيحدث تغيير إيجابي في حياتك قريباً."
];

// مرجع للعناصر في الصفحة
const predictionText = document.getElementById("prediction");
const predictBtn = document.getElementById("predict-btn");

// وظيفة توليد التنبؤ
function generatePrediction() {
    const randomIndex = Math.floor(Math.random() * predictions.length);
    predictionText.textContent = predictions[randomIndex];
}

// حدث الضغط على الزر
predictBtn.addEventListener("click", generatePrediction);
