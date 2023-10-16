document.addEventListener('DOMContentLoaded', function () {
  const rateRecipeButton = document.getElementById('rateRecipeButton');
  const ratingForm = document.getElementById('ratingForm');
  const submitRatingButton = document.getElementById('submitRating');
  const ratingInput = document.getElementById('rating');

  rateRecipeButton.addEventListener('click', function () {
    rateRecipeButton.style.display = 'none'; // Hide the "Rate this recipe" button
    ratingForm.style.display = 'block'; // Show the rating form
  });

  submitRatingButton.addEventListener('click', async function () {
    const newRating = ratingInput.value;

    // Your existing rating submission logic here
    const currentPath = window.location.pathname;
    const match = currentPath.match(/^\/project\/(\d+)$/);

    if (match) {
      const itemId = parseInt(match[1], 10);
      // Make a PUT request to update the rating
      try {
        const response = await fetch(`/api/recipes/${itemId}`, {
          method: 'PUT',
          body: JSON.stringify({ rating: parseFloat(newRating) }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log('Rating updated successfully');
        } else {
          console.error('Failed to update rating');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    } else {
      console.error('Unable to extract recipe ID from the URL');
    }

    ratingForm.style.display = 'none'; // Hide the rating form after submission
  });
});
