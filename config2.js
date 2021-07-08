var config2 = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoiZWxrYWxvbmFyaXMiLCJhIjoiY2twbXExOHcwMDg3ZzJvbnc0dXhyOWszOSJ9.AetSK7t4L_aaFVsCuNQmHg',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chaps: [
        {
            id: 'one',
            alignment: 'lefty',
            title: 'Coal dependend regions',
            image: '',
            description: 'The EU has over 300 power plants with 738 separate generating units (as of July 2016). These are not evenly distributed across the individual member states and those most reliant on coal are Poland, Germany, Bulgaria, the Czech Republic and Romania. <br> Germany and Poland alone are jointly responsible for 51% of the EU’s installed coal capacity and 54% of emissions from coal.',
            location: {
                center: [12, 56],
                zoom: 3,
                pitch: 0,
                bearing: 0,
            },
            onEnter: [
                {
                    layer: 'jobs',
                    opacity: 1
                }
            ],
            onExit: [
                {
                    layer: 'pplants-showcase',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'two',
            alignment: 'lefty',
            title: 'Coal dependend regions',
            image: '',
            description: 'The EU has over 300 power plants with 738 separate generating units (as of July 2016). These are not evenly distributed across the individual member states and those most reliant on coal are Poland, Germany, Bulgaria, the Czech Republic and Romania. <br> Germany and Poland alone are jointly responsible for 51% of the EU’s installed coal capacity and 54% of emissions from coal.',
            location: {
                center: [12, 56],
                zoom: 3,
                pitch: 0,
                bearing: 0,
            },
            onEnter: [
                {
                    layer: 'jobs',
                    opacity: 0
                }
            ],
            onExit: [
                {
                    layer: 'pplants-showcase',
                    opacity: 0.5
                }
            ]
        },
    ]
};