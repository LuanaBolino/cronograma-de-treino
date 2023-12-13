function checkCompletion(category) {
    const checkboxes = document.querySelectorAll(`.${category}-workout .form-check-input`);
    const completionMessage = document.getElementById(`${category}CompletionMessage`);

    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
        completionMessage.textContent = `CONGRATULATIONS! COMPLETED ALL EXERCISES.`;
    } else {
        completionMessage.textContent = `THERE ARE STILL EXERCISES PENDING, CONTINUE!`;
    }
}