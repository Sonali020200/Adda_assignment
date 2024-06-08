# Facility Booking Module

This project implements a facility booking module for an apartment complex. Residents can book facilities such as the Clubhouse and Tennis Court for their personal use, and the module ensures that bookings are managed efficiently, preventing double bookings and calculating booking amounts based on time slots.

## Features

- Book facilities with different pricing based on time slots.
- Prevents double bookings for the same facility.
- Provides booking details and amounts.

## Technologies Used

- JavaScript
- Jest (for unit testing)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Sonali020200/Adda_assignment.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## How to Run

1. To run the facility booking system, ensure you have the following files:

    - `package.json` (with the necessary scripts and devDependencies)
    - `bookingSystem.js` (the implementation of the booking system)
    - `bookingSystem.test.js` (the unit tests for the booking system)

2. To run the unit tests using Jest, use the following command:
    ```bash
    npm test
    ```

This will execute the tests defined in `bookingSystem.test.js` and print the results to the console, including the expected and actual results.

## Example Usage

The following test cases are included:

1. **Book Clubhouse from 16:00 to 22:00**
    - Expected: `Booked, Rs. 3000`
    - Actual: (as per test run)

2. **Book Tennis Court from 16:00 to 20:00**
    - Expected: `Booked, Rs. 200`
    - Actual: (as per test run)

3. **Booking Clubhouse again from 16:00 to 22:00 should fail**
    - Expected: `Booking Failed, Already Booked`
    - Actual: (as per test run)

4. **Booking Tennis Court again from 17:00 to 21:00 should fail**
    - Expected: `Booking Failed, Already Booked`
    - Actual: (as per test run)


