module.exports = (function() {


    Date.prototype.MyNewFunctionForDate = function() {
        var mm = this.getMonth() + 1; // getMonth() is zero-based
        var dd = this.getDate();

        //return ["1111", "222", "3333"].join('');
        return [this.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('');
    };

})();