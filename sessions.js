// =====================================================
// Market Sessions Dashboard
// sessions.js
// Configuration only - no logic here.
// =====================================================

const sessions = [

    {
        id: "newyork",
        name: "NEW YORK SESSION",
        timezone: "America/New_York",

        openHour: 8,
        openMinute: 0,

        preEndHour: 9,
        preEndMinute: 30,

        regularEndHour: 16,
        regularEndMinute: 0,

        closeHour: 17,
        closeMinute: 0,

        hasPreMarket: true,
        hasPostMarket: true,
        useHolidayEngine: true
    },

    {
        id: "london",
        name: "LONDON SESSION",
        timezone: "Europe/London",

        openHour: 8,
        openMinute: 0,

        closeHour: 17,
        closeMinute: 0,

        hasPreMarket: false,
        hasPostMarket: false,
        useHolidayEngine: false
    },

    {
        id: "tokyo",
        name: "TOKYO SESSION",
        timezone: "Asia/Tokyo",

        openHour: 9,
        openMinute: 0,

        closeHour: 18,
        closeMinute: 0,

        hasPreMarket: false,
        hasPostMarket: false,
        useHolidayEngine: false
    },

    {
        id: "sydney",
        name: "SYDNEY SESSION",
        timezone: "Australia/Sydney",

        openHour: 8,
        openMinute: 0,

        closeHour: 17,
        closeMinute: 0,

        hasPreMarket: false,
        hasPostMarket: false,
        useHolidayEngine: false
    }

];

// Future sessions can be added here without changing the engine.
