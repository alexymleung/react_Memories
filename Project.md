# 1. Nested-Routing

# 2. Tab Navbar - 2 levels, useContext

# 3. HTML semantics & refactoring of secondary navbar (JonNavbar, SubNavList, data/navdata)

# 4. refactoring of NavBar (Navbar.jsx, NavList.jsx), var(color) setup, hover color

# 5. refactoring of Jonathan.jsx into header, section, and list components.

# 6. responsive layout & consolidation of css

# 7. useTheme for JL/jondata.js refactoring

# 8 create layout component, layout(banner to top), css folder, photo thumbnail and plates completed, with data from jonData.

# 9 Add logic for front & end photoplates handling

# 10 created topic state using useContext, photopage dynamically rendered using useContext, also for photoNo

# 11 split data into separate files, reorganize jondata jondata2 into jondata and jonfamiydata; refactoring HeaderNav component, Jonathan part 95% completed

# 12 create usePrevNexthandler.js; fix browser nav bug by addEventListener"popstate"(ThemeProvider)

# 13 Links pages, add media link, cleanup css. Jon 100% done.

# 14 1st level framing, photo & plates for all completed.

# 15 Framework for all pages created. also finished Chris & Cara sections

keyboard shortcut for navigation

mouse over, to add transition and change color background add gradient color

# to switch menu up and down

RootLayout.jsx
<Navbar />
<Outlet />

HeaderNav.jsx

<div className="sticky">
<SubNavbar />
</div>
<Header pic={headerData.image} alt={headerData.alt} />
