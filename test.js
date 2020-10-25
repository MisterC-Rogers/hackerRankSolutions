// Enter your code here
const myArray = []
myArray.push("Charles Rogers")
myArray.push("Red")

const cutName = (name) => {
	return name.split(' ');
}

const myInfo = {}

myInfo['fullName'] = cutName(myArray[0]);
myInfo['favoriteColor'] = myArray[1];
myInfo['github'] = "MisterC-Rogers";

console.log(myInfo);