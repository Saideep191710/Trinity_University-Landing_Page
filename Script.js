// Smooth scrolling for navigation links
document.querySelectorAll('.nav__links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      // Scroll smoothly to the target section
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handler
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Get the input value
    const searchQuery = document.querySelector('input[type="text"]').value;
  
    // Show an alert with the input value
    alert(Searching for: ${searchQuery});
  
    // Optionally, you could add form submission logic here, e.g., sending data to a server
    // For now, just clear the input field
    document.querySelector('input[type="text"]').value = '';
  });