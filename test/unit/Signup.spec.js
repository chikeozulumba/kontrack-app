import { mount } from '@vue/test-utils'
import Step1 from '@/components/sign-up/step1.vue'

describe('Signup', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Step1)
    expect(wrapper.vm).toBeTruthy()
  })
})
