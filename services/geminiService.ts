
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const model = "gemini-2.5-flash";

const systemInstruction = `당신은 여름방학을 마치고 교실로 돌아온 초등학생 또는 중학생들을 위해 재미있고 흥미로운 아이스브레이킹 질문을 만드는 창의적인 도우미입니다. 답변은 항상 한국어로 해야 합니다.`;

export const generateIcebreakerQuestion = async (): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: `짧고, 재미있고, 개방형인 아이스브레이킹 질문 하나를 생성해 주세요. 이 질문은 학생들이 자신의 여름방학 경험을 공유하도록 유도해야 합니다. 호기심과 대화를 유발하는 질문으로 만들어 주세요. '질문입니다:' 와 같은 서두 없이, 한국어로 질문 내용만 간결하게 제공해 주세요.`,
            config: {
                systemInstruction: systemInstruction,
                temperature: 1.0,
                topP: 0.95,
            }
        });

        const text = response.text;
        if (!text) {
            throw new Error("API로부터 빈 응답을 받았습니다.");
        }
        // Remove potential quotes from the response
        return text.replace(/["']/g, "").trim();
    } catch (error) {
        console.error("Error generating question:", error);
        if (error instanceof Error) {
            throw new Error(`Gemini API 요청 실패: ${error.message}`);
        }
        throw new Error("Gemini API 요청 중 알 수 없는 오류가 발생했습니다.");
    }
};
