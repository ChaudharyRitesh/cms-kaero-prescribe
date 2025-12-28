/* eslint-disable no-console */
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'rqxjoo7h',
  dataset: 'production',
  useCdn: false,
  token:
    'skE2FnDQxduCmt08bWwAIfwcnVYc08bBb0gIERPKRvbifbeYzR1utFql04CvMBiRfpeAgliqpheD5Q3cqRiE8yqFR92lCL4abf2YU4VvYFr8vYoJJskOHfY5wUzOX84U4ACuV27PgxyvbjdV7JPWtxoJLlHJ7ZLClG73Aa7MR3Ih2NhzGLMd',
  apiVersion: '2025-05-03',
})

const seedData = async () => {
  // Individual Modules
  const modules = [
    {
      _type: 'pricingPlan',
      planType: 'module',
      planName: 'Reception Module',
      price: '750',
      currency: 'INR',
      billingPeriod: 'month',
      description: 'Complete reception management system',
      features: [
        'Appointment Booking',
        'Doctors Availability',
        'Queue System',
        'Multi Receptionist Users',
        'Live Dashboard & Status',
        'Live Update/Cancel Booking',
        'Booking History',
      ],
      addons: ['Email Notifications', 'SMS Notifications'],
      iconColor: 'bg-blue-100 text-blue-600',
      isPopular: false,
      ctaText: 'Learn More',
      order: 1,
      isActive: true,
    },
    {
      _type: 'pricingPlan',
      planType: 'module',
      planName: "Doctor's Module",
      price: '1,050',
      currency: 'INR',
      billingPeriod: 'month',
      description: 'Complete doctor management system',
      features: [
        'Auto Integration with Reception',
        'Doctors Dashboard',
        'Create Prescription',
        'Print/Export Prescription',
        'Prescription History',
        'Auto Attach to Patient File',
        'Upload Reports & Attachments',
        'Recommend Tests',
        'Multi Doctors Support',
      ],
      addons: ['Email & SMS Prescriptions'],
      iconColor: 'bg-green-100 text-green-600',
      isPopular: false,
      ctaText: 'Learn More',
      order: 2,
      isActive: true,
    },
    {
      _type: 'pricingPlan',
      planType: 'module',
      planName: 'Pathlab Module',
      price: '950',
      currency: 'INR',
      billingPeriod: 'month',
      description: 'Complete pathology lab management',
      features: [
        'Lab Dashboard',
        'Auto Test Integration',
        'Report History',
        'Test Catalogues',
        'Generate & Export Reports',
        'Instrument Integration',
        'Upload & Attachments',
        'Multi Technician Support',
      ],
      addons: ['Email & SMS Reports'],
      iconColor: 'bg-purple-100 text-purple-600',
      isPopular: false,
      ctaText: 'Learn More',
      order: 3,
      isActive: true,
    },
    {
      _type: 'pricingPlan',
      planType: 'module',
      planName: 'Pharmacy Module',
      price: '1,600',
      currency: 'INR',
      billingPeriod: 'month',
      description: 'Complete pharmacy management system',
      features: [
        'Inventory Management',
        'Stock Dashboard',
        'Create Inventory',
        'Auto Prescription Integration',
        'Invoice History',
        'Billing Management',
        'Generate Reports',
        'Auto Order Creation',
        'Top Selling Products',
      ],
      addons: ['Payment Gateway Integration', 'Customer Retainer Plans'],
      iconColor: 'bg-orange-100 text-orange-600',
      isPopular: false,
      ctaText: 'Learn More',
      order: 4,
      isActive: true,
    },
  ]

  // All-in-One Plans
  const plans = [
    {
      _type: 'pricingPlan',
      planType: 'plan',
      planName: 'Base Plan',
      price: '4,350',
      currency: 'INR',
      billingPeriod: 'month',
      description: 'Perfect for getting started',
      storage: '15 GB/month',
      setupFee: '₹2,999',
      features: ['All 4 Modules', 'Multi-user Support', 'Live Dashboards', 'Email Support'],
      isPopular: false,
      ctaText: 'Get Started',
      order: 5,
      isActive: true,
    },
    {
      _type: 'pricingPlan',
      planType: 'plan',
      planName: 'Super Plan',
      price: '6,090',
      currency: 'INR',
      billingPeriod: 'month',
      description: 'Most popular choice',
      storage: '25 GB/month',
      setupFee: '₹2,999',
      badge: 'Most Popular',
      features: ['All 4 Modules', 'Multi-user Support', 'Live Dashboards', 'Email Support'],
      isPopular: true,
      ctaText: 'Get Started',
      order: 6,
      isActive: true,
    },
    {
      _type: 'pricingPlan',
      planType: 'plan',
      planName: 'Enterprise Plan',
      price: '8,530',
      currency: 'INR',
      billingPeriod: 'month',
      description: 'For large networks',
      storage: '70+ GB/month',
      setupFee: '₹2,999',
      features: ['All 4 Modules', 'Multi-user Support', 'Live Dashboards', 'Email Support'],
      isPopular: false,
      ctaText: 'Get Started',
      order: 7,
      isActive: true,
    },
  ]

  try {
    // Check if pricing data already exists
    const existingPlans = await client.fetch('*[_type == "pricingPlan"]')
    if (existingPlans.length === 0) {
       // Create all pricing plans
      const allPlans = [...modules, ...plans]
      console.log('Seeding pricing plans...')
      for (const plan of allPlans) {
        await client.create(plan)
      }
      console.log('Pricing plans seeded.')
    }

    // --- Hero Section Seeding ---
    console.log('Seeding Hero Section...')
    
    // 1. Delete existing heroSection
    await client.delete({query: '*[_type == "heroSection"]'})
    console.log('Deleted existing heroSection.')

    // 2. Prepare Hero Data
    const slidesData = [
      {
        title: 'Pharmacy Dashboard',
        description: 'Real-time inventory tracking, automated reordering, and AI-powered demand forecasting',
        imageUrl: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      },
      {
        title: 'Hospital Management',
        description: 'Unified patient records, bed management, and integrated billing across departments',
        imageUrl: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      },
      {
        title: 'Reception & Queue',
        description: 'Smart appointment scheduling with AI-powered queue optimization and patient flow',
        imageUrl: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      },
      {
        title: 'Lab Analytics',
        description: 'Automated test tracking, result processing, and quality assurance dashboards',
        imageUrl: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      },
    ]

    // 3. Helper to upload image from URL
    const uploadImage = async (url) => {
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Failed to fetch ${url}`)
        const arrayBuffer = await response.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const asset = await client.assets.upload('image', buffer, {
          filename: url.split('/').pop()?.split('?')[0] || 'image.jpg'
        })
        return asset._id
      } catch (error) {
        console.error('Error uploading image:', url, error)
        return null
      }
    }

    // 4. Process slides with image uploads
    const processedSlides = []
    for (const slide of slidesData) {
      console.log(`Uploading image for slide: ${slide.title}...`)
      const assetId = await uploadImage(slide.imageUrl)
      
      if (assetId) {
        processedSlides.push({
          _key: Math.random().toString(36).substring(7),
          title: slide.title,
          description: slide.description,
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: assetId
            }
          }
        })
      }
    }

    // 5. Create Hero Document
    const heroDoc = {
      _type: 'heroSection',
      title: 'Real Healthcare Control.',
      subtitle: 'Real Time.',
      description: 'Unified pharmacy and hospital management with native AI intelligence. See your entire operation in real-time dashboards. Built for Indian regulations, designed for global scale.',
      isActive: true,
      ctaButtons: [
        {
          _key: 'btn1',
          text: 'Request Demo',
          link: '#demo', // Placeholder link
          variant: 'primary'
        },
        {
          _key: 'btn2',
          text: 'See Dashboard',
          link: '#dashboard',
          variant: 'secondary'
        }
      ],
      slides: processedSlides
    }

    await client.create(heroDoc)
    console.log('Hero Section seeded successfully!')

  } catch (err) {
    console.error('Seeding failed:', err)
  }
}

seedData()
