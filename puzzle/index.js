(() => {
  const tiles = document.querySelectorAll('li.tile');

  let state = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, null]
  ];

  const getPosition = index => {
    for (let i = 0; i < state.length; i++) {
      const row = state[i];

      if (row.indexOf(index) > -1) return (i * 3) + row.indexOf(index);
    }

    return null;
  }

  const getStyleForPosition = position => {
    const row = position % 3;
    const col = Math.floor(position / 3);

    return `left: ${row * 100}px; top: ${col * 100}px;`;
  }

  const handleClick = index => (event) => {
    const style = getStyleForPosition(getPosition(index));

    console.log('style', style);
  }

  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];

    tile.addEventListener('click', handleClick(i));
    tile.style.cssText = getStyleForPosition(getPosition(i));
  }
})();

