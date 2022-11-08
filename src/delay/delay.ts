const delay = (callback : () => void, ms : number) : Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback)
        }, ms);
    })
}