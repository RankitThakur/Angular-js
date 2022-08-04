//1. Describe the object type
describe('Filters', function () {
  //2. Load the Angular App
  beforeEach(module('MyApp'));
  //3. Describe the object by name
  describe('compute', function () {
    var compute;
   //4. Initialize the filter
    beforeEach(inject(function ($filter) {
       compute = $filter('compute', {});
    }));
    //5. Write the test in the it block along with expectations.
    it('Should return 0 if input is negative', function () {
      const result = compute(-1);
      expect(result).toBe(0); //pass
   });
    it('Should increment the input if input is positive', function () {
      const result = compute(1);
      expect(result).toBe(2);//pass
       //expect(compute(3)).toBe(5);//fail
    });
  });
});