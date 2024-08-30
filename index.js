function showDetails(category) {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('details').style.display = 'block';
    document.getElementById('content').innerHTML = `<h2>${category}</h2><p>Details about ${category}</p>`;
}

function goBack() {
    document.getElementById('dashboard').style.display = 'flex';
    document.getElementById('details').style.display = 'none';
}
