import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'rqxjoo7h',
    dataset: 'production'
  },
  deployment: {
    appId: 'j3q00q3u3dfra1f5oxsuzcp7',
    autoUpdates: true,
  }
})
