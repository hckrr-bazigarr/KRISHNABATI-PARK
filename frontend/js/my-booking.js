const bookingContainer = document.querySelector("#my-bookings");

if (bookingContainer) {
    const bookings = JSON.parse(
        localStorage.getItem("kup_demo_bookings") || "[]"
    );

    if (bookings.length === 0) {
        bookingContainer.innerHTML =
            '<div class="notice">No demo booking requests found in this browser.</div>';
    } else {
        bookings.forEach((booking) => {
            const card = document.createElement("article");
            card.className = "card card-body";

            const title = document.createElement("h3");
            title.textContent = booking.reference;

            const details = document.createElement("p");
            details.textContent =
                `${booking.name} · ${booking.date} · ${booking.slot}`;

            const visitors = document.createElement("p");
            visitors.textContent =
                `Adults: ${booking.adults} | Children: ${booking.children}`;

            const status = document.createElement("p");
            status.textContent = "Status: Demo request — not confirmed.";

            card.append(title, details, visitors, status);
            bookingContainer.appendChild(card);
        });
    }
}
