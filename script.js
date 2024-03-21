const checkPermission = () => {
    if(!('serviceWorker' in navigator)){
        throw new Error("No support fro sevice worker")
    }
}
