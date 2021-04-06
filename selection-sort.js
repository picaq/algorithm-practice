let selectionSort = (arr) => {
    let len = arr.length;
    for ( let i = 0 ; i < len ; i++ ) {
        let smallest = arr[i];
        for ( let j = i ; j < len ; i++ ) {
            if ( arr[j] < smallest ) {
                [ smallest, arr[j] ] = [ arr[j], smallest ];
                console.log(arr);
            }
        }
    }
    return arr;
}