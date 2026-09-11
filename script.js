// Google Analytics Button Click Tracking

function trackClick(eventName) {

    if (typeof gtag === "function") {

        gtag("event", eventName, {

            event_category: "engagement"

        });

    }

    console.log(
        "Analytics event:",
        eventName
    );
}


// Contact Form Tracking

function submitForm(event) {

    event.preventDefault();


    if (typeof gtag === "function") {

        gtag("event", "contact_form_submit", {

            event_category: "form"

        });

    }


    document.getElementById(
        "form-message"
    ).textContent =
        "Thank you! Your message has been submitted.";


    event.target.reset();

}