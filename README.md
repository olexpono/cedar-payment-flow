# Cedar Take-home

This is the Cedar payment flow take-home completed by Olex Ponomarenko, 2024-09-21

## Notes

[1] The application uses Vite's React template, to minimize number of files for review. However,
this means routing didn't come out of the box. Normally, I would 200% advocate for these steps
to actually be separate routes with redirects depending on states and more links rather than
buttons to navigate between the pages.

[2] For CSS maintainability, I would definitely start using scss mixins or vanilla-extract for any projects above this size; there's already a couple pasted mixins here e.g. `text-p`, and combining mixins in className is unsustainable.

[3] Added the color "blue60" between some existing swatches, it's used for active states on buttons, etc. Likely, this token would be coming from the design system / be approved by design.

[4] Responsiveness should work both using text- and zoom-scaling :)

## Installing & Running the Application

```
npm install
npm run dev
```

## Running tests

```
npm run e2e
```

## Running the tests (interactive)

```
npm run e2e:interactive
```
