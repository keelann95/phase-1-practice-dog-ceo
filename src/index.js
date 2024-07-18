console.log('%c HI', 'color: firebrick')

// index.js

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.style.width = '200px';  // Set a fixed width for consistency
          imageContainer.appendChild(img);
        });
      });
  
    // Challenge 2: Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('dog-breeds');
        Object.keys(data.message).forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);
  
          // Challenge 3: Change color on click
          li.addEventListener('click', function() {
            this.style.color = 'blue';  // You can change 'blue' to any color you prefer
          });
        });
      });
  
    // Challenge 4: Filter breeds by first letter
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', function() {
      const selectedLetter = this.value;
      const allBreeds = document.querySelectorAll('#dog-breeds li');
      
      allBreeds.forEach(breed => {
        if (selectedLetter === 'all' || breed.textContent.startsWith(selectedLetter)) {
          breed.style.display = '';
        } else {
          breed.style.display = 'none';
        }
      });
    });
  });