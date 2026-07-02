// =====================================================
// Market Sessions Dashboard
// sessions.js
// Version 2.0
// =====================================================

const sessions = [

    // =================================================
    // NEW YORK
    // =================================================

    {
        id: "newyork",

        title: "NEW YORK SESSION",

        timezone: "America/New_York",

        enabled: true,

        holidayEngine: true,

        phases: [

            {
                id: "premarket",

                title: "PRE MARKET",

                start: {
                    hour: 8,
                    minute: 0
                },

                end: {
                    hour: 9,
                    minute: 30
                },

                status: "OPEN",

                statusClass: "open",

                phaseClass: "premarket",

                countdownText: "REGULAR MARKET IN"

            },

            {
                id: "regular",

                title: "",

                start: {
                    hour: 9,
                    minute: 30
                },

                end: {
                    hour: 16,
                    minute: 0
                },

                status: "OPEN",

                statusClass: "open",

                phaseClass: "",

                countdownText: "POST MARKET IN"

            },

            {
                id: "postmarket",

                title: "POST MARKET",

                start: {
                    hour: 16,
                    minute: 0
                },

                end: {
                    hour: 17,
                    minute: 0
                },

                status: "OPEN",

                statusClass: "open",

                phaseClass: "postmarket",

                countdownText: "CLOSES IN"

            }

        ]

    },

    // =================================================
    // LONDON
    // =================================================

    {
        id: "london",

        title: "LONDON SESSION",

        timezone: "Europe/London",

        enabled: true,

        holidayEngine: false,

        phases: [

            {
                id: "regular",

                title: "",

                start: {
                    hour: 8,
                    minute: 0
                },

                end: {
                    hour: 17,
                    minute: 0
                },

                status: "OPEN",

                statusClass: "open",

                phaseClass: "",

                countdownText: "CLOSES IN"

            }

        ]

    },

    // =================================================
    // TOKYO
    // =================================================

    {
        id: "tokyo",

        title: "TOKYO SESSION",

        timezone: "Asia/Tokyo",

        enabled: true,

        holidayEngine: false,

        phases: [

            {
                id: "regular",

                title: "",

                start: {
                    hour: 9,
                    minute: 0
                },

                end: {
                    hour: 18,
                    minute: 0
                },

                status: "OPEN",

                statusClass: "open",

                phaseClass: "",

                countdownText: "CLOSES IN"

            }

        ]

    },

    // =================================================
    // SYDNEY
    // =================================================

    {
        id: "sydney",

        title: "SYDNEY SESSION",

        timezone: "Australia/Sydney",

        enabled: true,

        holidayEngine: false,

        phases: [

            {
                id: "regular",

                title: "",

                start: {
                    hour: 8,
                    minute: 0
                },

                end: {
                    hour: 17,
                    minute: 0
                },

                status: "OPEN",

                statusClass: "open",

                phaseClass: "",

                countdownText: "CLOSES IN"

            }

        ]

    }

];
