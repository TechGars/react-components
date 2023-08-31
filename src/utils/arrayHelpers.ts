interface Array<T> {
    _getRandomIndex(): number
}

Array.prototype._getRandomIndex = function(this:Array<unknown>):number{
    return Math.floor(Math.random() * ( this?.length - 1))
}