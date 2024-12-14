function get_time_number() {
  const now = new Date(); // 创建日期对象
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
  const formattedTime_s = now.toLocaleString('zh-CN', options_s); // 格式化为中文
  const formattedTime_b = now.toLocaleString('zh-CN', options_b); // 格式化为中文
  document.getElementById('time_number_s').innerText = formattedTime_s; // 显示时间
  document.getElementById(
    'time_number_b'
  ).innerHTML = `${formattedTime_b} &nbsp;&nbsp;&nbsp;&nbsp; 星期 ${weekDay}`; // 显示时间
}

get_time_number(); // 调用函数获取并显示当前时间
setInterval(get_time_number, 1000); // 每隔一秒调用一次函数获取并显示当前时间
