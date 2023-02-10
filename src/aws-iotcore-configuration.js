var awsIotCoreConfiguration = {
    endpoint: 'https://iot.us-west-2.amazonaws.com',
    region: 'us-west-2',
    apiVersion: '2015-05-28',
    policy: '{"Version": "2012-10-17","Statement": [{"Effect": "Allow","Action": "iot:Connect","Resource": "arn:aws:iot:us-west-2:XXXXXXXXX:client/myClientId"},{"Effect": "Allow","Action": "iot:Subscribe","Resource": "arn:aws:iot:us-west-2:236866483905:topic/topic_1"},{"Effect": "Allow","Action": "iot:Publish","Resource": "arn:aws:iot:us-west-2:XXXXXXXXXX:topic/topic_1"},{"Effect": "Allow","Action": "iot:Receive","Resource": "arn:aws:iot:us-west-2:XXXXXXXXX:topic/topic_1"}]}'
   };

 export default awsIotCoreConfiguration;
