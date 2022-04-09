window.addEventListener('DOMContentLoaded', (event) => {

  const gradeElts = document.querySelectorAll('.grade')
  const grade = document.getElementById('user-grade')
  const submitBtn = document.getElementById('submit-btn')

  // Giving a grade between 1 and 5

  /**
   * Set the selected grade element as active and update grade
   * in the thank you card
   * @param {*} event
   */
  const setGrade = (event) => {
    // Remove active class to all grade elements
    gradeElts.forEach(elt => elt.classList.remove('active'))
    // Add active class to the selected element
    const selectedGrade = event.target
    selectedGrade.classList.add('active')
    // Enable submit button
    submitBtn.classList.remove('disabled')
    submitBtn.classList.add('enabled')
    // Set the grade in thank you card
    grade.innerText = selectedGrade.innerText
  }
  /**
   * Event listener on grade elements
   */
  if(gradeElts.length > 0 && grade){
    gradeElts.forEach(elt => {
      elt.addEventListener('click', setGrade)
    })
  }

  // Submitting the rating

  /**
   * Remove Rating card and show Thank you card
   */
  const submitRating = () => {
    // Check user has selected a grade
    if(submitBtn.classList.contains('enabled')) {
      const ratingCard = document.getElementById('rating')
      const thankCard = document.getElementById('thanks')

      if(ratingCard && thankCard) {
        ratingCard.classList.add('hiding-card')
        setTimeout(() => {
          ratingCard.remove()
          thankCard.hidden = false
          thankCard.classList.add('showing-card')
        }, 1000);
      }

    }
  }

  /**
   * Event listener on submit button
   */
  if(submitBtn) {
    submitBtn.addEventListener('click', submitRating)
  }
});
