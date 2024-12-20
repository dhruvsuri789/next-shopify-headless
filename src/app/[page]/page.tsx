import Prose from "@/components/prose";
import { getPage } from "@/lib/shopify";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ page: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { page } = await params;
  const pageOne = await getPage(page);

  if (!page) return notFound();

  return {
    title: pageOne.seo?.title || pageOne.title,
    description: pageOne.seo?.description || pageOne.bodySummary,
    openGraph: {
      publishedTime: pageOne.createdAt,
      modifiedTime: pageOne.updatedAt,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { page } = await params;
  const pageOne = await getPage(page);

  if (!pageOne) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{pageOne.title}</h1>
      <Prose className="mb-8" html={pageOne.body as string} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(
          undefined,
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ).format(new Date(pageOne.updatedAt))}.`}
      </p>
    </>
  );
}
