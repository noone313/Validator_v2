# Validator_v2

## Description

This project showcases the usage of TypeScript decorators for property validation within classes. Various decorators are applied to class properties to enforce validation rules such as length, data type, format, and more.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/noone313/Validator_v2.git
   ```
```bash
cd decorators-validation-project
```
```bash
npm install
```

# Usage

## 1 - Import the necessary decorators from the validators.ts file.
## 2 - Apply decorators to class properties to enforce validation rules.
## 3 - Create an instance of the class and assign values to properties.
## 4 - Check console logs to see validation results.

```python
import { IsLength, IsNumber } from './validators'; 

class Person {
    @IsLength(2, 20)
    firstName: string = "";

    @IsNumber()
    age: number = 0;
}

const person = new Person();
person.firstName = "John"; // Valid
person.age = 30; // Valid
```

# License
## This project is licensed under the MIT License - see the LICENSE file for details.
