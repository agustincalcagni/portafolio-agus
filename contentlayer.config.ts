import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
}));

export const Profile = defineDocumentType(() => ({
  name: "Profile",
  filePathPattern: 'profile/**/*.mdx',
  contentType: "mdx",
  fields: {
    speciality: { type: "string", required: true },
    skills: { type: "string", required: true }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Profile],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
