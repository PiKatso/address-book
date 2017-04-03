// Buisness Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var createContact = function(first, last) {
    var newContact = new Contact(userFirstName, userLastName);
    return newContact.fullName;
}

// User Interface Logic
$(document).ready(function(){
  $('form.user-input').submit(function(event) {
    event.preventDefault();
    var userFirstName = $('input[name=first-name]').val();  //collect ui first name//
    var userLastName = $('input[name=last-name]').val();   //collect ui last name//
    var newContact = new Contact(userFirstName, userLastName);        //create var that calles constructor and assigns ui//

    // $('ul#contacts').append(`<li><span class="contact">${newContact.firstName}</span></li>`); //show li contact first name//
    // $('ul#contacts').append(`<li><span class="contact">${newContact.lastName}</span></li>`);  //show li contact last name//
    $('ul#contacts').append(`<li><span class="contact">${newContact.fullName()}</span></li>`);   //show li contact first and last name//
  });


});
