import OpenAI from "openai";
import api from "api";
const leo = api("@leonardoai/v1.0#3vp6l34lm4ans46");

export default defineEventHandler(async (event) => {
  try {
    const { id } = getQuery(event);

    leo.auth(process.env.LEONARDO_AI_API_KEY);
    const { data } = await leo.getGenerationById({
      id,
    });

    if (!data.generations_by_pk) return createError("No images found");

    const { generated_images } = data.generations_by_pk;

    if (generated_images.length === 0) {
      return {
        images: [],
        pending: true,
      };
    }

    const images = generated_images.map((i: { url: any }) => {
      return {
        url: i.url,
      };
    });

    return {
      images,
      pending: false,
    };
  } catch (error) {
    return createError("Internal Error");
  }
});
