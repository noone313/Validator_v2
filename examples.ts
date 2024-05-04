import {IsLength, Contains, IsNumber, IsEqual, IsAlpha, IsAlphanumeric, IsAscii, IsBase64} from './validators.ts'

class Example {
    @IsLength(5, 10)
    title!: string;

    @Contains('hello')
    text!: string;

    @IsNumber()
    num!:number;

    @IsEqual(1)
    num1!:number;

    @IsAlpha()
    alpha!:string;

    @IsAscii()
    ascii!:string;

    @IsBase64()
    base64!:string;
}


const example = new Example();


    example.base64 = 'SGVsbG8gV29ybGQh'; 
    console.log(example.base64);
