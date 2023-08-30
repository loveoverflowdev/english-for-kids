/* eslint-disable no-loop-func */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */


const colors = ['darkblue', 'brown', 'lightgreen', 'olive', 'green', 'pink', 'blue', 'brown'];
const topics = ['Zoo', 'Pets', 'Mood', 'Clothes', 'Food', 'Action', 'Colors', 'Body'];
// const word = [];
// const translation = [];

const word = [
  ['bird', 'fish', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin'],
  ['cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep'],
  ['sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh'],
  ['skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe'],
  ['orange', 'bread', 'cheese', 'watermelon', 'cake', 'juice', 'apple', 'candy'],
  ['open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim'],
  ['red', 'white', 'green', 'yellow', 'black', 'purple', 'blue', 'gray'],
  ['nose', 'lips', 'hair', 'cheek', 'tongue', 'eye', 'hand', 'foot'],
];
const translation = [
  ['chim', 'cá', 'ếch', 'hươu cao cổ', 'sư tử', 'chuột', 'rùa', 'cá heo'],
  ['mèo', 'gà con', 'gà', 'chó', 'ngựa', 'lợn', 'thỏ', 'cừu'],
  ['buồn', 'tức giận', 'vui vẻ', 'mệt mỏi', 'ngạc nhiên', 'sợ hãi', 'cười mỉm', 'cười'],
  ['váy', 'quần', 'áo blouse', 'váy', 'giày boot', 'áo sơ mi', 'áo khoác', 'giày'],
  ['quả cam', 'bánh mì', 'phô mai', 'dưa hấu', 'bánh ngọt', 'nước trái cây', 'quả táo', 'kẹo'],
  ['mở', 'chơi', 'chỉ', 'điều khiển', 'chạy', 'hát', 'nhảy', 'bơi'],
  ['đỏ', 'trắng', 'xanh lá cây', 'vàng', 'đen', 'tím', 'xanh da trời', 'xám'],
  ['mũi', 'môi', 'tóc', 'má', 'lưỡi', 'mắt', 'tay', 'chân'],
];
// var colors = [];
// var topics = [];
// var word = [];
// var translation = [];

(async() => {
  

  const baseUrl = 'http://localhost:3000';
  await fetch(`${baseUrl}/topics`)
    .then(response => response.json())
    .then(data => {
      // Assign topics to a variable or perform other actions
      topics = data.map(item => item.name);
      console.log('Topics:', topics);
    })
    .catch(error => console.error('Error fetching topics:', error));

  // Fetch words from the API
  await fetch(`${baseUrl}/words`)
    .then(response => response.json())
    .then(data => {
      // Assign words to a variable or perform other actions
      word = data.map(item => item.origin);
      translation = data.map(item => item.translation);
      console.log('Words:', word);
      console.log('Translations:', translation);
    })
    .catch(error => console.error('Error fetching words:', error));

  // Fetch colors from the API
  await fetch(`${baseUrl}/colors`)
    .then(response => response.json())
    .then(data => {
      // Assign colors to a variable or perform other actions
      colors = data.map(item => item.name);
      console.log('Colors:', colors);
    })
    .catch(error => console.error('Error fetching colors:', error));

  // window.location.reload();
  let diffWords = [];
  let diffWordsTranslations = [];

  let indexOfWord;
  let selectedTopic;
  const entryTitle = document.querySelector('.entry-title');
  const blackboard = document.querySelector('.blackboard');
  const mobileToggle = document.querySelector('.mobileToggle');
  mobileToggle.disabled = true;
  const row = document.querySelector('.row');
  const toggleWrapper = document.querySelector('.toggleWrapper');
  let hasGameStarted;
  const gameBoard = document.querySelector('.gameboard');
  const result = document.querySelector('.result');
  let isDifficultWords = false;

  let correctAnswersCount = 0;
  let mistakesCount = 0;
  let wordViewsCount = 0;

  document.body.style.background = "url('images/bg_looney_blur.jpg')";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';

  // START SCREEN
  const getStartScreen = (x) => {
    if (x === true) {
      const getCardsWithTopics = () => {
        for (let i = 0; i < colors.length; i += 1) {
          const box = document.createElement('div');
          box.classList.add('box', 'border', 'shadow', colors[i]);
          row.appendChild(box);
          const boxImage = document.createElement('div');
          boxImage.classList.add('box-image', 'center');
          box.appendChild(boxImage);
          const boxTitle = document.createElement('div');
          boxTitle.classList.add('box-title', 'center');
          boxTitle.textContent = topics[i];
          box.appendChild(boxTitle);
          const image = document.createElement('img');
          image.src = `images/${topics[i].toLowerCase()}.jpg`;
          image.classList.add('out');
          boxImage.appendChild(image);
          box.addEventListener('click', () => {
            if (!isClassroom) {
              selectedTopic = topics[i];
              indexOfWord = i;
              getClassroomScreen(word, translation);
            }
          });

          // IF PUSH TOGGLE BUTTON
          toggleWrapper.addEventListener('click', () => {
            box.classList.add('warning');
            setTimeout(() => {
              box.classList.remove('warning');
            }, 600);
          });
        }
      };
      getCardsWithTopics();
    } else {
      row.innerHTML = '';
      row.style.display = 'none';
    }
  };

  // BURGER MENU
  const getMenuItems = () => {
    const menu = document.getElementById('menu');
    const menuCheckbox = document.querySelector('.checkbox');
    const menuToggle = document.querySelector('.menuToggle');
    const homeItem = document.createElement('li');
    homeItem.innerHTML = '&#127968;';
    menu.appendChild(homeItem);
    const menuStatsItem = document.createElement('li');
    menuStatsItem.classList.add('item-menu');
    menuStatsItem.textContent = 'Thống kê';
    menu.appendChild(menuStatsItem);
    for (let i = 0; i < topics.length; i += 1) {
      const menuItem = document.createElement('li');
      menuItem.textContent = topics[i];
      menuItem.style.color = `var(--${colors[i]})`;
      menu.appendChild(menuItem);
      menuItem.addEventListener('mouseover', () => {
        menuItem.style.background = `var(--${colors[i]})`;
      });
      menuItem.addEventListener('mouseout', () => {
        menuItem.style.background = 'transparent';
      });

      // CLICK ITEM
      menuItem.addEventListener('click', () => {
        selectedTopic = topics[i];
        indexOfWord = i;
        setTimeout(() => {
          menuCheckbox.checked = false;
          menuToggle.style.position = 'relative';
        }, 120);
        blackboard.textContent = '';
        gameBoard.textContent = '';
        mobileToggle.checked = false;
        isDifficultWords = false;
        changeMode();
        getClassroomScreen(word, translation);
      });
    }

    // CLICK Thống Kê
    menuStatsItem.addEventListener('click', () => {
      showStats();
      setTimeout(() => {
        menuCheckbox.checked = false;
        menuToggle.style.position = 'relative';
      }, 120);
    });

    homeItem.addEventListener('click', () => {
      menuCheckbox.checked = false;
      setTimeout(() => {
        location.reload();
      }, 500);
    });

    window.addEventListener('click', (e) => {
      if (!menuCheckbox.contains(e.target) && !menu.contains(e.target)) {
        menu.style.position = 'fixed';
        menuCheckbox.checked = false;
      }
      menuToggle.style.position = (menuCheckbox.checked) ? 'fixed' : 'relative';
    });
    menuCheckbox.addEventListener('mouseover', () => {
      menuToggle.classList.add('menuToggle_hover');
    });
    menuCheckbox.addEventListener('mouseout', () => {
      menuToggle.classList.remove('menuToggle_hover');
    });
  };

  let isClassroom = false;

  // CLASSROOM
  let getClassroomScreen = (array) => {
    isClassroom = true;
    entryTitle.textContent = (!isDifficultWords) ? selectedTopic : 'Difficult Words';
    mobileToggle.disabled = false;
    getStartScreen(false);
    const getCardsWithWords = () => {
      blackboard.classList.add('row');

      // CREATE FRONT CARD
      for (let i = 0; i < array[indexOfWord].length; i += 1) {
        const flipCard = document.createElement('div');
        flipCard.classList.add('card', 'flip-card');
        blackboard.appendChild(flipCard);
        const flipCardInner = document.createElement('div');
        flipCardInner.classList.add('flip-card-inner');
        flipCard.appendChild(flipCardInner);
        const flipCardFront = document.createElement('div');
        flipCardFront.classList.add('flip-card-front', 'border', 'shadow', colors[i]);
        flipCardInner.appendChild(flipCardFront);
        const flipCardFrontImageContainer = document.createElement('div');
        flipCardFrontImageContainer.classList.add('box-image');
        flipCardFront.appendChild(flipCardFrontImageContainer);
        const flipCardFrontImage = document.createElement('img');
        flipCardFrontImage.src = `images/${array[indexOfWord][i]}.jpg`;
        flipCardFrontImageContainer.appendChild(flipCardFrontImage);
        const flipCardFrontTitle = document.createElement('div');
        flipCardFrontTitle.classList.add('card-title', 'center');
        flipCardFrontTitle.textContent = array[indexOfWord][i];
        flipCardFront.appendChild(flipCardFrontTitle);
        const flipCardFrontButtonContainer = document.createElement('div');
        flipCardFrontButtonContainer.classList.add('card-button', 'center');
        flipCardFront.appendChild(flipCardFrontButtonContainer);
        const flipCardFrontButton = document.createElement('div');
        flipCardFrontButton.classList.add('flip-button');
        flipCardFrontButtonContainer.appendChild(flipCardFrontButton);
        const flipCardFrontButtonImage = document.createElement('img');
        flipCardFrontButtonImage.src = 'svg/rotate.svg';
        flipCardFrontButton.appendChild(flipCardFrontButtonImage);

        // CREATE SOUND
        const audioFromFlipCard = document.createElement('audio');
        audioFromFlipCard.src = `audio/${array[indexOfWord][i]}.mp3`;
        audioFromFlipCard.classList.add('sound');
        flipCardInner.appendChild(audioFromFlipCard);

        // CREATE BACK CARD
        const flipCardBack = document.createElement('div');
        flipCardBack.classList.add('flip-card-back', 'border', 'shadow');
        flipCardInner.appendChild(flipCardBack);
        const flipCardBackImageContainer = document.createElement('div');
        flipCardBackImageContainer.classList.add('box-image');
        flipCardBack.appendChild(flipCardBackImageContainer);
        const flipCardBackImage = document.createElement('img');
        flipCardBackImage.src = `images/${array[indexOfWord][i]}.jpg`;
        flipCardBackImageContainer.appendChild(flipCardBackImage);
        const flipCardBackTitle = document.createElement('div');
        flipCardBackTitle.classList.add('box-title', 'center');
        flipCardBackTitle.textContent = translation[indexOfWord][i];
        flipCardBack.appendChild(flipCardBackTitle);

        // SOUNDING WORD
        flipCardFrontImageContainer.addEventListener('click', () => {
          audioFromFlipCard.play();
          audioFromFlipCard.currentTime = 0;
        });

        // FLIP IN CARD
        flipCardFrontButton.addEventListener('click', () => {
          flipCard.classList.add('flip-card-rotate');
          flipCardFrontButton.style.opacity = '0';
          flipCardBack.style.visibility = 'visible';
          wordViewsCount = localStorage.getItem(`${array[indexOfWord][i]}`);
          wordViewsCount += 1;
          localStorage.setItem(`${array[indexOfWord][i]}`, wordViewsCount);
        });

        // FLIP OUT CARD
        window.addEventListener('mouseover', (e) => {
          if (!flipCard.contains(e.target)) {
            setTimeout(() => {
              flipCard.classList.remove('flip-card-rotate');
              flipCardFrontButton.style.opacity = '1';
            }, 100);
          }
        });
      }
    };
    statsBoard.innerHTML = '';
    getCardsWithWords();
  };

  // GAME
  const getGameScreen = (arr) => {
    let getNewWord;
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('gameboard-container', 'center');
    gameBoard.appendChild(gameBoardContainer);
    const gameButtonContainer = document.createElement('div');
    gameButtonContainer.classList.add('center');
    gameBoard.appendChild(gameButtonContainer);
    const gameButton = document.createElement('button');
    gameButton.classList.add('game-button');
    gameButton.textContent = 'Bắt đầu';
    gameButtonContainer.appendChild(gameButton);

    const array = [];
    let index = 0;
    for (let i = 0; i < arr[indexOfWord].length; i += 1) {
      array.push(index);
      index += 1;
    } // FOR SHUFFLE
    let wordID;
    let unsolvedWordsCount = arr[indexOfWord].length - 1;
    let isSolved;
    let isWin = false;
    let greenStarsCount = 0;
    let grayStarsCount = 0;

    hasGameStarted = false;
    entryTitle.style.display = 'none';
    result.style.display = 'block';
    result.textContent = 'Result: ';

    // SHUFFLE WORDS STACK
    function shuffle(indexArray) {
      indexArray.sort(() => Math.random() - 0.5);
    }

    // PUSH START GAME BUTTON
    gameButton.addEventListener('click', () => {
      if (!hasGameStarted) {
        gameButton.textContent = 'Nghe lại';
        shuffle(array);
        getNewWord();
      } else {
        getNewWord();
      }
    });

    // CREATE CARDS
    for (let i = 0; i < arr[indexOfWord].length; i += 1) {
      const gameCard = document.createElement('div');
      gameCard.classList.add('card', 'border', 'shadow', colors[i]);
      gameBoardContainer.appendChild(gameCard);
      const gameCardImageContainer = document.createElement('div');
      gameCardImageContainer.classList.add('game-box-image');
      gameCard.appendChild(gameCardImageContainer);
      const gameCardImage = document.createElement('img');
      gameCardImage.src = `images/${arr[indexOfWord][i]}.jpg`;
      gameCardImageContainer.appendChild(gameCardImage);

      // SOUNDING CARDS
      const soundingOfWord = document.createElement('audio');
      soundingOfWord.classList.add('sounding');
      soundingOfWord.src = `audio/${arr[indexOfWord][i]}.mp3`;
      gameBoardContainer.appendChild(soundingOfWord);

      // TAB THE CARD ACTION
      gameCard.addEventListener('click', () => {
        if (!hasGameStarted) {
          gameCard.classList.add('warning');
          setTimeout(() => {
            gameCard.classList.remove('warning');
            window.scrollTo(0, document.body.scrollHeight);
            gameButton.classList.add('warning');
          }, 600);
          setTimeout(() => {
            gameButton.classList.remove('warning');
          }, 1200);
        } else {
          if (i === wordID) {
            isSolved = true;
            unsolvedWordsCount -= 1;
            gameCard.style.filter = 'blur(10px)';
            gameCard.style.opacity = '0.5';
            gameCard.classList.add('disabled');
            const starGreen = document.createElement('span');
            starGreen.classList.add('fa', 'fa-star', 'correct');
            result.appendChild(starGreen);
            if ('localStorage' in window && window.localStorage !== null) {
              correctAnswersCount = localStorage.getItem(`correct-${arr[indexOfWord][i]}`);
              correctAnswersCount += 1;
              localStorage.setItem(`correct-${arr[indexOfWord][i]}`, correctAnswersCount);
            }
          } else {
            isSolved = false;
            gameCard.classList.add('warning');
            grayStarsCount += 1;
            const starGray = document.createElement('span');
            starGray.classList.add('fa', 'fa-star', 'error');
            result.appendChild(starGray);
            setTimeout(() => {
              gameCard.classList.remove('warning');
            }, 600);
            if ('localStorage' in window && window.localStorage !== null) {
              mistakesCount = localStorage.getItem(`fail-${arr[indexOfWord][wordID]}`);
              mistakesCount += 1;
              localStorage.setItem(`fail-${arr[indexOfWord][wordID]}`, mistakesCount);
            }
          }
          if (isSolved) {
            if (greenStarsCount < arr[indexOfWord].length - 1) {
              greenStarsCount += 1;
              setTimeout(getNewWord, 200);
            } else {
              isWin = (grayStarsCount === 0);
              setTimeout(showResult, 1000);
            }
          }

          // CORRECT/ERROR SOUND
          const sound = document.createElement('audio');
          sound.src = (isSolved) ? 'audio/correct.mp3' : 'audio/error.mp3';
          gameBoardContainer.appendChild(sound);
          sound.play();
        }
      });
    }

    //  GET NEW WORD
    getNewWord = () => {
      const audioWordPronunciation = document.querySelectorAll('.sounding');
      if (!hasGameStarted || isSolved) {
        wordID = array[unsolvedWordsCount];
        hasGameStarted = true;
      }
      audioWordPronunciation[wordID].play();
      audioWordPronunciation[wordID].currentTime = 0;
    };

    // RESULT SCREEN
    let showResult = () => {
      gameBoard.innerHTML = '';
      document.body.style.background = (isWin) ? 'url(\'images/bg_looney.jpg\')' : 'url(\'images/sad_rabbit.jpg\') no-repeat center';
      const gameResultImage = document.createElement('img');
      gameResultImage.classList.add('result-image');
      gameResultImage.src = (isWin) ? 'images/win.png' : 'images/lose.png';
      gameBoard.appendChild(gameResultImage);

      const soundOfResult = document.createElement('audio');
      soundOfResult.src = (isWin) ? 'audio/win.mp3' : 'audio/lose.mp3';
      gameBoardContainer.appendChild(soundOfResult);
      setTimeout(() => {
        soundOfResult.play();
      }, 200);
      setTimeout(() => {
        location.reload();
      }, 4000);
    };
  };

  // MODE TOGGLE FUNCTION
  let changeMode = () => {
    const mode = document.querySelector('.mode');
    if (mobileToggle.checked) {
      if (isDifficultWords && diffWords[0].length > 0) {
        getGameScreen(diffWords);
      } else {
        getGameScreen(word);
      }
      gameBoard.style.display = 'flex';
      blackboard.style.display = 'none';
      mode.textContent = 'Game';
      result.style.display = 'block';
      entryTitle.style.display = 'none';
      // getReady();
    } else {
      gameBoard.innerHTML = '';
      gameBoard.style.display = 'none';
      blackboard.style.display = 'flex';
      mode.textContent = 'Học';
      result.style.display = 'none';
      entryTitle.style.display = 'block';
    }
  };
  mobileToggle.addEventListener('change', changeMode);

  // Thống Kê
  let statsBoard = document.querySelector('.statsboard');
  let difficultWords = [];
  const difficultWordsTranslation = [];
  const statsTitleItems = [
    'Từ', 'Dịch', 'Chủ đề', 'Đã học', 'Đúng', 'Sai',
  ];

  let showStats;

  const statsTable = () => {
    const table = document.createElement('table');
    table.classList.add('table', 'table_sort');
    statsBoard.appendChild(table);
    const thead = document.createElement('thead');
    thead.classList.add('thead');
    table.appendChild(thead);
    const tr = document.createElement('tr');
    thead.appendChild(tr);
    for (let i = 0; i < statsTitleItems.length; i += 1) {
      const td = document.createElement('td');
      td.textContent = statsTitleItems[i];
      tr.appendChild(td);
    }
    const tbody = document.createElement('tbody');
    tbody.classList.add('stats');
    table.appendChild(tbody);

    const getStats = () => {
      // CLOSE GAME MODE
      mobileToggle.checked = false;
      changeMode();

      // RESET ARRAYS
      difficultWords = [];
      diffWords = [];
      diffWordsTranslations = [];

      // CREATE Thống Kê TABLE
      for (let i = 0; i < word.length; i += 1) {
        for (let j = 0; j < word[i].length; j += 1) {
          statsWord = word[i][j];
          statsTranslation = translation[i][j];
          const rowOfTable = `<tr><td>${statsWord}</td><td>${statsTranslation}</td><td>${topics[i]}</td><td>${localStorage.getItem(`${statsWord}`) || '0'}</td><td>${localStorage.getItem(`correct-${statsWord}`) || 0}</td><td>${localStorage.getItem(`fail-${statsWord}`) || 0}</td></tr>`;
          tbody.insertAdjacentHTML('beforeend', rowOfTable);
          if (localStorage.getItem(`fail-${statsWord}`) > 0) {
            difficultWords.push(statsWord);
            difficultWordsTranslation.push(statsTranslation);
          }
        }
      }
      diffWords.push(difficultWords);
      diffWordsTranslations.push(difficultWordsTranslation);
    };

    const statsButtonContainer = document.createElement('div');
    statsButtonContainer.classList.add('center');
    statsBoard.appendChild(statsButtonContainer);
    const statsResetButton = document.createElement('button');
    statsResetButton.classList.add('stats-button');
    statsResetButton.textContent = 'Đặt lại';
    statsButtonContainer.appendChild(statsResetButton);
    // const transitionToDifficultWordsButton = document.createElement('button');
    // transitionToDifficultWordsButton.classList.add('stats-button');
    // transitionToDifficultWordsButton.textContent = 'Difficult Words';
    // statsButtonContainer.appendChild(transitionToDifficultWordsButton);

    statsResetButton.addEventListener('click', () => {
      localStorage.clear();
      showStats();
    });

    const showDifficultWords = () => {
      isDifficultWords = true;
      if (diffWords[0].length < 1) {
        entryTitle.textContent = 'Difficult Words';
        const message = document.createElement('h2');
        message.textContent = 'No difficult words';
        statsBoard.appendChild(message);
      } else {
        indexOfWord = 0;
        getClassroomScreen(diffWords, diffWordsTranslations);
      }
    };

    transitionToDifficultWordsButton.addEventListener('click', () => {
      table.innerHTML = '';
      statsButtonContainer.innerHTML = '';
      showDifficultWords();
    });
    getStats();
  };

  showStats = () => {
    getStartScreen(false);
    result.style.display = 'none';
    entryTitle.style.display = 'block';
    entryTitle.textContent = 'Thống Kê';
    blackboard.innerHTML = '';
    gameBoard.innerHTML = '';
    statsBoard.innerHTML = '';
    statsTable();
  };

  getMenuItems();
  getStartScreen(true);

}) ()

