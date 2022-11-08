export const mapArrToStr = (array : (number|string)[]) : string[] => {
    return array
            .filter(item => Number.isInteger(item))
            .map(String) 
}