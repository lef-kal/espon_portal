var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoiZWxrYWxvbmFyaXMiLCJhIjoiY2twbXExOHcwMDg3ZzJvbnc0dXhyOWszOSJ9.AetSK7t4L_aaFVsCuNQmHg',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'First',
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
            onChapterEnter: [
                {
                    layer: 'pplants-showcase',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pplants-heat',
                    opacity: 1
                }
            ]
        },
        {
            id: 'Second',
            alignment: 'right',
            title: 'Air quality indexes and CO2 emmissions',
            image: '',
            description: 'Apart from being the largest source of CO2 emissions, coal combustion is also a major threat to public health globally. Pollution from coal plants is responsible for about 23,000 premature death in the EU every year. About 82% of EU, 80% German and virtually all Polish coal power plants do not comply with a new EU regulation on industry air pollution emissions standards that they need to meet by 2021.',
            location: {
                // center: [18, 51.19208],
                center:[12, 56],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'pplants-point',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pplants-heat',
                    opacity: 0.1
                }
            ]
        },
        {
            id: 'Third',
            alignment: 'right',
            title: 'Wind and solar resource potential',
            image: '',
            description: 'Wind and solar resources exhibit significant variability across Europe, with average solar and wind availability/capacity factors ranging between 12-14% and 15-25%, respectively. The map illustrates the distribution of the mentioned solar and shows that mine sites located in southern countries, namely in Spain, Italy, Greece, Slovenia, Romania and Bulgaria, can benefit from a highly available solar resource, making the conversion of former mine sites for the production of solar energy more attractive.',
            location: {
                // center: [18, 51.19208],
                center:[12, 56],
                zoom: 3,
                pitch: 14,
                bearing: 22
            },
            onChapterEnter: [
                {
                    layer: 'ren_avail',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
    ]
};