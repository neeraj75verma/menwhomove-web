document.addEventListener("DOMContentLoaded", () => {
  // Reveal the hero experience after the page has loaded.
  document.body.classList.add("ready");

  // Reveal the problem statements as they enter the viewport.
  const revealElements = document.querySelectorAll(
    ".problem__eyebrow, .problem__title, .problem__text"
  );

  if (revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    revealElements.forEach((element) => observer.observe(element));
  }

  // Reveal supporting sections with subtle fade and slide transitions.
  const storyElements = document.querySelectorAll(".reveal");

  if (storyElements.length) {
    const storyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            storyObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    storyElements.forEach((element) => storyObserver.observe(element));
  }

  // Enable the commitment button only after the checkbox is selected.
```javascript
  // Enable the commitment button only after the checkbox is selected.
  const form = document.getElementById("commitment-form");
  const checkbox = document.getElementById("commitment-checkbox");
  const submitButton = document.getElementById("commitment-button");
  const success = document.getElementById("commitment-success");

  if (form && checkbox && submitButton && success) {
    const originalButtonText = submitButton.textContent;

    const toggleButton = () => {
      submitButton.disabled = !checkbox.checked;
    };

    checkbox.addEventListener("change", toggleButton);
    toggleButton();

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!checkbox.checked) {
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";

      try {
        const formData = new FormData(form);

        const response = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        form.classList.add("is-hidden");
        success.classList.add("is-visible");

      } catch (error) {
        console.error("Membership submission error:", error);

        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;

        alert("Submission failed. Please try again.");
      }
    });
  }
```
