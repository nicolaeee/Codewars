function foo(a, b){
    return a * b;
}

const bar = foo.bind(null, 2);
bar(2);