const AWS = require('aws-sdk');
// module.exports = {
//     "ACCESS_KEY" : "AKIA5572EMEYYPXPNLRG",
//     "SECRET_ACCESS_KEY" : "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",
//     "BUCKET_NAME": "lettuce-eat-images" 
//   };

  const s3 = new AWS.S3({
    accessKeyId: "AKIA5572EMEYYPXPNLRG",
    secretAccessKey: "pxu1j7c0/1C1Cldb7h3coLohedwxj9BZib/3A7uU"
});  

const params = {
    Bucket: "lettuce-eat-images",
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "us-east-1"
    }
};

module.exports = {
    s3, params
}