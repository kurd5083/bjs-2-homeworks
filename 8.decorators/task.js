//Задача № 1
function cachingDecoratorNew(func) {
    let newArr = [];
    return (...arr) => {
        const cash = {};
        if (newArr.length == 5) {
            newArr.shift(newArr[0])
        }
        const hash = md5(arr);
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].hash == hash) {
                return 'Из кэша: ' + newArr[i].value
            }
        }
        let result = func(...arr);
        cash['hash'] = hash;
        cash['value'] = result;
        newArr.push(cash)
        return 'Вычисляем: ' + result;
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let hasCalled = false;
    function doIt(args) {
        func.apply(this, args);
        hasCalled = true;
        wrapper.count++;
    }

    function wrapper(...args) {
        if (timeoutId) clearTimeout(timeoutId);
        wrapper.allCount++;
        if (hasCalled) {
            timeoutId = setTimeout(() => doIt(args), delay);
        } else {
            doIt(args);
        }
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}


