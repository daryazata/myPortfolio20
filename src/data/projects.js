const projects =[
    {
        description:{

            title:"Discord Clone build with React Redux",
            description:['This is a Discord demo app, build with React Redux. You can login with your google credentials to this application, create new channels and leave messages.','Redux is a state mangement tool, that is commonly used with React. ',`
             Front-end: React.js`, `Back-end: Firebase, Cloud Firestore noSQL DB`,` Deployed and hosted with Firebase
            `,`Based on CleverProgrammer Tutorial`,
            `Features:`, ['User Authentication with Google' , 'Real-time message update'] 
            ],
            github:'https://github.com/daryazata/discord-clone',
            live_demo:'https://discord-clone-e2dfe.web.app/'
            

        },

        //1-react 2-node 5- amplify
        techstack:['js_es6','react','firebase']



    },
    {
        description:{

            title:"My Portfolio Website",
            description:['This website is built with React.js and Gatsby', ' Gatsby is a React-based open source framework for creating websites and apps.',`
             Front-End: React.js, Gatsby`, ` Deployed and hosted with Netlify
            `,
            // `Features:`, ['Comments and likes' , 'Real-time subscriptions (AWS AppSync)', 'User authentications (Amazon Cognito)'] 
            ],
            github:'https://github.com/daryazata/myPortfolio20'
         
            

        },

        //1-react 2-node 5- amplify
        techstack:['js_es6','react',,'gatsby','netlify']



    },
    {
        description:{

            title:"Real-time Blog Application built serverless with AWS and GraphQL",
            description:['This is a  real-time blogging application with serverless backend API.', `
             Front-End: React.js`, ` Back-End: AWS Amplify, AWS AppSync, GraphQL
            `,`Create your own credentials or use test login:`,`test_user, password: test_user`,
            `Features:`, ['Comments and likes' , 'Real-time subscriptions (AWS AppSync)', 'User authentications (Amazon Cognito)'] 
            ],
            github:'https://github.com/daryazata/graphQl-amplify-blog',
            live_demo:'https://blogapi.d3c386nxpd4lys.amplifyapp.com/',
            // screenshots:['https://portfolio-screenshorts-001.s3.eu-central-1.amazonaws.com/portfolio-screenshots/realtimeblog.PNG']
            

        },

        //1-react 2-node 5- amplify
        techstack:['graphql','aws_amplify','js_es6','react', 'aws_appsync','aws_dynamo_db', 'aws_cognito']



    },
    {
        description:{

            title:"Netflix Demo Clone with React.js",
            description:["Netflix UI demo build with React",
            'Fornt-end: React.js', 'Back-end: Movie DB API, Firebase',
        'Deployed and hosted with Firebase','Features:', ['Movie DB API Implementation', 'Movie trailers for each film available']
        ],

        github:'https://github.com/daryazata/Netflix_Clone',
        live_demo:'https://netflix-clone-1a0d8.web.app/',
        screenshots:['https://portfolio-screenshorts-001.s3.eu-central-1.amazonaws.com/portfolio-screenshots/netflix_demo.PNG']
        },
        techstack:['react', 'js_es6', 'firebase']


    },
    {
        description:{

            title:"Spotify App Demo Clone built with React Native",
            description:["Spotify App Demo Clone, implemented in Typescript", 
            'Build with React Native and Expo CLI',
            'Features:', ['Switch between songs','Play and pause songs']
        ],
        github:'https://github.com/daryazata/SpotifyClone',
        screenshots:[
                
            'https://portfolio-screenshorts-001.s3.eu-central-1.amazonaws.com/portfolio-screenshots/Simulator+Screen+Shot+-+iPhone+11+-+2020-10-18+at+19.31.08.png',

    'https://portfolio-screenshorts-001.s3.eu-central-1.amazonaws.com/portfolio-screenshots/Simulator+Screen+Shot+-+iPhone+11+-+2020-10-18+at+19.35.14.png',
    'https://portfolio-screenshorts-001.s3.eu-central-1.amazonaws.com/portfolio-screenshots/Simulator+Screen+Shot+-+iPhone+11+-+2020-10-18+at+19.35.21.png'
    ]
        },
        techstack:['react_native','ts','expo','aws_amplify', 'aws_appsync', 'aws_dynamo_db', 'graphql', 'aws_s3']


    },
    {
        description:{

            title:"Instagram Demo Clone built with React Native ",
            description:["Part 1 of an Instagram Clone App - UI ", "Implemented in Javascript", 
            'Build with React Native and React Native CLI',
            'Features:', ['Instagram stories','Feeds', 'Likes']
        ],
        github:'https://github.com/daryazata/myInstagramClone',
        screenshots:[
            
            'https://portfolio-screenshorts-001.s3.eu-central-1.amazonaws.com/portfolio-screenshots/instagramClone/Simulator+Screen+Shot+-+iPhone+11+-+2020-10-18+at+20.02.07.png',
            'https://portfolio-screenshorts-001.s3.eu-central-1.amazonaws.com/portfolio-screenshots/instagramClone/Simulator+Screen+Shot+-+iPhone+11+-+2020-10-18+at+20.02.26.png',
            'https://portfolio-screenshorts-001.s3.eu-central-1.amazonaws.com/portfolio-screenshots/instagramClone/Simulator+Screen+Shot+-+iPhone+11+-+2020-10-18+at+20.04.35.png',
        ]
        },
        techstack:['react_native','js_es6',]


    },
    {
        description:{

            title:"Full-stack React -Node application, task manager for logistic department",
            description:[`
            I developed this web application as part of my bachelor thesis.
            `, `UI and DB logic design`, 
            'Front-end: React.js','Back-end: Node.js, Express.js, MSSQL Database',
            'Main features:', ['CRUD operations for all DB tables implemened in the UI',
            'Intelligent task assignment according to the employee qualification ',
            
        ]
        ],
        },
        techstack:['react','js_es6','node','express', 'mssql']


    },
    {
        description:{

            title:"Node.js Terminal Application Web Scraper",
            description:["This is a pure node terminal application.",
            `A friend of mine who organizes international  Blockchain events asked me to create an 
            application that would scrape relevant events from a webpage, to automate the manual search process. `, 
          
            'Features:', ['filter events according to the user input in the terminal','save results into a json file', `compares already existing results in the file and updates it only with new events`]
        ],
        github:'https://github.com/daryazata/event-scrapper-01',
        screenshots:['https://portfolio-screenshorts-001.s3.eu-central-1.amazonaws.com/portfolio-screenshots/2020-10-18+20_55_57-JSON+Formatter%2C+Validator+and+Converter+Online.png']
        },
        techstack:['node','js_es6']


    },

    

]

export default projects