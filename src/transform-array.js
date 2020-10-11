const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let arr_l = arr.length;
        if (arr_l === 0) {
            throw new Error('Error');
        } else {
            var new_arr = [];
            for (let i = 0; i < arr.length; i++) {
                new_arr[i] = arr[i];
            }
            if ((new_arr[0] === '--discard-prev') || (new_arr[0] === '--double-prev') || (new_arr[new_arr.length - 1] === '--double-next') || (new_arr[new_arr.length - 1] === '--discard-next'))
                new_arr.splice(0, 1);

            for (let i = 0; i < new_arr.length; i++) {
                if (typeof new_arr[i] === "string") {
                    if ((new_arr[i] === '--discard-next') && (i !== 0 || i !== new_arr.length - 1))
                        new_arr.splice(i + 1, 1);

                    if ((new_arr[i] === '--discard-prev') && (i !== 0 || i !== new_arr.length - 1))
                        new_arr.splice(i - 1, 1);

                    if ((new_arr[i] === '--double-next') && (i !== 0 || i !== new_arr.length - 1))
                        new_arr.splice(i, 1, new_arr[i + 1]);

                    if ((new_arr[i] === '--double-prev') && (i !== 0 || i !== new_arr.length - 1))
                        new_arr.splice(i, 1, new_arr[i - 1]);
                }
                var new_arr_end = [];
                let j = 0;
                for (let i = 0; i < new_arr.length; i++) {
                    if (typeof new_arr[i] === "number") {
                        new_arr_end[j] = new_arr[i];
                        j++;
                    }
                }
            }
            return new_arr_end;
        }
    } else
        throw new Error('Error');
}