function forward(x, y) {
    return [
        A * ll[0] * D2R,
        A * Math.log(Math.tan((Math.PI*0.25) + (0.5 * x * D2R)))
    ];
}
