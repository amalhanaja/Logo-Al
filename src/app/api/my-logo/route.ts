import { getMyLogo } from "@/services/get-my-logo";

export async function GET() {
  const logos = await getMyLogo();
  return { data: logos };
}
