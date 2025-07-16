function getPhonePrefix() {
    let countryAbbreviation = document.getElementById("country").value.toUpperCase();
    let resultElement = document.getElementById("result");
    let phonePrefix;
    let country;

    switch(countryAbbreviation) {
        case "US":
            phonePrefix = "+1";
            country = "United States"
            break;
        case "CA":
            phonePrefix = "+1";
            country = "Canada"
            break;
        case "MD":
            phonePrefix = "+373";
            country = "Moldova"
            break;
        case "GB":
            phonePrefix = "+44";
            country = "United Kingdom"
            break;
        case "FR":
            phonePrefix = "+33";
            country = "France"
            break;
        case "DE":
            phonePrefix = "+49";
            country = "Germany"
            break;
        case "NL":
            phonePrefix = "+31";
            country = "Netherlands"
            break;  
        case "BE":
            phonePrefix = "+32";
            country = "Belgium"
            break;          
        case "JP":
            phonePrefix = "+81";
            country = "Japan"
            break;
        case "AU":
            phonePrefix = "+61";
            country = "Australia"
            break;
        case "BR":
            phonePrefix = "+55";
            country = "Brazil"
            break;
        case "IN":
            phonePrefix = "+91";
            country = "India"
            break;
        case "CN":
            phonePrefix = "+86";
            country = "China"
            break;
        case "CZ":
            phonePrefix = "+420";
            country = "Czech Republic"
            break;
        default:
            phonePrefix = "Unknown";
    }

    resultElement.textContent = "Country : " + country +";" + " Phone prefix for " + countryAbbreviation + " is " + phonePrefix;
}