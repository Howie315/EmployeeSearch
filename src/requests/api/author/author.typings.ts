export interface Author {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  documentId?: string; // Optional if not always present
}
