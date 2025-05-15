// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 获取返回按钮
    const backButton = document.getElementById('backButton');
    
    // 为返回按钮添加点击事件
    backButton.addEventListener('click', function() {
        // 这里可以添加返回逻辑，比如：
        // window.history.back(); // 返回上一页
        // 或者跳转到特定页面：
        // window.location.href = 'index.html';
        
        // 示例：简单的控制台输出
        console.log('返回按钮被点击');
        alert('返回功能待实现');
    });
    
    // 可以在这里添加更多的交互功能
    // 例如：图片点击放大效果
    const festivalImage = document.querySelector('.festival-image img');
    if(festivalImage) {
        festivalImage.addEventListener('click', function() {
            this.classList.toggle('enlarged');
        });
    }
    
    // 页面加载动画
    document.body.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(function() {
        if(opacity < 1) {
            opacity += 0.05;
            document.body.style.opacity = opacity;
        } else {
            clearInterval(fadeIn);
        }
    }, 30);
});