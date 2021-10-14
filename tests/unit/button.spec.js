import { mount } from '@vue/test-utils'
import Button from '@/components/button/'

describe('Button.vue', () => {
  it('可以设置icon且与传入的icon相同', () => {
    const wrapper = mount(Button, {
      propsData: { icon: 'awesome' }
    })
    const select = wrapper.find('use')
    expect(select.attributes('href')).toBe('#i-awesome')
  })
  it('测试iconPosition设置为right是否生效', () => {
    const wrapper = mount(Button, {
      propsData: { iconPosition: 'right' }
    })
    expect(wrapper.classes()).toContain('icon-right')
  })
  it('可以设置loading,并保证loading与其他icon互斥', () => {
    const wrapper = mount(Button, {
      propsData: { iconName: 'awesome', loading: true }
    })
    const useElements = wrapper.findAll('use')
    expect(useElements.length).toBe(1)
    expect(useElements.at(0).attributes('href')).toBe('#i-loading')
  })
  it('点击 button 触发 click 事件', async () => {
    const wrapper = mount(Button)
    const mockCallback = jest.fn()
    wrapper.vm.$on('click', mockCallback)
    await wrapper.trigger('click')
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
