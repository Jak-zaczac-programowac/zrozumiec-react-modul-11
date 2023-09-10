function numberOfYears(name: string, birthday: Date): string {
    const currentYear: number = new Date().getFullYear();
    const yearOfBirth = birthday.getFullYear();

    return `${name}, ma ${currentYear - yearOfBirth} lat`;
}

console.log(numberOfYears("Kacper", new Date("1992-10-01")));
