let availableKeywords = [
    { name: 'Home', url: '../index.html' },
    { name: 'Platform', url: '../html/platforms.html' },
    { name: 'Contact', url: '../html/contact.html' },
    { name: 'Signup', url: '../html/sign up.html' },
    { name: 'About', url: '../html/about.html' },
    'Skill Development',
    'Job Portal',
    'Employer Directory',
    'Workplace Culture',
    'Employee Benefits',
    'Career Growth',
    'Talent search',
    'Job posting site',
    'Applicant tracking',
    'Employer branding',
    'Recruiting platform',
    'Find talent'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;

    if(input.length) {
        result = availableKeywords.filter((keyword) => {
            if (typeof keyword === 'object') {
                return keyword.name.toLowerCase().includes(input.toLowerCase());
            } else {
                return keyword.toLowerCase().includes(input.toLowerCase());
            }
        });
    }

    display(result);
};

function display(result) {
    if (!result.length) {
        resultsBox.innerHTML = '';
        return;
    }

    const content = result.map((list) => {
        if (typeof list === 'object') {
            return "<li onclick='selectInput(this, \"" + list.url + "\")'>" + list.name + "</li>";
        } else {
            return "<li onclick='selectInput(this)'>" + list + "</li>";
        }
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list, url = '') {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
    
    if (url) {
        window.location.href = url; // Redirect to the selected page
    }
}
