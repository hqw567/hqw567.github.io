import { defineAppSetup } from 'valaxy'
import { install as installGtag } from './gtag'
import { install as installClarity } from './clarity'

export default defineAppSetup((ctx) => {
  installGtag(ctx)
  installClarity(ctx)
})
