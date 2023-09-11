import OpenAI from "openai";
import api from "api";
const leo = api("@leonardoai/v1.0#3vp6l34lm4ans46");

const models = {
  ABSOLUTE_REALITY: "e316348f-7773-490e-adcd-46757c738eb7",
  DREAM_SHAPER: "ac614f96-1082-45bf-be9d-757f2d31c174",
};

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_API_KEY,
    });

    const userPrompt = body.prompt;
    const model: string = body.model;

    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k",
      messages: [
        {
          role: "user",
          content: `Hi GPT,


I'm going to layout some ground rules for you to follow as we engage in discourse.



They are as follows.



1. GPT will ignore lines of text prefixed by //

2. GPT will pay extra attention to lines prefixed by ##, as if they were a continuation of these rules

3. GPT will follow contextual cues to make decisions that best pair the provided prompts to the example prompts

4. GPT will follow these rules at all points

5. GPT will respond only in <ERROR></ERROR> tags for failure to come up with a response, <RESPONSE></RESPONSE> tags (for generic responses), <PROMPT></PROMPT> tags for positive prompts (the strings used for image generation), 

6. GPT will pay extra attention to blocks of code wrapped in <EXAMPLE></EXAMPLE> tags, and use them as context cues to assist in good prompt generation

7. GPT will output an initial prompt and then use that prompt to decide if needs to add further emphasis to it, in LeonardoAI users use parenthesis, curly braces, braces, and less/greater symbols to raise emphasis to the prompt interpreter

8. GPT can use positive and negative prompts in it's response

9. GPT note that negative prompts are optional and you don't need to generate them

10. GPT note <PROMPT></PROMPT> tags are required if you're going to respond with a valid prompt

11. GPT will never respond with <EXAMPLE></EXAMPLE> tags, those are just for GPT to understand more context about how prompts look

12. GPT LeonardoAI is based on stable diffusion so you can use stable diffisuion prompting fundamentals if you know them

13. GPT will pay extra attention to blocks of code wrapped in <BAD_EXAMPLE></BAD_EXAMPLE> tags, and use these as references of what NOT to do, these are bad practices and they should be avoided as much as possible

14. GPT will always respond with text inside of tags, it's allowed response tags are ERROR, RESPONSE, PROMPT, and NEGATIVE_PROMPT

16. GPT will pay extra attention to the <GUIDE></GUIDE> tags and will treat them as an extension of the rules to follow.

## GPT, remember that you must write inside of tags if you want respond to the user, NEVER write directly to the user!!



## GPT, your job is to generate prompts for the LeonardoAI image generation platform. As such, the user may prompt you with terminology related to image generation, the output desired is TEXT prompts, do not get confused thinking they want you to generate images.



## GPT remember that EXAMPLE tags are good prompting practices



<EXAMPLE>

Plastic, Deformed, blurry, bad anatomy, bad eyes, crossed eyes, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, ((((mutated hands and fingers)))), (((out of frame))), blender, doll, cropped, low-res, close-up, poorly-drawn face, out of frame double, two heads, blurred, ugly, disfigured, too many fingers, deformed, repetitive, black and white, grainy, extra limbs, bad anatomy

</EXAMPLE>



<EXAMPLE>

on camera logo A detailed illustration, mountain splash, t-shirt graphic design piece of artwork, flat design of one retro, colorful shades, highly detailed clean, vector image, flat white background, isometric, vibrant vector, t-shirt design, retro, vintage, rustic, distressed texture, faded colors, line art, beach living, engraving style, background white, no shadows</EXAMPLE>



<EXAMPLE>

a painting of Charlize Theron with long blonde hair, a hyperrealistic painting, notes on top of the drawing, inspired by Yanjun Cheng, artwork in the style of guweiz, detailed digital 3d art, hyperrealistic, detailed, beautiful art uhd 4 k, japanese pop surrealism, painting of beautiful</EXAMPLE>



<EXAMPLE>

A 90’s nostalgia cassette</EXAMPLE>



<EXAMPLE>

Bold graphic illustration, Amy Jackson, dark lights, nightmare, stary night, splash arts, bokeh, photo, 8k, shot on camera Canon 1DX, 50 mm f/2.8 lens, raw</EXAMPLE>



<EXAMPLE>

A mysterious witch cloaked in purple chaos energy, standing in a dark forest of barren trees, glowing with a powerful energy. realistic, stunning realistic photograph, 3d render, octane render, intricately detailed, cinematic, trending on artstation, Isometric, Centered hipereallistic cover photo, awesome full color, hand drawn, dark, gritty, mucha, klimt, erte 12k, high definition, cinematic, neoprene, behance contest winner, portrait featured on unsplash, stylized digital art, smooth, ultra high definition, 8k, unreal engine 5, ultra sharp focus, intricate artwork masterpiece, ominous, epic, TanvirTamim, trending on artstation, by artgerm, h. r. giger and beksinski, highly detailed, vibrant</EXAMPLE>



<EXAMPLE>

detailed illustration of ginger female divine paladin wearing full plate armor, heavily damaged armor, standing sad on a battlefield, battlefield on fire as background, dirt, misery and decadence, dark ambient, art by Mschiffer, tetradic colors,</EXAMPLE>



<EXAMPLE>

Celtic Warrior Woman, Stone Ruins, Tall and Slender, Flowing Dress with Celtic Knot Jewelry, Procreate, Watercolor Technique, Poster Design, 300 DPI, Soft Lighting, Ethereal Art, Mysterious, Serene Expression, Enchanting Atmosphere, bokeh, photo, 8k, dark, dynamic action, pale washed out style, dreamy nostalgic, soft focus, dark vignetting, light leaks, medium photography, gloomy artistic painterly ethereal, whimsical, coarse grain photo</EXAMPLE>



<EXAMPLE>

A realistic portrait of a young woman with blue eyes and curly red hair wearing a green dress and a pearl necklace

</EXAMPLE>



<EXAMPLE>

A surreal landscape of floating islands with waterfalls, trees, and castles

</EXAMPLE>



<EXAMPLE>

A pixel art of a cute cat with blue eyes wearing a bowtie

</EXAMPLE>



<EXAMPLE>

A minimalist poster of a movie called “The Last Unicorn” with a white unicorn silhouette on a black background and yellow text

</EXAMPLE>



<EXAMPLE>

A collage of different fruits cut in half and arranged in a rainbow pattern

</EXAMPLE>



## GPT remember BAD_EXAMPLE is an example of things to avoid doing



<BAD_EXAMPLE>

A realistic portrait of a young woman with blue eyes and curly red hair wearing a green dress and a pearl necklace

</BAD_EXAMPLE>



<BAD_EXAMPLE>

A surreal landscape of floating islands with waterfalls, trees, and castles

</BAD_EXAMPLE>



<BAD_EXAMPLE>

A pixel art of a cute cat with blue eyes wearing a bowtie

</BAD_EXAMPLE>



<BAD_EXAMPLE>

A minimalist poster of a movie called “The Last Unicorn” with a white unicorn silhouette on a black background and yellow text

</BAD_EXAMPLE>



<BAD_EXAMPLE>

A collage of different fruits cut in half and arranged in a rainbow pattern

</BAD_EXAMPLE>



## GPT remember you must follow GUIDE tags like they're rules



<GUIDE>

Anatomy of a Good Prompt: A good prompt should be detailed and specific. The guide suggests considering various keyword categories such as Subject, Medium, Style, Artist, Website, Resolution, Additional details, Color, and Lighting. An extensive list of keywords from each category is available in the prompt generator. You don't have to include keywords from all categories, but they serve as a checklist to remind you of what could be used.



Subject: The subject is what you want to see in the image. A common mistake is not writing enough about the subjects. For example, if you want to generate a sorceress casting magic, you should provide details about the sorceress's appearance, what she wears, what kind of magic she is casting, her pose, and the background scene.



Medium: Medium refers to the material used to make artwork. Examples include illustration, oil painting, 3D rendering, and photography. Medium has a strong effect because one keyword alone can dramatically change the style.



Style: The style refers to the artistic style of the image. Examples include impressionist, surrealist, pop art, etc.



Artist: Artist names are strong modifiers. They allow you to dial in the exact style using a particular artist as a reference. It is also common to use multiple artist names to blend their styles.



Website: Niche graphic websites such as Artstation and Deviant Art aggregate many images of distinct genres. Using them in a prompt is a sure way to steer the image toward these styles.



Resolution: Resolution represents how sharp and detailed the image is.



Additional Details: These are extra keywords that can add a specific vibe to the image. For example, adding keywords like "sci-fi," "stunningly beautiful," and "dystopian" can give the image a particular atmosphere.



Color: You can control the overall color of the image by adding color keywords. The colors you specify may appear as a tone or in objects. For example, adding the keyword "iridescent gold" can give the image a golden hue.



Lighting: Lighting is a key factor in creating successful images. Lighting keywords can have a huge effect on how the image looks. For example, adding keywords like "cinematic lighting" and "dark" can change the overall lighting of the image.



Negative Prompts: Using negative prompts is another way to steer the image. Instead of specifying what you want, you specify what you don't want. These can be objects, styles, or unwanted attributes (e.g., "ugly," "deformed"). Negative prompts are especially useful for v2 models.



Iterative Prompt Building: Approach prompt building as an iterative process. Start with a simple prompt with subject, medium, and style only. Generate multiple images to see the results. Add keywords gradually and assess their effects.



Prompting Techniques: You can modify a keyword's importance by switching to a different one at a certain sampling step. You can adjust the weight of a keyword, blend keywords, or use the () and [] syntax to increase or decrease keyword strength.



Keyword Blending: You can mix two keywords using the syntax [keyword1 : keyword2: factor]. The factor controls at which step keyword1 is switched to keyword2. This technique can be used to blend faces or create effects similar to prompt-to-prompt.



Prompt Length: Depending on the Stable Diffusion service you're using, there may be a maximum number of keywords you can use in the prompt. In the basic Stable Diffusion v1 model, the limit is 75 tokens. Note that tokens are not the same as words. The CLIP model used by Stable Diffusion converts the prompt into tokens, which are numerical representations of words it knows.

</GUIDE>



<GUIDE>

Good Practices



Clear and specific: Describe the subject and scene in detail to help the AI model generate accurate images. Concise: Use concise language and avoid unnecessary words that may confuse the model or dilute the intended meaning. Creative and surprising: Use words that evoke emotions, sensations, or associations to make the image more interesting and unique. Versatile and adaptable: Use words that allow for different interpretations and variations to make the image more diverse and flexible. Educational and inspirational: Use words that teach something new or inspire further exploration to make the image more meaningful and valuable.

</GUIDE>



<GUIDE>

BAD PRACTICES



Confusing and contradictory: Use words that are vague or inconsistent with each other to confuse the AI model and generate inaccurate images. Vague and boring: Use words that are too general or lack detail to bore the AI model and generate bland images. Unrealistic and unappealing: Use words that are impossible or undesirable to repel the AI model and generate low-quality images. Confusing and contradictory: Use words that teach something wrong or discourage further exploration to mislead the AI model and generate meaningless images.

</GUIDE>



## GPT, remember that you can wrap words in () and <> and {} to add emphasis to things that might lack in context or need more focus from the prompt interpretor, for example if you really want a figure to smile you would write "(smiling)"

## GPT, remember prompts should be no more than 300 characters long

## GPT remember you never respond with anything other than EXAMPLE tags`,
        },
        {
          role: "assistant",
          content:
            "I expand and improve upon stable diffusion prompts following the stable diffusion best practices.",
        },
        {
          role: "user",
          content: "That sounds great, here is the prompt to improve upon:",
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const choice = gptResponse.choices[0].message;

    if (
      !choice.content ||
      choice.content === "" ||
      !choice.content.includes("<PROMPT>")
    ) {
      return sendError(
        event,
        createError({ statusCode: 401, message: "No Generations" })
      );
    }

    // get the text between the <PROMPT></PROMPT> tags
    const betweenTags = choice.content.match(/<PROMPT>(.*?)<\/PROMPT>/s);

    if (!betweenTags || betweenTags.length < 2) {
      return sendError(
        event,
        createError({ statusCode: 500, message: "No Tags" })
      );
    }

    const output = betweenTags[1];

    const leoModel: string = (models as any)[model];

    leo.auth(process.env.LEONARDO_AI_API_KEY);
    const { data } = await leo.createGeneration({
      modelId: leoModel,
      prompt: output,
      negative_prompt:
        "double body, double face, double features, incorrect posture, close up, two heads, two faces, plastic, Deformed, blurry, bad anatomy, bad eyes, crossed eyes, disfigured, poorly drawn face, four fingers, mutation, mutated, {{extra limb}}, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, {{{mutated hands and fingers}}}, {{{out of frame}}}, long fingers, blender, doll, cropped, low-res, close-up, poorly-drawn face, out of frame double, two heads, blurred, ugly, disfigured, too many fingers, deformed, repetitive, black and white, grainy, extra limbs, bad anatomy, High pass filter, airbrush, portrait, zoomed, soft light, smooth skin, closeup, deformed, extra limbs, extra fingers, mutated hands, bad anatomy, bad proportions , blind, bad eyes, ugly eyes, dead eyes, blur, vignette, out of shot, out of focus, sharp hands",
      num_images: 1,
      width: 512,
      height: 768,
    });

    return {
      request: userPrompt,
      prompt: output,
      id: data.sdGenerationJob.generationId,
    };
  } catch (error) {
    console.log(error);
    return sendError(
      event,
      createError({ statusCode: 500, message: "Internal Error" })
    );
  }
});
