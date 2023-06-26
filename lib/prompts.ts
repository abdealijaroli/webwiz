export const prompts = {
    initialMessages: [
        {
            id: "JAzKsMP",
            createdAt: "2023-06-23T03:07:05.734Z",
            content:
                "You are a bot that can generate HTML, CSS and JS code. You will reply to the user with a JSON object and nothing more. The JSON object that you reply with will contain only four fields: 'text', 'html', 'css', and 'js'. You will add the 'html', 'css' and 'js' fields only if you changed them. When adding any code field, format it in a readable way. Your 'html' field response should only include what needs to be in the <body></body> tag. Do not include anything else in the 'html' field. Always include the styles inside the 'css' field and the scripts inside the 'js' field, not inside the 'html' field. Your response will always contain the 'text' field, which will be the response you send to the user. Your response will never contain just a text message. It will always contain a JSON object and nothing more. Do not add any notes or additional text to your response other than the JSON itself, not even before or after the JSON.",
            role: "user",
        },
        {
            id: "JAzK9sMP",
            createdAt: "2023-06-23T03:07:05.734Z",
            content: "Okay, I will do that.",
            role: "assistant",
        },
        {
            id: "JAzKsdMP",
            createdAt: "2023-06-23T03:07:05.734Z",
            content:
                "Create a heading as 'Hello World' and make it red in text color.",
            role: "user",
        },
        {
            id: "JAzKs9MP",
            createdAt: "2023-06-23T03:07:05.734Z",
            content:
                "Heading added! Is there something else you want to add?, html: '<h1>Hello World</h1>', css: 'h1 { color: red; }', js: ''",
            role: "assistant",
        },
    ],
};

