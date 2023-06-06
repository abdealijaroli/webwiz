import { Configuration, OpenAIApi } from "openai";
import Home from "@/app/page";

const configuration = new Configuration({
    organization: process.env.OPENAI_ORG_ID,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const createCompletion = async () => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
    });

    console.log(completion.data.choices[0].message);
};

createCompletion();

const sendAiRequest = async (text: string) => {
    if (text.length > 0) {
        //setUserPrompts([...userPrompts, text]);
        //setText("");

        try {
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content:
                            "Hi ChatGPT, today you are going to act as a professional web developer. I will ask you to complete a task for me such as, 'Create a submit button with rounded borders...' and based on that you will send me just the HTML, CSS, and JavaScript code required in order to finish the task. You will not send me anything else and apart from these three different types of codes, you are not supposed to share anything. If in any circumstances you are not able to complete the task you will just send a response that says: 'Sorry, please try again later.'. Now complete this task for me: " +
                            text,
                    },
                ],
            });
            console.log(completion);
        } catch (err) {
            console.log(err);
        }
    }
};

console.log(process.env.OPENAI_ORG_ID);
