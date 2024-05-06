import { 
    IsLength, Contains, IsNumber, IsEqual, IsAlpha, IsAlphanumeric, IsAscii, IsBase64, IsDate, 
    IsBoolean, IsEmail, IsIP, IsIPv6, IsInt, IsFloat, IsUppercase, IsLowercase, IsURL, 
    IsUUID, IsJSON, IsMobilePhone, IsCurrency, IsCreditCard 
} from './validators'; 

class Example {
    @IsLength(5, 10)
    username!: string;

    @Contains("example")
    bio!: string;

    @IsNumber()
    age!: number;

    @IsEqual("password")
    confirmPassword!: string;

    @IsAlpha()
    firstName!: string;

    @IsAlphanumeric()
    lastName!: string;

    @IsAscii()
    countryCode!: string;

    @IsBase64()
    encodedData!: string;

    @IsDate()
    registrationDate!: Date;

    @IsBoolean()
    isActive!: boolean;

    @IsEmail()
    email!: string;

    @IsIP()
    ipAddress!: string;

    @IsIPv6()
    ipv6Address!: string;

    @IsInt()
    positiveInteger!: number;

    @IsFloat()
    floatingPointNumber!: number;

    @IsUppercase()
    uppercaseString!: string;

    @IsLowercase()
    lowercaseString!: string;

    @IsURL()
    websiteUrl!: string;

    @IsUUID()
    uniqueId!: string;

    @IsJSON()
    jsonData!: string;

    @IsMobilePhone()
    phoneNumber!: string;

    @IsCurrency()
    currencyValue!: string;

    @IsCreditCard()
    creditCardNumber!: string;
}

const example = new Example();

console.log('--- Property Assignments ---');
example.username = "john_doe"; // Valid
console.log('username:', example.username);

example.bio = "This is an example"; // Valid
console.log('bio:', example.bio);

example.age = 25; // Valid
console.log('age:', example.age);

example.confirmPassword = "password"; // Valid
console.log('confirmPassword:', example.confirmPassword);

example.firstName = "John"; // Valid
console.log('firstName:', example.firstName);

example.lastName = "Doe"; // Valid
console.log('lastName:', example.lastName);

example.countryCode = "US"; // Valid
console.log('countryCode:', example.countryCode);

example.encodedData = "SGVsbG8gV29ybGQ="; // Valid
console.log('encodedData:', example.encodedData);

example.registrationDate = new Date(); // Valid
console.log('registrationDate:', example.registrationDate);

example.isActive = true; // Valid
console.log('isActive:', example.isActive);

example.email = "john@example.com"; // Valid
console.log('email:', example.email);

example.ipAddress = "192.168.1.1"; // Valid
console.log('ipAddress:', example.ipAddress);

example.ipv6Address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"; // Valid
console.log('ipv6Address:', example.ipv6Address);

example.positiveInteger = 123; // Valid
console.log('positiveInteger:', example.positiveInteger);

example.floatingPointNumber = 3.14; // Valid
console.log('floatingPointNumber:', example.floatingPointNumber);

example.uppercaseString = "HELLO"; // Valid
console.log('uppercaseString:', example.uppercaseString);

example.lowercaseString = "hello"; // Valid
console.log('lowercaseString:', example.lowercaseString);

example.websiteUrl = "https://example.com"; // Valid
console.log('websiteUrl:', example.websiteUrl);

example.uniqueId = "550e8400-e29b-41d4-a716-446655440000"; // Valid
console.log('uniqueId:', example.uniqueId);

example.jsonData = '{"name": "John", "age": 30}'; // Valid
console.log('jsonData:', example.jsonData);

example.phoneNumber = "+1234567890"; // Valid
console.log('phoneNumber:', example.phoneNumber);

example.currencyValue = "$1,000.00"; // Valid
console.log('currencyValue:', example.currencyValue);

example.creditCardNumber = "4111-1111-1111-1111"; // Valid
console.log('creditCardNumber:', example.creditCardNumber);
