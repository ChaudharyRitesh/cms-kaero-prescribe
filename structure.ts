import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content Management')
    .items([
      // Site Settings (Singleton)
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      
      S.divider(),
      
      // Page Sections
      S.listItem()
        .title('Page Sections')
        .child(
          S.list()
            .title('Page Sections')
            .items([
              S.listItem()
                .title('Hero Section')
                .child(S.documentTypeList('heroSection').title('Hero Sections')),
              
              S.listItem()
                .title('About Section')
                .child(S.documentTypeList('aboutSection').title('About Sections')),
              
              S.listItem()
                .title('Contact Section')
                .child(S.documentTypeList('contactSection').title('Contact Sections'))
            ])
        ),
      
      S.divider(),
      
      // Content Types
      S.listItem()
        .title('Services')
        .child(S.documentTypeList('service').title('Services')),
      
      S.listItem()
        .title('Features')
        .child(S.documentTypeList('feature').title('Features')),
      
      S.listItem()
        .title('Pricing Plans')
        .child(S.documentTypeList('pricingPlan').title('Pricing Plans')),
      
      S.listItem()
        .title('Testimonials')
        .child(S.documentTypeList('testimonial').title('Testimonials')),
      
      S.listItem()
        .title('FAQs')
        .child(S.documentTypeList('faq').title('FAQs'))
    ])