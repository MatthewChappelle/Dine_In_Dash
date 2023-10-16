module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="pan">🥘</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="pot">🍲</span>`;
    } else {
      return `<span for="img" aria-label="plate">🍽️</span>`;
    }
  },

  // New function to display emoji based on rating
  get_rating_emoji: (actual_rating) => {
    if (actual_rating >= 4.5) {
      return `<span for="img" aria-label="excellent">🌟🌟🌟🌟🌟</span>`;
    } else if (actual_rating >= 4) {
      return `<span for="img" aria-label="very good">🌟🌟🌟🌟</span>`;
    } else if (actual_rating >= 3) {
      return `<span for="img" aria-label="good">🌟🌟🌟</span>`;
    } else if (actual_rating >= 2) {
      return `<span for="img" aria-label="fair">🌟🌟</span>`;
    } else if (actual_rating >= 1) {
      return `<span for="img" aria-label="poor">🌟</span>`;
    } else {
      return `<span for="img" aria-label="no rating">—</span>`;
    }
  },
};
