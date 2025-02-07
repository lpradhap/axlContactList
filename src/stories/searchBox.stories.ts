import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from '@/components/search-box/SearchBox';

const meta: Meta<typeof SearchBox> = {
    component: SearchBox,
    title: 'Search Box',
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
    args: {
        value: '',
        onChange: () => { },
    },
};

export const CustomPlaceholder: Story = {
    args: {
        value: '',
        placeholder: 'Custom Placeholder',
        onChange: () => { },
    }
};

export const InputFocused: Story = {
    args: {
        value: 'Typed',
        placeholder: 'Type to search...',
        onChange: () => { },
    },
    play: async ({ canvasElement }) => {
        const input = canvasElement.querySelector('input');
        if (input) {
            input.focus();
        }
    },
};