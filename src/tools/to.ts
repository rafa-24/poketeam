export const to = (promise: any) => {
    return promise
        .then((data: any) => [data, null])
        .catch((err: any) => [null, err]);
};