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
  console.log("ready!");

  $('#js-shopping-list-form').submit(function (event) {

    event.preventDefault();

    const inputIteam = $('#shopping-list-entry').val();

    $('#shopping-list-entry').val('');

    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${inputIteam}</span>
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

  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {

    $(this).closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {

    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

});
