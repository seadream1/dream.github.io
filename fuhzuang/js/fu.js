document.addEventListener('DOMContentLoaded', function() {
    // 获取所有分支项
    const branchItems = document.querySelectorAll('.branch-item');
    // 获取所有内容区域
    const contentSections = document.querySelectorAll('.content-section');
    // 获取返回按钮
    const backButton = document.querySelector('.back-button');
    
    // 为每个分支项添加点击事件
    branchItems.forEach(item => {
        item.addEventListener('click', function() {
            // 获取目标内容区域的ID
            const targetId = this.getAttribute('data-target');
            
            // 隐藏所有内容区域
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // 显示选中的内容区域
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // 返回按钮点击事件 - 显示第一个内容区域(阿木支系)
    backButton.addEventListener('click', function() {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById('amu-content').classList.add('active');
    });
});