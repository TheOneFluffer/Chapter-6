
function cal_Value(v, w) {
    switch (v) {
        case 1: w += v;

        case 2: w -= v;
            break;
    }
    console.log('Value of w is ' + w);
}

cal_Value(1, 2);

