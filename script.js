// script.js
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.body.classList.toggle('dark', currentTheme === 'dark');
  document.body.classList.toggle('light', currentTheme === 'light');

  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('dark', currentTheme === 'dark');
    document.body.classList.toggle('light', currentTheme === 'light');
    localStorage.setItem('theme', currentTheme);
  });
});
