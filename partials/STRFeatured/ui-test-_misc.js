const kDefaultRoutePath = '/';

describe('STRFeatured_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRFeaturedHeading', function test_STRFeaturedHeading () {

		it('sets text', function () {
			browser.assert.text(STRFeaturedHeading, 'Featured content');
		});
	
	});

});
