import { generateLogo } from "@/app/services/generate-logo";
import { FormLogoValues } from "@/global.types";

export async function POST(request: Request) {
  const payload: FormLogoValues = await request.json();
  try {
    const result = await generateLogo(payload);
    return Response.json({ data: result });
  } catch (e) {
    console.error("failed generate logo:", e);
    return new Response(null, { status: 500 });
  }
}
