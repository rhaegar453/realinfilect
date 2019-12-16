import _ from 'lodash';


function getRandomColor() {
    const hex = Math.floor(Math.random() * 0xffffff);
    return `#${`000000${hex.toString(16)}`.substr(-6)}`;
}

function getRandomNumber(start = 0, end = 100) {
    return _.random(start, end);
}

function getRandomHeight(from = 100, to = 300) {
    return `${getRandomNumber(from, to)}px`;
}

export { getRandomColor, getRandomHeight };

