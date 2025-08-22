import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export default async function NotesPage() {
  const data = await fetchNotes({ page: 1, perPage: 12 });

  return <NotesClient initialData={data} />;
}
