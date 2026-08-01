<!-- hide -->

<div align="center">

# Learn Bootstrap 5 from Zero

<a href="https://4geeks.com/en/interactive-exercise/bootstrap-exercises"><img src="https://img.shields.io/badge/4Geeks_Academy-certified-2563eb?style=flat-square" alt="Certified by 4Geeks Academy" /></a>
<a href="https://github.com/learnpack/learnpack"><img src="https://img.shields.io/badge/autograded-LearnPack-2563eb?style=flat-square" alt="Auto-graded with LearnPack" /></a>
<a href="https://codespaces.new/?repo=4GeeksAcademy/bootstrap-exercises-tutorial"><img src="https://img.shields.io/badge/start-open_in_Codespaces-fb5a1f?style=flat-square&logo=github&logoColor=white" alt="Open in Codespaces" /></a>

</div>

<!-- endhide -->

A free, auto-graded **Bootstrap 5** tutorial: **8 hands-on exercises, about 5 hours**, that take you from adding Bootstrap to a page for the first time to building a responsive grid, a navigation bar, a hero section and a styled form. You write real HTML in your editor, and a test checks each solution the moment you save it.

## 🎯 What will you learn?

1. How to add Bootstrap 5 to any website, and when the CDN is enough.
2. How to pick the HTML elements that will receive Bootstrap styles.
3. How the 12-column grid works: each column is about **8.33%** of the row width, and the columns in one row can never add up to more than 12.
4. The components behind most interfaces: navbar, sidebar, hero, buttons, alerts, tables and forms.
5. When to use a Bootstrap utility class instead of writing your own CSS.

The grid is the part everyone trips on. These are the combinations that add up to 12:

