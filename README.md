# Tinny Lianna's Daycare

A responsive, single-page website for Tinny Lianna's Daycare in Bonaero Park, Kempton Park. Its tagline is “Nurturing Little Minds, Building Bright Futures.” Visit the live website at [tinny-lianna.github.io](https://tinny-lianna.github.io/).

## Features

- Daycare information, opening hours, and location
- Weekend Visit Programme details and downloadable form
- Registration information and an online Intent form
- Facebook and TikTok search links for Tinny Lianna's Daycare
- Gallery sections for meals, facilities, and school information
- Responsive layout and image-preview modal
- Launch-ready assets published from the `live-assets` branch

## Run locally

Run `python -m http.server 8000` from the website folder, then open `http://localhost:8000`. Keep the `css`, `js`, `forms`, and `assets` folders alongside `index.html`.

## Images

The website includes the logo, banner, daily programme, facility photos, and meal photos. Event gallery photos are not currently included.

## Intent form

The downloadable form in `forms/` and online form let a family express interest and share information so the daycare can consider availability and follow up about next steps. Neither is final registration, and neither guarantees or reserves a place.

Online submissions use Formspree's Vanilla JavaScript Ajax integration and a typed parent/guardian signature. The form displays a confirmation after a successful submission, and families can download the original Intent form if they prefer to complete it separately. Configure the notification recipient in the Formspree account. The public form ID is wired in `index.html`; it is not an API key or password. Do not add account credentials to the site. Keep submissions limited to the information needed to respond to an enquiry.
