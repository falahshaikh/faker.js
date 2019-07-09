/**
 *
 * @namespace faker.celestial
 */
var Celestial = function (faker) {
    var self = this;
    /**
     * stars
     *
     * @method faker.celestial.stars
     */
    self.stars= function () {
        return faker.random.arrayElement(faker.definitions.celestial.stars);
    };
  
    self.stars.schema = {
      "description": "Generates a star name.",
      "sampleResults": ["proxiama centuria", "vega", "deneb","sirius","regal"]
    };
  
    /**
     * galaxies
     *
     * @method faker.database.galaxies
     */
    self.galaxies = function () {
        return faker.random.arrayElement(faker.definitions.celestial.galaxies);
    };
  
    self.galaxies.schema = {
      "description": "Generates a galaxy name.",
      "sampleResults": ["Milkyway", "Antennae", "bode's", "cartwheel"]
    };
  
    /**
     * planets   
     *
     * @method faker.celestial.planets
     */
    self.planets= function () {
        return faker.random.arrayElement(faker.definitions.celestial.planets);
    };
  
    self.planets.schema = {
      "description": "Generates a planet.",
      "sampleResults": ["venus", "Earth", "mercury","saturn"]
    };
  
    /**
     * comets
     *
     * @method faker.celestial.comet
     */
    self.comets = function () {
        return faker.random.arrayElement(faker.definitions.celestial.comets);
    };
  
    self.comets.schema = {
      "description": "Generates a comet.",
      "sampleResults": ["Halley's Comet", "Ikeya seki","Hale-Bopp",
      "Shoemaker-Levy 9"]
    };
  };
  
  module["exports"] = Celestial;
  