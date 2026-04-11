document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('max-h-0');
      menu.classList.toggle('opacity-0');
      menu.classList.toggle('max-h-[500px]');
      menu.classList.toggle('opacity-100');
    });
  }

  // Services mobile dropdown toggle
  const servicesBtn = document.getElementById('mobile-services-btn');
  const servicesMenu = document.getElementById('mobile-services-menu');
  const servicesIcon = document.getElementById('mobile-services-icon');
  if (servicesBtn && servicesMenu) {
    servicesBtn.addEventListener('click', () => {
      servicesMenu.classList.toggle('max-h-0');
      servicesMenu.classList.toggle('opacity-0');
      servicesMenu.classList.toggle('max-h-[400px]');
      servicesMenu.classList.toggle('opacity-100');
      if (servicesIcon) servicesIcon.classList.toggle('rotate-180');
    });
  }
});
