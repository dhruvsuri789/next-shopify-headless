import OpengraphImage from "@/components/opengraph-image";
import { getPage } from "@/lib/shopify";

export const runtime = "edge";

type Params = Promise<{ page: string }>;

export default async function Image({ params }: { params: Params }) {
  const { page } = await params;
  const pageOne = await getPage(page);

  const title = pageOne.seo?.title || pageOne.title;

  return await OpengraphImage({ title });
}
