const radioButtons = document.querySelectorAll('input[type="radio"][name="slider"]');
  
// Function to switch to the next radio button
function switchRadioButton() {
  const currentCheckedIndex = Array.from(radioButtons).findIndex(button => button.checked);
  const nextIndex = (currentCheckedIndex + 1) % radioButtons.length;
  radioButtons[nextIndex].checked = true;
}

// Automatically switch the radio buttons every 15 seconds
setInterval(switchRadioButton, 15000);