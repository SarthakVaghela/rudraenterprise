

## Remove Shop Tab from Site

Remove the Shop page and all references to it across the codebase.

### Changes

1. **src/components/layout/Navbar.tsx** — Remove the `{ name: "Shop", path: "/shop" }` entry from `navLinks` array
2. **src/App.tsx** — Remove the Shop import and `<Route path="/shop">` route
3. **src/components/layout/Footer.tsx** — Remove any Shop link from footer navigation (need to verify)

### Optional Cleanup
- Delete `src/pages/Shop.tsx` file entirely since it's no longer referenced

