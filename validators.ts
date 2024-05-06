export function IsLength(min: number, max: number) {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function () {
                return val;
            },
            set: function (value) {
                if (value.length >= min && value.length <= max) {
                    val = value;
                } else {
                    throw new Error(`${key} must be between ${min} and ${max} characters.`);
                }
            },
        });
    };
}



export function Contains(substring: string) {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function () {
                return val;
            },
            set: function (value) {
                if (value.includes(substring)) {
                    val = value;
                } else {
                    throw new Error(`${key} must contain "${substring}".`);
                }
            },
        });
    };
}

export function IsNumber(){
    return function(target:any, key:string){
        let val = target[key];
        Object.defineProperty(target,key,{
            get: function(){
                return val
            },
            set: function(value){
                if (typeof value === 'number'){
                    val=value;
                }
                else {
                    throw new Error(`${key} must be number.`);
                }
            }

        })

    }
}


export function IsEqual(arg:any){
    return function (target:any, key:string){
        let val = target[key];
        Object.defineProperty(target,key,{
            get: function(){
                return val
            },
            set : function(value){
                if (value === arg){
                    val=value
                }else{
                    throw new Error(`${key} is Not Equal ${arg}`)
                }
            }

        })
    }
}


export function IsAlpha(){
    return function(target:any,key:string){
        let val = target[key];
        Object.defineProperty(target,key,{
            get : function(){
                return val
            },
            set :function (value){
                if (/^[a-zA-Z]+$/.test(value)){
                    val = value;
                }else{
                    throw new Error(`${key} is not alpha`)
                }
                   
            }
        })


    }
}


export function IsAlphanumeric(){
    return function(target:any,key:string){
        let val = target[key];
        Object.defineProperty(target,key,{
            get : function(){
                return val
            },
            set :function (value){
                if (/^[a-zA-Z0-9]+$/.test(value)){
                    val = value;
                }else{
                    throw new Error(`${key} is not alphanumeric`)
                }
                   
            }
        })


    }
}


export function IsAscii(){
    return function(target:any, key:string){
        let val = target[key];
        Object.defineProperty(target,key,{
            get: function(){
                return val;
            },
            set:function(value){
                if (/^[\x00-\x7F]*$/.test(value)){
                    val = value;
                }else{
                    throw new Error(`${key} is not ascii`)
                }
            }

        })
    }
}

export function IsBase64() {
    return function(target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                if (/^[a-zA-Z0-9+/]*={0,2}$/.test(value)) {
                    val = value;
                } else {
                    throw new Error(`${key} is not Base64`);
                }
            }
        });
    };
}

export function IsDate(){
    return function (target:any, key:string){
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value){
                if(value instanceof Date){
                val = value
                }else{
                    console.log(`${key} is not date`)
                }
            }
    })
}
}

export function IsBoolean(){
    return function (target:any, key:string){
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value){
                if(value === true || value === false){
                val = value
                }else{
                    console.log(`${key} is not boolean`)
                }
            }
    })
}
}

export function IsEmail() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    val = value;
                } else {
                    console.log(`${key} is not an email`);
                }
            }
        });
    }
}
export function IsIP() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                if (/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(value)) {
                    val = value;
                } else {
                    console.log(`${key} is not a valid IP address`);
                }
            }
        });
    }
}
export function IsIPv6() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                if (/^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(value)) {
                    val = value;
                } else {
                    console.log(`${key} is not a valid IP address`);
                }
            }
        });
    }
}

export function IsInt() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                if (Number.isInteger(value)) {
                    val = value;
                } else {
                    console.log(`${key} is not an integer`);
                }
            }
        });
    }
}

export function IsFloat() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                if (typeof value === 'number' && !isNaN(value) && value % 1 !== 0) {
                    val = value;
                } else {
                    console.log(`${key} is not a float`);
                }
            }
        });
    }
}

export function IsUppercase() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                if (typeof value === 'string' && /^[A-Z]*$/.test(value)) {
                    val = value;
                } else {
                    console.log(`${key} is not in uppercase`);
                }
            }
        });
    }
}

export function IsLowercase() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                if (typeof value === 'string' && /^[a-z]*$/.test(value)) {
                    val = value;
                } else {
                    console.log(`${key} is not in lowercase`);
                }
            }
        });
    }
}

export function IsURL() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                const urlRegex = /^(?:https?|ftp):\/\/[\w-]+(?:\.[\w-]+)+[\w.,@?^=%&:/~+#-]*$/;
                if (typeof value === 'string' && urlRegex.test(value)) {
                    val = value;
                } else {
                    console.log(`${key} is not a valid URL`);
                }
            }
        });
    }
}

export function IsUUID() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
                if (typeof value === 'string' && uuidRegex.test(value)) {
                    val = value;
                } else {
                    console.log(`${key} is not a valid UUID`);
                }
            }
        });
    }
}

export function IsJSON() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                try {
                    
                    JSON.parse(value);
                    
                    val = value;
                } catch (error) {
                    console.log(`${key} is not valid JSON`);
                }
            }
        });
    }
}

export function IsMobilePhone() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                const mobilePhoneRegex = /^\+?[0-9]{1,3}\s?[0-9]{10}$/;
                if (typeof value === 'string' && mobilePhoneRegex.test(value)) {
                    val = value;
                } else {
                    console.log(`${key} is not a valid mobile phone number`);
                }
            }
        });
    }
}

export function IsCurrency() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                const currencyRegex = /^\$?\d+(,\d{3})*(\.\d{1,2})?$/;
                if (typeof value === 'string' && currencyRegex.test(value)) {
                    val = value;
                } else {
                    console.log(`${key} is not a valid currency value`);
                }
            }
        });
    }
}

export function IsCreditCard() {
    return function (target: any, key: string) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: function() {
                return val;
            },
            set: function(value) {
                
                const cleanedValue = value.replace(/\D/g, '');

                
                if (typeof value === 'string' && /^\d+$/.test(cleanedValue) && isValidCreditCard(cleanedValue)) {
                    val = value;
                } else {
                    console.log(`${key} is not a valid credit card number`);
                }
            }
        });
    }
}

// Function to validate credit card number using Luhn algorithm
function isValidCreditCard(value: string): boolean {
    let sum = 0;
    let doubleUp = false;

    for (let i = value.length - 1; i >= 0; i--) {
        let digit = parseInt(value.charAt(i), 10);

        if (doubleUp) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;

        doubleUp = !doubleUp;
    }

    return (sum % 10) === 0;
}

