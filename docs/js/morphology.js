/*
	Morphological operations. Or something.

	Similar to:
	https://github.com/mikolalysenko/ball-morphology/blob/master/morphology.js

	But we allow specification of target, arr
	similar to ndops operations.

	Also, avoids opening / closing for better direct management.

	Zicheng Gao
*/

var isNode = (typeof global !== "undefined");

// Else literally can't happen in testing
/* istanbul ignore else */
if (isNode) {
	var ndops = require('ndarray-ops');
	var dt = require('distance-transform');
};

var Morphology = {
	// Mutating operation
	dilate(target, arr, radius) {
		dt(arr, 2);
		ndops.leqs(target, arr, radius);
	},

	// Mutating operation
	erosion(target, arr, radius) {
		ndops.not(target, arr);
		Morphology.dilate(target, target, radius);
		ndops.noteq(target);
	}
}

module.exports = Morphology;
