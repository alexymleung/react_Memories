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

# 16 fix bug of going directly to subroute causing an error, and also modifying the photoPage not showing the banner(header), by modifying the HeaderNav component. Add Homepage with carousel

# 17 karen part done, project completed, Total 402pages (250824)

# 18 context consolidated, add check photoNo for PrevNextHandler, add color gradient to sec and background, total 405 pages (250824)

keyboard shortcut for navigation

mouse over, to add transition and change color background add gradient color

# to switch menu up and down

## TOP MAIN NAVBAR

### /layout/RootLayout.jsx

```
      <Navbar />
      <Outlet />
```

### /components/HeaderNav.jsx

```
    <>
      <div className="sticky">{<SubNavbar />}</div>
      <Header pic={headerData.image} alt={headerData.alt} />
    </>
```

### /components/PhotoPage.jsx

```
          <p>{info}</p>
          <img src={photoPlate} alt="" />
```

<!-- ### /css/Jonathan.css

```
.nav-jonathan li a.active {
  background-image: var(--jonprimary1) !important;
  color: var(--jonsecondary) !important;
  border: 1px solid var(--jonbackgroundtransparent);
}

``` -->

## BOTTOM MAIN NAVBAR

### /layouts/RootLayout.jsx

```

      <Outlet />
      <Navbar />

```

### /components/HeaderNav.jsx

```

    <>
      <Header pic={headerData.image} alt={headerData.alt} />
      <div className="sticky">{<SubNavbar />}</div>
    </>

```

### /components/PhotoPage.jsx

```

          <p>{info}</p>
          <img src={photoPlate} alt="" />

```

<!-- ### /css/Jonathan.css

```

.nav-jonathan li a.active {
background-image: var(--jonprimary3) !important;
color: var(--jonsecondary) !important;
border: 1px solid var(--jonbackgroundtransparent);
}

```-->

error:

ENOSPC: System limit for number of file watchers reached

**To fix this issue, you need to increase the inotify watchers limit:**

1. **Temporary solution (until next reboot):**

   ```bash
   sudo sysctl fs.inotify.max_user_watches=524288
   ```

2. **Permanent solution (add to /etc/sysctl.conf):**

   ```bash
   echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

3. **Alternative: Restart the development server** - sometimes simply stopping and restarting the Vite server can resolve this if other processes were consuming watchers.
