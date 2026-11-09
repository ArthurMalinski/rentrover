// Pesquisa do cabeçalho (compartilhada por todas as páginas)
function searchCars() {
  const input = document.getElementById('search').value.toLowerCase();
  const destinos = {
    corvette: 'Corvette.html',
    ferrari: 'Ferrari F40.html',
    f40: 'Ferrari F40.html',
    mustang: 'Mustang Dark Horse.html',
    porsche: 'Porsche GT3 rs.html',
    gt3: 'Porsche GT3 rs.html',
    camiseta: 'Merch (Loja).html',
    moletom: 'Merch (Loja).html',
    boné: 'Merch (Loja).html',
    bone: 'Merch (Loja).html'
  };
  for (let key in destinos) {
    if (input.includes(key)) return window.location.href = destinos[key];
  }
  alert('Nenhum resultado encontrado.');
}
