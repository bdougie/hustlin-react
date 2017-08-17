# Hutslin React UI
Hustlin is a project I created to let me know when there is a home baseball game happening. I get notifications every morning so I can plan my day around not using public transportation before, after, or during baseball games. 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The JSON API is powered a Lambda function that reads from a DynamoDB table. The code for that can be found at [bdougie/serverless-hustl](https://github.com/bdougie/serverless-hustl). Notifications are sent via [Postmark](https://postmarkapp.com/) every morning at 10am UTC. The code for that can be found at [bdougie/scheduled-hustlin-notifications](https://github.com/bdougie/scheduled-hustlin-notifications)

## Setup

```sh
git clone https://github.com/bdougie/hustlin-react
cd hustlin-react
npm install
npm start
```
