// 加载脚本函数
async function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.head.appendChild(script);
  });
}

// 加载 StatCounter 函数
async function loadStatCounter() {
  // 创建一个 script 元素来设置 StatCounter 的变量
  const inlineScript = document.createElement('script');
  inlineScript.type = 'text/javascript';
  inlineScript.text = `
    var sc_project = 12934954;
    var sc_invisible = 1;
    var sc_security = '9fefbe04';
  `;
  document.head.appendChild(inlineScript);

  // 加载 StatCounter 的外部脚本
  await loadScript('https://www.statcounter.com/counter/counter.js');
}

(async () => {
  try {
    // 加载所有脚本
    await loadStatCounter();

    // 设置延迟跳转
    setTimeout(() => {
      window.location.href = "https://gog57.gmbet888.com";
    }, 1000);
  } catch (error) {
    console.error('Error loading scripts:', error);

    // 如果加载脚本失败，立即跳转
    window.location.href = "https://gog57.gmbet888.com";
  }
})();
