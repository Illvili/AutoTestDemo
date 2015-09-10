beforeEach(function () {
  jasmine.addMatchers({
    toBeFunction: function () {
      return {
        compare: function (actual, expected) {

          return {
            pass: Object.prototype.toString.call(actual) === '[object Function]'
          };
        }
      };
    }
  });
});

describe("qsort", function () {
	it("should be a function", function () {
		expect(window.qsort).toBeFunction();
	});
	
	it("shuold return [1, 2, 3]", function () {
		expect(qsort([3, 2, 1])).toEqual([1, 2, 3]);
	});
	
	it("shuold return in order", function () {
		expect(qsort([9, 4, 21, 4, 5, 3, 1, 8])).toEqual([1, 3, 4, 4, 5, 8, 9, 21]);
	});
	
	it("shuold return []", function () {
		expect(qsort([])).toEqual([]);
	});
	
	it("shuold raise error if nothing passed", function () {
		expect(qsort).toThrow();
	});
	
	it("shuold raise error if string passed", function () {
		expect(function () {
			qsort('string')
		}).toThrow();
	});
	
	it("should return [1]", function () {
		expect(qsort([1])).toEqual([1]);
	});
});