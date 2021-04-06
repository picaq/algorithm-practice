let selectionSort = (arr) => {
    let len = arr.length;
    for ( let i = 0 ; i < len ; i++ ) {
        let smallest = i;
        for ( let j = i ; j < len ; j++ ) {
            if ( arr[j] < arr[smallest] ) {
                smallest = j;
                // console.log(i, j);
                // console.log(arr[smallest]);
            }
        }
        if ( arr[smallest] < arr[i] ) {
            [ arr[i], arr[smallest] ] = [ arr[smallest], arr[i] ]
        }
        console.log(arr);
    }
    return arr;
}

console.log(selectionSort([2,56,7,9,5,43,3,1,645,6,3,7,23]));