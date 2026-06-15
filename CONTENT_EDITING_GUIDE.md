# WIN CoE Website Editing Guide

Most routine content changes should be made in `app-data.js`.

## Common Updates

- Domains: edit the `domains` list.
- Home process steps: edit the `process` list.
- Home impact cards: edit the `impact` list.
- Events: edit the `events` list.
- Contact details: edit the `contact` object.
- Gallery: upload images into `assets/gallery/`, then add entries in `gallery`.

## Gallery Example

```js
gallery: [
  {
    src: "assets/gallery/event-photo-1.jpg",
    alt: "WIN CoE event photo",
    caption: "Healthcare innovation symposium"
  }
]
```

## Safety Rules

- Do not paste HTML into `app-data.js`; use plain text only.
- Use only these link formats: `#section`, `https://...`, `mailto:...`, or `tel:...`.
- Keep uploaded image names simple, for example `event-photo-1.jpg`.
- Do not edit the original site in `Done\CoE-Website`; this version is in `14June`.
