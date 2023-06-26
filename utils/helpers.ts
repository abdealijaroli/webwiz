export const jsonParse = (json: string) => {
    const parsed = JSON.parse(json);
    return {
        text: parsed.text,
        html: parsed.html ? parsed.html : "",
        css: parsed.css ? parsed.css : "",
        js: parsed.js ? parsed.js : "",
    };
};
