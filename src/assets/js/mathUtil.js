export const PIValue = Math.PI;

export function getCircumference(radius) {
    return 2 * PIValue * radius;
}

export function getArea(radius) {
    return PIValue * radius * radius;
}

export function getVolume(radius) {
    return (4 / 3) * getArea(radius);
}