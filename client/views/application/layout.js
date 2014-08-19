Template.layout.helpers({
  pageTitle: function() { return Session.get('pageTitle'); }
});


Deps.autorun(function(){
	alert("Title: " + Session.get('pageTitle'));
})