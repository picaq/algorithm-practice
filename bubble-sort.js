let bubbleSort = (arr) => {
    for ( let i = 0 ; i < arr.length ; i++ ) {
        for ( let j = 0 ; j < arr.length-i ; j++ ) {
            if ( arr[j] > arr[j+1] ) {
                [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
                console.log(arr);
            }
        }
    }
    return arr;
}

let bubbleSortOpt = (arr) => {
    let swaps;
    for ( let i = 0 ; i < arr.length ; i++ ) {
        swaps = false;
        for ( let j = 0 ; j < arr.length-i ; j++ ) {
            console.log(arr);
            if ( arr[j] > arr[j+1] ) {
                [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
                swaps = true;
            }
        }
        if (!swaps) break;
    }
    return arr;
}