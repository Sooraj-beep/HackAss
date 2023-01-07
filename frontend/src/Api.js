export function test() {
  console.log("hi from this test funtion");
}

export const v = async () => {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: '',
  });
  console.log("Here is the response from the API:");
  const openai = new OpenAIApi(configuration);
  

  const response = await openai.createCompletion({
    model: "text-ada-001",
    prompt:
      "Write a restaurant review based on these notes:\n\nName: The Blue Wharf\nLobster great, noisy, service polite, prices good.\n\nReview:",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  
  console.log(" HI " + response.data.choices[0].text);
};
