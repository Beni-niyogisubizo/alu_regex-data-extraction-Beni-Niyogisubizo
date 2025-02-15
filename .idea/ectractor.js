// Code for the extraction of data using regex
let str_data = {
    "Email addresses": ["user@example.com", "firstname.lastname@company.co.uk"],
    "URLs": ["https://www.example.com", "https://subdomain.example.org/page"],
    "Phone Numbers": ["(123) 456-7890", "123-456-7890", "123.456.7890"],
    "Credit card numbers": ["1234 5678 9012 3456", "1234-5678-9012-3456"],
    "HTML tags": ["<p>", "<div class='example'>", "<img src='image.jpg' alt='description'>"]
};

let emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
let urlRegex = /https?:\/\/[a-zA-Z0-9./_-]+/g;
let phoneRegex = /(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g;
let creditRegex = /(\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4})/g;
let htmlRegex = /<[^>]+>/g;

for (let key in str_data) {
    console.log(`The matches for ${key} are:\n`);
    str_data[key].forEach(item => {
        if (key === "Email addresses") {
            console.log(item.match(emailRegex));
        } else if (key === "URLs") {
            console.log(item.match(urlRegex));
        } else if (key === "Phone Numbers") {
            console.log(item.match(phoneRegex));
        } else if (key === "Credit card numbers") {
            console.log(item.match(creditRegex));
        } else if (key === "HTML tags") {
            console.log(item.match(htmlRegex));
        }
    });
}
