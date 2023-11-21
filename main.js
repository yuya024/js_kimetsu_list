window.onload = async function firstLoad() {
  getApi()
} 

const getApi = async (url = 'all.json') => {
  loading();

  const tableBody = document.getElementById('table-body');
  clearTableBody(tableBody);

  const response = await fetch(`https://ihatov08.github.io/kimetsu_api/api/${url}`);
  const characters = await response.json();
  appendCharctersToTable(characters, tableBody);

  deleteLoading();
}

function appendCharctersToTable(characters, tableBody) {
  characters.forEach(character => {
    const newTr = document.createElement("tr");
    const array = Object.entries(character);

    for(const [key, val] of array) {
      const newTd = document.createElement("td");
      if(key === 'image') {
        const img = document.createElement("img");
        img.src = `https://ihatov08.github.io${val}`;
        img.width = '200';
        newTd.appendChild(img)
      } else {
        newTd.textContent = val;
      }
      newTr.appendChild(newTd);
    }
    tableBody.appendChild(newTr);
  });
}

function clearTableBody(tableBody) {
  while( tableBody.firstChild ){
    tableBody.removeChild( tableBody.firstChild );
  }
}

function deleteLoading() {
  const loading = document.getElementById('loading');
  loading.classList.add('d-none');
}

function loading() {
  const loading = document.getElementById('loading');
  loading.classList.remove('d-none');
}