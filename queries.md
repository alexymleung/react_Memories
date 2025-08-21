1. I have more or less refactored Jonathan.jsx into /components/Header, Article, & Card. There are two things I want to do:

2. further refactoring Jonathan.jsx into a single components.

3. and then applying this single components into rest of the sub-routes under jonathan, and those for chris, cara & karen, 3 + 4X7 giving a total of pages in all (see App.jsx for the current route setup, there are more to come )

4. Bearing in mind I have under context and hooks that store four states for the four individual persons, and that

5. I use data folder and the files like JL/jondata to import data.

6. My question is, what is the best way to go about achieving the above?

There are ample use of "Jonathan", "Jon", "jon", "Chris", "chris", etc in the codes,

We know that the use of these will depend on the currentTheme as defined in the context and the themedata,

can we use the useTheme in the wider context so that we don't have to manually pass these parameters

e.g. in JL/jondata, there are many jon, Jon, jonathan, how can we use parameter as a template so that these can be derived from context?
