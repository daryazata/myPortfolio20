const projects =[

    {
        description:{

            title:"Real-time Blog Application with AWS and GraphQL",
            description:['This is a  real-time blogging application with serverless backend API.', `
             Front-End: React.js`, ` Back-End: AWS Amplify, AWS AppSync, GraphQL
            `,`Features:`, ['Comments and likes' , 'Real-time subscriptions (AWS AppSync)', 'User authentications (Amazon Cognito)'] 
            ],
            github:'https://github.com/daryazata/graphQl-amplify-blog',
            live_demo:'https://blogapi.d3c386nxpd4lys.amplifyapp.com/'
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
        live_demo:'https://netflix-clone-1a0d8.web.app/'
        },
        techstack:['react', 'js_es6', 'firebase']


    },
    {
        description:{

            title:"Spotify App Demo Clone with React Native",
            description:["Spotify App Demo Clone, written in Typescript", 
            'Implemented in React Native with Expo CLI',
            'Features', ['Switch between songs','Play and pause songs']
        ],
        },
        techstack:['react_native','ts','aws_amplify']


    },
    {
        description:{

            title:"Task manager for logistic department",
            description:["", 
            'Front-end: React.js','Back-end: Node.js, Express.js, MSSQL Database',
            'Features', []
        ],
        },
        techstack:['react','js_es6','node','express', 'mssql']


    },

    

]

export default projects