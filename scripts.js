document.getElementById("photoshopButton").addEventListener("click", function() {
    const Color1 = `rgb(49, 168, 255)`;
    const Color2 = `rgb(0, 30, 54)`;
    document.body.style.backgroundColor = Color1;
    document.getElementById("leftRectangle").style.backgroundColor = Color2;
    var description = "Adobe Photoshop — это мощное программное обеспечение для редактирования изображений, графического дизайна и цифровой живописи. Оно предоставляет широкий набор инструментов для работы с растровыми изображениями, включая возможности для ретуширования, создания сложных композиции, цветокоррекции, а также работы с текстом и графикой. Photoshop используется профессионалами в таких областях, как фотография, дизайн, веб-разработка и анимация, и является стандартом в индустрии благодаря своей гибкости и множеству функций для детализированной работы с изображениями.";
    var icon = "photos/photoshop.png";
    var img = "photos/ps1.png"; 
    showFullScreenSquare(icon ,description, Color1, Color2, img);
});

document.getElementById("illustratorButton").addEventListener("click", function() {
    const Color1 = `rgb(255, 154, 0)`;
    const Color2 = `rgb(51, 0, 0)`;
    document.body.style.backgroundColor = Color1;
    document.getElementById("leftRectangle").style.backgroundColor = Color2;
    var description = "Adobe Illustrator — это профессиональный графический редактор, используемый для создания и редактирования векторной графики. Он предлагает мощные инструменты для рисования, проектирования логотипов, иллюстраций, типографики и других визуальных материалов. Благодаря высокому качеству масштабирования и точности, Illustrator широко используется в дизайне, печати, анимации и веб-дизайне.";
    var icon = "photos/illustrator.png";
    var img = "photos/il1.jpg";
    showFullScreenSquare(icon ,description, Color1, Color2, img);
});

document.getElementById("afterEffectsButton").addEventListener("click", function() {
    const Color1 = `rgb(153, 153, 255)`;
    const Color2 = `rgb(0, 0, 91)`;
    document.body.style.backgroundColor = Color1;
    document.getElementById("leftRectangle").style.backgroundColor = Color2;
    var description = "Adobe After Effects — это программа для создания и редактирования визуальных эффектов и анимации. Она используется для создания динамичных движущихся графиков, композитинга, цветокоррекции и визуальных эффектов для видео. After Effects позволяет создавать сложные анимации, интегрировать 3D-элементы и работать с эффектами, что делает его незаменимым инструментом для профессионалов в области видео и киноиндустрии.";
    var icon = "photos/Ae.png";
    var img = "photos/ae1.png";
    showFullScreenSquare(icon ,description, Color1, Color2, img);
});

function showFullScreenSquare(icon, description, c1, c2, img) {
    const centerText = document.getElementById("centerText");
    centerText.style.opacity = 0; // Устанавливаем прозрачность текста на 0
    const fullScreenSquare = document.getElementById("fullScreenSquare");
    fullScreenSquare.style.display = "block"; // Показать квадрат
    fullScreenSquare.style.opacity = 1; // Сделать его видимым
    var button = document.getElementById("instalButton");
    button.style.color = c1;
    button.style.backgroundColor = c2;
    document.getElementById("rightRectangle").src = img;
    document.getElementsByClassName("textInsideSquare")[0].textContent = description;
    document.getElementsByClassName("imageInsideSquare")[0].src = icon;

    setTimeout(function() {
        // Добавляем класс 'visible' ко всем элементам
        document.getElementById('rightRectangle').classList.add('visible');
        document.querySelector('.imageInsideSquare').classList.add('visible');
        document.getElementById('instalButton').classList.add('visible');
        document.querySelector('.textInsideSquare').classList.add('visible')
    }, 1); // Задержка 2 секунды
}