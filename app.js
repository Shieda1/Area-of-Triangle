// https://www.google.com/search?client=opera&q=Area+of+Triangle&sourceid=opera&ie=UTF-8&oe=UTF-8

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaRadio = document.getElementById('areaRadio');
const baseRadio = document.getElementById('baseRadio');
const heightRadio = document.getElementById('heightRadio');

let area;
let base = v1;
let height = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

areaRadio.addEventListener('click', function() {
  variable1.textContent = '(b) Base';
  variable2.textContent = '(hb) Height';
  base = v1;
  height = v2;
  result.textContent = '';
});

baseRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Area';
  variable2.textContent = '(hb) Height';
  area = v1;
  height = v2;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Area';
  variable2.textContent = '(b) Base';
  area = v1;
  base = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaRadio.checked)
    result.textContent = `Area = ${computeArea().toFixed(2)}`;

  else if(baseRadio.checked)
    result.textContent = `Base = ${computeBase().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeHeight().toFixed(2)}`;
})

// calculation

function computeArea() {
  return (Number(base.value) * Number(height.value)) / 2;
}

function computeBase() {
  return (Number(area.value) * 2) / Number(height.value);
}

function computeHeight() {
  return (Number(area.value) * 2) / Number(base.value);
}