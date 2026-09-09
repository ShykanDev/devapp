import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import FolderPage from '@/views/FolderPage.vue'
import { describe, expect, test } from 'vitest'

describe('FolderPage.vue', () => {
  test('renders folder view', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/folder/:id', component: FolderPage }]
    })
    router.push('/folder/Medicamentos')
    await router.isReady()

    const wrapper = mount(FolderPage, {
      global: {
        plugins: [router]
      }
    })
    await flushPromises()
    expect(wrapper.text()).toContain('Medicamentos')
  })
})