![Bootstrap's 12-column grid showing seven rows of columns that each add up to twelve slots: twelve columns of 1, six of 2, four of 3, three of 4, two of 6, a 4 plus 8 split, and a single full-width column of 12](https://raw.githubusercontent.com/4GeeksAcademy/bootstrap-exercises-tutorial/master/.learn/assets/grid.png)

## 👀 What will you build?

Eight small pages. Each one is a component you will reuse in real projects:

1. **Add Bootstrap to your website** — link Bootstrap and confirm it is working.
2. **Bootstrap skeleton** — the container, row and column structure.
3. **Bootstrap grid** — a row split into equal columns, plus a full-width row.
4. **Navbar** — a navigation bar that collapses into a menu on small screens.
5. **Sidebar with menu** — a vertical menu next to your main content.
6. **Hero section and three boxes** — a landing-page header with a three-column feature row.
7. **Buttons, alert and table** — the components you need for almost any interface.
8. **Bootstrap forms** — a form built with Bootstrap's input and layout classes.

This is exercise 06 once it passes — a hero section with a call to action, above a three-column feature row, built entirely with Bootstrap classes and no custom CSS:

![Finished exercise 06: a Bootstrap hero section headed Hello, world! with introductory text and a Learn more button, above three equal columns that each contain a heading, a paragraph and a View details button](https://raw.githubusercontent.com/4GeeksAcademy/bootstrap-exercises-tutorial/master/.learn/assets/06-hero-section-and-three-boxes-result.png)

And this is exercise 07, the components you will reuse in almost any interface:

![Finished exercise 07: a card asking a question with green Yes and red No buttons, a yellow dismissible alert, and a striped table listing Mark Otto, Jacob Thornton and Larry the Bird with their handles](https://raw.githubusercontent.com/4GeeksAcademy/bootstrap-exercises-tutorial/master/.learn/assets/07-buttons-alert-and-table-result.png)

## 🎓 What do you need before starting?

Basic **HTML** and **CSS**: tags, classes, and how a stylesheet is applied to a page. You do **not** need previous Bootstrap experience, and you never have to write JavaScript — the exercises load Bootstrap's JavaScript bundle for you.

If HTML or CSS is still shaky, do these first:

1. [Learn HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course)
2. [Learn CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course)
3. [Learn CSS Layouts](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises)

## ✅ How does the automatic grading work?

Every exercise ships with its own test file. When you save your HTML, the test runs and tells you straight away whether your solution passes, so you never have to guess whether you got it right or compare against a solution by eye.

> 💡 The tests are strict on purpose. Treat a failing test as a prompt to review your code, not as a verdict on your solution.

## 💡 What mistakes should you avoid?

- **A row holds 12 column slots, never more.** Each column takes between 1 and 12 slots, and everything inside a single row must add up to 12 or less. Overflowing the row is the most common Bootstrap mistake.
- **Let Bootstrap do the math.** In Bootstrap 5 the plain `.col` class spreads the columns evenly across the 12 slots on its own. You only need `.col-4`, `.col-6` and friends when you want one specific width.
- **`container` and `container-fluid` are not interchangeable.** `container` has a fixed maximum width at each breakpoint; `container-fluid` always spans the full viewport. Swapping one for the other changes the whole page layout.
- **Look for a utility class before writing CSS.** Most of the spacing, colour and alignment you need already exists as a Bootstrap class, and mixing custom CSS in too early is what makes Bootstrap projects hard to maintain.
- **Keep the [official Bootstrap 5 documentation](https://getbootstrap.com/docs/5.0/) open.** These exercises are designed to be solved by looking things up, which is exactly how you will work as a developer.

## ❓ Frequently asked questions

### How long does it take to learn Bootstrap?

The basics take about 5 hours: that is the length of this tutorial, covering the grid, the main components and forms across 8 exercises. Getting comfortable enough to build a full page without checking the documentation usually takes a few more projects.

### Which version of Bootstrap does this tutorial use?

Bootstrap 5. The exercises use Bootstrap 5 class names and grid behaviour, and link to the official 5.0 documentation.

### Do I need to know JavaScript to learn Bootstrap?

No. Everything you write in this tutorial is HTML and Bootstrap classes. The exercises do load Bootstrap's JavaScript bundle from a CDN, which is what makes components like the collapsing navbar work, but you never have to write or read any JavaScript yourself.

### Do I have to install anything?

No. The whole tutorial opens in your browser with GitHub Codespaces. Installing [LearnPack](https://github.com/learnpack/learnpack) on your own machine is optional, for when you prefer to work locally.

### Is this Bootstrap tutorial free?

Yes, it costs nothing to access and complete, and the code you write is yours. It is part of the curriculum [4Geeks Academy](https://4geeks.com) uses in its coding bootcamp, published publicly so anyone can learn from it. The tutorial material itself is copyrighted rather than open source: see [LICENSE.md](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial/blob/HEAD/LICENSE.md) before redistributing it.

### Is Bootstrap still worth learning?

Yes, if your goal is to build a working, responsive interface quickly without writing a design system from scratch. Bootstrap gives you a grid and a set of tested components out of the box, which is why it is still common in internal tools, prototypes and existing codebases you may be hired to maintain.

<!-- hide -->

#### Before we start... other related tutorials

1. [Learn HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course)
2. [Learn HTML Forms](https://github.com/4GeeksAcademy/html-forms-tutorial-exercises)
3. [Learn CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course)
4. [Learn CSS Layouts](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises)
5. [Learn Bootstrap](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial) ← 🔥 You are here now

## 🚀 How to start

Open the exercises in a few seconds with [Codespaces](https://codespaces.new/?repo=4GeeksAcademy/bootstrap-exercises-tutorial) (recommended) or [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial.git).

> 💡 Once VSCode opens, the LearnPack exercises should start automatically. If they don't, type `learnpack start` in your terminal.

## 💻 Local installation

Clone the repository in your local environment and follow these steps:

1. Install LearnPack, the package manager for learning tutorials, plus the HTML plugin. You need Node.js 14+:

```bash
npm i learnpack -g
learnpack plugins:install learnpack-html
```

2. Download these exercises with LearnPack and `cd` into the folder:

```bash
learnpack download bootstrap-exercises
cd bootstrap-exercises
```

3. Start the tutorial from the same level as your `learn.json` file:

```bash
npm i jest@24.8.0 -g
learnpack start
```

## 📚 How the exercises are organized

Each exercise is a small website containing the following files:

1. **index.html:** the entry file for the entire exercise.
2. **README.md:** the exercise instructions.
3. **test.js:** the grading script, you don't need to open it.

## 🤝 Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

1. [Alejandro Sanchez (alesanchezr)](https://github.com/alesanchezr), contribution: (coder) 💻, (idea) 🤔, (build-tests) ⚠️, (pull-request-review) 🤓, (build-tutorial) ✅, (documentation) 📖

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

This and many other exercises are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sánchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

<!-- endhide -->
