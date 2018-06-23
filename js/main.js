window.addEventListener('load', () => {
  const figures = Array.from(document.getElementsByTagName('figure'));
  figures.forEach(figure => {
    const link = figure.getElementsByTagName('a').item(0);
    const address = link.getAttribute('href');
    figure.addEventListener('click', e => {
      location.href = address;
    });
  })
});