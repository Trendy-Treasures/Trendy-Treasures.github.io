function generateGridItems(csvFilePath, sectionId, maxItems) {
  const grid = document.getElementById(sectionId).querySelector(".grid");

  // Fetch CSV data
  fetch(csvFilePath)
    .then(response => response.text())
    .then(data => {
      const products = parseCSV(data);
      const firstFourProducts = products.slice(0, maxItems);

      // Create grid items for the first four products
      firstFourProducts.forEach(product => {
        createGridItem(product, grid);
      });

      // Check if more items are available
      if (products.length > maxItems) {
        const moreButton = document.getElementById(sectionId + "-more");
        moreButton.style.display = "block";
        moreButton.querySelector("a").href = sectionId + ".html";
      }
    })
    .catch(error => console.log("Error fetching CSV data:", error));
}


function createGridItem(product, grid) {
  const item = document.createElement("div");
  item.className = "item";

  const link = document.createElement("a");
  link.href = product.link;

  const image = document.createElement("img");
  image.src = product.imagePath;
  image.alt = product.name;

  const caption = document.createElement("div");
  caption.className = "caption";

  const captionText = document.createElement("h3");
  captionText.textContent = product.name;

  caption.appendChild(captionText);
  link.appendChild(image);
  item.appendChild(link);
  item.appendChild(caption); // Append caption after the link
  grid.appendChild(item);
}

function createMoreButton(sectionId) {
  const moreButton = document.createElement("a");
  moreButton.href = "#";
  moreButton.className = "more-button";
  moreButton.textContent = "More Items";

  return moreButton;
}

function navigateToPage(csvFile) {
  // Replace with the URL of the page where the remaining products should be displayed
  window.location.href = "products.html?csv=" + encodeURIComponent(csvFile);
}

document.addEventListener('DOMContentLoaded', function() {
  const scrollBtn = document.querySelector('.scroll-to-top');

  scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const targetElement = document.querySelector('body');
      targetElement.scrollIntoView({
          behavior: 'smooth'
      });
  });

  scrollBtn.addEventListener('mousedown', function() {
    scrollBtn.style.transform = 'scale(0.9)';
    scrollBtn.style.backgroundColor = '#333333';
    scrollBtn.style.color = '#ffffff';
});

scrollBtn.addEventListener('mouseup', function() {
    scrollBtn.style.transform = 'scale(1)';
    scrollBtn.style.backgroundColor = '#ffffff';
    scrollBtn.style.color = '#333333';
});

scrollBtn.addEventListener('mouseleave', function() {
    scrollBtn.style.transform = 'scale(1)';
    scrollBtn.style.backgroundColor = '#ffffff';
    scrollBtn.style.color = '#333333';
});

});
