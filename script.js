const posts = [
  {
    title: '如何把一个想法做成可持续更新的博客',
    tag: 'Productivity',
    date: '2026-06-17',
    excerpt: '从内容结构、视觉节奏到发布流程，建立一个你愿意长期维护的个人站点。',
  },
  {
    title: '我喜欢的前端设计关键词：克制、留白、层次',
    tag: 'Design',
    date: '2026-06-12',
    excerpt: '一个好看的页面不需要堆满元素，关键在于节奏感与信息密度的平衡。',
  },
  {
    title: 'GitHub Pages 个人博客部署备忘录',
    tag: 'Deploy',
    date: '2026-06-08',
    excerpt: '绑定自定义域名、开启 Pages、设置分支之后，让网站稳定在线。',
  },
];

const grid = document.getElementById('postGrid');
const template = document.getElementById('postTemplate');

posts.forEach((post) => {
  const node = template.content.cloneNode(true);
  node.querySelector('h3').textContent = post.title;
  node.querySelector('.tag').textContent = post.tag;
  node.querySelector('time').textContent = post.date;
  node.querySelector('p').textContent = post.excerpt;
  grid.appendChild(node);
});

const savedTheme = localStorage.getItem('alunixa-theme');
if (savedTheme === 'light') document.body.classList.add('light');

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('alunixa-theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
