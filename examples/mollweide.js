function p(x, y) {
    return [
        A * x * D2R,
        A * Math.log(Math.tan((Math.PI * 0.25) + (0.5 * y * D2R)))
    ];
}
