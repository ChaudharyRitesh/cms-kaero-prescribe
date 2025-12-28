import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'text', type: 'string', title: 'Button Text'},
            {name: 'link', type: 'string', title: 'Link'},
            {
              name: 'variant',
              type: 'string',
              title: 'Variant',
              options: {
                list: [
                  {title: 'Primary', value: 'primary'},
                  {title: 'Secondary', value: 'secondary'}
                ],
                layout: 'radio'
              },
              initialValue: 'primary'
            }
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'link'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text'
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              }
            })
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            }
          }
        }
      ]
    }),
    // Deprecated Fields (kept for data visual/migration)
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text (Deprecated)',
      type: 'string'
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link (Deprecated)',
      type: 'url'
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image (Deprecated)',
      type: 'object',
      fields: [
        {
          name: 'imageUpload',
          title: 'Upload Image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'imageUrl',
          title: 'Or Image URL',
          type: 'url'
        }
      ]
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
})