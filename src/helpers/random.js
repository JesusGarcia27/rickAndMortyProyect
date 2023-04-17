export const getRandomDimension = () => {
    //? Esta funcion debe retornar un numero de el 1 al 126 que representa a una dimension

    /* Math.random() * 126 // 0 - 0.9999 * 126 ----> 0 -125.9999 */
    return Math.floor(Math.random() * 126) + 1

} 