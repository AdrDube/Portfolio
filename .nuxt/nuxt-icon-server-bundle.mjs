import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'gravity-ui': () => require('@iconify/json/json/gravity-ui.json'),
  'mdi': () => require('@iconify/json/json/mdi.json'),
  'ph': () => require('@iconify/json/json/ph.json'),
  'lineicons': () => require('@iconify/json/json/lineicons.json'),
  'fa6-brands': () => require('@iconify/json/json/fa6-brands.json'),
  'simple-icons': () => require('@iconify/json/json/simple-icons.json'),
  'devicon-plain': () => require('@iconify/json/json/devicon-plain.json'),
  'mingcute': () => require('@iconify/json/json/mingcute.json'),
  'lets-icons': () => require('@iconify/json/json/lets-icons.json'),
  'arcticons': () => require('@iconify/json/json/arcticons.json'),
  'octicon': () => require('@iconify/json/json/octicon.json'),
  'line-md': () => require('@iconify/json/json/line-md.json'),
  'iconamoon': () => require('@iconify/json/json/iconamoon.json'),
  'streamline': () => require('@iconify/json/json/streamline.json'),
  'fluent': () => require('@iconify/json/json/fluent.json'),
  'ei': () => require('@iconify/json/json/ei.json'),
}