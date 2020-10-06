const navMenu = document.querySelectorAll('.navBar a[href^="."]');
navMenu.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})
function getScrollTopByHref(element) {
  const refClass = element.getAttribute('href'); // Referencia é o 'href'
  return document.querySelector(refClass).offsetTop;
}
function scrollToIdOnClick(event) {
  event.preventDefault(); // Executa o scroll apenas da forma padrão
  const to = getScrollTopByHref(event.target) - 150;
  scrollToPosition(to);
}
function scrollToPosition(to) {
  window.scroll({ // Deixa o Scroll deslizar suavemente
    top: to,
    behavior: "smooth",
  });
  smoothScrollTo(0, to);
}