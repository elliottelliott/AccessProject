angular
    	.module("MyApp", ['ngMaterial', 'ngAria', 'ngMessages'])
		.config(function($mdThemingProvider) {
		  	$mdThemingProvider.theme('default')
		    .primaryPalette('purple', {
		      'default': '400', // by default use shade 400 from the teal palette for primary intentions
		      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
		      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
		      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
		    })

		    .accentPalette('pink', {
		      'default': '200' // use shade 200 for default, and keep all other shades the same
		    });
		});



		    // If you specify less than all of the keys, it will inherit from the
		    // default shades
		    /*pallet
.dark-primary-color    { background: #7B1FA2; }
.default-primary-color { background: #9C27B0; }
.light-primary-color   { background: #E1BEE7; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #FF4081; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD;}

*/

