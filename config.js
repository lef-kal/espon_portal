var config = {
    style: 'mapbox://styles/elkalonaris/ckqgn4fhs0su617qgffpwotrj',
    accessToken: 'pk.eyJ1IjoiZWxrYWxvbmFyaXMiLCJhIjoiY2twbXExOHcwMDg3ZzJvbnc0dXhyOWszOSJ9.AetSK7t4L_aaFVsCuNQmHg',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            alignment: 'right',
            title: 'Change in annual mean number of days with heavy rainfall',
            image: '',
            description: 'Getting around Philadelphia on two wheels is fast, fun, and cheap. As a typical East Coast large city, the urban core is dense, so there is a lot within reach of a 15 minute ride... even mountain bike trails. Paired with the public transit infrastructure, cycling can be more efficient and much less expensive than driving (and parking) a car.',
            location: {
                center: [12, 50],
                zoom: 2.99,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'terrain',
                    opacity: .95
                }
            ],
            onChapterExit: [
                {
                    layer: 'terrain',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            alignment: 'right',
            title: 'Bike Lanes',
            image: '',
            description: 'In territorial units: 97.00 / In GDP: / In area: 96.00 / In population: 79.00',
            location: {
                center: [12, 50],
                zoom: 11.62,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'terrain',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            alignment: 'right',
            title: 'Indego Bike Share',
            image: '',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
            location: {
                center: [-75.16468, 39.94503],
                zoom: 13.15,
                pitch: 60.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            alignment: 'right',
            title: 'Belmont Plateau Trails',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                center: [-75.20325, 39.99574],
                zoom: 14.99,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wiss',
            alignment: 'right',
            title: 'Wissahickon Park Trails',
            image: '',
            description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city.',
            location: {
                center: [-75.21223, 40.05028],
                zoom: 13.08,
                pitch: 47.50,
                bearing: 32.80
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            alignment: 'right',
            title: 'Pennypack Park Trails',
            image: '',
            description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provides a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
            location: {
                center: [-75.05685, 40.06839],
                zoom: 13.73,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};