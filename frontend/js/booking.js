const bookingForm = document.querySelector("#booking-form");
const bookingResult = document.querySelector("#booking-result");

if (bookingForm && bookingResult) {
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData.entries());

        const adults = Number(data.adults || 0);
        const children = Number(data.children || 0);

        if (adults + children < 1) {
            bookingResult.textContent =
                "Please select at least one visitor.";
            bookingResult.classList.remove("hidden");
            return;
        }

        const reference =
            "KUP-" + Date.now().toString().slice(-8);

        const record = {
            ...data,
            reference,
            createdAt: new Date().toISOString(),
            status: "Demo request"
        };

        const existing = JSON.parse(
            localStorage.getItem("kup_demo_bookings") || "[]"
        );

        existing.unshift(record);

        localStorage.setItem(
            "kup_demo_bookings",
            JSON.stringify(existing)
        );

        bookingResult.classList.remove("hidden");
        bookingResult.classList.add("success");

        bookingResult.textContent =
            `Demo request saved on this device. Reference: ${reference}. ` +
            "This is not a confirmed ticket or payment.";

        bookingForm.reset();
    });
}
