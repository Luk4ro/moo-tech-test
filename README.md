### Project setup

1. `npm install`
2. `npm run dev`

### Tests

To run the tests run `npm run test` or `npm test`

### Project details

- Bootstrapped with `vite` and `tailwind`.

### Notes

- I've taken an approach which allows the loading of product data via the URL, this lets users link a product and options directly to others. My approach would likely be different if this wasn't a requirement but it's always a good feature to have.
- I have split out some components into child components of the `ProductConfigurator` as they're used specifically for that component. If they were going to be more generic and used across the app, they would have a different implementation and be located directly in the components directory.
- I've added crude mobile styling as none was provided/requested - just thought it would be nice to do
- For tests I have just used the `productOptionsData` for the mock data, and also tested the main `ProductConfigurator` component. During production work all components would be tested separately as well, aiming for the teams target coverage goals.
- I have written the logic to filter the selectable options in a scalable way that assumes nothing about how many options there are or what they're called. For this I have made the assumption that attributes can be added/removed and all combinations of the products will be retrieved from the API. For example, if another color (green) was added, then an extra 2 values would be received from the API (green-dotted & green-outlined). It seems like this is the case as the productOptionsData looks like something like a MongoDB unwind.
