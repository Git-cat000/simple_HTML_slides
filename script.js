// ====================== 获取DOM元素 ======================
// 所有幻灯片页面
const slides = document.querySelectorAll('.slide');
// 所有页码元素
const pageNums = document.querySelectorAll('.page-num');
// 上一页按钮
const prevBtn = document.querySelector('.prev-btn');
// 下一页按钮
const nextBtn = document.querySelector('.next-btn');
// 进度条填充元素
const progressFill = document.querySelector('.progress-fill');

// ====================== 全局变量 ======================
// 当前页码（从0开始）
let currentIndex = 0;
// 总页数
const totalSlides = slides.length;

// ====================== 核心函数：更新页面状态 ======================
function updateSlide() {
  // 遍历所有页面，仅激活当前页
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentIndex);
  });
  // 更新页码显示：当前页/总页数
  pageNums.forEach(el => {
    el.textContent = `${currentIndex + 1}/${totalSlides}`;
  });
  // 更新顶部进度条
  progressFill.style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;
}

// ====================== 目录跳转函数 ======================
// 调用方式：jumpTo(目标页码)  页码从0开始
function jumpTo(idx) {
  currentIndex = idx;
  updateSlide();
}

// ====================== 按钮翻页事件 ======================
// 上一页
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});
// 下一页
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
});

// ====================== 键盘翻页事件 ======================
// 左右方向键控制翻页
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { 
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateSlide(); 
  }
  if (e.key === 'ArrowLeft') { 
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateSlide(); 
  }
});

// ====================== 初始化 ======================
updateSlide();
