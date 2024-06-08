class FacilityBookingSystem {
    constructor() {
        // This will store all bookings
        this.bookings = {
            'Clubhouse': [],
            'Tennis Court': []
        };

        // Configuration of facilities and their rates
        this.facilityRates = {
            'Clubhouse': [
                { start: 10, end: 16, rate: 100 },
                { start: 16, end: 22, rate: 500 }
            ],
            'Tennis Court': [
                { start: 0, end: 24, rate: 50 }
            ]
        };
    }

    // Method to check for overlap in bookings
    isOverlap(existingBookings, newStart, newEnd) {
        for (const booking of existingBookings) {
            if (newStart < booking.end && newEnd > booking.start) {
                return true;
            }
        }
        return false;
    }

     // Method to calculate the booking amount based on the rates
    calculateBookingAmount(facility, startHour, endHour) {
        let totalAmount = 0;
        for (let hour = startHour; hour < endHour; hour++) {
            for (const rateSlot of this.facilityRates[facility]) {
                if (hour >= rateSlot.start && hour < rateSlot.end) {
                    totalAmount += rateSlot.rate;
                    break;
                }
            }
        }
        return totalAmount;
    }

    // Method to book a facility
    bookFacility(facility, date, startTime, endTime) {
        const startHour = parseInt(startTime.split(':')[0]);
        const endHour = parseInt(endTime.split(':')[0]);

        // Check if the facility is already booked for the given time
        if (this.isOverlap(this.bookings[facility], startHour, endHour)) {
            return `Booking Failed, Already Booked`;
        }

        // Calculate the booking amount
        const bookingAmount = this.calculateBookingAmount(facility, startHour, endHour);

        // Add the new booking
        this.bookings[facility].push({ date, start: startHour, end: endHour });

        return `Booked, Rs. ${bookingAmount}`;
    }
}

module.exports = FacilityBookingSystem;
