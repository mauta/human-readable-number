module.exports = function toReadable(number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number < 21) {
        return numbers[number];
    } else if (number < 100) {
        let dozen = dozens[Math.floor(number / 10) - 2];
        let num = (number % 10 === 0) ? '' : numbers[number % 10];

        return `${dozen.trim()} ${num}`.trim();
    } else {
        let hundred = numbers[Math.floor(number / 100)];
        if (number % 100 === 0) {
            return `${hundred} hundred`;
        }
        let temp = number % 100;
        let temp2;
        if (temp < 21) {
            temp2 = numbers[temp];
        } else {
            dozen = dozens[Math.floor(temp / 10) - 2];
            num = (number % 10 === 0) ? '' : numbers[number % 10];

            temp2 = `${dozen.trim()} ${num}`.trim()
        }

        return `${hundred} hundred ${temp2}`.trim();
    }



}
