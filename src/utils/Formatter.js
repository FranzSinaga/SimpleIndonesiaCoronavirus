const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const date = (x) => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // var date = x;
    var date = new Date(x);
    console.log(date.getFullYear(), month[date.getMonth()], date.getDate());
    date = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
    return date;
}
export default { numberWithCommas, date }