forward x y = [
    6378137 * x * (pi / 180),
    6378137 * y * log(tan (pi * 0.25)) + (0.5 * x * (pi / 180))
    ]
