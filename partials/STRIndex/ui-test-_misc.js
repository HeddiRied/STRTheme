const kDefaultRoutePath = '/tag/strtag/';

describe('STRIndex_Misc', function () {

	before(function () {
		return browser.visit(kDefaultRoutePath);
	});

	describe('STRIndexHeading', function test_STRIndexHeading () {

		it('sets text', function () {
			browser.assert.text(STRIndexHeading, 'STRTag');
		});
	
	});

});
