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
            description: 'There are currently 207 coal-fired power plants in 21 Member States and 103 NUTS 2 regions, and 128 coal mines in 12 Member States and 41 regions. These are not evenly distributed across the individual member states and those most reliant on coal are Poland, Germany, Bulgaria, the Czech Republic and Romania. <br> Germany and Poland alone are jointly responsible for 51% of the EU’s installed coal capacity and 54% of emissions from coal.',
            location: {
                center: [12, 56],
                zoom: 4,
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
                    layer: 'pplants-showcase',
                    opacity: 0.5
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
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'pplants-heat',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pplants-heat',
                    opacity: 0
                }
            ]
        },
        {
            id: 'jbs',
            alignment: 'right',
            title: 'Coal-related employment',
            image: '',
            description: 'Coal phase-out resonates differently in different territorial realities. ',
            location: {
                // center: [18, 51.19208],
                center:[12, 56],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'jobs',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'jobs',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Third',
            alignment: 'left',
            title: 'Employment at risk',
            image: '',
            description: 'Overall, it is estimated that about 109 000 mining jobs are exposed to high risk due to a lack of competitiveness.',
            location: {
                // center: [18, 51.19208],
                center:[12, 56],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'jobs-a',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'jobs-a',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Fourth',
            alignment: 'left',
            title: 'Wind and solar resource potential',
            image: '',
            description: 'Wind and solar resources exhibit significant variability across Europe, with average solar and wind availability/capacity factors ranging between 12-14% and 15-25%, respectively. The map illustrates the distribution of the mentioned solar and shows that mine sites located in southern countries, namely in Spain, Italy, Greece, Slovenia, Romania and Bulgaria, can benefit from a highly available solar resource, making the conversion of former mine sites for the production of solar energy more attractive.',
            location: {
                // center: [18, 51.19208],
                center:[12, 56],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'ren_avail',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'ren_avail',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Fifth',
            alignment: 'right',
            title: 'Assessing nterpreneural stock',
            image: '',
            description: 'Coal-dependent regions perceive a redistribution of social benefits while marginal economic damage is inflicted upon a few regions.',
            location: {
                // center: [18, 51.19208],
                center:[12, 56],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'mort',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'mort',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Sixth',
            alignment: 'right',
            title: 'Innovation performance',
            image: '',
            description: '',
            location: {
                // center: [18, 51.19208],
                center:[12, 56],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'patent',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'patent',
                    opacity: 0
                }
            ]
        },
    ]
};

