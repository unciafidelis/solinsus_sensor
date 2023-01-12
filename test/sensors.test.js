const Sensors = require('../app/sensors')

describe("Unit Tests for Sensors class", () => {
    test('1) Create a sensors object', () => {
        //Code that must be used to test the object to be
        //Creating Spiderman object instance
        const lecture_2023 = new Sensors(7.23, 12.45, 0.38)

        //Code validation
        expect(lecture_2023.temperature).toBe(7.23)
        expect(lecture_2023.humidity).toBe(12.45)
        expect(lecture_2023.pressure).toBe(0.38)
    })
})