'use strict';

/*To complete this challenge requires:

Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
Linking to your application JavaScript file from the index.html page.
Using this and event delegation
Requirements
In terms of user experience, your shopping list app must allow users to:

1. enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button.
2. check and uncheck items on the list by clicking the "Check" button.
3. permanently remove items from the list*/


$(document).ready(function () {

  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    let input = $('.js-shopping-list-entry').val();

    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${input}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });

  

});
