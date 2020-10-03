export function printTitle(message){
    console.log('\x1b[33m%s\x1b[0m', message);
}

export function printInput(message){
    console.log('\x1b[36m%s\x1b[0m', 'Input:');
    console.log('\x1b[36m%s\x1b[0m', message);
}

export function printAnswer(message){
    console.log('\x1b[32m%s\x1b[0m', 'Answer:');
    console.log('\x1b[32m%s\x1b[0m', message);
}

export function printError(message){
    console.log('\x1b[31m%s\x1b[0m', message);
}