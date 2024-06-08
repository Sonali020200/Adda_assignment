const FacilityBookingSystem = require('./bookingSystem');

test('Book Clubhouse from 16:00 to 22:00', () => {
    const system = new FacilityBookingSystem();
    const result = system.bookFacility('Clubhouse', '26-10-2020', '16:00', '22:00');
    console.log(`Test: Book Clubhouse from 16:00 to 22:00`);
    console.log(`Expected: Booked, Rs. 3000`);
    console.log(`Actual: ${result}`);
    expect(result).toBe('Booked, Rs. 3000');
});

test('Book Tennis Court from 16:00 to 20:00', () => {
    const system = new FacilityBookingSystem();
    const result = system.bookFacility('Tennis Court', '26-10-2020', '16:00', '20:00');
    console.log(`Test: Book Tennis Court from 16:00 to 20:00`);
    console.log(`Expected: Booked, Rs. 200`);
    console.log(`Actual: ${result}`);
    expect(result).toBe('Booked, Rs. 200');
});

test('Booking Clubhouse again from 16:00 to 22:00 should fail', () => {
    const system = new FacilityBookingSystem();
    system.bookFacility('Clubhouse', '26-10-2020', '16:00', '22:00');
    const result = system.bookFacility('Clubhouse', '26-10-2020', '16:00', '22:00');
    console.log(`Test: Booking Clubhouse again from 16:00 to 22:00 should fail`);
    console.log(`Expected: Booking Failed, Already Booked`);
    console.log(`Actual: ${result}`);
    expect(result).toBe('Booking Failed, Already Booked');
});

test('Booking Tennis Court again from 17:00 to 21:00 should fail', () => {
    const system = new FacilityBookingSystem();
    system.bookFacility('Tennis Court', '26-10-2020', '16:00', '20:00');
    const result = system.bookFacility('Tennis Court', '26-10-2020', '17:00', '21:00');
    console.log(`Test: Booking Tennis Court again from 17:00 to 21:00 should fail`);
    console.log(`Expected: Booking Failed, Already Booked`);
    console.log(`Actual: ${result}`);
    expect(result).toBe('Booking Failed, Already Booked');
});
