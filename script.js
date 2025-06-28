document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-theme');

  toggleBtn?.addEventListener('click', () => {
    // Toggle dark mode on body
    document.body.classList.toggle('dark');

    // Toggle dark styles on common elements
    document.querySelectorAll('.box').forEach(b => b.classList.toggle('dark'));
    document.querySelector('nav')?.classList.toggle('dark');
    document.querySelector('footer')?.classList.toggle('dark');
    document.querySelectorAll('.btn').forEach(btn => btn.classList.toggle('dark'));
    document.querySelectorAll('.navbar a').forEach(a => a.classList.toggle('dark'));
  });
});
