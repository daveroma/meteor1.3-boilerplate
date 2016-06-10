import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Import main layout
import '/imports/ui/layouts/main.html';

// Import the home view/js
import '/imports/ui/views/home/home.html';
import '/imports/ui/views/home/home.js';

// App Routes
FlowRouter.route('/', {
	name: 'home',
  action: function() {
		BlazeLayout.render('mainLayout', {view: 'home'});
  }
});
