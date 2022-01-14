(() => {
  const tiles = document.querySelectorAll('li.tile');
  const possibleMoves = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4, 6],
    4: [1, 3, 5, 7],
    5: [2, 4, 8],
    6: [3, 7],
    7: [4, 6, 8],
    8: [5, 7]
  };

  let state = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, null]
  ];

  const init = () => {
    const button = document.createElement('button');
    button.innerHTML = 'Shuffle';
    button.addEventListener('click', () => {
      shuffleArray();
      render();
    });
    document.getElementsByTagName('figure')[0].appendChild(button);

    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i];

      setTimeout(() => tile.classList.add('animate'), 100);
      tile.addEventListener('click', handleClick(i));
    }
  }

  const getPosition = index => {
    for (let i = 0; i < state.length; i++) {
      const row = state[i];

      if (row.indexOf(index) > -1) return (i * 3) + row.indexOf(index);
    }

    return null;
  }

  const getStyleForPosition = position => {
    const col = position % 3;
    const row = Math.floor(position / 3);

    return `left: ${col * 100}px; top: ${row * 100}px;`;
  }

  const moveTile = (from, to) => {
    const fromCol = from % 3;
    const fromRow = Math.floor(from / 3);
    const toCol = to % 3;
    const toRow = Math.floor(to / 3);

    const tempState = [
      [...state[0]],
      [...state[1]],
      [...state[2]],
    ];
    const prevTile = tempState[fromRow][fromCol];
    tempState[fromRow][fromCol] = null;
    tempState[toRow][toCol] = prevTile;

    state = tempState;

    checkForWin();
  }

  const checkForWin = () => {
    if (state[0][0] === 0
      && state[0][1] === 1
      && state[0][2] === 2
      && state[1][0] === 3
      && state[1][1] === 4
      && state[1][2] === 5
      && state[2][0] === 6
      && state[2][1] === 7
    ) {
      document.getElementsByTagName('figcaption')[0].innerHTML = 'A Puzzle - You Win!';
    }
  }

  const handleClick = number => () => {
    const position = getPosition(number);
    const moves = possibleMoves[position];
    const emptyPosition = getPosition(null);

    if (moves.includes(emptyPosition)) {
      moveTile(position, emptyPosition);
      render();
    }
    else {
      // Sorry can't move
    }
  }

  const shuffleArray = () => {
    let shuffled = [0, 1, 2, 3, 4, 5, 6, 7, null]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    state = [
      shuffled.slice(0, 3),
      shuffled.slice(3, 6),
      shuffled.slice(6, 9),
    ];
  }

  const render = () => {
    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i];

      tile.style.cssText = getStyleForPosition(getPosition(i));
    }
  }

  init();
  render();
})();
