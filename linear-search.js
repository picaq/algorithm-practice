function linearSearch(arr, val) {
    for ( let i = 0 ; i < arr.length ; i++ ) {
        if ( arr[i] === val ) return i;
    }
    return -1;
}

linearSearch([2,56,7,9,5,43,3,1,645,6,3,7,23], 3);