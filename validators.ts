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
                    throw new Error(`${key} Not Equal ${arg}`)
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
                    throw new Error(`${key} is not alpha`)
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
                    throw new Error(`${key} ليس في تنسيق Base64`);
                }
            }
        });
    };
}
