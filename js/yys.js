document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-container');
    let currentIndex = 0;
    const images = document.querySelectorAll('.slider-container img');
    const totalImages = images.length;

    // 初始化容器宽度
    slider.style.width = `${totalImages * 100}%`;

    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        slider.style.transform = `translateX(-${currentIndex * (100 / totalImages)}%)`;
    }, 3000); // 3秒切换一次
});