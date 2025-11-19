import { GoogleGenAI } from "@google/genai";

// Helper to ensure we don't break if key is missing
const getClient = () => {
  if (!process.env.API_KEY) return null;
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getTechniqueDetails = async (techniqueName: string): Promise<string> => {
  const client = getClient();
  if (!client) return "API Key mangler. Kan ikke hente detaljer.";

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Beskriv kort og konsist (maks 3 setninger) hovedprinsippet bak Ju Jitsu teknikken: "${techniqueName}". Svaret skal være på norsk og ha en filosofisk men praktisk tone som passer en kampsportside.`,
    });
    return response.text || "Kunne ikke generere beskrivelse.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "En feil oppstod ved henting av info.";
  }
};

export const getDailyMotivation = async (): Promise<string> => {
  const client = getClient();
  if (!client) return "Disiplin er broen mellom mål og oppnåelse.";

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Gi meg et kort, røft og motiverende sitat om kampsport, disiplin eller styrke på norsk. Ikke bruk klisjeer. Gjør det mørkt og poetisk.",
    });
    return response.text || "Styrke kommer ikke fra fysisk kapasitet. Det kommer fra en ukuelig vilje.";
  } catch (error) {
    return "Styrke kommer ikke fra fysisk kapasitet. Det kommer fra en ukuelig vilje.";
  }
};
