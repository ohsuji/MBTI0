import { results, mbtis } from './data.js';

const mbti = new URLSearchParams(location.search).get('mbti');
console.log(mbti);
const result = results[mbtis[mbti]];

const titleEl = document.querySelector('.page_title');
const characterEl = document.querySelector('.character');
const boxEls = document.querySelectorAll('.box');
const jobEl = document.querySelectorAll('.job');
const lectureEl = document.querySelector('.lecture');
const lectureImgEl = document.querySelector('.lecture img')

titleEl.innerHTML = result.title;
characterEl.src = result.character;
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index];
});
jobEl.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index];
});
lectureEl.href = result.lectureUrl;
lectureImgEl.src = result.lectureImg;

