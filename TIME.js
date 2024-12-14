function showContent(page) {
  const contentDivs = document.querySelectorAll('.content_box'); // 获取所有的内容区域
  const links = document.querySelectorAll('.sidebar a');

  // 隐藏所有内容区域
  contentDivs.forEach((div) => {
    div.style.display = 'none'; // 隐藏所有内容
  });

  // 移除所有链接的高亮
  links.forEach((link) => {
    link.classList.remove('active'); // 移除高亮
  });

  // 根据选择的页面显示相应内容
  switch (page) {
    case 'home':
      contentDivs[0].style.display = 'block'; // 显示首页内容
      links[0].classList.add('active'); // 高亮当前链接
      break;
    case 'about':
      contentDivs[1].style.display = 'block'; // 显示关于内容
      links[1].classList.add('active');
      break;
    case 'services':
      contentDivs[2].style.display = 'block'; // 显示服务内容
      links[2].classList.add('active');
      break;
    case 'contact':
      contentDivs[3].style.display = 'block'; // 显示联系内容
      links[3].classList.add('active');
      const iframe = document.querySelector('iframe'); // 获取 iframe 元素
      iframe.src = iframe.src; // 刷新 iframe
      break;
    default:
      contentDivs[0].style.display = 'block'; // 默认显示首页内容
  }
}
// 页面加载时默认显示首页内容
document.addEventListener('DOMContentLoaded', () => {
  showContent('home'); // 默认显示首页
});

function get_time_number() {
  const now = new Date();
  const options_s = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  const options_b = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  const weekDay = weekDays[now.getDay()];
  const formattedTime_s = now.toLocaleString('zh-CN', options_s);
  const formattedTime_b = now.toLocaleString('zh-CN', options_b);
  document.getElementById('time_number_s').innerText = formattedTime_s;
  document.getElementById(
    'time_number_b'
  ).innerHTML = `${formattedTime_b} &nbsp;&nbsp;&nbsp;&nbsp; 星期 ${weekDay}`;
}

function initTime() {
  get_time_number(); // 获取时间
  setInterval(get_time_number, 1000); // 每秒更新
}

// 鼠标效果
const timeContainer = document.getElementById('TIME');

if (timeContainer) {
  // 确保时间容器存在
  let sparkInterval;
  let isMouseDown = false;
  let mouseX, mouseY;

  // 生成随机颜色的函数
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  // 创建火花的函数
  function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.backgroundColor = getRandomColor();
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    timeContainer.appendChild(spark);

    // 动画结束后移除火花
    spark.addEventListener('animationend', function () {
      spark.remove();
    });
  }

  // 鼠标按下事件
  timeContainer.addEventListener('mousedown', function (event) {
    isMouseDown = true;
    mouseX = event.clientX - timeContainer.offsetLeft;
    mouseY = event.clientY - timeContainer.offsetTop;
    createSpark(mouseX, mouseY);

    // 每隔 0.2 秒创建一次火 spark
    sparkInterval = setInterval(() => {
      createSpark(mouseX, mouseY);
    }, 200);
  });

  // 鼠标移动事件
  timeContainer.addEventListener('mousemove', function (event) {
    if (isMouseDown) {
      mouseX = event.clientX - timeContainer.offsetLeft;
      mouseY = event.clientY - timeContainer.offsetTop;
    }
  });

  // 鼠标抬起事件
  timeContainer.addEventListener('mouseup', function () {
    isMouseDown = false;
    clearInterval(sparkInterval);
  });

  // 鼠标离开事件
  timeContainer.addEventListener('mouseleave', function () {
    isMouseDown = false;
    clearInterval(sparkInterval);
  });
}

// 初始化时间显示
initTime();
