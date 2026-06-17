const posts = [
  {
    title: '从 0 到 1 搭建一个个人博客首页',
    tag: '前端',
    date: '2026-06-17',
    summary: '用最少的依赖做出一个看起来足够精致、并且适合 GitHub Pages 的个人主页。',
  },
  {
    title: '如何保持持续输出：把灵感变成可发布内容',
    tag: '写作',
    date: '2026-06-14',
    summary: '把每天零碎的想法收集起来，慢慢整理成文章，比等“灵感爆发”更可靠。',
  },
  {
    title: '我的效率系统：简单、稳定、能坚持',
    tag: '生活',
    date: '2026-06-10',
    summary: '真正有用的效率工具，不是最复杂的那一个，而是你愿意长期使用的那一个。',
  },
];

const postGrid = document.getElementById('postGrid');
const template = document.getElementById('postTemplate');

posts.forEach((post) => {
  const node = template.content.cloneNode(true);
  node.querySelector('.tag').textContent = post.tag;
  node.querySelector('time').textContent = post.date;
  node.querySelector('h3').textContent = post.title;
  node.querySelector('p').textContent = post.summary;
  postGrid.appendChild(node);
});

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
