class FacilityBookingSystem {
    constructor() {
        this.bookings = {
            'Clubhouse': [],
            'Tennis Court': []
        };
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

    isOverlap(existingBookings, newStart, newEnd) {
        for (const booking of existingBookings) {
            if (newStart < booking.end && newEnd > booking.start) {
                return true;
            }
        }
        return false;
    }

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

    bookFacility(facility, date, startTime, endTime) {
        const startHour = parseInt(startTime.split(':')[0]);
        const endHour = parseInt(endTime.split(':')[0]);

        if (this.isOverlap(this.bookings[facility], startHour, endHour)) {
            return `Booking Failed, Already Booked`;
        }

        const bookingAmount = this.calculateBookingAmount(facility, startHour, endHour);
        this.bookings[facility].push({ date, start: startHour, end: endHour });

        return `Booked, Rs. ${bookingAmount}`;
    }
}

module.exports = FacilityBookingSystem;
