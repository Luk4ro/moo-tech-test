### Project setup

1. `npm install`
2. `npm run dev`

### Project details

- Bootstrapped with `vite` and `tailwind`.

### Notes

- I've added crude mobile styling as none was provided/requested - just thought it would be nice to do
- I have written the logic to filter the selectable options in a scalable way that assumes nothing about how many options there are or what they're called. For this I have made the assumption that attributes can be added/removed and all combinations of the products will be retrieved from the API. For example, if another color (green) was added, then an extra 2 values would be received from the API (green-dotted & green-outlined). It seems like this is the case as the productOptionsData looks like something like a MongoDB unwind.
