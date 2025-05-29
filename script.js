// Get elements
const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');
const items = itemList.getElementsByTagName('li');

// On input, filter list
searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase(); // User input (lowercase)

  // Loop through items
  Array.from(items).forEach(item => {
    const text = item.textContent.toLowerCase(); // Item text

     // Show if match, else hide
    if (text.includes(filter)) {
      item.style.display = ''; // show
    } else {
      item.style.display = 'none'; // hide
    }
  });
});


  