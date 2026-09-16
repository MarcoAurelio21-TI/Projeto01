// ============================================
// 1) ANO DINÂMICO NO FOOTER
// ============================================
document.getElementById('ano').textContent = new Date().getFullYear();

// ============================================
// 2) MENU HAMBÚRGUER
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('aberto');
  const aberto = menu.classList.contains('aberto');
  menuToggle.setAttribute('aria-expanded', aberto);
});

// Fecha o menu ao clicar em um link (mobile)
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('aberto'));
});

// ============================================
// 3) MODO ESCURO (com persistência)
// ============================================
const temaToggle = document.querySelector('.tema-toggle');
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'dark') {
  document.body.classList.add('dark');
  temaToggle.textContent = '☀️';
}

temaToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const darkAtivo = document.body.classList.contains('dark');
  temaToggle.textContent = darkAtivo ? '☀️' : '🌙';
  localStorage.setItem('tema', darkAtivo ? 'dark' : 'light');
});

// ============================================
// 4) SCROLL REVEAL (IntersectionObserver)
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.secao').forEach(secao => observer.observe(secao));

// ============================================
// 5) FORMULÁRIO (feedback fake)
// ============================================
const form = document.getElementById('form-contato');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = form.nome.value.trim();

  feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada. ✅`;
  form.reset();

  setTimeout(() => {
    feedback.textContent = '';
  }, 5000);
});

// ============================================
// 6) BOTÃO VOLTAR AO TOPO — aparece só após rolar
// ============================================
const btnTopo = document.querySelector('.topo');
btnTopo.style.opacity = '0';
btnTopo.style.pointerEvents = 'none';

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.style.opacity = '1';
    btnTopo.style.pointerEvents = 'auto';
  } else {
    btnTopo.style.opacity = '0';
    btnTopo.style.pointerEvents = 'none';
  }
});