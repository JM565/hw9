# CS272-S26 HW9: Badger Book

In this HW, you will implement Badger Book, a library of books collected throughout time!

![An overview of the project](_figures/overview.png)

## Please Note

You may **NOT** use `innerHTML` for this assignment. You must create elements using `document.createElement` and changing their appropriate attributes. Using `innerHTML` will cause you to lose points.

## Instructions

### 1. Fetch Books

Fetch the book data from `https://cs272.cs.wisc.edu/rest/s26/hw9/books` and call the `appendBookComponent` function, passing along the data for the book. You will display the data in the next step.

### 2. Display Book Data

For each of the book components, display its title, author, number of pages, and description by appending it as a card to the `book-list`. We will re-visit the ratings later on in Step 5.

How you choose to display this information is up to you, but it must be contained within a Bootstrap card!

### 3. Add Responsive Design

Make your design responsive, such that...

 - On `xs` devices, each card takes up 100% of the row.
 - On `sm` devices, each card takes up 50% of the row.
 - On `lg` devices, each card takes up 33.3% of the row.
 - On `xl` devices, each card takes up 25% of the row.

**Hint:** You can refer to the [Bootstrap documentation](https://getbootstrap.com/docs/5.3/layout/grid/#grid-options) for help!

### 4. Allow Favorites

Add functionality to allow a user to "favorite" a book by clicking on it. A "favorite" book is indicated with a different background color, e.g. "lightyellow". Furthermore, a user should be able to "unfavorite" a book by clicking on it again.

**Note:** Whenever the page refreshes, your favorites will go away. That is okay! We'll learn about `sessionStorage` and `localStorage` next week.

### 5. Display Rating

Finally, display the rating of each book visually using star icons. This can be done with the following Bootstrap icon classes: `bi-star`, `bi-star-fill`, and `bi-star-half`. For example, a book with a rating of 3.5 would display 3 full stars, followed by a half star, followed by an empty star.
