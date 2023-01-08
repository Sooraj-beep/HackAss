export function test() {
  console.log("hi from this test funtion");
  return "hi from this test funtion";
}

export const v = async () => {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  console.log("Here is the response from the API:");
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "I have 2 members in my team. The programming languages I am most familiar with are: Java, C++. I have beginner years of experience with programming. Give me 4 project ideas for a 48hr hackathon",
    temperature: 0.5,
    max_tokens: 2000,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  console.log(response)
  console.log(response.data.choices[0].text);
  return response.data.choices[0].text
//   return "YOU GOT THIS";
//   return response.data.choices[0].text;
};




