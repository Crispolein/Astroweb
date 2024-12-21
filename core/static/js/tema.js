document.addEventListener('DOMContentLoaded', () => {
  const darkModeColors = ['rgba(212, 121, 0)', 'rgba(133, 110, 80)', 'rgba(154, 113, 59)'];
  const lightModeColors = ['#0692D3', '#065FD3', 'rgba(255, 206, 86)'];
  const lightMode2Colors = ['#065FD3D3', '#0692D3', 'rgba(255, 206, 86)'];

  const darkModePaginationColor = '#FF9200';
  const lightModePaginationColor = '#0692D3';
  const lightMode2PaginationColor = '#065FD3';

  const darkModeBtn = document.getElementById('dark-mode-btn');
  const lightModeBtn = document.getElementById('light-mode-btn');
  const lightMode2Btn = document.getElementById('light-mode2-btn');

  darkModeBtn.addEventListener('click', () => {
    setTheme('dark-mode', darkModeColors, darkModePaginationColor);
  });

  lightModeBtn.addEventListener('click', () => {
    setTheme('light-mode', lightModeColors, lightModePaginationColor);
  });

  lightMode2Btn.addEventListener('click', () => {
    setTheme('light-mode2', lightMode2Colors, lightMode2PaginationColor);
  });

  function setTheme(theme, colors, paginationColor) {
    console.log(`Setting theme to: ${theme}`);
    document.documentElement.classList.remove('dark-mode', 'light-mode', 'light-mode2');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);

    document.getElementById('dark-theme').disabled = theme !== 'dark-mode';
    document.getElementById('light-theme').disabled = theme !== 'light-mode';

    updateChartColors(colors);
    updatePaginationColor(paginationColor);
  }

  function updateChartColors(colors) {
    const charts = [chartPieNoticias, chartPieArticulos, chartPieGalerias];
    charts.forEach(chart => {
      chart.data.datasets[0].backgroundColor = colors;
      chart.update();
    });
  }

  function updatePaginationColor(color) {
    const paginationLinks = document.querySelectorAll('.pagination-link');
    paginationLinks.forEach(link => {
      link.style.color = color;
    });
  }
});