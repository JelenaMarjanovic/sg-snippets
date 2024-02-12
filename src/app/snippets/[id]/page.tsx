import { notFound } from 'next/navigation';
import { db } from '@/db';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise(r => setTimeout(r, 2000)); // testing purpose - displaying loading page

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id)
    }
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}
