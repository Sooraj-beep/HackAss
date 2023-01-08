export function test() {
  console.log("hi from this test funtion");
  return "hi from this test funtion";
}

export const v = async (prompt) => {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: '',
  });
  console.log("Here is the response from the API:");
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  
  console.log(" HI " + response.data.choices[0].text);

  return response.data.choices[0].text
};




