import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Kaero Prescribe CMS',

  projectId: 'rqxjoo7h',
  dataset: 'production',

  plugins: [
    structureTool({
      structure
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
