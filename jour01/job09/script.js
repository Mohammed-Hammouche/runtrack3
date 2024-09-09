function tri(numbers, order) {
    return numbers.sort((a, b) => {
        if (order === "asc") {
            return a - b;
        } else if (order === "desc") {
            return b - a;
        }
    });
}