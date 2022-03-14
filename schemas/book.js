export default {
  title: "Book",
  name: "book",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Cover",
      name: "cover",
      type: "image",
    },
    {
      title: "Genre",
      name: "genre",
      type: "array",
      of: [{ type: "reference", to: [{ type: "genre" }] }],
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "person" }],
    },
  ],
};
