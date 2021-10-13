import { shallowMount } from '@vue/test-utils'
import xIcon from '@/components/icon/icon.vue'

describe('xIcon.vue', () => {
  it('renders props.icon when passed', () => {
    const icon = 'download'
    const wrapper = shallowMount(xIcon, {
      propsData: { icon }
    })
    const useEle = wrapper.find('use')
    expect(useEle.attributes('href')).toBe(`#i-${icon}`)
  })
})
