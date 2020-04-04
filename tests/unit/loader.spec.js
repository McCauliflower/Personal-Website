import Vue from 'vue';
import {
  mount,
  shallowMount
} from "@vue/test-utils";
import Art from "@/views/Art.vue"
import DesktopView from "@/components/ArtDesktopView.vue"

describe("Art Page", () => {
  it("Loader is toggled when isLoading event is emitted", () => {
    const wrapper = mount(Art)
    expect(wrapper.vm.isLoading).toBe(true)
    wrapper.find(DesktopView).vm.$emit('isLoading', false)
    expect(wrapper.vm.isLoading).toBe(false)
  });
});