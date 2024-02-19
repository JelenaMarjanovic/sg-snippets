'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';

export async function editSnippet(id: number, code: string) {
  // update snippet
  await db.snippet.update({
    where: { id },
    data: { code }
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  // delete snippet
  await db.snippet.delete({
    where: { id }
  });

  redirect('/');
}
