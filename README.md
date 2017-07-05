Basic example of calling Pharo from AWS Lambda.

This work is loosely based on this [tutorial](https://aws.amazon.com/blogs/compute/scripting-languages-for-aws-lambda-running-php-ruby-and-go/) for other languages.You will need to setup an AWS Lambda account and create a zip file containing this  [function](./pharoLambda.js) as well as a Pharo 64bit linux vm and an image containing the classes in this repo.You can also create a simple Alexa skill to call this function by following the gist of this [example](https://github.com/Donohue/alexa).