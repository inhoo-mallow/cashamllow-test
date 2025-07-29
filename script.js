function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
  
  if (pageId === 'home') {
    history.pushState(null, '', '/');
  }
}

function handleRoute() {
  const path = window.location.pathname;
  
  if (path === '/' || path === '/index.html') {
    showPage('home');
  } else {
    showPage('404');
  }
}

window.addEventListener('popstate', handleRoute);
window.addEventListener('load', handleRoute);

window.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('/')) {
      e.preventDefault();
      const path = e.target.getAttribute('href');
      history.pushState(null, '', path);
      handleRoute();
    }
  });
});