/* eslint-disable no-console */
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'rqxjoo7h',
  dataset: 'production',
  useCdn: false,
  token:
    'skE2FnDQxduCmt08bWwAIfwcnVYc08bBb0gIERPKRvbifbeYzR1utFql04CvMBiRfpeAgliqpheD5Q3cqRiE8yqFR92lCL4abf2YU4VvYFr8vYoJJskOHfY5wUzOX84U4ACuV27PgxyvbjdV7JPWtxoJLlHJ7ZLClG73Aa7MR3Ih2NhzGLMd',
  apiVersion: '2023-05-03',
})

const clearData = async () => {
  try {
    // Get all pricing plans including drafts
    const pricingPlans = await client.fetch('*[_type == "pricingPlan" || _type == "drafts.pricingPlan"]')
    
    if (pricingPlans.length === 0) {
      console.log('No pricing plans found to delete.')
      return
    }

    console.log(`Found ${pricingPlans.length} pricing plans (including drafts) to delete...`)

    // Delete all pricing plans and drafts
    for (const plan of pricingPlans) {
      await client.delete(plan._id)
      console.log(`Deleted: ${plan.planName || 'Draft'} (${plan._id})`)
    }

    console.log('✅ All pricing plans and drafts cleared successfully!')
  } catch (error) {
    console.error('❌ Error clearing data:', error)
  }
}

clearData()